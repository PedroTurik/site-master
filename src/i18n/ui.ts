import type { Lang } from './routes';
import uiContent from '../content/ui.json';

// Shared labels (nav, footer, CTAs) — edited through /admin, stored in src/content/ui.json.
export const ui = uiContent;

export type UIKey = keyof (typeof ui)['pt'];
export const useT = (lang: Lang) => (k: UIKey) => ui[lang][k];
