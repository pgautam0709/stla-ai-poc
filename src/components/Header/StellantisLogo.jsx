export default function StellantisLogo({ white = false, height = 36 }) {
  return (
    <img
      src="/stellantis-logo.svg"
      alt="Stellantis"
      draggable={false}
      style={{
        height,
        width: 'auto',
        filter: white ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  );
}
