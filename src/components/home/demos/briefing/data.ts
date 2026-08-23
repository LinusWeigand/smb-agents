import type { Lang } from '../../../../lib/i18n';

/**
 * Content of the Daily Briefing mock.
 *
 * The intro is stored as tokens rather than one string because the sentences
 * carry inline task links, goal chips and person mentions, and German puts them
 * in different places. The recovered prerender had flattened them to the end of
 * each paragraph, which is why the English read with gaps in it; rendering from
 * tokens puts every chip back where the sentence needs it.
 */

export type Token =
  | { kind: 'text'; text: string }
  | { kind: 'task'; label: string }
  | { kind: 'goal'; label: string; color: string }
  | { kind: 'person'; initials: string; name: string };

const BLUE = 'rgb(96, 165, 250)';
const GREY = 'rgb(140, 140, 140)';

const t = (text: string): Token => ({ kind: 'text', text });
const task = (label: string): Token => ({ kind: 'task', label });
const goal = (label: string, color = BLUE): Token => ({ kind: 'goal', label, color });
const person = (initials: string, name: string): Token => ({ kind: 'person', initials, name });

const EN = {
  previewAria: 'Daily Briefing preview',
  breadcrumb: 'Daily Briefing',
  readingTime: '5h 12m',
  intro: [
    [
      t("Northwind is the only thing on this week's critical path. "),
      task('Finalize the Northwind pricing proposal'),
      t(' is due today, and nothing else on '),
      goal('Q3 revenue push'),
      t(' can move before those numbers are signed off. '),
      person('SK', 'Sarah Kim'),
      t(' has had the master agreement waiting on your countersignature since yesterday.'),
    ],
    [
      goal('EU market expansion'),
      t(' hangs on one decision: '),
      task('Review the Munich office lease'),
      t(' is due in two days, the broker is on the phone about it this afternoon, and that call is hard to reverse once the lease is countersigned.'),
    ],
    [
      t('You closed '),
      task('Website relaunch brief'),
      t(' yesterday, and '),
      person('DR', 'Daniel Ross'),
      t(' has taken the compliance paperwork off your plate. '),
      goal('Hiring: senior engineers', GREY),
      t(' still has no tasks on it at all — it will not move on its own.'),
    ],
  ] as Token[][],
  waitingHeading: 'Waiting on you',
  /** {name} is the person who asked. */
  askedForReview: '{name} asked for your review',
  deadlineLabel: 'task deadline',
  reviewAction: 'Review',
  waiting: [
    {
      initials: 'SK',
      name: 'Sarah Kim',
      title: 'Countersign the Northwind master agreement',
      overdue: '1 day overdue',
    },
    {
      initials: 'DR',
      name: 'Daniel Ross',
      title: 'Partnership deck — final draft',
      overdue: '3 days overdue',
    },
    {
      initials: 'EC',
      name: 'Emma Clarke',
      title: 'Sign-off: Q2 financial summary',
      overdue: null,
    },
  ],
  preparedHeading: 'Prepared for you',
  actions: { done: 'Done', discuss: 'Discuss', discard: 'Discard' },
  prepared: [
    {
      title: 'Chase Northwind on the master agreement',
      body: 'Three days ago you wanted to do this as soon as legal replied. Legal replied two days ago.',
      withDone: true,
    },
    {
      title: 'Office viewing on Maximilianstraße',
      body: 'The viewing was yesterday at 15:00. Its description says you would check the square metres — nothing has landed on your board since.',
      withDone: false,
    },
  ],
  scheduleHeading: 'The rest of the day',
  schedule: [
    { time: '09:30 – 10:30', title: 'Client meeting: Northwind', gap: 0, dim: false },
    { time: '10:30 – 11:15', title: 'Weekly partner sync', gap: 6, dim: true },
    { time: '13:30', title: 'Call: broker on the Munich office', gap: 50, dim: false },
    { time: '15:00 – 16:30', title: 'Contract call: Ardent', gap: 36, dim: false },
    { time: '17:00 – 17:30', title: 'Onboarding: new account manager', gap: 16, dim: true },
  ],
};

const DE: typeof EN = {
  previewAria: 'Vorschau des täglichen Briefings',
  breadcrumb: 'Tägliches Briefing',
  readingTime: '5 Std. 12 Min.',
  intro: [
    [
      t('Northwind ist diese Woche das Einzige auf dem kritischen Pfad. '),
      task('Preisangebot für Northwind finalisieren'),
      t(' ist heute fällig, und nichts anderes in '),
      goal('Umsatzschub Q3'),
      t(' bewegt sich, bevor diese Zahlen freigegeben sind. Bei '),
      person('SK', 'Sarah Kim'),
      t(' liegt der Rahmenvertrag seit gestern und wartet auf Ihre Gegenzeichnung.'),
    ],
    [
      goal('Expansion in der EU'),
      t(' hängt an einer Entscheidung: '),
      task('Mietvertrag für das Münchner Büro prüfen'),
      t(' ist in zwei Tagen fällig, der Makler ruft heute Nachmittag deswegen an, und dieses Gespräch lässt sich schwer zurückdrehen, sobald der Mietvertrag gegengezeichnet ist.'),
    ],
    [
      t('Sie haben gestern '),
      task('Briefing für den Website-Relaunch'),
      t(' abgeschlossen, und '),
      person('DR', 'Daniel Ross'),
      t(' hat Ihnen den Compliance-Papierkram abgenommen. An '),
      goal('Einstellung: Senior Engineers', GREY),
      t(' hängt weiterhin keine einzige Aufgabe — von allein bewegt sich das nicht.'),
    ],
  ],
  waitingHeading: 'Wartet auf Sie',
  askedForReview: '{name} bittet um Ihr Review',
  deadlineLabel: 'Fällig',
  reviewAction: 'Prüfen',
  waiting: [
    {
      initials: 'SK',
      name: 'Sarah Kim',
      title: 'Rahmenvertrag mit Northwind gegenzeichnen',
      overdue: '1 Tag überfällig',
    },
    {
      initials: 'DR',
      name: 'Daniel Ross',
      title: 'Partnerschafts-Deck — finaler Entwurf',
      overdue: '3 Tage überfällig',
    },
    {
      initials: 'EC',
      name: 'Emma Clarke',
      title: 'Freigabe: Finanzübersicht Q2',
      overdue: null,
    },
  ],
  preparedHeading: 'Für Sie vorbereitet',
  actions: { done: 'Erledigt', discuss: 'Besprechen', discard: 'Verwerfen' },
  prepared: [
    {
      title: 'Bei Northwind zum Rahmenvertrag nachfassen',
      body: 'Vor drei Tagen wollten Sie das erledigen, sobald die Rechtsabteilung antwortet. Sie hat vor zwei Tagen geantwortet.',
      withDone: true,
    },
    {
      title: 'Besichtigung in der Maximilianstraße',
      body: 'Die Besichtigung war gestern um 15:00 Uhr. Laut Beschreibung wollten Sie die Quadratmeter prüfen — seitdem ist nichts auf Ihrem Board gelandet.',
      withDone: false,
    },
  ],
  scheduleHeading: 'Der Rest des Tages',
  schedule: [
    { time: '09:30 – 10:30', title: 'Kundentermin: Northwind', gap: 0, dim: false },
    { time: '10:30 – 11:15', title: 'Wöchentliches Partner-Sync', gap: 6, dim: true },
    { time: '13:30', title: 'Anruf: Makler zum Münchner Büro', gap: 50, dim: false },
    { time: '15:00 – 16:30', title: 'Vertragsgespräch: Ardent', gap: 36, dim: false },
    { time: '17:00 – 17:30', title: 'Onboarding: neue Kundenbetreuung', gap: 16, dim: true },
  ],
};

export const briefingText = (lang: Lang) => (lang === 'de' ? DE : EN);

/**
 * The live component formats the current date, so the mock briefing always
 * reads as "today". The prerendered HTML froze whatever date the build ran on,
 * which is why a snapshot of the page shows a stale weekday.
 */
export const todayLabel = (lang: Lang) =>
  new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
