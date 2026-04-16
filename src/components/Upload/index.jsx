import UploadBox from './UploadBox';

/**
 * @param {object}   props
 * @param {string}   props.vsrFileName      — currently loaded VSR file name
 * @param {string}   props.compareFileName  — currently loaded Compare Table file name
 * @param {function} props.onVSRChange      — handler for VSR file input change
 * @param {function} props.onCompareChange  — handler for Compare Table file input change
 */
export default function UploadSection({ vsrFileName, compareFileName, onVSRChange, onCompareChange }) {
  return (
    <section className="flex gap-16 mb-8" aria-label="File upload">
      <UploadBox
        label="Upload the VSR:"
        accept=".htm,.html"
        fileName={vsrFileName}
        onChange={onVSRChange}
      />
      <UploadBox
        label="Upload Compare Table:"
        accept=".xlsx,.xls"
        fileName={compareFileName}
        onChange={onCompareChange}
      />
    </section>
  );
}
