import { useEffect } from 'react';
import { useDiagnostic, ACTIONS } from '../context/DiagnosticContext';
import { parseDTCLookup } from '../utils/dtcLookupParser';
import { parseCompareTable } from '../utils/compareParser';

/**
 * Fetches DTC.xlsx and CompareTable.xlsx from /public on mount and
 * loads them into global state. Files are optional — missing files are
 * silently ignored so the app still works without them.
 */
export function useStaticFilesLoader() {
  const { dispatch } = useDiagnostic();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/DTC.xlsx');
        if (res.ok) {
          const buf = await res.arrayBuffer();
          dispatch({ type: ACTIONS.SET_DTC_LOOKUP, payload: parseDTCLookup(buf) });
        }
      } catch { /* file absent — ignore */ }

      try {
        const res = await fetch('/CompareTable.xlsx');
        if (res.ok) {
          const buf = await res.arrayBuffer();
          dispatch({ type: ACTIONS.SET_COMPARE_DATA, payload: parseCompareTable(buf) });
        }
      } catch { /* file absent — ignore */ }
    }

    load();
  }, [dispatch]);
}
