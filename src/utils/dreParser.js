import * as XLSX from 'xlsx';

/**
 * Parses a DRE Names Excel file and returns a lookup map keyed by ECU name (uppercase).
 *
 * Flexible column detection (case-insensitive substring match):
 *   ECU column  → header containing "ecu", "module", or "system"
 *   DRE column  → header containing "dre", "name", "owner", or "contact"
 *
 * If no clear ECU/DRE columns are found the parser falls back to
 * treating column 0 as ECU and column 1 as DRE name.
 *
 * Returns: { [ECU_NAME_UPPERCASE]: "DRE Person Name" }
 */
export function parseDreNames(arrayBuffer) {
  const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

  if (!rows || rows.length < 2) return {};

  const headers = rows[0].map((h) => String(h).toLowerCase().trim());

  const ecuIdx = headers.findIndex(
    (h) => h.includes('ecu') || h.includes('module') || h.includes('system')
  );
  const dreIdx = headers.findIndex(
    (h) => h.includes('dre') || h.includes('name') || h.includes('owner') || h.includes('contact')
  );

  // Fall back to first two columns if headers are not recognisable
  const resolvedEcuIdx = ecuIdx >= 0 ? ecuIdx : 0;
  const resolvedDreIdx = dreIdx >= 0 ? dreIdx : (resolvedEcuIdx === 0 ? 1 : 0);

  // Skip any row whose ECU cell looks like a header keyword (handles files
  // with a second/duplicate header row below a title row).
  const headerKeywords = new Set(['ECU', 'MODULE', 'SYSTEM', 'DRE', 'NAME', 'OWNER', 'CONTACT']);

  const dreMap = {};
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const ecuRaw = row[resolvedEcuIdx];
    if (!ecuRaw) continue;
    const ecu = String(ecuRaw).trim().toUpperCase();
    if (!ecu || headerKeywords.has(ecu)) continue;
    dreMap[ecu] = String(row[resolvedDreIdx] ?? '').trim();
  }

  return dreMap;
}
