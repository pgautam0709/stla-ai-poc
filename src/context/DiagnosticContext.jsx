import { createContext, useContext, useReducer } from 'react';

// ─── State Shape ─────────────────────────────────────────────────────────────
const initialState = {
  vehicleInfo: null,
  ecus: [],
  compareData: {},
  dreData: {},        // ECU_NAME → DRE person name (from DRE Names.xlsx)
  dtcs: [],
  dtcLookup: {},
  vsrFileName: '',
  compareFileName: '',
  dtcFileName: '',
  loading: '',
  error: '',
};

// ─── Action Types ─────────────────────────────────────────────────────────────
export const ACTIONS = {
  SET_VEHICLE_INFO: 'SET_VEHICLE_INFO',
  SET_ECUS: 'SET_ECUS',
  SET_COMPARE_DATA: 'SET_COMPARE_DATA',
  SET_DRE_DATA: 'SET_DRE_DATA',
  SET_DTCS: 'SET_DTCS',
  SET_DTC_LOOKUP: 'SET_DTC_LOOKUP',
  MERGE_DTC_LOOKUP: 'MERGE_DTC_LOOKUP',
  SET_VSR_FILENAME: 'SET_VSR_FILENAME',
  SET_COMPARE_FILENAME: 'SET_COMPARE_FILENAME',
  SET_DTC_FILENAME: 'SET_DTC_FILENAME',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET: 'RESET',
};

// ─── Reducer ─────────────────────────────────────────────────────────────────
function diagnosticReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_VEHICLE_INFO:
      return { ...state, vehicleInfo: action.payload };
    case ACTIONS.SET_ECUS:
      return { ...state, ecus: action.payload };
    case ACTIONS.SET_COMPARE_DATA:
      return { ...state, compareData: action.payload };
    case ACTIONS.SET_DRE_DATA:
      return { ...state, dreData: action.payload };
    case ACTIONS.SET_DTCS:
      return { ...state, dtcs: action.payload };
    case ACTIONS.SET_DTC_LOOKUP:
      return { ...state, dtcLookup: action.payload };
    case ACTIONS.MERGE_DTC_LOOKUP:
      return { ...state, dtcLookup: { ...state.dtcLookup, ...action.payload } };
    case ACTIONS.SET_VSR_FILENAME:
      return { ...state, vsrFileName: action.payload };
    case ACTIONS.SET_COMPARE_FILENAME:
      return { ...state, compareFileName: action.payload };
    case ACTIONS.SET_DTC_FILENAME:
      return { ...state, dtcFileName: action.payload };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload, error: '' };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: '' };
    case ACTIONS.CLEAR_ERROR:
      return { ...state, error: '' };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────
const DiagnosticContext = createContext(null);

export function DiagnosticProvider({ children }) {
  const [state, dispatch] = useReducer(diagnosticReducer, initialState);

  return (
    <DiagnosticContext.Provider value={{ state, dispatch }}>
      {children}
    </DiagnosticContext.Provider>
  );
}

// ─── Consumer Hook ────────────────────────────────────────────────────────────
export function useDiagnostic() {
  const ctx = useContext(DiagnosticContext);
  if (!ctx) {
    throw new Error('useDiagnostic must be used within a DiagnosticProvider');
  }
  return ctx;
}
