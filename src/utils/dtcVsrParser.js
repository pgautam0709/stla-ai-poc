/**
 * Parses DTC (Diagnostic Trouble Code) data from a VSR HTML file.
 * Extracts from div#dtc_data: ECU, DTC code, status, description,
 * environmental data records, and snapshot data records.
 */
export function parseDTCsFromVSR(htmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');

  const dtcs = [];
  const dtcDiv = doc.getElementById('dtc_data');
  if (!dtcDiv) return dtcs;

  const table = dtcDiv.querySelector('table');
  if (!table) return dtcs;

  const rows = table.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    // Skip header rows (contain <th>) and the "Expand All" link row
    if (row.querySelector('th')) return;
    if (row.querySelector('.envDataLinkRow')) return;

    const cells = row.querySelectorAll('td');
    if (cells.length < 5) return;

    const ecu = cells[0]?.textContent.trim();
    const dtcCode = cells[1]?.textContent.trim();
    if (!ecu || !dtcCode) return;

    // col 2 = MIL (not displayed), col 3 = Status, col 4 = Description
    const status = cells[3]?.textContent.trim() ?? '';
    const description = cells[4]?.textContent.trim() ?? '';

    const environmentalData = parseNestedTable(cells[5]);
    const snapshotData = parseSnapshotTables(cells[6]);

    dtcs.push({ ecu, dtcCode, status, description, environmentalData, snapshotData });
  });

  return dtcs;
}

function parseNestedTable(cell) {
  if (!cell) return [];
  const tbl = cell.querySelector('table');
  if (!tbl) return [];

  return Array.from(tbl.querySelectorAll('tr.tableHoverClass')).map((row) => {
    const tds = row.querySelectorAll('td');
    return {
      name: tds[0]?.textContent.trim() ?? '',
      value: tds[1]?.textContent.trim() ?? '',
      units: tds[2]?.textContent.trim() ?? '',
    };
  }).filter((r) => r.name);
}

function parseSnapshotTables(cell) {
  if (!cell) return [];

  return Array.from(cell.querySelectorAll('table')).map((tbl, idx) => {
    const entries = Array.from(tbl.querySelectorAll('tr.tableHoverClass')).map((row) => {
      const tds = row.querySelectorAll('td');
      return {
        name: tds[0]?.textContent.trim() ?? '',
        value: tds[1]?.textContent.trim() ?? '',
        units: tds[2]?.textContent.trim() ?? '',
      };
    }).filter((r) => r.name);

    return { index: idx + 1, entries };
  });
}
