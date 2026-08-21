import { cn } from '../../../../lib/utils';
import type { Tab } from './useTabCycle';

const TAB_BASE =
  'relative z-10 flex h-9 cursor-pointer items-center justify-center rounded-[6px] px-3 text-sm font-medium transition-colors duration-200 ease-in-out';
const TAB_ON = 'text-[#1F1F1E]';
const TAB_OFF = 'text-[#8C8C8C] hover:text-[#FAFAFA]';

/**
 * Toolbar above the board. The white pill slides between the two halves on
 * `left` rather than transform, matching the deployed build; everything else
 * here (search placeholder, view name, primary button) just relabels per tab.
 */
export function Toolbar({ tab, onSelect }: { tab: Tab; onSelect: (t: Tab) => void }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="relative grid h-9 shrink-0 grid-cols-2 overflow-hidden rounded-[6px] border border-[#3D3D3B] bg-[#2E2E2E]">
        <div className="pointer-events-none absolute top-0 h-full w-1/2 rounded-[6px] bg-[#FAFAFA] transition-[left] duration-200 ease-in-out" style={{ left: tab === 'goals' ? '0%' : '50%' }} />
        <button type="button" onClick={() => onSelect('goals')} className={cn(TAB_BASE, tab === 'goals' ? TAB_ON : TAB_OFF)}>Goals</button>
        <button type="button" onClick={() => onSelect('tasks')} className={cn(TAB_BASE, tab === 'tasks' ? TAB_ON : TAB_OFF)}>Tasks</button>
      </div>
      <div className="relative flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#8C8C8C]">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <div className="flex h-9 w-full cursor-text items-center rounded-[6px] border border-[#3D3D3D] bg-[#1F1F1E] pl-10 pr-3 text-sm text-[#8C8C8C] transition-colors hover:border-[#8C8C8C]/40">{`Search ${tab}...`}</div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="relative">
          <span className="grid h-9 cursor-pointer items-center rounded-[6px] bg-[#2E2E2E] pl-3 pr-8 text-sm text-white transition-colors hover:bg-[#3D3D3D]">
            <span aria-hidden="true" className="invisible col-start-1 row-start-1">Kanban</span>
            <span className="col-start-1 row-start-1">{tab === 'goals' ? 'Grid' : 'Kanban'}</span>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white opacity-60">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <span className="group relative inline-flex h-[34px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[6px] bg-white px-4 shadow-sm">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "0px", transitionDelay: "0.304429s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "0px", transitionDelay: "0.171759s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "0px", transitionDelay: "0.218698s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "0px", transitionDelay: "0.13738s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "0px", transitionDelay: "0.419333s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "0px", transitionDelay: "0.463325s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "0px", transitionDelay: "0.362174s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "0px", transitionDelay: "0.0706466s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "0px", transitionDelay: "0.488658s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "0px", transitionDelay: "0.128985s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "0px", transitionDelay: "0.0679049s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "0px", transitionDelay: "0.140168s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "0px", transitionDelay: "0.278339s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "0px", transitionDelay: "0.149611s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "0px", transitionDelay: "0.40284s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "0px", transitionDelay: "0.332846s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "8px", transitionDelay: "0.018244s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "8px", transitionDelay: "0.354471s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "8px", transitionDelay: "0.44037s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "8px", transitionDelay: "0.323388s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "8px", transitionDelay: "0.488612s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "8px", transitionDelay: "0.245298s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "8px", transitionDelay: "0.0564226s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "8px", transitionDelay: "0.0619916s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "8px", transitionDelay: "0.126585s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "8px", transitionDelay: "0.359134s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "8px", transitionDelay: "0.163927s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "8px", transitionDelay: "0.364684s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "8px", transitionDelay: "0.0355824s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "8px", transitionDelay: "0.466439s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "8px", transitionDelay: "0.273084s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "8px", transitionDelay: "0.047891s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "16px", transitionDelay: "0.249018s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "16px", transitionDelay: "0.496969s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "16px", transitionDelay: "0.20402s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "16px", transitionDelay: "0.0475116s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "16px", transitionDelay: "0.202446s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "16px", transitionDelay: "0.148753s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "16px", transitionDelay: "0.466223s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "16px", transitionDelay: "0.0268561s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "16px", transitionDelay: "0.198225s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "16px", transitionDelay: "0.182781s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "16px", transitionDelay: "0.149278s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "16px", transitionDelay: "0.0709313s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "16px", transitionDelay: "0.416148s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "16px", transitionDelay: "0.329444s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "16px", transitionDelay: "0.342525s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "16px", transitionDelay: "0.363133s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "24px", transitionDelay: "0.385374s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "24px", transitionDelay: "0.0812879s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "24px", transitionDelay: "0.47852s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "24px", transitionDelay: "0.0516231s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "24px", transitionDelay: "0.468352s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "24px", transitionDelay: "0.0796093s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "24px", transitionDelay: "0.230674s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "24px", transitionDelay: "0.433172s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "24px", transitionDelay: "0.400978s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "24px", transitionDelay: "0.486352s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "24px", transitionDelay: "0.215636s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "24px", transitionDelay: "0.00332987s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "24px", transitionDelay: "0.21324s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "24px", transitionDelay: "0.400323s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "24px", transitionDelay: "0.207418s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "24px", transitionDelay: "0.442253s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "32px", transitionDelay: "0.165017s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "32px", transitionDelay: "0.276076s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "32px", transitionDelay: "0.458484s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "32px", transitionDelay: "0.348509s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "32px", transitionDelay: "0.311148s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "32px", transitionDelay: "0.408513s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "32px", transitionDelay: "0.141161s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "32px", transitionDelay: "0.190891s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "32px", transitionDelay: "0.0732161s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "32px", transitionDelay: "0.193629s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "32px", transitionDelay: "0.11268s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "32px", transitionDelay: "0.014124s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "32px", transitionDelay: "0.0341697s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "32px", transitionDelay: "0.418906s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "32px", transitionDelay: "0.297335s" }} />
            <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "32px", transitionDelay: "0.0352664s" }} />
          </span>
          <span className="relative z-10 font-orbitron text-sm font-semibold uppercase leading-none tracking-wider text-zinc-900 transition-colors delay-150 duration-300 group-hover:text-white">{tab === 'goals' ? 'New Goal' : 'New Task'}</span>
        </span>
      </div>
    </div>
  );
}
