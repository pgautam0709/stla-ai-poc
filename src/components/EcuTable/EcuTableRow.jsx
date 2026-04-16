import { ECU_TABLE_COLUMNS } from './columnConfig';

const BASE_TD = 'px-3 py-2 text-sm border-b border-gray-200';

/**
 * @param {object} props
 * @param {object} props.row   — merged ECU data row
 * @param {number} props.index — row index (used for zebra striping)
 */
export default function EcuTableRow({ row, index }) {
  const rowBg = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';

  return (
    <tr className={rowBg}>
      {ECU_TABLE_COLUMNS.map((col) => {
        const value = col.accessor(row);
        const dynamicClass = col.getClass ? col.getClass(row) : (col.cellClass ?? '');
        return (
          <td key={col.id} className={`${BASE_TD} ${dynamicClass}`}>
            {value || '—'}
          </td>
        );
      })}
    </tr>
  );
}
