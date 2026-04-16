import StellantisLogo from './StellantisLogo';

export default function Header() {
  return (
    <header className="flex items-center gap-5 mb-8">
      <StellantisLogo />
      <h1 className="text-xl font-semibold text-gray-700 tracking-wide">
        AI Powered Diagnostic Tool
      </h1>
    </header>
  );
}
