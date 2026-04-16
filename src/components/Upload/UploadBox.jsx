import { useRef } from 'react';

function DocumentUploadIcon() {
  return (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Document body */}
      <rect x="4" y="2" width="33" height="44" rx="2" fill="white" stroke="#9ca3af" strokeWidth="1.5" />
      {/* Folded corner */}
      <path d="M31 2 L37 8 V11 H31 V2Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Text lines */}
      <line x1="10" y1="22" x2="31" y2="22" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="28" x2="31" y2="28" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="34" x2="22" y2="34" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
      {/* Upload circle badge */}
      <circle cx="39" cy="47" r="11" fill="white" stroke="#9ca3af" strokeWidth="1.2" />
      <path d="M39 52V44M39 44L36 47M39 44L42 47" stroke="#374151" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * @param {object}   props
 * @param {string}   props.label    — visible label below the icon
 * @param {string}   props.accept   — file input accept attribute (e.g. ".htm,.html")
 * @param {string}   props.fileName — name of the currently selected file (empty = none)
 * @param {function} props.onChange — file input change handler
 */
export default function UploadBox({ label, accept, fileName, onChange }) {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
  };

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer group"
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={() => inputRef.current?.click()}
      onKeyDown={handleKeyDown}
    >
      <div className="transition-transform group-hover:scale-105">
        <DocumentUploadIcon />
      </div>

      <span className="text-sm font-bold text-gray-700 text-center">{label}</span>

      {fileName ? (
        <span
          className="text-xs text-blue-600 max-w-[150px] truncate text-center"
          title={fileName}
        >
          {fileName}
        </span>
      ) : (
        <span className="text-xs text-gray-400">No file selected</span>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={onChange}
        aria-label={label}
      />
    </div>
  );
}
