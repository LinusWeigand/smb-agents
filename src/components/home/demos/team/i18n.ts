import type { Lang } from '../../../../lib/i18n';

/**
 * German for the Team Overview fixture.
 *
 * The graph data in ./data.ts keeps its English strings: they double as stable
 * ids (edges, lookups and React keys are built from titles), so translating in
 * place would mean rewriting every reference. Instead the English string is the
 * key and this map is consulted at render time. An unmapped string falls
 * through unchanged, so a gap shows up as English text rather than a crash.
 */
const DE: Record<string, string> = {
  // --- goal and task titles ---
  'Q3 revenue push': 'Umsatzschub Q3',
  'EU market expansion': 'Expansion in der EU',
  'Hiring: senior engineers': 'Einstellung: Senior Engineers',
  'Website relaunch': 'Website-Relaunch',
  'Compliance: SOC 2 audit': 'Compliance: SOC-2-Audit',
  'Data platform migration': 'Migration der Datenplattform',
  'Chase Northwind on the master agreement': 'Bei Northwind zum Rahmenvertrag nachfassen',
  'Collect SOC 2 evidence — access logs': 'SOC-2-Nachweise sammeln — Zugriffsprotokolle',
  'Collect the tier feedback from sales': 'Feedback des Vertriebs zu den Stufen einholen',
  'Countersign the Northwind master agreement': 'Rahmenvertrag mit Northwind gegenzeichnen',
  'Debrief the platform candidates': 'Nachbesprechung der Plattform-Kandidaten',
  'Draft the Q3 revenue forecast': 'Umsatzprognose für Q3 entwerfen',
  'Finalize the Northwind pricing proposal': 'Preisangebot für Northwind finalisieren',
  'Fix the metering double-count under retry': 'Doppelzählung der Messung bei Wiederholungen beheben',
  'Partnership deck — final draft': 'Partnerschafts-Deck — finaler Entwurf',
  'Plan the data platform cutover': 'Umstellung der Datenplattform planen',
  'Review the Munich office lease': 'Mietvertrag für das Münchner Büro prüfen',
  'Rewrite the pricing page copy': 'Texte der Preisseite neu schreiben',
  'Scope office options in Paris': 'Bürooptionen in Paris prüfen',
  'Sign-off: Q2 financial summary': 'Freigabe: Finanzübersicht Q2',
  'Website relaunch brief': 'Briefing für den Website-Relaunch',

  // --- goal descriptions ---
  'Close Northwind and Ardent and lift recurring revenue 30%.':
    'Northwind und Ardent abschließen und den wiederkehrenden Umsatz um 30 % steigern.',
  'Evidence collection and the auditor walkthrough for the Type II report.':
    'Nachweise sammeln und der Auditor-Walkthrough für den Type-II-Bericht.',
  'New positioning, new site — live before the revenue push needs landing pages.':
    'Neue Positionierung, neue Website — live, bevor der Umsatzschub Landingpages braucht.',
  'One warehouse instead of four pipelines — the metering the usage caps are billed on.':
    'Ein Warehouse statt vier Pipelines — die Messung, über die die Nutzungsgrenzen abgerechnet werden.',
  'Open the first EU office: legal entity, lease and the local hiring pipeline.':
    'Das erste EU-Büro eröffnen: Gesellschaft, Mietvertrag und die lokale Recruiting-Pipeline.',
  'Three senior hires for the platform team before the January roadmap starts.':
    'Drei Senior-Einstellungen für das Plattform-Team, bevor die Januar-Roadmap startet.',

  // --- what each person is working on ---
  'Compliance paperwork, then back to the relaunch.':
    'Compliance-Papierkram, danach zurück zum Relaunch.',
  'Getting Northwind signed before the quarter closes.':
    'Northwind unterschrieben bekommen, bevor das Quartal endet.',
  'Northwind pricing tiers.': 'Preisstufen für Northwind.',
  'SOC 2 evidence for the auditor.': 'SOC-2-Nachweise für den Auditor.',
  'The data platform cutover.': 'Die Umstellung der Datenplattform.',

  // --- categories ---
  Engineering: 'Engineering',
  Legal: 'Recht',
  Marketing: 'Marketing',
  Operations: 'Operations',
  People: 'Personal',
  Sales: 'Vertrieb',

  // --- statuses, in both the cased and the raw form the data uses ---
  Backlog: 'Backlog',
  backlog: 'Backlog',
  'Not started': 'Nicht begonnen',
  'not started': 'nicht begonnen',
  'In progress': 'In Arbeit',
  'in progress': 'in Arbeit',
  'To do': 'Offen',
  'to do': 'offen',
  Completed: 'Erledigt',
  completed: 'erledigt',

  // --- priorities ---
  High: 'Hoch',
  high: 'hoch',
  Medium: 'Mittel',
  medium: 'mittel',
  Low: 'Niedrig',
  low: 'niedrig',
};

const UI_EN = {
  kind: { member: 'Member', goal: 'Goal', task: 'Task' },
  groups: { member: 'Members', goal: 'Goals', task: 'Tasks' },
  worksWith: 'Works with',
  /** {n} is the count. */
  sharedGoal: '{n} shared goal',
  sharedGoals: '{n} shared goals',
  sharesNothing: 'Shares no goals with anyone.',
  /** {kind} is the lowercase node kind. */
  open: 'Open {kind}',
  noConnections: 'No connections.',
  /** {done} and {total} are counts. */
  tasksDone: '{done} of {total} tasks done',
  overdueCount: '{n} overdue',
  overdue: 'Overdue',
  /** {p} is the priority label. */
  priority: '{p} priority',
  close: 'Close panel',
  table: {
    member: 'Member',
    activeGoals: 'Active Goals',
    goals: 'Goals',
    tasks: 'Tasks',
    overdue: 'Overdue',
    /** {n} is the number of goals not listed. */
    more: '+{n} more',
  },
  workingOn: 'Working on',
  tabs: { goals: 'Goals', tasks: 'Tasks' },
  /** {done}, {total} and {pct} are numbers. */
  progress: '{done}/{total} tasks · {pct}%',
  hideSidebar: 'Hide sidebar',
  overview: 'Overview',
  channels: 'Channels',
  directMessages: 'Direct Messages',
  viewList: 'List',
  viewMap: 'Map',
};

export type TeamUi = typeof UI_EN;

const UI_DE: TeamUi = {
  kind: { member: 'Person', goal: 'Ziel', task: 'Aufgabe' },
  groups: { member: 'Personen', goal: 'Ziele', task: 'Aufgaben' },
  worksWith: 'Arbeitet zusammen mit',
  sharedGoal: '{n} gemeinsames Ziel',
  sharedGoals: '{n} gemeinsame Ziele',
  sharesNothing: 'Teilt mit niemandem ein Ziel.',
  open: '{kind} öffnen',
  noConnections: 'Keine Verbindungen.',
  tasksDone: '{done} von {total} Aufgaben erledigt',
  overdueCount: '{n} überfällig',
  overdue: 'Überfällig',
  priority: 'Priorität {p}',
  close: 'Panel schließen',
  table: {
    member: 'Person',
    activeGoals: 'Aktive Ziele',
    goals: 'Ziele',
    tasks: 'Aufgaben',
    overdue: 'Überfällig',
    more: '+{n} weitere',
  },
  workingOn: 'Arbeitet an',
  tabs: { goals: 'Ziele', tasks: 'Aufgaben' },
  progress: '{done}/{total} Aufgaben · {pct} %',
  hideSidebar: 'Seitenleiste ausblenden',
  overview: 'Überblick',
  channels: 'Kanäle',
  directMessages: 'Direktnachrichten',
  viewList: 'Liste',
  viewMap: 'Karte',
};

/** Translate one fixture string; unmapped strings pass through. */
export const trTeam = (value: string, lang: Lang) =>
  lang === 'de' ? (DE[value] ?? value) : value;

export const teamUi = (lang: Lang): TeamUi => (lang === 'de' ? UI_DE : UI_EN);

/** Date offset from today, in the reader's own format. */
export const formatDay = (offsetDays: number, lang: Lang) => {
  const dt = new Date();
  dt.setDate(dt.getDate() + offsetDays);
  const p = (n: number) => String(n).padStart(2, '0');
  return lang === 'de'
    ? `${p(dt.getDate())}.${p(dt.getMonth() + 1)}.${dt.getFullYear()}`
    : `${p(dt.getMonth() + 1)}/${p(dt.getDate())}/${dt.getFullYear()}`;
};
