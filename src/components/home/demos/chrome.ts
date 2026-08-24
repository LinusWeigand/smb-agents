import { useLang } from '../../../lib/i18n';

/**
 * Labels of the mock app shell — the sidebar and breadcrumb that every demo
 * window shares. They are product-UI strings, so they follow the site language
 * along with everything else.
 *
 * The workspace name, the account and the host in the address bar are proper
 * nouns and stay as they are.
 */
const CHROME = {
  en: {
    dashboard: 'Dashboard',
    inbox: 'Inbox',
    goalsTasks: 'Goals & Tasks',
    team: 'Team',
    docs: 'Docs',
    calendar: 'Calendar',
    neuron: 'Neuron',
  },
  de: {
    dashboard: 'Dashboard',
    inbox: 'Posteingang',
    goalsTasks: 'Ziele & Aufgaben',
    team: 'Team',
    docs: 'Dokumente',
    calendar: 'Kalender',
    neuron: 'Neuron',
  },
} as const;

export function useDemoChrome() {
  const { lang } = useLang();
  return CHROME[lang];
}
