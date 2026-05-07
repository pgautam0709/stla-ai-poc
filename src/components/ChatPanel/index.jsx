import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAzureChat } from '../../hooks/useAzureChat';

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

function IconStop() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function IconCopy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
    </svg>
  );
}

// ─── Floating thinking dots ───────────────────────────────────────────────────

function ThinkingDots() {
  return (
    <div className="flex items-end gap-1.5 h-6 px-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400"
          style={{
            animation: 'genieFloat 1.4s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes genieFloat {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── Copy button ──────────────────────────────────────────────────────────────

function CopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition-colors ${
        copied ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
      } ${className}`}
      title="Copy"
    >
      {copied ? <IconCheck /> : <IconCopy />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

// ─── Code block ───────────────────────────────────────────────────────────────

function CodeBlock({ children, className }) {
  const language = className?.replace('language-', '') || '';
  const code = String(children).trimEnd();
  return (
    <div className="my-3 rounded-xl overflow-hidden border border-gray-200 bg-gray-950">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">{language || 'code'}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 text-sm text-gray-100 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── Markdown components ──────────────────────────────────────────────────────

const mdComponents = {
  code({ children, className, ...props }) {
    if (className?.startsWith('language-')) return <CodeBlock className={className}>{children}</CodeBlock>;
    return <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-[0.85em] font-mono" {...props}>{children}</code>;
  },
  h1: ({ children }) => <h1 className="text-lg font-bold mt-4 mb-2 text-gray-900">{children}</h1>,
  h2: ({ children }) => <h2 className="text-base font-bold mt-3 mb-1.5 text-gray-900">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold mt-3 mb-1 text-gray-800">{children}</h3>,
  p:  ({ children }) => <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="mb-3 pl-5 space-y-1 list-disc marker:text-gray-400">{children}</ul>,
  ol: ({ children }) => <ol className="mb-3 pl-5 space-y-1 list-decimal marker:text-gray-500">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
  em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-300 pl-4 my-3 text-gray-600 italic bg-blue-50 py-2 pr-3 rounded-r-lg">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-3">
      <table className="min-w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-100">{children}</thead>,
  th: ({ children }) => <th className="px-3 py-2 text-left font-semibold text-gray-700 border border-gray-200">{children}</th>,
  td: ({ children }) => <td className="px-3 py-2 text-gray-700 border border-gray-200">{children}</td>,
  hr: () => <hr className="my-4 border-gray-200" />,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-800">{children}</a>
  ),
};

// ─── Messages ─────────────────────────────────────────────────────────────────

function AssistantMessage({ content, isLast, isStreaming }) {
  const showCursor  = isLast && isStreaming && content;
  const showThinking = isLast && isStreaming && !content;

  return (
    <div className="flex gap-3 mb-6 group">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm overflow-hidden">
        <span className="text-white text-[9px] font-bold tracking-tight leading-none">DG</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-blue-700 mb-1.5 uppercase tracking-wide">DTC Genie</p>
        <div className="text-sm text-gray-800 leading-relaxed">
          {showThinking ? (
            <ThinkingDots />
          ) : (
            <>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                {content}
              </ReactMarkdown>
              {showCursor && (
                <span className="inline-block w-0.5 h-4 bg-blue-500 ml-0.5 animate-pulse align-middle" />
              )}
            </>
          )}
        </div>
        {!isStreaming && content && (
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={content} />
          </div>
        )}
      </div>
    </div>
  );
}

function UserMessage({ content }) {
  return (
    <div className="flex justify-end mb-6 group">
      <div className="max-w-[80%]">
        <p className="text-[11px] font-semibold text-gray-400 mb-1.5 text-right uppercase tracking-wide">You</p>
        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap shadow-sm">
          {content}
        </div>
        <div className="mt-1.5 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton text={content} />
        </div>
      </div>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

const CAPABILITIES = [
  { icon: '🔍', title: 'DTC Lookup',        desc: 'Explain any fault code — cause, symptoms, severity',        prompt: 'What does U1600-00 mean and what are its common causes?',             vsrOnly: false },
  { icon: '🔧', title: 'Repair Guidance',   desc: 'Step-by-step repairs and part recommendations',             prompt: 'Give me step-by-step repair guidance for the most critical DTC.',      vsrOnly: false },
  { icon: '⚡', title: 'Enable Conditions', desc: 'What must be true for a DTC to set or clear',               prompt: 'Explain the enable conditions for the active faults in this VSR.',     vsrOnly: false },
  { icon: '🚗', title: 'VSR Analysis',      desc: 'Prioritise active faults from the uploaded VSR report',     prompt: 'Analyse the DTCs in this VSR and tell me which to fix first and why.', vsrOnly: true  },
];

const SUGGESTIONS = [
  'Which DTCs should I fix first?',
  'What does U1600-00 mean?',
  'Explain the enable condition for the active faults.',
  'Are any of these safety-critical?',
];

function EmptyState({ dtcCount, hasVehicle, onSuggest }) {
  return (
    <div className="py-6 px-2">
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-3 shadow-md">
          <span className="text-white text-sm font-bold tracking-tight">DG</span>
        </div>
        <p className="font-semibold text-gray-800 text-sm">DTC Genie</p>
        <p className="text-xs text-gray-400 mt-1">
          {hasVehicle
            ? `${dtcCount} fault code${dtcCount !== 1 ? 's' : ''} loaded — ready to assist`
            : 'Upload a VSR or ask a general question'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-5">
        {CAPABILITIES.map((c) => {
          const disabled = c.vsrOnly && !hasVehicle;
          return (
            <button
              key={c.title}
              onClick={() => !disabled && onSuggest(c.prompt)}
              disabled={disabled}
              title={disabled ? 'Upload a VSR to enable' : c.prompt}
              className={[
                'text-left rounded-xl p-3 border transition-all',
                disabled
                  ? 'bg-gray-50 border-gray-100 opacity-50 cursor-not-allowed'
                  : 'bg-white border-gray-100 shadow-sm hover:border-blue-400 hover:shadow-md hover:bg-blue-50 cursor-pointer',
              ].join(' ')}
            >
              <div className="text-lg mb-1">{c.icon}</div>
              <p className={`text-xs font-semibold ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>{c.title}</p>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{c.desc}</p>
              {disabled && <p className="text-[10px] text-amber-500 mt-1 font-medium">Upload VSR to unlock</p>}
            </button>
          );
        })}
      </div>

      <p className="text-[11px] text-gray-400 uppercase tracking-wide font-semibold mb-2 px-1">Try asking</p>
      <div className="space-y-1.5">
        {SUGGESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSuggest(q)}
            className="w-full text-left px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 text-xs hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-colors shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Auto-grow textarea ───────────────────────────────────────────────────────

function useAutoGrow(ref, value) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value, ref]);
}

// ─── Main panel ───────────────────────────────────────────────────────────────

export default function ChatPanel({ vehicleInfo, dtcs, dtcLookup, ecus }) {
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);
  useAutoGrow(inputRef, input);

  const { messages, streaming, error, configured, sendMessage, stop, reset } =
    useAzureChat({ vehicleInfo, dtcs, dtcLookup, ecus });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput('');
    sendMessage(text);
    inputRef.current?.focus();
  }, [input, streaming, sendMessage]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasVehicle  = !!vehicleInfo?.vin;
  // Show empty state only if the only message is the greeting and user hasn't sent anything
  const userHasChatted = messages.some(m => m.role === 'user');

  return (
    <div className="flex flex-col h-full bg-gray-50">

      {/* ── Header ── */}
      <div className="px-4 py-3 bg-[#243882] flex items-center justify-between flex-shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Stellantis logo — inverted white for dark header */}
          <img
            src="/stellantis-logo.svg"
            alt="Stellantis"
            style={{ height: 20, width: 'auto', filter: 'brightness(0) invert(1)' }}
            draggable={false}
          />
          <div className="w-px h-6 bg-white/20" />
          <div>
            <p className="text-white font-semibold text-sm leading-tight">DTC Genie</p>
            <p className="text-blue-200 text-[11px] leading-tight">
              {hasVehicle ? `VIN: ${vehicleInfo.vin}` : 'Chrysler · Dodge · Jeep · Ram'}
            </p>
          </div>
        </div>
        {userHasChatted && (
          <button
            onClick={reset}
            title="Clear conversation"
            className="w-7 h-7 flex items-center justify-center rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <IconTrash />
          </button>
        )}
      </div>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto px-4 pt-5">
        {!configured ? (
          <div className="text-center mt-10 px-4">
            <div className="text-3xl mb-3">🔑</div>
            <p className="font-semibold text-gray-700 text-sm mb-2">Azure AI not configured</p>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Create a <code className="bg-gray-100 px-1 rounded">.env</code> file with:
            </p>
            <pre className="text-left bg-gray-800 text-green-400 rounded-xl p-3 text-[11px] leading-relaxed font-mono">
{`VITE_AZURE_OPENAI_ENDPOINT=...
VITE_AZURE_OPENAI_KEY=...
VITE_AZURE_OPENAI_DEPLOYMENT=gpt-4o`}
            </pre>
          </div>
        ) : !userHasChatted ? (
          <>
            {/* Show greeting message */}
            {messages.map((msg, i) =>
              msg.role === 'assistant'
                ? <AssistantMessage key={i} content={msg.content} isLast={false} isStreaming={false} />
                : null
            )}
            <EmptyState
              hasVehicle={hasVehicle}
              dtcCount={dtcs?.length || 0}
              onSuggest={(q) => { setInput(q); inputRef.current?.focus(); }}
            />
          </>
        ) : (
          messages.map((msg, i) =>
            msg.role === 'user'
              ? <UserMessage key={i} content={msg.content} />
              : <AssistantMessage
                  key={i}
                  content={msg.content}
                  isLast={i === messages.length - 1}
                  isStreaming={streaming}
                />
          )
        )}

        {error && (
          <div className="mb-4 flex items-start gap-2 text-red-600 text-xs px-3 py-2.5 bg-red-50 rounded-xl border border-red-200">
            <span className="text-base leading-none">⚠️</span>
            <span>{error}</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <div className="px-3 pb-3 pt-2 bg-gray-50 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={configured ? 'Ask about a DTC or repair…' : 'Configure Azure AI first'}
            disabled={!configured}
            rows={1}
            className="w-full resize-none rounded-t-2xl px-4 pt-3 pb-1 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none disabled:cursor-not-allowed"
          />
          <div className="flex items-center justify-between px-3 pb-2 pt-1">
            <p className="text-[11px] text-gray-300">⏎ Send · ⇧⏎ New line</p>
            {streaming ? (
              <button
                onClick={stop}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium transition-colors"
              >
                <IconStop />
                Stop
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!configured || !input.trim()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white text-xs font-medium transition-colors"
              >
                <IconSend />
                Send
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
