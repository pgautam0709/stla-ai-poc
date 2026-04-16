import { useCallback } from 'react';
import { useDiagnostic, ACTIONS } from '../context/DiagnosticContext';
import { parseVSR } from '../utils/vsrParser';

/**
 * Provides a handler for uploading and processing a VSR (.htm) file.
 * Dispatches parsed vehicle info and ECU list into global state.
 */
export function useVSRProcessor() {
  const { dispatch } = useDiagnostic();

  const processVSR = useCallback(async (file) => {
    if (!file) return;
    dispatch({ type: ACTIONS.SET_LOADING, payload: 'Parsing VSR…' });

    try {
      const text = await file.text();
      const { vehicleInfo, ecus } = parseVSR(text);
      dispatch({ type: ACTIONS.SET_VEHICLE_INFO, payload: vehicleInfo });
      dispatch({ type: ACTIONS.SET_ECUS, payload: ecus });
      dispatch({ type: ACTIONS.SET_VSR_FILENAME, payload: file.name });
    } catch (err) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: `VSR parse error: ${err.message}` });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: '' });
    }
  }, [dispatch]);

  return { processVSR };
}
