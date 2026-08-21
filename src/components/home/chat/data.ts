import { Layers, Search, Waypoints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Script for the Ora chat demo.
 *
 * The whole sequence is time-driven: one clock starts when the user "sends" the
 * question, and every step, thought and character of the answer is keyed off
 * milliseconds elapsed. Nothing is chained off the previous step finishing, so
 * steps can legitimately overlap — which is what makes it look like real
 * concurrent work rather than a queue.
 */

export const QUESTION = "What's left before we can hire in Munich?";

export const ANSWER =
  'Three things, and the lead comes first — before the lease starts costing you. Raj takes it, Emma the payroll, the postings stay with you.';

export type DemoTask = {
  title: string;
  initials: string;
  dueDays: number;
  status: string;
  priority: 'High' | 'Medium';
};

/** The tasks Ora creates. Dates are offsets so the card never looks stale. */
export const TASKS: DemoTask[] = [
  { title: 'Open the engineering lead role', initials: 'RP', dueDays: 8, status: 'To do', priority: 'High' },
  { title: 'Confirm the DE/AT payroll provider', initials: 'EC', dueDays: 12, status: 'To do', priority: 'Medium' },
  { title: 'Post the two senior engineer roles', initials: 'AM', dueDays: 22, status: 'To do', priority: 'Medium' },
];

/** Due date of the goal the tasks hang off. */
export const GOAL_DUE_DAYS = 30;

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

export const STEPS: Step[] = [
  { Icon: Search, at: 2700, doneAt: 3800, running: 'Searching your workspace', past: 'Searched your workspace' },
  { Icon: Waypoints, at: 2900, doneAt: 4100, running: 'Looking up knowledge', past: 'Looked up knowledge' },
  { Icon: Layers, at: 3100, doneAt: 4300, running: 'Reading a goal', past: 'Read a goal' },
  {
    Icon: Layers,
    at: 5300,
    doneAt: 7000,
    running: 'Creating a task',
    past: 'Created a task',
    runningMany: 'Creating {n} tasks',
    pastMany: 'Created {n} tasks',
    repeatsAt: [6000, 6700],
  },
];

/** Status line shown while thinking, swapped on a timeline of its own. */
export const THOUGHTS = [
  { at: 1000, until: 1900, text: 'The hiring goal has nothing on it yet' },
  { at: 1900, until: 2700, text: 'Let me see what the team wrote about Munich' },
  { at: 4400, until: 5300, text: 'The note is explicit: the lead goes before the lease' },
];

/* --- timings, all in ms --- */

/** When the answer starts typing out. */
export const ANSWER_START = 7300;
/** Typing speed of the answer. */
export const MS_PER_ANSWER_CHAR = 4;
export const ANSWER_END = ANSWER_START + ANSWER.length * MS_PER_ANSWER_CHAR;
/** Goal card lands shortly after the answer finishes, which is also when the
 *  run ends — so the card is the last thing to appear. */
export const GOAL_CARD_AT = ANSWER_END + 400;
export const RUN_DURATION = GOAL_CARD_AT;
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

export const PRIORITY_CLASS: Record<string, string> = {
  High: 'text-red-600',
  Medium: 'text-blue-600',
};

/** MM/DD/YYYY, offset from today. */
export const formatDueDate = (offsetDays: number) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getMonth() + 1)}/${p(d.getDate())}/${d.getFullYear()}`;
};
