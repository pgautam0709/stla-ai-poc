#!/usr/bin/env node
/**
 * vf-processor.js
 * Watches public/ for two types of files:
 *
 *   1. .doc / .docx  — Vehicle Function specs
 *      Extracts text → sends to Azure OpenAI → writes structured knowledge
 *      to src/knowledge/auto/{name}.js  (string export, injected into system prompt)
 *
 *   2. DTC*.xlsx     — DTC lookup tables
 *      Parses Excel → writes pre-built lookup object
 *      to src/data/dtc-auto/{name}.js  (object export, merged into dtcLookup state)
 *
 * Run: node scripts/vf-processor.js
 *      (or via: npm run process-vf / npm run dev:full)
 */

import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from 'fs';
import { resolve, basename, extname, join } from 'path';
import { fileURLToPath } from 'url';

// Load .env from project root before anything else
import { config as dotenvConfig } from 'dotenv';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');
dotenvConfig({ path: join(PROJECT_ROOT, '.env') });

import chokidar from 'chokidar';
import mammoth from 'mammoth';
import WordExtractor from 'word-extractor';
import XLSX from 'xlsx';

// ─── Config ──────────────────────────────────────────────────────────────────

const ENDPOINT    = (process.env.VITE_AZURE_OPENAI_ENDPOINT || '').replace(/\/$/, '');
const API_KEY     = process.env.VITE_AZURE_OPENAI_KEY;
const DEPLOYMENT  = process.env.VITE_AZURE_OPENAI_DEPLOYMENT;
const API_VERSION = process.env.VITE_AZURE_OPENAI_API_VERSION || '2024-02-01';

const PUBLIC_DIR    = join(PROJECT_ROOT, 'public');
const VFS_DIR       = join(PUBLIC_DIR, 'VFs');
const DTCS_DIR      = join(PUBLIC_DIR, 'DTCs');
const VF_AUTO_DIR   = join(PROJECT_ROOT, 'src', 'knowledge', 'auto');
const DTC_AUTO_DIR  = join(PROJECT_ROOT, 'src', 'data', 'dtc-auto');
const DRE_AUTO_DIR  = join(PROJECT_ROOT, 'src', 'data', 'dre-auto');
const MANIFEST_FILE = join(__dirname, '.vf-manifest.json');

// Ensure input and output dirs exist
[VFS_DIR, DTCS_DIR, VF_AUTO_DIR, DTC_AUTO_DIR, DRE_AUTO_DIR].forEach(dir => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

// ─── Manifest helpers ─────────────────────────────────────────────────────────

function loadManifest() {
  if (!existsSync(MANIFEST_FILE)) return {};
  try {
    return JSON.parse(readFileSync(MANIFEST_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function saveManifest(manifest) {
  writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), 'utf8');
}

function manifestKey(filename, size) {
  return `${filename}::${size}`;
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function safeModuleName(filename) {
  return basename(filename, extname(filename)).replace(/[^a-zA-Z0-9]/g, '_');
}

// ─── DTC xlsx handling ────────────────────────────────────────────────────────

/**
 * Matches files whose name contains "DTC" (case-insensitive) and end with .xlsx.
 * Examples: DTC.xlsx, DTC_2024.xlsx, MY26_DTC_v2.xlsx
 */
function isDtcFile(filename) {
  return /dtc/i.test(filename) && filename.toLowerCase().endsWith('.xlsx');
}

/**
 * Scans the first maxRows rows to find which row + column contains the J2012
 * DTC code header (e.g. "J2012 FORMAT", "J2012 Format").
 */
function findJ2012Loc(rows, maxRows = 6) {
  for (let r = 0; r < Math.min(maxRows, rows.length); r++) {
    if (!rows[r]) continue;
    for (let c = 0; c < rows[r].length; c++) {
      if (String(rows[r][c] || '').toUpperCase().includes('J2012')) {
        return { row: r, col: c };
      }
    }
  }
  return null;
}

/**
 * Searches headerRow and the row above it for a column whose header contains
 * any of the given keywords (case-insensitive substring match).
 */
function findColByKeyword(rows, headerRow, ...keywords) {
  const kws = keywords.map(k => k.toUpperCase());
  for (const r of [headerRow, headerRow - 1].filter(r => r >= 0)) {
    if (!rows[r]) continue;
    for (let c = 0; c < rows[r].length; c++) {
      const val = String(rows[r][c] || '').toUpperCase();
      if (kws.some(kw => val.includes(kw))) return c;
    }
  }
  return -1;
}

/**
 * Parses a DTC Excel file — handles any column layout and multiple sheets.
 *
 * Auto-detects the J2012 code column and all data columns by scanning headers,
 * so it works with the original single-sheet DTC.xlsx as well as consolidated
 * multi-sheet files (BCM, MCPA, ADCAM, etc.) that have different layouts.
 *
 * Falls back to fixed indices (col 1 / rows from 3) for the legacy format where
 * "J2012" doesn't appear in the header at all.
 */
function parseDtcXlsx(filePath) {
  const workbook = XLSX.readFile(filePath);
  const lookup   = {};

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows  = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // ── Find the J2012 header to determine key column + data start row ─────
    const j2012Loc = findJ2012Loc(rows);

    let j2012Col, dataStartRow;
    if (j2012Loc) {
      j2012Col     = j2012Loc.col;
      dataStartRow = j2012Loc.row + 1;
    } else {
      // Legacy format: fixed layout (col 1, data from row 3)
      if (workbook.SheetNames.length > 1) continue; // skip non-DTC sheets
      j2012Col     = 1;
      dataStartRow = 3;
    }

    // ── Auto-detect other columns by keyword ───────────────────────────────
    const headerRow    = dataStartRow - 1;
    const selfHealCol  = findColByKeyword(rows, headerRow, 'SELF HEAL', 'SELF_HEAL');
    const repairCol    = findColByKeyword(rows, headerRow, 'REPAIR');
    const enableCol    = findColByKeyword(rows, headerRow, 'ENABLE COND', 'ENABLE_COND');
    const dematureCol  = findColByKeyword(rows, headerRow, 'DE-MAT', 'DE_MAT', 'DE MAT', 'DEMATR');
    const limpInCol    = findColByKeyword(rows, headerRow, 'LIMP');

    let sheetDtcCount = 0;
    for (let i = dataStartRow; i < rows.length; i++) {
      const row   = rows[i];
      const j2012 = row?.[j2012Col];
      if (!j2012 || typeof j2012 !== 'string') continue;
      const key = j2012.trim().toUpperCase();
      // Must look like a valid DTC code (letter + 4 hex digits)
      if (!/^[UPBC][0-9A-Fa-f]{4}/.test(key)) continue;

      lookup[key] = {
        selfHealingCriteria: selfHealCol >= 0  ? String(row[selfHealCol]  ?? '') : '',
        repairAction:        repairCol   >= 0  ? String(row[repairCol]    ?? '') : '',
        enableCondition:     enableCol   >= 0  ? String(row[enableCol]    ?? '') : '',
        dematureCriteria:    dematureCol >= 0  ? String(row[dematureCol]  ?? '') : '',
        limpInAction:        limpInCol   >= 0  ? String(row[limpInCol]    ?? '') : '',
      };
      sheetDtcCount++;
    }

    if (sheetDtcCount > 0) {
      console.log(`   📋 Sheet "${sheetName}": ${sheetDtcCount} DTCs`);
    }
  }

  return lookup;
}

function writeDtcModule(filename, lookup) {
  const safeName   = safeModuleName(filename);
  const outputPath = join(DTC_AUTO_DIR, `${safeName}.js`);
  const date       = new Date().toISOString().split('T')[0];
  const count      = Object.keys(lookup).length;

  const content =
    `// Auto-generated from ${filename} on ${date}\n` +
    `// ${count} DTC codes — re-run \`npm run process-vf\` to regenerate\n` +
    `export default ${JSON.stringify(lookup, null, 2)};\n`;

  writeFileSync(outputPath, content, 'utf8');
  return outputPath;
}

async function processDtcFile(filePath) {
  const filename = basename(filePath);

  let size;
  try {
    size = statSync(filePath).size;
  } catch {
    console.error(`  Could not stat ${filename}, skipping.`);
    return;
  }

  const manifest = loadManifest();
  const key      = manifestKey(filename, size);

  if (manifest[key]) {
    console.log(`⚠️  Already processed: ${filename} (skipped)`);
    return;
  }

  console.log(`📊 Processing DTC file: ${filename}`);

  try {
    const lookup = parseDtcXlsx(filePath);
    const count  = Object.keys(lookup).length;

    if (count === 0) {
      throw new Error('No DTC codes found — file must have a column header containing "J2012" and valid DTC codes (e.g. B128E-92) in that column.');
    }

    const outputPath = writeDtcModule(filename, lookup);
    const relOutput  = outputPath.replace(PROJECT_ROOT + '/', '');

    manifest[key] = {
      filename,
      size,
      processedAt: new Date().toISOString(),
      outputFile:  relOutput,
      dtcCount:    count,
    };
    saveManifest(manifest);

    console.log(`✅ Done: ${filename} → ${relOutput} (${count} DTC codes)`);
  } catch (err) {
    console.error(`❌ Error processing DTC file ${filename}: ${err.message}`);
  }
}

// ─── DRE Names xlsx handling ──────────────────────────────────────────────────

/**
 * Matches files whose name contains "DRE" (case-insensitive) and ends with .xlsx.
 * Examples: DRE Names.xlsx, DRE_Names.xlsx, DREnames.xlsx
 */
function isDreFile(filename) {
  return /dre/i.test(filename) && filename.toLowerCase().endsWith('.xlsx');
}

/**
 * Parses a DRE Names Excel file.
 * Flexible column detection: looks for ECU and DRE/name columns by header keyword.
 * Falls back to col 0 = ECU, col 1 = DRE name if headers are not recognised.
 *
 * Returns: { [ECU_NAME_UPPERCASE]: "DRE Person Name" }
 */
function parseDreNamesXlsx(filePath) {
  const workbook = XLSX.readFile(filePath);
  const lookup   = {};

  // Only read the first sheet — DRE Names files are typically single-sheet
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) return lookup;

  const sheet = workbook.Sheets[sheetName];
  const rows  = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  if (!rows || rows.length < 2) return lookup;

  const headers = rows[0].map(h => String(h || '').toLowerCase().trim());

  const ecuIdx = headers.findIndex(
    h => h.includes('ecu') || h.includes('module') || h.includes('system')
  );
  const dreIdx = headers.findIndex(
    h => h.includes('dre') || h.includes('name') || h.includes('owner') || h.includes('contact')
  );

  const resolvedEcuIdx = ecuIdx >= 0 ? ecuIdx : 0;
  const resolvedDreIdx = dreIdx >= 0 ? dreIdx : (resolvedEcuIdx === 0 ? 1 : 0);

  // Keyword sets used during header detection — skip any row whose ECU cell
  // matches a header keyword (handles files with a second/duplicate header row).
  const headerKeywords = new Set(['ECU', 'MODULE', 'SYSTEM', 'DRE', 'NAME', 'OWNER', 'CONTACT']);

  let count = 0;
  for (let i = 1; i < rows.length; i++) {
    const row    = rows[i];
    const ecuRaw = row?.[resolvedEcuIdx];
    if (!ecuRaw) continue;
    const ecu = String(ecuRaw).trim().toUpperCase();
    if (!ecu || headerKeywords.has(ecu)) continue;  // skip residual header rows
    lookup[ecu] = String(row[resolvedDreIdx] ?? '').trim();
    count++;
  }

  console.log(`   👤 Sheet "${sheetName}": ${count} DRE entries`);
  return lookup;
}

function writeDreModule(filename, lookup) {
  const safeName   = safeModuleName(filename);
  const outputPath = join(DRE_AUTO_DIR, `${safeName}.js`);
  const date       = new Date().toISOString().split('T')[0];
  const count      = Object.keys(lookup).length;

  const content =
    `// Auto-generated from ${filename} on ${date}\n` +
    `// ${count} ECU → DRE name entries — re-run \`npm run process-vf\` to regenerate\n` +
    `export default ${JSON.stringify(lookup, null, 2)};\n`;

  writeFileSync(outputPath, content, 'utf8');
  return outputPath;
}

async function processDreFile(filePath) {
  const filename = basename(filePath);

  let size;
  try {
    size = statSync(filePath).size;
  } catch {
    console.error(`  Could not stat ${filename}, skipping.`);
    return;
  }

  const manifest = loadManifest();
  const key      = manifestKey(filename, size);

  if (manifest[key]) {
    console.log(`⚠️  Already processed: ${filename} (skipped)`);
    return;
  }

  console.log(`👤 Processing DRE Names file: ${filename}`);

  try {
    const lookup = parseDreNamesXlsx(filePath);
    const count  = Object.keys(lookup).length;

    if (count === 0) {
      throw new Error('No DRE entries found — file must have columns identifiable as ECU and DRE/name.');
    }

    const outputPath = writeDreModule(filename, lookup);
    const relOutput  = outputPath.replace(PROJECT_ROOT + '/', '');

    manifest[key] = {
      filename,
      size,
      processedAt: new Date().toISOString(),
      outputFile:  relOutput,
      dreCount:    count,
    };
    saveManifest(manifest);

    console.log(`✅ Done: ${filename} → ${relOutput} (${count} entries)`);
  } catch (err) {
    console.error(`❌ Error processing DRE file ${filename}: ${err.message}`);
  }
}

// ─── VF doc (.doc / .docx) handling ──────────────────────────────────────────

async function extractText(filePath) {
  const ext = extname(filePath).toLowerCase();

  if (ext === '.docx') {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  if (ext === '.doc') {
    const extractor = new WordExtractor();
    const extracted = await extractor.extract(filePath);
    return extracted.getBody();
  }

  throw new Error(`Unsupported file type: ${ext}`);
}

async function extractKnowledge(rawText, filename) {
  if (!ENDPOINT || !API_KEY || !DEPLOYMENT) {
    throw new Error(
      'Azure OpenAI credentials missing. Set VITE_AZURE_OPENAI_ENDPOINT, ' +
      'VITE_AZURE_OPENAI_KEY, and VITE_AZURE_OPENAI_DEPLOYMENT in .env'
    );
  }

  const url = `${ENDPOINT}/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=${API_VERSION}`;

  const systemPrompt =
    'You are a technical knowledge extractor for Stellantis/Chrysler vehicle engineering documents.\n' +
    'Extract structured technical knowledge from Vehicle Function (VF) specifications to be injected\n' +
    "into an AI diagnostic assistant's system prompt. Be precise and include exact signal names,\n" +
    'CAN bus IDs, threshold values, timing parameters, PROXI config names, ECU names, and fault conditions.';

  const truncatedText = rawText.slice(0, 60000);

  const userPrompt =
    `Extract the key technical knowledge from this Stellantis Vehicle Function document "${filename}".\n\n` +
    'Structure your output with these sections (use === SECTION NAME === headers):\n' +
    '=== SYSTEM OVERVIEW ===\n' +
    '=== ECU ROLES ===\n' +
    '=== ENABLE CONDITIONS ===\n' +
    '=== KEY CAN SIGNALS ===\n' +
    '=== THRESHOLDS AND TIMING ===\n' +
    '=== PROXI CONFIGURATION ===\n' +
    '=== FAULT CONDITIONS AND BEHAVIOR ===\n' +
    '=== INHIBIT CONDITIONS ===\n\n' +
    'Document text:\n' +
    truncatedText;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': API_KEY,
    },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      stream: false,
      max_tokens: 4000,
      temperature: 0.1,
    }),
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(errBody.error?.message || `Azure OpenAI HTTP ${res.status}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

function writeKnowledgeModule(filename, knowledge) {
  const safeName   = safeModuleName(filename);
  const outputPath = join(VF_AUTO_DIR, `${safeName}.js`);
  const date       = new Date().toISOString().split('T')[0];

  // Escape backticks and ${...} so the content is safe inside a JS template literal
  const escaped = knowledge
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

  const content =
    `// Auto-generated from ${filename} on ${date}\n` +
    '// Re-run `npm run process-vf` to regenerate\n' +
    'export default `\n' +
    `=== ${filename.toUpperCase()} ===\n` +
    `${escaped}\n` +
    '`;\n';

  writeFileSync(outputPath, content, 'utf8');
  return outputPath;
}

async function processVFFile(filePath) {
  const filename = basename(filePath);

  let size;
  try {
    size = statSync(filePath).size;
  } catch {
    console.error(`  Could not stat ${filename}, skipping.`);
    return;
  }

  const manifest = loadManifest();
  const key      = manifestKey(filename, size);

  if (manifest[key]) {
    console.log(`⚠️  Already processed: ${filename} (skipped)`);
    return;
  }

  console.log(`📄 Processing VF document: ${filename}`);

  try {
    const rawText = await extractText(filePath);

    if (!rawText || rawText.trim().length < 50) {
      throw new Error('Extracted text is empty or too short — file may be corrupt or image-based.');
    }

    const knowledge  = await extractKnowledge(rawText, filename);
    const outputPath = writeKnowledgeModule(filename, knowledge);
    const relOutput  = outputPath.replace(PROJECT_ROOT + '/', '');

    manifest[key] = {
      filename,
      size,
      processedAt: new Date().toISOString(),
      outputFile:  relOutput,
    };
    saveManifest(manifest);

    console.log(`✅ Done: ${filename} → ${relOutput}`);
  } catch (err) {
    console.error(`❌ Error processing VF document ${filename}: ${err.message}`);
    // Do NOT rethrow — keep the watcher alive
  }
}

// ─── Router: dispatch to the right handler ────────────────────────────────────

async function processFile(filePath) {
  const filename = basename(filePath);
  const ext      = extname(filename).toLowerCase();

  if (['.doc', '.docx'].includes(ext)) {
    return processVFFile(filePath);
  }

  if (isDtcFile(filename)) {
    return processDtcFile(filePath);
  }

  if (isDreFile(filename)) {
    return processDreFile(filePath);
  }

  // Silently ignore other files (images, PDFs, etc.)
}

// ─── Startup scan + watcher ───────────────────────────────────────────────────

console.log('🔍 Watching public/, public/VFs and public/DTCs...');
console.log(`   public/VFs/  → ${VF_AUTO_DIR}`);
console.log(`   public/DTCs/ → ${DTC_AUTO_DIR}`);
console.log(`   public/      → ${DRE_AUTO_DIR}  (DRE Names files)`);
console.log(`   Manifest     : ${MANIFEST_FILE}`);
console.log('');
console.log('   Drop files here:');
console.log('     📄 public/VFs/   — .doc / .docx  → VF knowledge modules (LLM extraction)');
console.log('     📊 public/DTCs/  — DTC*.xlsx     → DTC lookup modules (direct parse)');
console.log('     👤 public/       — DRE*.xlsx     → DRE name lookup modules (direct parse)');
console.log('');

const watcher = chokidar.watch([VFS_DIR, DTCS_DIR, PUBLIC_DIR], {
  persistent: true,
  ignoreInitial: false,   // process existing files on startup
  awaitWriteFinish: {
    stabilityThreshold: 1500,
    pollInterval: 200,
  },
});

watcher
  .on('add',    filePath => processFile(filePath))
  .on('change', filePath => processFile(filePath))
  .on('error',  err      => console.error('Watcher error:', err));

// Graceful shutdown
process.on('SIGINT',  () => { watcher.close(); process.exit(0); });
process.on('SIGTERM', () => { watcher.close(); process.exit(0); });
