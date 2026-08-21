import { useInView } from '../../lib/useInView';
import { ConnectsGraph } from './overview/ConnectsGraph';
import { HarborCanvas } from './overview/HarborCanvas';

/** The chip's centre logo is painted by masking a white block through the
 *  Orakis mark, so it inherits the mark's negative space exactly. */
const ORAKIS_MARK_MASK = "url('/orakis-mark-white.svg')";

/**
 * Overview: the four explainer blocks (your data, connecting the dots, tool
 * integrations, and the "LLM docks at the Orakis harbor" diagram).
 *
 * Recovered from the deployed prerender. The three animated pieces -- the
 * circuit-board card, the force-directed graph and the pixel-art harbour --
 * live in ./overview and are driven by their own in-view flags.
 */
export function Overview() {
  // The circuit dots stay parked until the card is properly on screen, so the
  // staggered delays read from the start rather than mid-cycle.
  const { ref: cpuRef, active: cpuActive } = useInView<HTMLDivElement>(0.3);
  // The graph settles itself once, the first time it is actually seen.
  const { ref: dotsRef, active: dotsActive } = useInView<HTMLDivElement>(0.3);
  return (
    <section>
      <div className="mx-auto w-full max-w-[1190px]">
        <h2 className="mx-auto max-w-2xl font-display text-2xl md:text-4xl font-medium text-gray-900 leading-[1.15] text-center" style={{ letterSpacing: "-0.02em" }}>Overview</h2>
        <div className="mt-[75px] md:mt-[105px] grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-fr">
          <div ref={cpuRef}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-50 border-zinc-200/60 overflow-hidden p-6 flex flex-col min-h-[320px] h-full">
              <h3 className="text-xl font-display font-medium text-gray-900 leading-snug">You already have the data. Let it work for you.</h3>
              <p className="text-sm text-gray-500 mt-2">Your tasks, documents, and conversations already hold the context Orakis needs to help you.</p>
              <div className="relative mt-auto -mx-6 -mb-6 overflow-hidden" style={{ aspectRatio: "585 / 407" }}>
                <div className="absolute left-1/2 top-1/2 flex items-center justify-center" style={{ width: "585px", height: "407px", transform: "translate(-50%, -50%) scale(1)" }}>
                  <div className="flex-none">
                    <div className="relative" style={{ width: "960px", height: "480px" }}>
                      <svg className="text-gray-400 block w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
                        <g stroke="currentColor" fill="none" strokeWidth="0.4" strokeDasharray="100 100" pathLength="100" style={{ strokeDashoffset: cpuActive ? 0 : 100, transition: "stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                          <path strokeDasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30" />
                          <path strokeDasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
                          <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
                          <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
                          <path strokeDasharray="100 100" pathLength="100" d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" />
                          <path d="M 94.8 95 v -36" />
                          <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
                          <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
                        </g>
                        <g mask="url(#cpu-mask-1)">
                          <circle className={`cpu-architecture cpu-line-1${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-blue-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-2)">
                          <circle className={`cpu-architecture cpu-line-2${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-yellow-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-3)">
                          <circle className={`cpu-architecture cpu-line-3${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-pinkish-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-4)">
                          <circle className={`cpu-architecture cpu-line-4${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-white-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-5)">
                          <circle className={`cpu-architecture cpu-line-5${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-green-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-6)">
                          <circle className={`cpu-architecture cpu-line-6${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-orange-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-7)">
                          <circle className={`cpu-architecture cpu-line-7${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-cyan-grad)" />
                        </g>
                        <g mask="url(#cpu-mask-8)">
                          <circle className={`cpu-architecture cpu-line-8${cpuActive ? ' cpu-active' : ''}`} cx="0" cy="0" r="9" fill="url(#cpu-rose-grad)" />
                        </g>
                        <g>
                          <g fill="url(#cpu-connection-gradient)">
                            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
                            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
                            <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
                            <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
                            <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
                            <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
                            <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
                            <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
                          </g>
                          <rect x="85" y="40" width="30" height="20" rx="2" fill="#171717" stroke="#171717" strokeWidth="0.5" />
                        </g>
                        <g aria-hidden="true" pointerEvents="none">
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "10px 20px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="10" cy="20" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "180px 10px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="180" cy="10" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "130px 20px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="130" cy="20" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "170px 80px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="170" cy="80" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "135px 65px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="135" cy="65" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "94.8px 95px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="94.8" cy="95" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "88px 88px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="88" cy="88" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                          <g style={{ opacity: cpuActive ? 1 : 0, transform: cpuActive ? "scale(1)" : "scale(0.7)", transformOrigin: "30px 30px", transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                            <circle cx="30" cy="30" r="1" fill="#18181B" stroke="#9ca3af" strokeWidth="0.1" />
                          </g>
                        </g>
                        <defs>
                          <mask id="cpu-mask-1">
                            <path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-2">
                            <path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-3">
                            <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-4">
                            <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-5">
                            <path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-6">
                            <path d="M 94.8 95 v -36" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-7">
                            <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <mask id="cpu-mask-8">
                            <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeWidth="1.5" stroke="white" />
                          </mask>
                          <radialGradient id="cpu-blue-grad" fx="1">
                            <stop offset="0%" stopColor="#00E8ED" />
                            <stop offset="50%" stopColor="#08F" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-yellow-grad" fx="1">
                            <stop offset="0%" stopColor="#FFD800" />
                            <stop offset="50%" stopColor="#FFD800" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-pinkish-grad" fx="1">
                            <stop offset="0%" stopColor="#830CD1" />
                            <stop offset="50%" stopColor="#FF008B" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-white-grad" fx="1">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="50%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-green-grad" fx="1">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-orange-grad" fx="1">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-cyan-grad" fx="1">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <radialGradient id="cpu-rose-grad" fx="1">
                            <stop offset="0%" stopColor="#f43f5e" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#9ca3af" />
                            <stop offset="60%" stopColor="#6b7280" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute pointer-events-none" style={{ left: "50%", top: "50%", width: "7%", aspectRatio: "1 / 1", transform: "translate(-50%, -50%)", WebkitMaskImage: ORAKIS_MARK_MASK, maskImage: ORAKIS_MARK_MASK, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskSize: "100% 100%", maskSize: "100% 100%" }}>
                        <div style={{ width: "100%", height: "100%", display: "block", backgroundColor: "rgb(255, 255, 255)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={dotsRef}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-50 border-zinc-200/60 overflow-hidden p-6 flex flex-col min-h-[320px] h-full">
              <h3 className="text-xl font-display font-medium text-gray-900 leading-snug">Orakis connects the dots so you don't have to.</h3>
              <p className="text-sm text-gray-500 mt-2">Your data gets stored clean and structured, automatically, ready for your AI agents, and always there when you need it.</p>
              <div className="mt-auto pt-6">
                <ConnectsGraph active={dotsActive} />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-50 border-zinc-200/60 overflow-hidden p-6 flex flex-col min-h-[320px] h-full">
              <h3 className="text-xl font-display font-medium text-gray-900 leading-snug">Integrate your existing tools</h3>
              <p className="text-sm text-gray-500 mt-2">Orakis integrates with the tools your team already uses.</p>
              <div className="relative mt-auto -mx-6 -mb-6 overflow-hidden" style={{ aspectRatio: "585 / 427" }}>
                <div className="absolute left-1/2 top-1/2 flex items-center justify-center" style={{ width: "585px", height: "427px", transform: "translate(-50%, -50%) scale(1)" }}>
                  <div className="flex-none scale-[1.5]">
                    <div className="flex items-center justify-center">
                      <div className="relative grid items-center w-[468px] grid-cols-[88px_1fr_180px]" style={{ height: "200px" }}>
                        <div className="flex flex-col items-center justify-center w-[88px] h-[88px] bg-[#171717] rounded-2xl z-10 row-span-1" style={{ boxShadow: "rgba(23, 23, 23, 0.18) 0px 4px 16px" }}>
                          <span className="text-white font-bold uppercase tracking-widest" style={{ fontFamily: "Orbitron, sans-serif", fontSize: "9px", letterSpacing: "0.18em" }}>Orakis</span>
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 0 50 C 40 50, 60 13.5, 100 13.5" stroke="#9ca3af" strokeWidth="1.25" strokeDasharray="3 2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                          <path d="M 0 50 C 40 50, 60 50, 100 50" stroke="#9ca3af" strokeWidth="1.25" strokeDasharray="3 2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                          <path d="M 0 50 C 40 50, 60 86.5, 100 86.5" stroke="#9ca3af" strokeWidth="1.25" strokeDasharray="3 2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        </svg>
                        <div className="flex flex-col justify-between h-full py-1 items-stretch">
                          <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-[8px] px-4 py-2.5" style={{ boxShadow: "rgba(23, 23, 23, 0.07) 0px 1px 4px" }}>
                            <img src="/images/tools/outlook-logo.webp" alt="Outlook" width="24" height="24" loading="lazy" decoding="async" className="w-6 h-6 object-contain flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>Outlook</span>
                          </div>
                          <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-[8px] px-4 py-2.5" style={{ boxShadow: "rgba(23, 23, 23, 0.07) 0px 1px 4px" }}>
                            <img src="/images/tools/gmail-new.webp" alt="Gmail" width="24" height="24" loading="lazy" decoding="async" className="w-6 h-6 object-contain flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>Gmail</span>
                          </div>
                          <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-[8px] px-4 py-2.5" style={{ boxShadow: "rgba(23, 23, 23, 0.07) 0px 1px 4px" }}>
                            <img src="/images/tools/google-calendar-new.webp" alt="Google Calendar" width="24" height="24" loading="lazy" decoding="async" className="w-6 h-6 object-contain flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>Google Calendar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-50 border-zinc-200/60 overflow-hidden p-6 flex flex-col min-h-[320px] h-full">
              <h3 className="text-xl font-display font-medium text-gray-900 leading-snug">Your LLM docks at the Orakis harbor</h3>
              <p className="text-sm text-gray-500 mt-2">Whichever ship you sail, it docks and gets loaded with context from your Company Brain, container by container.</p>
              <div className="mt-auto pt-6 -mx-6 -mb-6">
                <HarborCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
