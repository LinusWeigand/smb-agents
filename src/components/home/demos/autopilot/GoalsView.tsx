import { useLang, type Lang } from '../../../../lib/i18n';

/**
 * Goals tab: one card per goal.
 *
 * The recovered prerender carried seven hand-copied copies of the same card;
 * this is that markup once, driven by the fixture below. Structure (progress,
 * colours, due dates, initials) is language-independent; only the labels come
 * from the locale table.
 */

type StatusKey = 'inProgress' | 'notStarted' | 'backlog';
type PriorityKey = 'high' | 'medium' | 'low';

type Goal = {
  id: string;
  priority: PriorityKey;
  status: StatusKey;
  /** null when the goal has no tasks yet. */
  progress: { done: number; total: number; percent: number } | null;
  /** [month, day, year]; null when nothing is scheduled. */
  due: [number, number, number] | null;
  avatars: string[];
};

const GOALS: Goal[] = [
  { id: 'revenue', priority: 'high', status: 'inProgress', progress: { done: 5, total: 12, percent: 50 }, due: [10, 17, 2026], avatars: ['AM', 'SK', 'DR'] },
  { id: 'eu', priority: 'high', status: 'inProgress', progress: { done: 7, total: 9, percent: 83 }, due: [9, 2, 2026], avatars: ['AM', 'EC'] },
  { id: 'hiring', priority: 'medium', status: 'notStarted', progress: null, due: null, avatars: ['AM', 'RP'] },
  { id: 'website', priority: 'medium', status: 'inProgress', progress: { done: 9, total: 14, percent: 68 }, due: [8, 18, 2026], avatars: ['DR', 'AM'] },
  { id: 'partners', priority: 'low', status: 'backlog', progress: { done: 2, total: 6, percent: 42 }, due: [8, 11, 2026], avatars: ['DR'] },
  { id: 'soc2', priority: 'medium', status: 'inProgress', progress: { done: 4, total: 10, percent: 45 }, due: [10, 27, 2026], avatars: ['EC', 'DR'] },
  { id: 'platform', priority: 'high', status: 'inProgress', progress: { done: 6, total: 11, percent: 55 }, due: [8, 24, 2026], avatars: ['RP'] },
];

const PRIORITY_CLASS: Record<PriorityKey, string> = {
  high: 'text-red-400',
  medium: 'text-blue-400',
  low: 'text-slate-400',
};

const STATUS_COLOR: Record<StatusKey, string> = {
  inProgress: 'rgb(96, 165, 250)',
  notStarted: 'rgb(113, 113, 122)',
  backlog: 'rgb(113, 113, 122)',
};

const TEXT = {
  en: {
    priority: { high: 'High', medium: 'Medium', low: 'Low' },
    status: { inProgress: 'In progress', notStarted: 'Not started', backlog: 'Backlog' },
    noTasks: 'No tasks',
    /** {done}, {total} and {percent} are substituted. */
    progress: '{done}/{total} tasks · {percent}%',
    goals: {
      revenue: {
        tag: 'Sales',
        title: 'Q3 revenue push',
        desc: 'Close Northwind and Ardent and lift recurring revenue 30% before the quarter ends.',
      },
      eu: {
        tag: 'Operations',
        title: 'EU market expansion',
        desc: 'Open the first EU office: legal entity, lease and the local hiring pipeline.',
      },
      hiring: {
        tag: 'People',
        title: 'Hiring: senior engineers',
        desc: 'Three senior hires for the platform team before the January roadmap starts.',
      },
      website: {
        tag: 'Marketing',
        title: 'Website relaunch',
        desc: 'New positioning, new site — live before the revenue push needs landing pages.',
      },
      partners: {
        tag: 'Partnerships',
        title: 'Partner program launch',
        desc: 'Stand up the reseller tier: deck, pricing and the first five signed partners.',
      },
      soc2: {
        tag: 'Legal',
        title: 'Compliance: SOC 2 audit',
        desc: 'Evidence collection and the auditor walkthrough for the Type II report.',
      },
      platform: {
        tag: 'Engineering',
        title: 'Data platform migration',
        desc: 'One warehouse instead of four pipelines — the metering the usage caps are billed on.',
      },
    },
  },
  de: {
    priority: { high: 'Hoch', medium: 'Mittel', low: 'Niedrig' },
    status: { inProgress: 'In Arbeit', notStarted: 'Nicht begonnen', backlog: 'Backlog' },
    noTasks: 'Keine Aufgaben',
    progress: '{done}/{total} Aufgaben · {percent} %',
    goals: {
      revenue: {
        tag: 'Vertrieb',
        title: 'Umsatzschub Q3',
        desc: 'Northwind und Ardent abschließen und den wiederkehrenden Umsatz vor Quartalsende um 30 % steigern.',
      },
      eu: {
        tag: 'Operations',
        title: 'Expansion in der EU',
        desc: 'Das erste EU-Büro eröffnen: Gesellschaft, Mietvertrag und die lokale Recruiting-Pipeline.',
      },
      hiring: {
        tag: 'Personal',
        title: 'Einstellung: Senior Engineers',
        desc: 'Drei Senior-Einstellungen für das Plattform-Team, bevor die Januar-Roadmap startet.',
      },
      website: {
        tag: 'Marketing',
        title: 'Website-Relaunch',
        desc: 'Neue Positionierung, neue Website — live, bevor der Umsatzschub Landingpages braucht.',
      },
      partners: {
        tag: 'Partnerschaften',
        title: 'Start des Partnerprogramms',
        desc: 'Die Reseller-Stufe aufsetzen: Deck, Preise und die ersten fünf unterschriebenen Partner.',
      },
      soc2: {
        tag: 'Recht',
        title: 'Compliance: SOC-2-Audit',
        desc: 'Nachweise sammeln und der Auditor-Walkthrough für den Type-II-Bericht.',
      },
      platform: {
        tag: 'Engineering',
        title: 'Migration der Datenplattform',
        desc: 'Ein Warehouse statt vier Pipelines — die Messung, über die die Nutzungsgrenzen abgerechnet werden.',
      },
    },
  },
} as const;

const p2 = (n: number) => String(n).padStart(2, '0');
const formatDue = ([m, d, y]: [number, number, number], lang: Lang) =>
  lang === 'de' ? `${p2(d)}.${p2(m)}.${y}` : `${p2(m)}/${p2(d)}/${y}`;

function GoalCard({ goal, lang }: { goal: Goal; lang: Lang }) {
  const x = TEXT[lang];
  const copy = x.goals[goal.id as keyof typeof x.goals];
  const color = STATUS_COLOR[goal.status];
  const percent = goal.progress?.percent ?? 0;

  const progressLabel = goal.progress
    ? x.progress
        .replace('{done}', String(goal.progress.done))
        .replace('{total}', String(goal.progress.total))
        .replace('{percent}', String(goal.progress.percent))
    : x.noTasks;

  return (
    <div className="group relative flex h-[210px] cursor-pointer flex-col overflow-hidden rounded-xl border border-[#3D3D3D] bg-[#2C2C2B] transition-all duration-200 hover:border-[#676765] hover:bg-[#242424]/10">
      <div className="flex items-start justify-between gap-3 px-5 pt-4">
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex h-4 items-center gap-2">
            <span className="rounded border border-[#FAFAFA]/15 px-1.5 py-0.5 text-[11px] leading-none text-[#FAFAFA]/70">
              {copy.tag}
            </span>
            <span className={`text-[11px] font-medium ${PRIORITY_CLASS[goal.priority]}`}>
              {x.priority[goal.priority]}
            </span>
          </div>
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-[#FAFAFA]">
            {copy.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-[#8C8C8C]">{copy.desc}</p>
        </div>
        <span className="-mr-1 -mt-0.5 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-[6px] text-[#8C8C8C] opacity-0 transition-opacity hover:bg-[#242424]/50 hover:text-[#FAFAFA] group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </span>
      </div>
      <div className="mt-auto flex flex-col gap-2 px-5 pb-4 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-medium" style={{ color }}>
            {x.status[goal.status]}
          </span>
          <span className="text-[12px] tabular-nums text-[#8C8C8C]">{progressLabel}</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#3D3D3D]">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${percent}%`, background: color }}
          />
        </div>
        <div className="mt-2 flex h-5 items-center justify-between">
          <div className="flex items-center gap-1.5 text-[12px]">
            {goal.due && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3 shrink-0 text-[#8C8C8C]">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <span className="text-[#8C8C8C]">{formatDue(goal.due, lang)}</span>
              </>
            )}
          </div>
          <div className="flex -space-x-1.5">
            {goal.avatars.map((initials) => (
              <span
                key={initials}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#2C2C2B] bg-[#FAFAFA]"
              >
                <span className="text-[7px] font-semibold leading-none text-[#121212]">
                  {initials}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GoalsView() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4">
      {GOALS.map((g) => (
        <GoalCard key={g.id} goal={g} lang={lang} />
      ))}
    </div>
  );
}
