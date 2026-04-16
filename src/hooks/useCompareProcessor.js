import { useCallback } from 'react';
import { useDiagnostic, ACTIONS } from '../context/DiagnosticContext';
import { parseCompareTable } from '../utils/compareParser';

/**
 * Provides a handler for uploading and processing a CompareTable (.xlsx) file.
 * Dispatches the parsed ECU-to-latest-version lookup map into global state.
 */
export function useCompareProcessor() {
  const { dispatch } = useDiagnostic();

  const processCompareTable = useCallback(async (file) => {
    if (!file) return;
    dispatch({ type: ACTIONS.SET_LOADING, payload: 'Parsing Compare Table…' });

    try {
      const buffer = await file.arrayBuffer();
      const data = parseCompareTable(buffer);
      dispatch({ type: ACTIONS.SET_COMPARE_DATA, payload: data });
      dispatch({ type: ACTIONS.SET_COMPARE_FILENAME, payload: file.name });
    } catch (err) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: `Compare Table parse error: ${err.message}` });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: '' });
    }
  }, [dispatch]);

  return { processCompareTable };
}
