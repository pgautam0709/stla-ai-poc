import { useState } from 'react';

const HEADER_BG = '#1a4a6e';
const GREEN_BG = '#4a7c2f';

const MAIN_COLS = [
  { label: 'ECU',                key: 'ecu' },
  { label: 'DTC Code',           key: 'dtcCode' },
  { label: 'Details',            key: 'description' },
  { label: 'Status',             key: 'status' },
  { label: 'Environmental Data', key: 'environmentalData' },
  { label: 'Snapshot Data',      key: 'snapshotData' },
];

const DETAIL_COLS = [
  { label: 'Enable Condition',        key: 'enableCondition' },
  { label: 'Repair Action',           key: 'repairAction' },
  { label: 'Self Healing criteria',   key: 'selfHealingCriteria' },
  { label: 'Dematuration Criteria',   key: 'dematureCriteria' },
  { label: 'Limp in Action / Feature',key: 'limpInAction' },
];

function DataBadge({ items, label }) {
  if (!items || items.length === 0) return <span className="text-gray-400 text-xs">—</span>;
  return (
    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded">
      {items.length} {label}
    </span>
  );
}

function ExpandedDetails({ lookup }) {
  if (!lookup) {
    return (
      <tr>
        <td colSpan={MAIN_COLS.length} className="px-0 py-0">
          <div className="mx-0 my-1 rounded overflow-hidden border border-green-300">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ backgroundColor: GREEN_BG }}>
                  {DETAIL_COLS.map((c) => (
                    <th key={c.key} className="px-3 py-2 text-left text-white font-semibold border-r border-green-400 last:border-r-0">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  {DETAIL_COLS.map((c) => (
                    <td key={c.key} className="px-3 py-2 text-gray-400 italic border-r border-green-200 last:border-r-0">
                      No data — upload DTC.xlsx
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td colSpan={MAIN_COLS.length} className="px-0 py-0">
        <div className="mx-0 my-1 rounded overflow-hidden border border-green-300">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ backgroundColor: GREEN_BG }}>
                {DETAIL_COLS.map((c) => (
                  <th key={c.key} className="px-3 py-2 text-left text-white font-semibold border-r border-green-400 last:border-r-0">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                {DETAIL_COLS.map((c) => (
                  <td key={c.key} className="px-3 py-2 align-top border-r border-green-200 last:border-r-0 whitespace-pre-wrap">
                    {lookup[c.key] || <span className="text-gray-400 italic">—</span>}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
}

function DtcRow({ dtc, lookup, isOdd }) {
  const [expanded, setExpanded] = useState(false);
  const rowBg = isOdd ? 'bg-gray-50' : 'bg-white';

  return (
    <>
      <tr className={rowBg}>
        {/* ECU */}
        <td className="px-3 py-2 text-sm border-b border-gray-200 font-medium">{dtc.ecu}</td>

        {/* DTC Code with expand toggle */}
        <td className="px-3 py-2 text-sm border-b border-gray-200 whitespace-nowrap">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 group"
            aria-expanded={expanded}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} details for ${dtc.dtcCode}`}
          >
            <span className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded text-xs font-bold text-gray-600 group-hover:bg-gray-100 transition-colors">
              {expanded ? '−' : '+'}
            </span>
            <span className="font-mono text-blue-700">{dtc.dtcCode}</span>
          </button>
        </td>

        {/* Details / Description */}
        <td className="px-3 py-2 text-sm border-b border-gray-200">{dtc.description || '—'}</td>

        {/* Status */}
        <td className="px-3 py-2 text-sm border-b border-gray-200">
          <StatusBadge status={dtc.status} />
        </td>

        {/* Environmental Data */}
        <td className="px-3 py-2 text-sm border-b border-gray-200">
          <DataBadge items={dtc.environmentalData} label="records" />
        </td>

        {/* Snapshot Data */}
        <td className="px-3 py-2 text-sm border-b border-gray-200">
          <DataBadge items={dtc.snapshotData} label="snapshots" />
        </td>
      </tr>

      {expanded && <ExpandedDetails lookup={lookup} />}
    </>
  );
}

function StatusBadge({ status }) {
  if (!status) return <span className="text-gray-400">—</span>;
  const s = status.toLowerCase();
  if (s === 'active') {
    return <span className="text-red-600 font-medium capitalize">{status}</span>;
  }
  if (s === 'inactive' || s === 'passive') {
    return <span className="text-green-600 font-medium capitalize">{status}</span>;
  }
  return <span className="text-gray-700 capitalize">{status}</span>;
}

export default function DtcView({ dtcs, dtcLookup }) {
  if (!dtcs || dtcs.length === 0) {
    return (
      <p className="text-center text-gray-400 text-sm mt-8">
        No DTC data — upload a VSR file to see DTCs
      </p>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow border border-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ backgroundColor: HEADER_BG }}>
            {MAIN_COLS.map((col) => (
              <th
                key={col.key}
                className="px-3 py-3 text-left text-white font-semibold text-xs tracking-wide border-r border-blue-800 last:border-r-0"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dtcs.map((dtc, idx) => {
            const lookupKey = dtc.dtcCode.toUpperCase();
            const lookup = dtcLookup[lookupKey] ?? null;
            return (
              <DtcRow
                key={`${dtc.ecu}-${dtc.dtcCode}-${idx}`}
                dtc={dtc}
                lookup={lookup}
                isOdd={idx % 2 !== 0}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
