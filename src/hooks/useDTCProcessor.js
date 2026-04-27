import { useCallback } from 'react';
import { useDiagnostic, ACTIONS } from '../context/DiagnosticContext';
import { parseDTCLookup } from '../utils/dtcLookupParser';

/**
 * Provides a handler for uploading and processing a DTC.xlsx file.
 * Dispatches the parsed DTC lookup map into global state.
 */
export function useDTCProcessor() {
  const { dispatch } = useDiagnostic();

  const processDTCFile = useCallback(async (file) => {
    if (!file) return;
    dispatch({ type: ACTIONS.SET_LOADING, payload: 'Parsing DTC table…' });

    try {
      const buffer = await file.arrayBuffer();
      const dtcLookup = parseDTCLookup(buffer);
      dispatch({ type: ACTIONS.SET_DTC_LOOKUP, payload: dtcLookup });
      dispatch({ type: ACTIONS.SET_DTC_FILENAME, payload: file.name });
    } catch (err) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: `DTC table parse error: ${err.message}` });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: '' });
    }
  }, [dispatch]);

  return { processDTCFile };
}
