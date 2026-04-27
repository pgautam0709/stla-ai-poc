import { useMemo, useState } from 'react';
import { useDiagnostic, ACTIONS } from './context/DiagnosticContext';
import { useVSRProcessor } from './hooks/useVSRProcessor';
import { useCompareProcessor } from './hooks/useCompareProcessor';
import { useDTCProcessor } from './hooks/useDTCProcessor';

import Header from './components/Header';
import UploadSection from './components/Upload';
import VehicleInfoCard from './components/VehicleInfo';
import EcuTable from './components/EcuTable';
import DtcView from './components/DtcView';
import StatusBar from './components/common/StatusBar';

const TABS = [
  { id: 'ecu', label: 'ECU Software' },
  { id: 'dtc', label: 'DTC View' },
];

export default function App() {
  const { state, dispatch } = useDiagnostic();
  const { vehicleInfo, ecus, compareData, dtcs, dtcLookup, vsrFileName, compareFileName, dtcFileName, loading, error } = state;

  const [activeTab, setActiveTab] = useState('ecu');

  const { processVSR } = useVSRProcessor();
  const { processCompareTable } = useCompareProcessor();
  const { processDTCFile } = useDTCProcessor();

  const handleVSRChange = (e) => processVSR(e.target.files?.[0]);
  const handleCompareChange = (e) => processCompareTable(e.target.files?.[0]);
  const handleDTCChange = (e) => processDTCFile(e.target.files?.[0]);
  const handleDismissError = () => dispatch({ type: ACTIONS.CLEAR_ERROR });

  const mergedEcus = useMemo(() => {
    return ecus.map((ecu) => {
      const match = compareData[ecu.ecuName.toUpperCase()] ?? {};
      return {
        ...ecu,
        latestPartNumber: match.latestPartNumber ?? '',
        latestSwVersion: match.latestSwVersion ?? '',
        dre: match.dre ?? '',
      };
    });
  }, [ecus, compareData]);

  const showEmpty = !vehicleInfo && !loading;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-6">

        <Header />

        <UploadSection
          vsrFileName={vsrFileName}
          compareFileName={compareFileName}
          dtcFileName={dtcFileName}
          onVSRChange={handleVSRChange}
          onCompareChange={handleCompareChange}
          onDTCChange={handleDTCChange}
        />

        <StatusBar loading={loading} error={error} onDismiss={handleDismissError} />

        {vehicleInfo && <VehicleInfoCard info={vehicleInfo} />}

        {/* Tab Bar — always visible */}
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

        {/* Tab Content */}
        {activeTab === 'ecu' && mergedEcus.length > 0 && (
          <EcuTable ecus={mergedEcus} />
        )}

        {activeTab === 'dtc' && (
          <DtcView dtcs={dtcs} dtcLookup={dtcLookup} />
        )}

        {showEmpty && (
          <p className="text-center text-gray-400 text-sm mt-8">
            Upload a VSR file to get started
          </p>
        )}

      </div>
    </div>
  );
}
