import * as XLSX from 'xlsx';

/**
 * Parses a CompareTable.xlsx file and returns a lookup map keyed by ECU name (uppercase).
 * Expected columns (flexible header matching):
 *   ECU          → any header containing "ecu"
 *   Latest PN    → any header containing "part"
 *   Latest SW    → any header containing "sw" or "software" or "version"
 *   DRE          → any header containing "dre"
 *
 * Returns: { [ECU_NAME]: { latestPartNumber, latestSwVersion, dre } }
 */
export function parseCompareTable(arrayBuffer) {
  const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

  if (!rows || rows.length < 2) return {};

  const headers = rows[0].map((h) => String(h).toLowerCase().trim());

  // Flexible column detection
  const ecuIdx = headers.findIndex((h) => h.includes('ecu'));
  const partIdx = headers.findIndex((h) => h.includes('part'));
  const swIdx = headers.findIndex(
    (h) => h.includes('sw') || (h.includes('software') && !h.includes('part')) || h.includes('version')
  );
  const dreIdx = headers.findIndex((h) => h.includes('dre'));

  if (ecuIdx === -1) return {};

  const compareMap = {};

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const ecuRaw = row[ecuIdx];
    if (!ecuRaw) continue;

    const ecu = String(ecuRaw).trim().toUpperCase();
    compareMap[ecu] = {
      latestPartNumber: partIdx >= 0 ? String(row[partIdx] ?? '').trim() : '',
      latestSwVersion: swIdx >= 0 ? String(row[swIdx] ?? '').trim() : '',
      dre: dreIdx >= 0 ? String(row[dreIdx] ?? '').trim() : '',
    };
  }

  return compareMap;
}
