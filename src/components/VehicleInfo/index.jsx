/**
 * Displays the vehicle identity fields parsed from the VSR header.
 *
 * @param {object} props
 * @param {object} props.info - { vin, modelYear, built, vsrDate, salesCode }
 */
export default function VehicleInfoCard({ info }) {
  const { vin, modelYear, built, vsrDate, salesCode } = info;

  return (
    <section className="border border-gray-400 mb-5" aria-label="Vehicle information">
      <div className="flex">
        {/* Left column: core identity */}
        <div className="border-r border-gray-400 p-4 w-72 text-sm space-y-1 text-gray-700">
          <InfoRow label="VIN" value={vin} />
          <InfoRow label="MY" value={modelYear} />
          <InfoRow label="Built" value={built} />
          <InfoRow label="VSR Date" value={vsrDate} />
        </div>

        {/* Right column: sales code */}
        <div className="p-4 flex-1 text-sm text-gray-700">
          <InfoRow label="Sales Code" value={salesCode} />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <span className="font-semibold">{label}:</span>{' '}
      <span>{value || <span className="text-gray-400">—</span>}</span>
    </div>
  );
}
