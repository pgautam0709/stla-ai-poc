import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { useDiagnostic, ACTIONS } from './context/DiagnosticContext';
import { useVSRProcessor } from './hooks/useVSRProcessor';
import { useStaticFilesLoader } from './hooks/useStaticFilesLoader';

import Header from './components/Header';
import UploadSection from './components/Upload';
import VehicleInfoCard from './components/VehicleInfo';
import EcuTable from './components/EcuTable';
import DtcView from './components/DtcView';
import ChatPanel from './components/ChatPanel';
import StatusBar from './components/common/StatusBar';

const TABS = [
  { id: 'ecu', label: 'ECU Software' },
  { id: 'dtc', label: 'DTC View' },
];

const PANEL_MIN = 300;
const PANEL_MAX = 860;
const PANEL_DEFAULT = 420;

export default function App() {
  const { state, dispatch } = useDiagnostic();
  const { vehicleInfo, ecus, compareData, dtcs, dtcLookup, vsrFileName, loading, error } = state;

  const [activeTab, setActiveTab] = useState('ecu');
  const [panelWidth, setPanelWidth] = useState(PANEL_DEFAULT);

  const { processVSR } = useVSRProcessor();
  useStaticFilesLoader();

  const handleVSRChange   = (e) => processVSR(e.target.files?.[0]);
  const handleDismissError = () => dispatch({ type: ACTIONS.CLEAR_ERROR });

  // ── Drag-to-resize ──────────────────────────────────────────────────────────
  const drag = useRef({ active: false, startX: 0, startW: PANEL_DEFAULT });

  const onDragStart = useCallback((e) => {
    drag.current = { active: true, startX: e.clientX, startW: panelWidth };
    e.preventDefault();
  }, [panelWidth]);

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current.active) return;
      const delta = drag.current.startX - e.clientX; // drag left → wider
      setPanelWidth(Math.min(Math.max(drag.current.startW + delta, PANEL_MIN), PANEL_MAX));
    };
    const onUp = () => { drag.current.active = false; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup',   onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup',   onUp);
    };
  }, []);

  const mergedEcus = useMemo(() => {
    return ecus.map((ecu) => {
      const match = compareData[ecu.ecuName.toUpperCase()] ?? {};
      return {
        ...ecu,
        latestPartNumber: match.latestPartNumber ?? '',
        latestSwVersion:  match.latestSwVersion  ?? '',
        dre:              match.dre               ?? '',
      };
    });
  }, [ecus, compareData]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* ── Left: main scrollable content ── */}
      <div className="flex-1 overflow-y-auto min-w-0">
        <div className="px-6 py-6">

          <Header />
          <UploadSection vsrFileName={vsrFileName} onVSRChange={handleVSRChange} />
          <StatusBar loading={loading} error={error} onDismiss={handleDismissError} />
          {vehicleInfo && <VehicleInfoCard info={vehicleInfo} />}

          {/* Tab bar */}
          <div className="flex border-b border-gray-300 mb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-6 py-2.5 text-sm font-semibold border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700',
                ].join(' ')}
              >
                {tab.label}
                {tab.id === 'dtc' && dtcs.length > 0 && (
                  <span className="ml-1.5 bg-red-100 text-red-700 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {dtcs.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {activeTab === 'ecu' && mergedEcus.length > 0 && <EcuTable ecus={mergedEcus} />}
          {activeTab === 'dtc' && <DtcView dtcs={dtcs} dtcLookup={dtcLookup} />}

          {!vehicleInfo && !loading && (
            <p className="text-center text-gray-400 text-sm mt-8">
              Upload a VSR file to get started
            </p>
          )}

        </div>
      </div>

      {/* ── Drag handle ── */}
      <div
        onMouseDown={onDragStart}
        className="w-1.5 flex-shrink-0 bg-gray-200 hover:bg-blue-400 active:bg-blue-500 cursor-col-resize transition-colors group relative"
        title="Drag to resize"
      >
        {/* Grip dots */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {[0,1,2].map(i => <span key={i} className="w-1 h-1 rounded-full bg-blue-600" />)}
        </div>
      </div>

      {/* ── Right: Stella_Assist chat panel ── */}
      <div className="flex-shrink-0" style={{ width: panelWidth }}>
        <ChatPanel vehicleInfo={vehicleInfo} dtcs={dtcs} dtcLookup={dtcLookup} ecus={mergedEcus} />
      </div>

    </div>
  );
}
