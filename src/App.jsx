import { useMemo } from 'react';
import { useDiagnostic, ACTIONS } from './context/DiagnosticContext';
import { useVSRProcessor } from './hooks/useVSRProcessor';
import { useCompareProcessor } from './hooks/useCompareProcessor';

import Header from './components/Header';
import UploadSection from './components/Upload';
import VehicleInfoCard from './components/VehicleInfo';
import EcuTable from './components/EcuTable';
import StatusBar from './components/common/StatusBar';

export default function App() {
  const { state, dispatch } = useDiagnostic();
  const { vehicleInfo, ecus, compareData, vsrFileName, compareFileName, loading, error } = state;

  const { processVSR } = useVSRProcessor();
  const { processCompareTable } = useCompareProcessor();

  const handleVSRChange = (e) => processVSR(e.target.files?.[0]);
  const handleCompareChange = (e) => processCompareTable(e.target.files?.[0]);
  const handleDismissError = () => dispatch({ type: ACTIONS.CLEAR_ERROR });

  // Merge VSR ECU list with compare-table lookup (memoised for performance)
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-6">

        <Header />

        <UploadSection
          vsrFileName={vsrFileName}
          compareFileName={compareFileName}
          onVSRChange={handleVSRChange}
          onCompareChange={handleCompareChange}
        />

        <StatusBar loading={loading} error={error} onDismiss={handleDismissError} />

        {vehicleInfo && <VehicleInfoCard info={vehicleInfo} />}

        {mergedEcus.length > 0 && <EcuTable ecus={mergedEcus} />}

        {!vehicleInfo && !loading && (
          <p className="text-center text-gray-400 text-sm mt-16">
            Upload a VSR file to get started
          </p>
        )}

      </div>
    </div>
  );
}
