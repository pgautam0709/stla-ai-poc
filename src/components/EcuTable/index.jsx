import { ECU_TABLE_COLUMNS } from './columnConfig';
import EcuTableRow from './EcuTableRow';

const HEADER_COLOR = '#243882';
const TH = 'px-3 py-2.5 text-left text-white font-semibold text-sm whitespace-nowrap';

/**
 * @param {object}   props
 * @param {object[]} props.ecus — merged ECU rows (VSR + compare data)
 */
export default function EcuTable({ ecus }) {
  return (
    <section className="border border-gray-400" aria-label="ECU details table">
      {/* Section label */}
      <div className="border-b border-gray-400 px-3 py-2">
        <span className="font-bold text-sm text-gray-800">ECUs Details:</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" aria-label="ECU software versions">
          <thead>
            <tr style={{ backgroundColor: HEADER_COLOR }}>
              {ECU_TABLE_COLUMNS.map((col) => (
                <th key={col.id} className={TH}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ecus.length > 0 ? (
              ecus.map((row, idx) => (
                <EcuTableRow key={row.ecuName} row={row} index={idx} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={ECU_TABLE_COLUMNS.length}
                  className="text-center py-6 text-sm text-gray-400"
                >
                  No ECU data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
