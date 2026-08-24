import { Layers, Search, Waypoints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Lang } from '../../../lib/i18n';

/**
 * Script for the Neuron chat demo.
 *
 * The whole sequence is time-driven: one clock starts when the user "sends" the
 * question, and every step, thought and character of the answer is keyed off
 * milliseconds elapsed. Nothing is chained off the previous step finishing, so
 * steps can legitimately overlap — which is what makes it look like real
 * concurrent work rather than a queue.
 *
 * Demo fixture copy lives here rather than in src/copy: it is content of the
 * mock, not of the site, and keeping it beside the timings it drives is what
 * makes the two readable together. The German answer is a different length, so
 * every timing derived from it is computed per language.
 */

export type Priority = 'high' | 'medium';

export type DemoTask = {
  title: string;
  initials: string;
  dueDays: number;
  status: string;
  priority: Priority;
};

export type Step = {
  Icon: LucideIcon;
  /** ms at which the step appears. */
  at: number;
  /** ms at which it flips to its completed label. */
  doneAt: number;
  running: string;
  past: string;
  /** Plural variants, used once a step has fired more than once. */
  runningMany?: string;
  pastMany?: string;
  /** Extra times this same step fires, bumping the {n} counter. */
  repeatsAt?: number[];
};

/* --- timings that do not depend on the language, all in ms --- */

/** When the answer starts typing out. */
export const ANSWER_START = 7300;
/** Typing speed of the answer. */
export const MS_PER_ANSWER_CHAR = 4;
/** How long the finished state is held before it resets. */
export const DONE_HOLD = 5000;
/** Collapse animation before returning to idle. */
export const CLEAR_MS = 700;
/** Per-character speed of the question being typed into the composer. */
export const TYPE_INTERVAL = 30;
/** Beat between the question finishing and the send button firing. */
export const PAUSE_BEFORE_SEND = 400;
/** Clock resolution while running. */
export const TICK_MS = 33;
/** Due date of the goal the tasks hang off. */
export const GOAL_DUE_DAYS = 30;

export const PRIORITY_CLASS: Record<Priority, string> = {
  high: 'text-red-600',
  medium: 'text-blue-600',
};

const TEXT = {
  en: {
    question: "What's left before we can hire in Munich?",
    answer:
      'Three things, and the lead comes first — before the lease starts costing you. Raj takes it, Emma the payroll, the postings stay with you.',
    priority: { high: 'High', medium: 'Medium' } as Record<Priority, string>,
    tasks: [
      { title: 'Open the engineering lead role', initials: 'RP', dueDays: 8, status: 'To do', priority: 'high' },
      { title: 'Confirm the DE/AT payroll provider', initials: 'EC', dueDays: 12, status: 'To do', priority: 'medium' },
      { title: 'Post the two senior engineer roles', initials: 'AM', dueDays: 22, status: 'To do', priority: 'medium' },
    ] as DemoTask[],
    steps: {
      searching: 'Searching your workspace',
      searched: 'Searched your workspace',
      lookingUp: 'Looking up knowledge',
      lookedUp: 'Looked up knowledge',
      readingGoal: 'Reading a goal',
      readGoal: 'Read a goal',
      creatingTask: 'Creating a task',
      createdTask: 'Created a task',
      creatingTasks: 'Creating {n} tasks',
      createdTasks: 'Created {n} tasks',
    },
    thoughts: [
      'The hiring goal has nothing on it yet',
      'Let me see what the team wrote about Munich',
      'The note is explicit: the lead goes before the lease',
    ],
    goal: {
      title: 'Hiring: senior engineers',
      tag: 'Expansion',
      summary: 'One lead and two senior engineers for Munich.',
      status: 'Not started',
      priority: 'High',
    },
    ui: {
      thinking: 'thinking...',
      writing: 'writing the answer...',
      /** {n} is the number of seconds. */
      thoughtFor: 'Thought for {n}s',
      composerPlaceholder: 'Ask Neuroneus',
      think: 'Think',
      addAttachment: 'Add attachment',
    },
  },
  de: {
    question: 'Was fehlt noch, bevor wir in München einstellen können?',
    answer:
      'Drei Dinge, und die Leitung zuerst — bevor der Mietvertrag Geld kostet. Raj übernimmt sie, Emma die Lohnabrechnung, die Ausschreibungen bleiben bei Ihnen.',
    priority: { high: 'Hoch', medium: 'Mittel' } as Record<Priority, string>,
    tasks: [
      { title: 'Stelle für die Engineering-Leitung ausschreiben', initials: 'RP', dueDays: 8, status: 'Offen', priority: 'high' },
      { title: 'Lohnabrechnungs-Dienstleister DE/AT bestätigen', initials: 'EC', dueDays: 12, status: 'Offen', priority: 'medium' },
      { title: 'Die zwei Senior-Engineer-Stellen ausschreiben', initials: 'AM', dueDays: 22, status: 'Offen', priority: 'medium' },
    ] as DemoTask[],
    steps: {
      searching: 'Workspace wird durchsucht',
      searched: 'Workspace durchsucht',
      lookingUp: 'Wissen wird nachgeschlagen',
      lookedUp: 'Wissen nachgeschlagen',
      readingGoal: 'Ziel wird gelesen',
      readGoal: 'Ziel gelesen',
      creatingTask: 'Aufgabe wird angelegt',
      createdTask: 'Aufgabe angelegt',
      creatingTasks: '{n} Aufgaben werden angelegt',
      createdTasks: '{n} Aufgaben angelegt',
    },
    thoughts: [
      'Am Einstellungsziel hängt noch nichts',
      'Mal sehen, was das Team zu München notiert hat',
      'Die Notiz ist eindeutig: die Leitung kommt vor dem Mietvertrag',
    ],
    goal: {
      title: 'Einstellung: Senior Engineers',
      tag: 'Expansion',
      summary: 'Eine Leitung und zwei Senior Engineers für München.',
      status: 'Nicht begonnen',
      priority: 'Hoch',
    },
    ui: {
      thinking: 'denkt nach …',
      writing: 'schreibt die Antwort …',
      thoughtFor: '{n} s nachgedacht',
      composerPlaceholder: 'Neuroneus fragen',
      think: 'Denken',
      addAttachment: 'Anhang hinzufügen',
    },
  },
} as const;

/** The whole localized script, plus the timings derived from its answer. */
export function chatScript(lang: Lang) {
  const x = TEXT[lang];

  const steps: Step[] = [
    { Icon: Search, at: 2700, doneAt: 3800, running: x.steps.searching, past: x.steps.searched },
    { Icon: Waypoints, at: 2900, doneAt: 4100, running: x.steps.lookingUp, past: x.steps.lookedUp },
    { Icon: Layers, at: 3100, doneAt: 4300, running: x.steps.readingGoal, past: x.steps.readGoal },
    {
      Icon: Layers,
      at: 5300,
      doneAt: 7000,
      running: x.steps.creatingTask,
      past: x.steps.createdTask,
      runningMany: x.steps.creatingTasks,
      pastMany: x.steps.createdTasks,
      repeatsAt: [6000, 6700],
    },
  ];

  /** Status line shown while thinking, swapped on a timeline of its own. */
  const thoughts = [
    { at: 1000, until: 1900, text: x.thoughts[0] },
    { at: 1900, until: 2700, text: x.thoughts[1] },
    { at: 4400, until: 5300, text: x.thoughts[2] },
  ];

  const answerEnd = ANSWER_START + x.answer.length * MS_PER_ANSWER_CHAR;
  /* Goal card lands shortly after the answer finishes, which is also when the
     run ends — so the card is the last thing to appear. */
  const goalCardAt = answerEnd + 400;

  return {
    question: x.question,
    answer: x.answer,
    tasks: x.tasks,
    priorityLabel: x.priority,
    goal: x.goal,
    ui: x.ui,
    steps,
    thoughts,
    answerEnd,
    goalCardAt,
    runDuration: goalCardAt,
  };
}

/** Due date offset from today, in the reader's own date format. */
export const formatDueDate = (offsetDays: number, lang: Lang) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const p = (n: number) => String(n).padStart(2, '0');
  return lang === 'de'
    ? `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`
    : `${p(d.getMonth() + 1)}/${p(d.getDate())}/${d.getFullYear()}`;
};
