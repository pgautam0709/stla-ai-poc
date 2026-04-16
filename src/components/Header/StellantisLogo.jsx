/**
 * Stellantis brand logo — 8-pointed compass star + wordmark.
 * Colors and proportions match the official Stellantis visual identity:
 *   Star mark : Stellantis navy #00263A
 *   Wordmark  : bold, wide letter-spacing, uppercase
 */
const NAVY = '#00263A';

// Eight rays at 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
// Each ray is a tapered diamond: outer tip r=22, inner tip r=8, half-width at midpoint r=13 → 3.5px
const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function StarMark({ size = 36 }) {
  // Ray path pointing straight up (center at 0,0 in local coords):
  //   outer tip  : (0, -22)
  //   right side : (3.5, -13)
  //   inner tip  : (0, -8)
  //   left side  : (-3.5, -13)
  const rayPath = 'M 0,-22 L 3.5,-13 L 0,-8 L -3.5,-13 Z';

  return (
    <svg
      width={size}
      height={size}
      viewBox="-30 -30 60 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stellantis star mark"
    >
      {RAY_ANGLES.map((angle) => (
        <path
          key={angle}
          d={rayPath}
          fill={NAVY}
          transform={`rotate(${angle})`}
        />
      ))}
      {/* Center circle */}
      <circle cx="0" cy="0" r="5" fill={NAVY} />
    </svg>
  );
}

export default function StellantisLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none" aria-label="Stellantis">
      {/* Outer border box matching official usage */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 border"
        style={{ borderColor: NAVY }}
      >
        <StarMark size={32} />
        <span
          className="text-sm tracking-widest font-bold uppercase"
          style={{ color: NAVY, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.18em' }}
        >
          Stellantis
        </span>
      </div>
    </div>
  );
}
