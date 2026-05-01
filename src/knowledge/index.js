import { BASE_KNOWLEDGE } from './base.js';

// Vite auto-imports every JS file written to src/knowledge/auto/ —
// the processor writes here when a new VF doc is dropped in /public.
const autoModules = import.meta.glob('./auto/*.js', { eager: true });
const AUTO_KNOWLEDGE = Object.values(autoModules)
  .map(m => m.default ?? '')
  .filter(Boolean)
  .join('\n\n');

export const VEHICLE_FUNCTION_KNOWLEDGE = AUTO_KNOWLEDGE
  ? `${BASE_KNOWLEDGE}\n\n${AUTO_KNOWLEDGE}`
  : BASE_KNOWLEDGE;
