import UploadBox from './UploadBox';

export default function UploadSection({
  vsrFileName,
  compareFileName,
  dtcFileName,
  onVSRChange,
  onCompareChange,
  onDTCChange,
}) {
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
      <UploadBox
        label="Upload DTC Table:"
        accept=".xlsx,.xls"
        fileName={dtcFileName}
        onChange={onDTCChange}
      />
    </section>
  );
}
