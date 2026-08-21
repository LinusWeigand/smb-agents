import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUp, Check, ChevronRight, Plus } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useInView } from '../../../lib/useInView';
import { OrakisMark } from '../../OrakisMark';
import {
  ANSWER, ANSWER_START, CLEAR_MS, DONE_HOLD, GOAL_CARD_AT, GOAL_DUE_DAYS,
  MS_PER_ANSWER_CHAR, PAUSE_BEFORE_SEND, PRIORITY_CLASS, QUESTION, RUN_DURATION,
  STEPS, TASKS, THOUGHTS, TICK_MS, TYPE_INTERVAL, formatDueDate,
} from './data';

/** Collapse/expand wrapper. Animating grid-template-rows lets a block slide to
 *  its natural height without anyone measuring it. */
function Reveal({
  shown, className, children,
}: { shown: boolean; className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        'grid transition-[grid-template-rows] duration-300 ease-out',
        shown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
    >
      <div className={cn('overflow-hidden transition-opacity duration-300', shown ? 'opacity-100' : 'opacity-0')}>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

const StepMarker = ({ done }: { done: boolean }) =>
  done ? (
    <Check className="size-3.5 shrink-0 text-[#0044ff]" strokeWidth={2.4} />
  ) : (
    <span className="size-3.5 shrink-0 animate-spin rounded-full border-[1.5px] border-[#0044ff]/25 border-t-[#0044ff]" />
  );

const Avatar = ({ initials }: { initials: string }) => (
  <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-[8px] font-semibold text-gray-700">
    {initials}
  </span>
);

/** The goal Ora creates, with the three tasks hung off it. */
function GoalCard() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-gray-200">
      <div className="flex flex-col px-4 pt-[11px] pb-2">
        <div className="flex items-center gap-2.5">
          <span className="min-w-0 shrink truncate text-sm font-medium text-gray-900">
            Hiring: senior engineers
          </span>
          <span className="shrink-0 rounded border border-gray-300 px-1.5 py-0.5 text-[11px] leading-none text-gray-600">
            Expansion
          </span>
          <span className="flex flex-1 items-center justify-end">
            <span className="flex items-center -space-x-1">
              <Avatar initials="RP" />
              <Avatar initials="EC" />
              <Avatar initials="AM" />
            </span>
          </span>
        </div>

        <div className="mt-2.5 flex min-w-0 items-center gap-2.5 text-xs text-gray-500">
          <span className="min-w-0 truncate">One lead and two senior engineers for Munich.</span>
          <span className="ml-auto flex shrink-0 items-center gap-2.5">
            <span className="hidden min-w-[76px] font-medium text-[#71717a] sm:block">Not started</span>
            <span className={cn('hidden min-w-[58px] font-medium sm:block', PRIORITY_CLASS.High)}>High</span>
            <span className="min-w-[70px] text-right tabular-nums">{formatDueDate(GOAL_DUE_DAYS)}</span>
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2.5">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full rounded-full bg-gray-500" style={{ width: '0%' }} />
          </div>
          <span className="flex shrink-0 items-center gap-0.5 text-xs leading-none tabular-nums text-gray-500">
            0/3
            <ChevronRight className="h-3 w-3 rotate-90" />
          </span>
        </div>
      </div>

      {TASKS.map((t) => (
        <div key={t.title} className="flex h-[37px] items-center gap-2.5 px-4">
          <span className="size-3.5 shrink-0 rounded-[4px] border border-gray-300" />
          <span className="mr-auto flex min-w-0 items-center gap-2">
            <span className="min-w-0 truncate text-sm text-gray-900">{t.title}</span>
            <Avatar initials={t.initials} />
          </span>
          <span className="hidden min-w-[76px] shrink-0 text-xs font-medium text-[#71717a] sm:block">
            {t.status}
          </span>
          <span className={cn('hidden min-w-[58px] shrink-0 text-xs font-medium sm:block', PRIORITY_CLASS[t.priority])}>
            {t.priority}
          </span>
          <span className="min-w-[70px] shrink-0 text-right text-xs tabular-nums text-gray-500">
            {formatDueDate(t.dueDays)}
          </span>
        </div>
      ))}
    </div>
  );
}

type Phase = 'idle' | 'typing' | 'running' | 'done' | 'clearing';

/**
 * Ora answering a question, on a loop.
 *
 * Phases: idle -> typing (question types into the composer) -> running (one
 * clock drives every step, thought and character of the answer) -> done (held
 * so it can be read) -> clearing (collapses) -> idle.
 *
 * `canStart` lets the parent hold the demo until its entrance animation has
 * finished, so the sequence is never half over before it is in view.
 */
export function OraChatDemo({ canStart = true }: { canStart?: boolean }) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [typed, setTyped] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef(0);
  const { ref, active } = useInView<HTMLDivElement>(0.5);

  // Kick off once visible.
  useEffect(() => {
    if (!(active && canStart && phase === 'idle')) return;
    const t = setTimeout(() => setPhase('typing'), 300);
    return () => clearTimeout(t);
  }, [active, canStart, phase]);

  // Type the question a character at a time, then hit send.
  useEffect(() => {
    if (phase !== 'typing') return;
    if (typed < QUESTION.length) {
      const t = setTimeout(() => setTyped(typed + 1), TYPE_INTERVAL);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPressed(true);
      setPhase('running');
    }, PAUSE_BEFORE_SEND);
    return () => clearTimeout(t);
  }, [phase, typed]);

  // Send button press is a momentary state, independent of the run.
  useEffect(() => {
    if (!pressed) return;
    const t = setTimeout(() => setPressed(false), 460);
    return () => clearTimeout(t);
  }, [pressed]);

  /* One clock for the whole run. Everything downstream reads `elapsed` rather
     than chaining off the previous step, which is why steps overlap. */
  useEffect(() => {
    if (phase !== 'running') return;
    startedAt.current = Date.now();
    setElapsed(0);
    const id = setInterval(() => {
      const ms = Date.now() - startedAt.current;
      if (ms >= RUN_DURATION) {
        setElapsed(RUN_DURATION);
        setPhase('done');
        return;
      }
      setElapsed(ms);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'done') return;
    const t = setTimeout(() => setPhase('clearing'), DONE_HOLD);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'clearing') return;
    const t = setTimeout(() => {
      setTyped(0);
      setElapsed(0);
      setPhase('idle');
    }, CLEAR_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const running = phase === 'running';
  const clearing = phase === 'clearing';
  const sending = running && !pressed;
  const answerChars = Math.max(0, Math.floor((elapsed - ANSWER_START) / MS_PER_ANSWER_CHAR));
  const answerComplete = answerChars >= ANSWER.length;
  const showAnswer = answerChars > 0 && !clearing;
  const showGoalCard = elapsed >= GOAL_CARD_AT && !clearing;
  const thought = THOUGHTS.find((t) => elapsed >= t.at && elapsed < t.until)?.text;
  const statusLabel = elapsed >= ANSWER_START ? 'writing the answer...' : (thought ?? 'thinking...');
  const conversationShown = phase === 'running' || phase === 'done';

  return (
    <div ref={ref} aria-hidden={true} className="flex flex-col">
      <div className="relative h-[540px] sm:h-[480px] overflow-hidden">
        <div className="absolute inset-x-0 top-0 flex flex-col">
          {/* The question, echoed back as a sent message */}
          <Reveal shown={conversationShown}>
            <div className="flex items-center gap-2.5 rounded-[6px] bg-foreground/5 px-3 py-2">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-[9px] font-semibold text-gray-700">
                AM
              </span>
              <p className="min-w-0 truncate text-sm text-gray-900">{QUESTION}</p>
            </div>
          </Reveal>

          {/* Status line: spinning mark + shimmering label + elapsed seconds,
              which cross-fades to "Thought for Ns" once the answer starts. */}
          <Reveal shown={conversationShown} className="mt-3">
            <div className="flex h-5 items-center gap-2.5">
              <div
                className="flex shrink-0"
                style={running && !answerComplete ? { animation: 'spinMark 0.8s linear infinite' } : undefined}
              >
                <OrakisMark size={14} className="text-gray-900" />
              </div>
              <div className="relative h-5 min-w-0 flex-1">
                <div
                  className={cn(
                    'absolute inset-0 flex items-center gap-2.5 transition-opacity duration-300',
                    running && !answerComplete ? 'opacity-100' : 'opacity-0',
                  )}
                >
                  <span
                    className="min-w-0 truncate bg-[linear-gradient(110deg,#9ca3af,35%,#111827,50%,#9ca3af,75%,#9ca3af)] bg-[length:200%_100%] bg-clip-text text-sm text-transparent"
                    style={{ animation: 'shimmer 2s linear infinite reverse' }}
                  >
                    {statusLabel}
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-gray-400">
                    {Math.floor(elapsed / 1000)}s
                  </span>
                </div>
                <span
                  className={cn(
                    'absolute inset-0 flex items-center text-sm text-gray-400 transition-opacity duration-300',
                    answerComplete ? 'opacity-100' : 'opacity-0',
                  )}
                >
                  Thought for {Math.floor(ANSWER_START / 1000)}s
                </span>
              </div>
            </div>
          </Reveal>

          {/* Tool steps. A step with `repeatsAt` fires more than once and
              switches to its plural label, counting up as it goes. */}
          <div className="ml-[3px]">
            {STEPS.map((step, i) => {
              const shown = elapsed >= step.at && !clearing;
              const done = elapsed >= step.doneAt;
              const count = 1 + (step.repeatsAt?.filter((t) => elapsed >= t).length ?? 0);
              const many = count > 1 ? (done ? step.pastMany : step.runningMany) : undefined;
              const [before, after] = (many ?? (done ? step.past : step.running)).split('{n}');
              return (
                <Reveal key={i} shown={shown} className={i === 0 ? 'mt-2' : undefined}>
                  {i > 0 && <div className="ml-[6px] h-2.5 w-px bg-gray-200" />}
                  <div className="flex items-center gap-2">
                    <StepMarker done={done} />
                    <step.Icon
                      className={cn(
                        'size-3.5 shrink-0 transition-colors duration-300',
                        done ? 'text-gray-400' : 'text-gray-700',
                      )}
                    />
                    <span
                      className={cn(
                        'truncate text-sm transition-colors duration-300',
                        done ? 'text-gray-500' : 'text-gray-900',
                      )}
                    >
                      {before}
                      {after !== undefined && (
                        <span
                          key={count}
                          className="inline-block tabular-nums"
                          style={{ animation: 'countTick 220ms cubic-bezier(0.2, 0, 0, 1)' }}
                        >
                          {count}
                        </span>
                      )}
                      {after}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Answer. An invisible full copy reserves the final height so the
              block does not reflow as the visible text types in. */}
          <Reveal shown={showAnswer} className="relative mt-3">
            <p className="invisible text-sm leading-relaxed">{ANSWER}</p>
            <p className="absolute inset-0 text-sm leading-relaxed text-gray-700">
              {answerChars > 0 ? ANSWER.slice(0, answerChars) : ANSWER}
            </p>
          </Reveal>

          <Reveal shown={showGoalCard} className="mt-4">
            <GoalCard />
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[#F7F7F7] to-transparent" />
      </div>

      {/* Composer */}
      <div className="bg-foreground/5 space-y-3 rounded-xl p-3 mt-4">
        <div className="text-sm h-5">
          {phase === 'typing' && typed > 0 ? (
            <span className="text-gray-700">
              {QUESTION.slice(0, typed)}
              <span
                className="ml-px inline-block h-[1.15em] w-px translate-y-[0.2em] bg-gray-700"
                style={typed >= QUESTION.length ? { animation: 'caretBlink 1.06s step-end infinite' } : undefined}
              />
            </span>
          ) : (
            <span className="text-gray-400">Ask Orakis</span>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <button
              type="button"
              tabIndex={-1}
              aria-hidden={true}
              aria-label="Add attachment"
              className="size-7 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Plus className="size-4" />
            </button>
            <span className="inline-flex h-7 items-center rounded-xl bg-[#0044ff]/10 px-2.5 text-sm text-[#0044ff]">
              Think
            </span>
          </div>

          {/* Send button: arrow while idle, stop square while running. */}
          <div
            className={cn(
              'relative size-7 rounded-xl text-white transition-colors',
              pressed ? 'bg-[#0030b3] duration-75' : 'bg-[#0044ff] duration-500',
            )}
            style={pressed ? { animation: 'sendPress 400ms' } : undefined}
          >
            <ArrowUp
              className={cn(
                'absolute inset-0 m-auto size-4 transition-opacity duration-200',
                sending ? 'opacity-0' : 'opacity-100',
              )}
              strokeWidth={3}
            />
            <span
              className={cn(
                'absolute inset-0 m-auto size-2.5 rounded-[3px] bg-current transition-opacity duration-200',
                sending ? 'opacity-100' : 'opacity-0',
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
