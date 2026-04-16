/**
 * Displays loading or error state feedback.
 *
 * @param {object} props
 * @param {string} props.loading — non-empty string while processing
 * @param {string} props.error   — non-empty string when an error occurred
 * @param {function} [props.onDismiss] — optional callback to clear the error
 */
export default function StatusBar({ loading, error, onDismiss }) {
  if (!loading && !error) return null;

  if (loading) {
    return (
      <div className="mb-4 flex items-center gap-2 text-sm text-blue-600" role="status" aria-live="polite">
        <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="#bfdbfe" strokeWidth="3" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
        {loading}
      </div>
    );
  }

  return (
    <div
      className="mb-4 flex items-start justify-between gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2"
      role="alert"
      aria-live="assertive"
    >
      <span>{error}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-2 text-red-400 hover:text-red-600 shrink-0 font-bold leading-none"
          aria-label="Dismiss error"
        >
          ✕
        </button>
      )}
    </div>
  );
}
