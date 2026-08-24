import { useState } from 'react';
import {
  Check, ChevronDown, Clock, Download, MessageSquare, RotateCcw, Trash2,
} from 'lucide-react';
import { briefingText, todayLabel, type Slot, type Token } from './data';
import { useLang } from '../../../../lib/i18n';

const ICON_BTN =
  'flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-[#8C8C8C]/60 transition-colors hover:bg-[#2E2E2E] hover:text-[#FAFAFA]';
const CHIP =
  'inline-flex max-w-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[6px] border border-[#3D3D3D]/50 bg-[#3D3D3D] px-2 py-[0.25em] align-middle text-[0.9em] font-medium leading-none text-[#FAFAFA] transition-colors hover:border-[#676765] hover:bg-[#2E2E2E]';
const ACTION =
  'inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[6px] border border-[#3D3D3D] bg-transparent px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10';
const SECTION_H = 'mb-4 font-sans text-[15px] font-semibold text-[#FAFAFA]';

/** One inline token of the briefing prose. */
function Piece({ token }: { token: Token }) {
  switch (token.kind) {
    case 'text':
      return <>{token.text}</>;
    case 'task':
      return (
        <span className="cursor-pointer text-[#6699ff] hover:underline">{token.label}</span>
      );
    case 'goal':
      return (
        <span className={CHIP}>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-[2px]"
            style={{ background: token.color }}
          />
          <span className="truncate">{token.label}</span>
        </span>
      );
    case 'person':
      return (
        <span className="inline">
          <span className="relative top-[-0.075em] mr-[0.35em] inline-flex h-[1.35em] w-[1.35em] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] align-middle">
            <span className="text-[0.47em] font-semibold leading-none text-[#121212]">
              {token.initials}
            </span>
          </span>
          <span className="cursor-pointer text-[#FAFAFA] hover:underline">{token.name}</span>
        </span>
      );
  }
}

/**
 * One row of the day's schedule. Rows with something behind them expand in
 * place; the rest are inert and say so by offering no chevron.
 */
function ScheduleRow({ slot }: { slot: Slot }) {
  const [open, setOpen] = useState(false);
  const expandable = !!(slot.description || slot.goal || slot.task);

  return (
    <div style={{ marginTop: `${slot.gap}px` }}>
      <button
        type="button"
        onClick={expandable ? () => setOpen((v) => !v) : undefined}
        className={`group flex w-full items-start gap-3 text-left${
          expandable ? '' : ' cursor-default'
        }`}
      >
        <span className="w-[104px] shrink-0 text-[13px] font-medium leading-[22px] tabular-nums text-[#8C8C8C]">
          {slot.time}
        </span>
        <span
          className={`mt-[3px] h-4 w-[3px] shrink-0 rounded-full ${slot.color ?? 'bg-[#3D3D3D]'}`}
        />
        <span
          className={`min-w-0 flex-1 truncate text-[14px] leading-[22px] text-[#FAFAFA]/85 transition-colors${
            expandable ? ' group-hover:text-[#FAFAFA]' : ''
          }`}
        >
          {slot.title}
        </span>
        {/* Reserved whether or not a chevron is drawn, so titles line up. */}
        <span className="w-4 shrink-0 pt-[3px]">
          {expandable && (
            <ChevronDown
              className={`h-4 w-4 text-[#8C8C8C]/50 transition-transform${
                open ? ' rotate-180' : ''
              }`}
            />
          )}
        </span>
      </button>

      {open && (
        <div className="ml-[131px] mt-2 flex flex-col items-start gap-2">
          {slot.description && (
            <p className="text-[14px] leading-relaxed text-[#8C8C8C]">{slot.description}</p>
          )}
          {(slot.goal || slot.task) && (
            <div className="flex max-w-full flex-col items-start gap-1.5 text-[14px]">
              {slot.goal && (
                <span className={CHIP}>
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-[2px]"
                    style={{ background: slot.goal.color }}
                  />
                  <span className="truncate">{slot.goal.label}</span>
                </span>
              )}
              {slot.task && (
                <span className="cursor-pointer text-[#6699ff] hover:underline">{slot.task}</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** The scrolling body of the Daily Briefing window. */
export function BriefingContent() {
  const { lang } = useLang();
  const x = briefingText(lang);

  return (
    <div className="pl-[10px] pr-[18px] pb-6 pt-[58px]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-7 flex items-center justify-between gap-4">
          <p className="font-sans text-[22px] font-semibold text-[#FAFAFA]">{todayLabel(lang)}</p>
          <div className="flex shrink-0 items-center gap-3">
            <span className="flex items-center gap-1.5 text-[11px] text-[#8C8C8C]/40">
              <Clock className="h-3 w-3" />
              {x.readingTime}
            </span>
            <span className={ICON_BTN}>
              <Download className="h-3.5 w-3.5" />
            </span>
            <span className={ICON_BTN}>
              <RotateCcw className="h-3.5 w-3.5" />
            </span>
            <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-[#8C8C8C]/60 transition-colors hover:bg-red-400/10 hover:text-red-400">
              <Trash2 className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {x.intro.map((tokens, i) => (
          <p
            key={i}
            className={`text-[15px] leading-[1.8] text-[#FAFAFA]/80${i > 0 ? ' mt-4' : ''}`}
          >
            {tokens.map((token, j) => (
              <Piece key={j} token={token} />
            ))}
          </p>
        ))}

        <section className="mt-14">
          <h4 className={SECTION_H}>{x.waitingHeading}</h4>
          <div className="flex flex-col">
            {x.waiting.map((row) => (
              <div key={row.title} className="flex items-center gap-3 py-2.5">
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[9px] font-semibold text-[#121212]">
                  {row.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] text-[#FAFAFA]/85">{row.title}</p>
                  <p className="mt-0.5 text-[13px] text-[#8C8C8C]/60">
                    {x.askedForReview.replace('{name}', row.name)}
                  </p>
                </div>
                <span className="flex w-[185px] shrink-0 items-baseline justify-end gap-1.5 text-[13px]">
                  {row.overdue && (
                    <>
                      <span className="text-[#8C8C8C]">{x.deadlineLabel}</span>
                      <span className="font-medium text-red-400">{row.overdue}</span>
                    </>
                  )}
                </span>
                <span className="inline-flex h-8 shrink-0 cursor-pointer items-center rounded-[6px] border border-[#3D3D3D] bg-[#1F1F1E] px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">
                  {x.reviewAction}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h4 className={SECTION_H}>{x.preparedHeading}</h4>
          <div className="flex flex-col gap-3">
            {x.prepared.map((card) => (
              <div key={card.title} className="rounded-xl border border-[#3D3D3D] bg-[#2C2C2B] p-4">
                <h5 className="mb-1 font-sans text-[14px] font-semibold text-[#FAFAFA]">
                  {card.title}
                </h5>
                <p className="text-[14px] leading-relaxed text-[#FAFAFA]/85">{card.body}</p>
                <div className="mt-3.5 flex items-center gap-2">
                  {card.withDone && (
                    <span className={ACTION}>
                      <Check className="h-3.5 w-3.5" />
                      {x.actions.done}
                    </span>
                  )}
                  <span className={ACTION}>
                    <MessageSquare className="h-3.5 w-3.5" />
                    {x.actions.discuss}
                  </span>
                  <span className={ACTION}>
                    <Trash2 className="h-3.5 w-3.5" />
                    {x.actions.discard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h4 className={SECTION_H}>{x.scheduleHeading}</h4>
          <div className="flex flex-col">
            {x.schedule.map((slot) => (
              <ScheduleRow key={slot.title} slot={slot} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
