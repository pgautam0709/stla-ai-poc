import UploadBox from './UploadBox';

export default function UploadSection({ vsrFileName, onVSRChange }) {
  return (
    <section className="mb-6" aria-label="File upload">
      <UploadBox
        label="Upload the VSR:"
        accept=".htm,.html"
        fileName={vsrFileName}
        onChange={onVSRChange}
      />
    </section>
  );
}
