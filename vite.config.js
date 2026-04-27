import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // xlsx (SheetJS 0.18.x) uses new Function() internally for codepage support.
      // unsafe-eval is required until the library is replaced with a CSP-safe alternative.
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://*.cognitiveservices.azure.com https://*.openai.azure.com;",
    },
  },
});
