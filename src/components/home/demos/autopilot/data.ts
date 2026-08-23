import type { Lang } from '../../../../lib/i18n';

/** Kanban columns behind the Tasks tab. */
export type Priority = 'high' | 'medium' | 'low';

export type TaskCard = {
  goal?: string;
  title: string;
  desc?: string;
  priority: Priority;
  dueDays?: number;
  review?: string;
};

export type TaskColumn = { label: string; color: string; cards: TaskCard[] };

export const PRIORITY_CLASS: Record<Priority, string> = {
  high: 'text-red-400',
  medium: 'text-blue-400',
  low: 'text-slate-400',
};

/** Dates are stored as offsets from today so the board never looks stale. */
export function dueDate(offsetDays: number, lang: Lang) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const p = (n: number) => String(n).padStart(2, '0');
  return {
    text:
      lang === 'de'
        ? `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`
        : `${p(d.getMonth() + 1)}/${p(d.getDate())}/${d.getFullYear()}`,
    overdue: offsetDays < 0,
  };
}

const TEXT = {
  en: {
    priority: { high: 'High', medium: 'Medium', low: 'Low' },
    /** {name} is the reviewer. */
    review: 'Review {name}',
    addCard: 'Add card',
    tabs: { goals: 'Goals', tasks: 'Tasks' },
    /** {tab} is the lowercase tab name. */
    searchPlaceholder: 'Search {tab}...',
    view: { goals: 'Grid', tasks: 'Kanban' },
    newItem: { goals: 'New Goal', tasks: 'New Task' },
    goals: {
      eu: 'EU market expansion',
      revenue: 'Q3 revenue push',
      partners: 'Partner program launch',
      soc2: 'Compliance: SOC 2 audit',
      website: 'Website relaunch',
    },
    columns: {
      backlog: 'Backlog',
      todo: 'To do',
      inProgress: 'In progress',
      completed: 'Completed',
    },
    cards: {
      paris: {
        title: 'Scope office options in Paris',
        desc: 'Shortlist three districts and pull rent comparables for each.',
      },
      onboarding: {
        title: 'Onboarding plan for the new account manager',
        desc: 'First-week schedule, systems access and a 30-day ramp.',
      },
      northwindAgreement: {
        title: 'Chase Northwind on the master agreement',
        desc: 'Legal replied two days ago — get the countersigned copy back.',
      },
      munichLease: {
        title: 'Review the Munich office lease',
        desc: 'Square metres and the rent ladder — the broker wants an answer in two days.',
      },
      partnerSync: { title: 'Prepare the weekly partner sync agenda', desc: undefined },
      northwindPricing: {
        title: 'Finalize the Northwind pricing proposal',
        desc: 'Rebuild the tiers around the new usage caps and sign off the discount floor.',
      },
      partnershipDeck: {
        title: 'Partnership deck — final draft',
        desc: 'Ten slides, updated traction numbers and the reseller pricing grid.',
      },
      complianceFilings: {
        title: 'Q2 compliance filings',
        desc: 'Collect access-review evidence and close the two open auditor notes.',
      },
      relaunchBrief: {
        title: 'Website relaunch brief',
        desc: 'Positioning, sitemap and the copy deck for the new landing pages.',
      },
      pipelineNumbers: { title: 'Collect Q2 pipeline numbers', desc: undefined },
    },
  },
  de: {
    priority: { high: 'Hoch', medium: 'Mittel', low: 'Niedrig' },
    review: 'Review {name}',
    addCard: 'Karte hinzufügen',
    tabs: { goals: 'Ziele', tasks: 'Aufgaben' },
    searchPlaceholder: '{tab} durchsuchen …',
    view: { goals: 'Raster', tasks: 'Kanban' },
    newItem: { goals: 'Neues Ziel', tasks: 'Neue Aufgabe' },
    goals: {
      eu: 'Expansion in der EU',
      revenue: 'Umsatzschub Q3',
      partners: 'Start des Partnerprogramms',
      soc2: 'Compliance: SOC-2-Audit',
      website: 'Website-Relaunch',
    },
    columns: {
      backlog: 'Backlog',
      todo: 'Offen',
      inProgress: 'In Arbeit',
      completed: 'Erledigt',
    },
    cards: {
      paris: {
        title: 'Bürooptionen in Paris prüfen',
        desc: 'Drei Viertel in die engere Wahl nehmen und je Vergleichsmieten zusammenstellen.',
      },
      onboarding: {
        title: 'Onboarding-Plan für die neue Kundenbetreuung',
        desc: 'Ablauf der ersten Woche, Systemzugänge und eine 30-Tage-Einarbeitung.',
      },
      northwindAgreement: {
        title: 'Bei Northwind zum Rahmenvertrag nachfassen',
        desc: 'Die Rechtsabteilung hat vor zwei Tagen geantwortet — gegengezeichnetes Exemplar zurückholen.',
      },
      munichLease: {
        title: 'Mietvertrag für das Münchner Büro prüfen',
        desc: 'Quadratmeter und Mietstaffel — der Makler will in zwei Tagen eine Antwort.',
      },
      partnerSync: { title: 'Agenda für das wöchentliche Partner-Sync vorbereiten', desc: undefined },
      northwindPricing: {
        title: 'Preisangebot für Northwind finalisieren',
        desc: 'Die Stufen an den neuen Nutzungsgrenzen ausrichten und die Rabattuntergrenze freigeben.',
      },
      partnershipDeck: {
        title: 'Partnerschafts-Deck — finaler Entwurf',
        desc: 'Zehn Folien, aktualisierte Traction-Zahlen und die Reseller-Preistabelle.',
      },
      complianceFilings: {
        title: 'Compliance-Meldungen Q2',
        desc: 'Nachweise der Zugriffsprüfung sammeln und die zwei offenen Auditor-Hinweise schließen.',
      },
      relaunchBrief: {
        title: 'Briefing für den Website-Relaunch',
        desc: 'Positionierung, Sitemap und das Text-Deck für die neuen Landingpages.',
      },
      pipelineNumbers: { title: 'Pipeline-Zahlen für Q2 zusammentragen', desc: undefined },
    },
  },
} as const;

export function autopilotText(lang: Lang) {
  return TEXT[lang];
}

export function taskColumns(lang: Lang): TaskColumn[] {
  const x = TEXT[lang];
  const c = x.cards;
  return [
    {
      label: x.columns.backlog,
      color: '#71717a',
      cards: [
        { goal: x.goals.eu, ...c.paris, priority: 'low' },
        { ...c.onboarding, priority: 'low' },
      ],
    },
    {
      label: x.columns.todo,
      color: '#71717a',
      cards: [
        { goal: x.goals.revenue, ...c.northwindAgreement, priority: 'high', dueDays: -1 },
        { goal: x.goals.eu, ...c.munichLease, priority: 'high', dueDays: 2 },
        { ...c.partnerSync, priority: 'medium', dueDays: 0 },
      ],
    },
    {
      label: x.columns.inProgress,
      color: '#60a5fa',
      cards: [
        { goal: x.goals.revenue, ...c.northwindPricing, priority: 'high', dueDays: 0 },
        {
          goal: x.goals.partners,
          ...c.partnershipDeck,
          priority: 'high',
          dueDays: -3,
          review: 'Alex Morgan',
        },
        { goal: x.goals.soc2, ...c.complianceFilings, priority: 'medium', dueDays: 6 },
      ],
    },
    {
      label: x.columns.completed,
      color: '#10b981',
      cards: [
        { goal: x.goals.website, ...c.relaunchBrief, priority: 'medium', dueDays: -1 },
        { goal: x.goals.revenue, ...c.pipelineNumbers, priority: 'medium', dueDays: -3 },
      ],
    },
  ];
}
