import * as XLSX from 'xlsx';

/**
 * Parses DTC.xlsx and returns a lookup map keyed by J2012 DTC code (uppercase).
 *
 * DTC.xlsx layout:
 *   Row 0  — title
 *   Row 1  — column headers (col 1 is null but represents J2012 format)
 *   Row 2  — sub-headers: "HEX Value" | "J2012 Format"
 *   Row 3+ — data
 *
 * Column indices used:
 *   1  — J2012 DTC code  (lookup key)
 *   6  — STORED_DTC_SELF_HEALING_CRITERIA
 *   16 — REPAIR_ACTION
 *   17 — ENABLE_CONDITIONS
 *   23 — DE_MATURE_CRITERIA
 *   25 — LIMP_IN_ACTION
 */
export function parseDTCLookup(arrayBuffer) {
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const lookup = {};

  // Data starts at row index 3 (skip title, headers, sub-headers)
  for (let i = 3; i < rows.length; i++) {
    const row = rows[i];
    const j2012 = row[1];
    if (!j2012 || typeof j2012 !== 'string') continue;

    const key = j2012.trim().toUpperCase();
    lookup[key] = {
      selfHealingCriteria: row[6] ?? '',
      repairAction: row[16] ?? '',
      enableCondition: row[17] ?? '',
      dematureCriteria: row[23] ?? '',
      limpInAction: row[25] ?? '',
    };
  }

  return lookup;
}
