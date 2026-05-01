import { useState, useCallback, useRef } from 'react';
import { VEHICLE_FUNCTION_KNOWLEDGE } from '../knowledge/index';

const ENDPOINT   = (import.meta.env.VITE_AZURE_OPENAI_ENDPOINT || '').replace(/\/$/, '');
const API_KEY    = import.meta.env.VITE_AZURE_OPENAI_KEY;
const DEPLOYMENT = import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT;
const API_VERSION = import.meta.env.VITE_AZURE_OPENAI_API_VERSION || '2024-02-01';

const DTC_PATTERN = /[UPBC]\d{4}(?:-\d{2})?/gi;

function buildSystemPrompt(vehicleInfo, dtcs, ecus) {
  let prompt = `You are DTC Expert, an AI assistant specialized in Chrysler/Stellantis vehicle diagnostics (Chrysler, Dodge, Jeep, Ram, Fiat, Alfa Romeo).

You have deep expertise in:
- Diagnostic Trouble Codes (DTCs): meaning, root causes, and failure modes
- Vehicle ECU systems and communication networks (CAN, LIN, FlexRay)
- Repair procedures and Technical Service Bulletins (TSBs)
- Enable conditions — the exact preconditions required for a DTC to set
- Self-healing criteria and dematuration conditions
- Limp-in modes and their impact on driveability and safety

You have access to the Stellantis internal DTC database. When the user mentions a specific DTC code, the relevant database entry (enable condition, repair action, self-healing criteria, dematuration criteria, limp-in action) will be automatically injected into the conversation for you to reference.

You can also draw on publicly available technical resources, OBD-II standards (SAE J2012), and your training knowledge to answer questions about codes not present in the internal database.

Response guidelines:
- Be specific and actionable. Give concrete repair steps, not vague advice.
- Flag safety-critical DTCs (e.g. brake, steering, airbag) with high priority.
- When multiple DTCs are present, help the user understand which to address first and why.
- Distinguish clearly between confirmed, pending, and historical DTCs.
- Explain technical jargon in plain language when the user may not be a trained technician.
- If a repair requires dealer-level diagnostic tools, say so explicitly.

Conversational flow — MANDATORY for every response:
After delivering your answer, always close with a short "---" divider followed by a **Next step** section. This section must:
1. Summarise in one sentence what the user should do or consider next based on what was just discussed.
2. Ask ONE specific, contextual follow-up question that naturally continues the diagnostic conversation — make it directly relevant to the DTC, ECU, or repair just discussed, not generic.

Example closing format:
---
**Next step:** Clear the fault with a scan tool after the repair and perform a drive cycle to confirm the DTC does not return.

> Would you like me to walk you through the specific drive cycle conditions needed to verify this repair?

Keep the follow-up question concise and grounded in the current vehicle context. Never repeat the same question twice in a conversation.

${VEHICLE_FUNCTION_KNOWLEDGE}`;

  if (vehicleInfo?.vin) {
    prompt += `\n\nCurrent Vehicle on Screen:`;
    prompt += `\nVIN: ${vehicleInfo.vin}`;
    if (vehicleInfo.modelYear) prompt += `\nModel Year: ${vehicleInfo.modelYear}`;
    if (vehicleInfo.built)     prompt += `\nBody/Build: ${vehicleInfo.built}`;
    if (vehicleInfo.vsrDate)   prompt += `\nVSR Date: ${vehicleInfo.vsrDate}`;
  }

  if (dtcs?.length > 0) {
    prompt += `\n\nDTCs currently loaded from VSR (${dtcs.length} total):\n`;
    prompt += dtcs
      .map(d => `- ${d.dtcCode} [${d.ecu}] ${d.description ? '— ' + d.description : ''} (${d.status})`)
      .join('\n');
  }

  if (ecus?.length > 0) {
    const hasCompare = ecus.some(e => e.latestSwVersion || e.latestPartNumber);
    prompt += `\n\nECU Software Inventory from VSR (${ecus.length} ECUs):`;
    prompt += `\nColumns: ECU Name | Current Part No. | Current SW Version | Latest Part No. | Latest SW Version | DRE | Up-to-date?`;
    prompt += `\n` + ecus.map(e => {
      const swMatch  = !e.latestSwVersion  || e.swVersion  === e.latestSwVersion;
      const pnMatch  = !e.latestPartNumber || e.partNumber === e.latestPartNumber;
      const upToDate = hasCompare ? (swMatch && pnMatch ? 'YES' : 'NO') : 'N/A';
      return `- ${e.ecuName} | ${e.partNumber || '—'} | ${e.swVersion || '—'} | ${e.latestPartNumber || '—'} | ${e.latestSwVersion || '—'} | ${e.dre || '—'} | ${upToDate}`;
    }).join('\n');
    if (!hasCompare) {
      prompt += `\n(Compare table not loaded — Latest PN/SW columns unavailable. Load CompareTable.xlsx to enable up-to-date analysis.)`;
    }
  }

  return prompt;
}

function lookupDTCsInMessage(text, dtcLookup) {
  if (!dtcLookup) return {};
  const codes = [...new Set((text.match(DTC_PATTERN) || []).map(c => c.toUpperCase()))];
  const found = {};
  for (const code of codes) {
    if (dtcLookup[code]) found[code] = dtcLookup[code];
  }
  return found;
}

function formatDTCContext(matches) {
  if (!Object.keys(matches).length) return '';
  const lines = ['[Internal DTC Database Entries — reference these in your answer]'];
  for (const [code, d] of Object.entries(matches)) {
    lines.push(`\n${code}:`);
    if (d.enableCondition)     lines.push(`  Enable Condition: ${d.enableCondition}`);
    if (d.repairAction)        lines.push(`  Repair Action: ${d.repairAction}`);
    if (d.selfHealingCriteria) lines.push(`  Self Healing Criteria: ${d.selfHealingCriteria}`);
    if (d.dematureCriteria)    lines.push(`  Dematuration Criteria: ${d.dematureCriteria}`);
    if (d.limpInAction)        lines.push(`  Limp-in Action: ${d.limpInAction}`);
  }
  return lines.join('\n');
}

export function useAzureChat({ vehicleInfo, dtcs, dtcLookup, ecus }) {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: `Hello! I'm **Stella_Assist**, your dedicated Chrysler/Stellantis diagnostic expert.

I can help you with:
- Understanding and diagnosing fault codes (DTCs)
- Step-by-step repair guidance for Chrysler, Dodge, Jeep, and Ram vehicles
- Enable conditions, self-healing criteria, and dematuration logic
- Prioritising and interpreting faults from your VSR report

---
**Next step:** Upload a VSR file to load your vehicle's fault data, or ask me about any DTC code directly.

> What would you like to explore today?`,
  }]);
  const [streaming, setStreaming] = useState(false);
  const [error, setError]         = useState('');
  const abortRef = useRef(null);

  const configured = !!(ENDPOINT && API_KEY && DEPLOYMENT);

  const sendMessage = useCallback(async (userText) => {
    if (!configured || !userText.trim() || streaming) return;

    const dtcMatches  = lookupDTCsInMessage(userText, dtcLookup);
    const context     = formatDTCContext(dtcMatches);
    const apiUserText = context ? `${context}\n\nUser question: ${userText}` : userText;

    const displayMsg  = { role: 'user', content: userText };
    const apiUserMsg  = { role: 'user', content: apiUserText };

    const history = [...messages, displayMsg];
    setMessages(history);
    setError('');
    setStreaming(true);

    const systemPrompt = buildSystemPrompt(vehicleInfo, dtcs, ecus);
    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map(m => ({ role: m.role, content: m.content })),
      apiUserMsg,
    ];

    const url = `${ENDPOINT}/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=${API_VERSION}`;

    try {
      abortRef.current = new AbortController();
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': API_KEY },
        body: JSON.stringify({
          messages: apiMessages,
          stream: true,
          max_tokens: 2000,
          temperature: 0.3,
        }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error?.message || `HTTP ${res.status}`);
      }

      const reader  = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const lines = decoder.decode(value, { stream: true }).split('\n');
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const delta = JSON.parse(data).choices?.[0]?.delta?.content || '';
            assistantContent += delta;
            setMessages(prev => [
              ...prev.slice(0, -1),
              { role: 'assistant', content: assistantContent },
            ]);
          } catch { /* skip malformed SSE chunks */ }
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setMessages(prev => prev.at(-1)?.content === '' ? prev.slice(0, -1) : prev);
      }
    } finally {
      setStreaming(false);
    }
  }, [configured, messages, streaming, vehicleInfo, dtcs, dtcLookup, ecus]);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    setStreaming(false);
  }, []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setError('');
    setStreaming(false);
  }, []);

  return { messages, streaming, error, configured, sendMessage, stop, reset };
}
