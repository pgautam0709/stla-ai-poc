import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DiagnosticProvider } from './context/DiagnosticContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiagnosticProvider>
      <App />
    </DiagnosticProvider>
  </React.StrictMode>
);
