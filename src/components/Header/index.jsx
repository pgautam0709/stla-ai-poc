import StellantisLogo from './StellantisLogo';

export default function Header() {
  return (
    <header className="mb-8">
      {/* Brand bar */}
      <div
        className="flex items-center px-4 py-4 rounded-xl mb-4"
        style={{ backgroundColor: '#243882' }}
      >
        {/* Left: Stellantis logo */}
        <div className="flex-shrink-0">
          <StellantisLogo white height={28} />
        </div>

        {/* Centre: platform label */}
        <div className="flex-1 flex justify-center">
          <span className="text-white text-sm font-bold tracking-widest uppercase">
            Diagnostic Intelligence Platform
          </span>
        </div>

        {/* Right: Cognizant logo (reversed / white version for dark backgrounds) */}
        <div className="flex-shrink-0">
          <img
            src="/cog_sec_lg_vrt_r_rgb_rev_2022.jpg"
            alt="Cognizant"
            draggable={false}
            style={{ height: 56, width: 'auto' }}
          />
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-sm font-bold italic text-gray-600 text-center tracking-wide">
        Vehicle Software Repository · ECU Intelligence · DTC Expert
      </p>
    </header>
  );
}
