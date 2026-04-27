import StellantisLogo from './StellantisLogo';

export default function Header() {
  return (
    <header className="mb-8">
      {/* Stellantis brand bar */}
      <div
        className="flex items-center justify-between px-4 py-3 rounded-xl mb-4"
        style={{ backgroundColor: '#243882' }}
      >
        <StellantisLogo white height={28} />
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
          Diagnostic Intelligence Platform
        </span>
      </div>

      {/* Page title */}
      <div className="px-1">
        <h1 className="text-lg font-semibold text-gray-800 tracking-wide">
          AI Powered Diagnostic Tool
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Vehicle Software Repository · ECU Intelligence · DTC Expert
        </p>
      </div>
    </header>
  );
}
