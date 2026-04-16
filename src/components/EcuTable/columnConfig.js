/**
 * Column definitions for the ECU details table.
 *
 * Each column:
 *   id           — unique key
 *   label        — header display text
 *   source       — 'vsr' | 'compare' (purely informational / could drive badges)
 *   accessor     — fn(row) → cell value
 *   cellClass    — static Tailwind classes for every cell in this column
 *   getClass     — fn(row) → dynamic Tailwind classes (optional, overrides cellClass)
 *
 * To add/remove/reorder columns, edit this array only — no changes needed elsewhere.
 */
export const ECU_TABLE_COLUMNS = [
  {
    id: 'ecuName',
    label: 'ECU',
    source: 'vsr',
    accessor: (row) => row.ecuName,
    cellClass: 'font-medium text-gray-900',
  },
  {
    id: 'partNumber',
    label: 'Part Number',
    source: 'vsr',
    accessor: (row) => row.partNumber,
    cellClass: '',
  },
  {
    id: 'latestPartNumber',
    label: 'Latest Part Nos.',
    source: 'compare',
    accessor: (row) => row.latestPartNumber,
    getClass: (row) => (!row.latestPartNumber ? 'text-gray-400 italic' : ''),
  },
  {
    id: 'swVersion',
    label: 'Software Version',
    source: 'vsr',
    accessor: (row) => row.swVersion,
    cellClass: '',
  },
  {
    id: 'latestSwVersion',
    label: 'Latest SW Version',
    source: 'compare',
    accessor: (row) => row.latestSwVersion,
    getClass: (row) => {
      if (!row.latestSwVersion) return 'text-gray-400 italic';
      if (row.latestSwVersion === row.swVersion) return 'text-green-700 font-medium';
      return 'text-red-600 font-semibold';
    },
  },
  {
    id: 'dre',
    label: 'DRE',
    source: 'compare',
    accessor: (row) => row.dre,
    getClass: (row) => (!row.dre ? 'text-gray-400 italic' : ''),
  },
  {
    id: 'supplier',
    label: 'Supplier',
    source: 'vsr',
    accessor: (row) => row.supplier,
    cellClass: '',
  },
];
