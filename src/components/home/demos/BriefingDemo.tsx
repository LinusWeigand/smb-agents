import { useId } from 'react';
import { DEMO_HEIGHT, DEMO_WIDTH, useFitScale } from './useFitScale';

/**
 * Daily Briefing panel: what is waiting on you, what Orakis prepared, and the rest of the day.
 *
 * Recovered from the deployed prerender, so the markup and Tailwind classes are
 * the ones the live site actually ships. Purely presentational: this is a mock
 * of the product UI, not the product UI.
 */
/**
 * The live component formats the current date, so the mock briefing always
 * reads as "today". The prerendered HTML froze whatever date the build ran on,
 * which is why a snapshot of the page shows a stale weekday.
 */
const TODAY_LABEL = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});

export function BriefingDemo() {
  const { ref: fitRef, scale: fitScale } = useFitScale();
  const maskId = `orakis-mark-solid-cut-${useId()}`;
  return (
    <div className="lg:flex-1 min-w-0 w-full">
      <div>
        <div className="w-full max-w-5xl mx-auto rounded-xl bg-zinc-800">
          <div className="rounded-xl overflow-hidden bg-zinc-800">
            <svg width="100%" viewBox="0 0 1203 52" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="block" style={{ display: "block" }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-zinc-700" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189C1195.01 1 1199.93 5.92487 1199.93 12V51H1.06738V12Z" className="fill-zinc-800" />
              <circle cx="27" cy="25" r="6" className="fill-red-400" />
              <circle cx="47" cy="25" r="6" className="fill-yellow-400" />
              <circle cx="67" cy="25" r="6" className="fill-green-500" />
              <path d="M268 17C268 13.6863 270.686 11 274 11H928C931.314 11 934 13.6863 934 17V35C934 38.3137 931.314 41 928 41H274C270.686 41 268 38.3137 268 35V17Z" className="fill-zinc-700" />
              <g className="mix-blend-luminosity">
                <path d="M538.269 32.0852H544.426C545.277 32.0852 545.696 31.6663 545.696 30.7395V25.9851C545.696 25.1472 545.353 24.7219 544.642 24.6521V23.0842C544.642 20.6721 543.036 19.5105 541.348 19.5105C539.659 19.5105 538.053 20.6721 538.053 23.0842V24.6711C537.393 24.7727 537 25.1917 537 25.9851V30.7395C537 31.6663 537.418 32.0852 538.269 32.0852ZM539.272 22.97C539.272 21.491 540.211 20.6785 541.348 20.6785C542.478 20.6785 543.423 21.491 543.423 22.97V24.6394L539.272 24.6458V22.97Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <text x="552" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">app.orakis.com</text>
              </g>
              <g className="mix-blend-luminosity" transform="translate(20, 0)">
                <path d="M265.5 33.8984C265.641 33.8984 265.852 33.8516 266.047 33.7422C270.547 31.2969 272.109 30.1641 272.109 27.3203V21.4219C272.109 20.4844 271.742 20.1484 270.961 19.8125C270.094 19.4453 267.18 18.4297 266.328 18.1406C266.07 18.0547 265.766 18 265.5 18C265.234 18 264.93 18.0703 264.672 18.1406C263.82 18.3828 260.906 19.4531 260.039 19.8125C259.258 20.1406 258.891 20.4844 258.891 21.4219V27.3203C258.891 30.1641 260.461 31.2812 264.945 33.7422C265.148 33.8516 265.359 33.8984 265.5 33.8984ZM265.922 19.5781C266.945 19.9766 269.172 20.7656 270.344 21.1875C270.562 21.2656 270.617 21.3828 270.617 21.6641V27.0234C270.617 29.3125 269.469 29.9375 265.945 32.0625C265.727 32.1875 265.617 32.2344 265.508 32.2344V19.4844C265.617 19.4844 265.734 19.5156 265.922 19.5781Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity" transform="translate(-25, 0)">
                <path d="M936.273 24.9766C936.5 24.9766 936.68 24.9062 936.82 24.7578L940.023 21.5312C940.195 21.3594 940.273 21.1719 940.273 20.9531C940.273 20.7422 940.188 20.5391 940.023 20.3828L936.82 17.125C936.68 16.9688 936.5 16.8906 936.273 16.8906C935.852 16.8906 935.516 17.2422 935.516 17.6719C935.516 17.8828 935.594 18.0547 935.727 18.2031L937.594 20.0312C937.227 19.9766 936.852 19.9453 936.477 19.9453C932.609 19.9453 929.516 23.0391 929.516 26.9141C929.516 30.7891 932.633 33.9062 936.5 33.9062C940.375 33.9062 943.484 30.7891 943.484 26.9141C943.484 26.4453 943.156 26.1094 942.688 26.1094C942.234 26.1094 941.93 26.4453 941.93 26.9141C941.93 29.9297 939.516 32.3516 936.5 32.3516C933.492 32.3516 931.07 29.9297 931.07 26.9141C931.07 23.875 933.469 21.4688 936.477 21.4688C936.984 21.4688 937.453 21.5078 937.867 21.5781L935.734 23.6875C935.594 23.8281 935.516 24 935.516 24.2109C935.516 24.6406 935.852 24.9766 936.273 24.9766Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <path d="M1134 33.0156C1134.49 33.0156 1134.89 32.6094 1134.89 32.1484V27.2578H1139.66C1140.13 27.2578 1140.54 26.8594 1140.54 26.3672C1140.54 25.8828 1140.13 25.4766 1139.66 25.4766H1134.89V20.5859C1134.89 20.1172 1134.49 19.7188 1134 19.7188C1133.52 19.7188 1133.11 20.1172 1133.11 20.5859V25.4766H1128.34C1127.88 25.4766 1127.46 25.8828 1127.46 26.3672C1127.46 26.8594 1127.88 27.2578 1128.34 27.2578H1133.11V32.1484C1133.11 32.6094 1133.52 33.0156 1134 33.0156Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <path d="M1161.8 31.0703H1163.23V32.375C1163.23 34.0547 1164.12 34.9219 1165.81 34.9219H1174.2C1175.89 34.9219 1176.77 34.0547 1176.77 32.3828V24.0469C1176.77 22.375 1175.89 21.5 1174.2 21.5H1172.77V20.2578C1172.77 18.5859 1171.88 17.7109 1170.19 17.7109H1161.8C1160.1 17.7109 1159.23 18.5781 1159.23 20.2578V28.5234C1159.23 30.1953 1160.1 31.0703 1161.8 31.0703ZM1161.9 29.5078C1161.18 29.5078 1160.78 29.1328 1160.78 28.3828V20.3984C1160.78 19.6406 1161.18 19.2656 1161.9 19.2656H1170.09C1170.8 19.2656 1171.2 19.6406 1171.2 20.3984V21.5H1165.81C1164.12 21.5 1163.23 22.375 1163.23 24.0469V29.5078H1161.9ZM1165.91 33.3672C1165.19 33.3672 1164.8 32.9922 1164.8 32.2422V24.1875C1164.8 23.4297 1165.19 23.0625 1165.91 23.0625H1174.1C1174.81 23.0625 1175.21 23.4297 1175.21 24.1875V32.2422C1175.21 32.9922 1174.81 33.3672 1174.1 33.3672H1165.91Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <path d="M1099.51 28.4141C1099.91 28.4141 1100.24 28.0859 1100.24 27.6953V19.8359L1100.18 18.6797L1100.66 19.25L1101.75 20.4141C1101.88 20.5547 1102.06 20.625 1102.24 20.625C1102.6 20.625 1102.9 20.3672 1102.9 20C1102.9 19.8047 1102.82 19.6641 1102.69 19.5312L1100.06 17.0078C1099.88 16.8203 1099.7 16.7578 1099.51 16.7578C1099.32 16.7578 1099.14 16.8203 1098.95 17.0078L1096.33 19.5312C1096.2 19.6641 1096.12 19.8047 1096.12 20C1096.12 20.3672 1096.41 20.625 1096.77 20.625C1096.95 20.625 1097.14 20.5547 1097.27 20.4141L1098.35 19.25L1098.84 18.6719L1098.78 19.8359V27.6953C1098.78 28.0859 1099.11 28.4141 1099.51 28.4141ZM1095 34.6562H1104C1105.7 34.6562 1106.57 33.7812 1106.57 32.1094V24.4297C1106.57 22.7578 1105.7 21.8828 1104 21.8828H1101.89V23.4375H1103.9C1104.61 23.4375 1105.02 23.8125 1105.02 24.5625V31.9688C1105.02 32.7188 1104.61 33.0938 1103.9 33.0938H1095.1C1094.38 33.0938 1093.98 32.7188 1093.98 31.9688V24.5625C1093.98 23.8125 1094.38 23.4375 1095.1 23.4375H1097.13V21.8828H1095C1093.31 21.8828 1092.43 22.75 1092.43 24.4297V32.1094C1092.43 33.7812 1093.31 34.6562 1095 34.6562Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <path d="M99.5703 33.6016H112.938C114.633 33.6016 115.516 32.7266 115.516 31.0547V21.5469C115.516 19.875 114.633 19 112.938 19H99.5703C97.8828 19 97 19.8672 97 21.5469V31.0547C97 32.7266 97.8828 33.6016 99.5703 33.6016ZM99.6719 32.0469C98.9531 32.0469 98.5547 31.6719 98.5547 30.9141V21.6875C98.5547 20.9297 98.9531 20.5547 99.6719 20.5547H103.234V32.0469H99.6719ZM112.836 20.5547C113.555 20.5547 113.953 20.9297 113.953 21.6875V30.9141C113.953 31.6719 113.555 32.0469 112.836 32.0469H104.711V20.5547H112.836ZM101.703 23.4141C101.984 23.4141 102.219 23.1719 102.219 22.9062C102.219 22.6406 101.984 22.4062 101.703 22.4062H100.102C99.8203 22.4062 99.5859 22.6406 99.5859 22.9062C99.5859 23.1719 99.8203 23.4141 100.102 23.4141H101.703ZM101.703 25.5156C101.984 25.5156 102.219 25.2812 102.219 25.0078C102.219 24.7422 101.984 24.5078 101.703 24.5078H100.102C99.8203 24.5078 99.5859 24.7422 99.5859 25.0078C99.5859 25.2812 99.8203 25.5156 100.102 25.5156H101.703ZM101.703 27.6094C101.984 27.6094 102.219 27.3828 102.219 27.1094C102.219 26.8438 101.984 26.6172 101.703 26.6172H100.102C99.8203 26.6172 99.5859 26.8438 99.5859 27.1094C99.5859 27.3828 99.8203 27.6094 100.102 27.6094H101.703Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <path d="M143.914 32.5938C144.094 32.7656 144.312 32.8594 144.562 32.8594C145.086 32.8594 145.492 32.4531 145.492 31.9375C145.492 31.6797 145.391 31.4453 145.211 31.2656L139.742 25.9219L145.211 20.5938C145.391 20.4141 145.492 20.1719 145.492 19.9219C145.492 19.4062 145.086 19 144.562 19C144.312 19 144.094 19.0938 143.922 19.2656L137.844 25.2031C137.625 25.4062 137.516 25.6562 137.516 25.9297C137.516 26.2031 137.625 26.4375 137.836 26.6484L143.914 32.5938Z" fill="#A3A3A3" />
              </g>
              <g className="mix-blend-luminosity">
                <path d="M168.422 32.8594C168.68 32.8594 168.891 32.7656 169.07 32.5938L175.148 26.6562C175.359 26.4375 175.469 26.2109 175.469 25.9297C175.469 25.6562 175.367 25.4141 175.148 25.2109L169.07 19.2656C168.891 19.0938 168.68 19 168.422 19C167.898 19 167.492 19.4062 167.492 19.9219C167.492 20.1719 167.602 20.4141 167.773 20.5938L173.25 25.9375L167.773 31.2656C167.594 31.4531 167.492 31.6797 167.492 31.9375C167.492 32.4531 167.898 32.8594 168.422 32.8594Z" fill="#A3A3A3" />
              </g>
            </svg>
            <div className="bg-zinc-800 overflow-hidden">
              <div ref={fitRef} className="relative w-full overflow-hidden" style={{ height: DEMO_HEIGHT * fitScale }}>
                <div style={{ width: DEMO_WIDTH, height: DEMO_HEIGHT, transform: `scale(${fitScale})`, transformOrigin: "left top" }}>
                  <div className="relative flex h-full w-full bg-[#1F1F1E] text-left font-sans">
                    <div className="shrink-0 p-2 transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] w-[232px]">
                      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#3D3D3D] bg-[#262626]">
                        <div className="flex shrink-0 flex-col gap-[5px] p-2">
                          <div className="relative flex cursor-pointer items-center overflow-hidden rounded-[6px] transition-[height,padding,background-color] duration-200 ease-linear hover:bg-white/10 px-2 py-1.5">
                            <svg viewBox="0 0 100 100" width="24" height="24" className="relative flex-shrink-0 mx-auto shrink-0 text-[#FAFAFA] transition-opacity duration-200 ease-out opacity-0 delay-0" aria-hidden="true">
                              <defs>
                                <mask id={maskId}>
                                  <polygon points="32.4,7.76 67.6,7.76 92.24,32.4 92.24,67.6 67.6,92.24 32.4,92.24 7.76,67.6 7.76,32.4" fill="white" />
                                  <polygon points="41.2,30.64 58.8,30.64 69.36,41.2 69.36,58.8 58.8,69.36 41.2,69.36 30.64,58.8 30.64,41.2" fill="black" />
                                  <polygon points="58.8,30.64 69.36,41.2 85.53,25.03 74.97,14.47" fill="black" />
                                  <polygon points="41.2,69.36 30.64,58.8 14.47,74.97 25.03,85.53" fill="black" />
                                </mask>
                              </defs>
                              <polygon points="32.4,7.76 67.6,7.76 92.24,32.4 92.24,67.6 67.6,92.24 32.4,92.24 7.76,67.6 7.76,32.4" fill="currentColor" mask={`url(#${maskId})`} />
                            </svg>
                            <div className="absolute inset-y-0 left-2 right-2 flex items-center gap-2 transition-opacity duration-200 ease-out opacity-100 delay-100">
                              <div className="min-w-0 flex-1">
                                <span className="block whitespace-nowrap font-orbitron text-base font-extrabold uppercase leading-tight tracking-widest text-[#FAFAFA]">Orakis</span>
                                <span className="block truncate text-[11px] leading-tight text-[#FAFAFA]/60">Meridian</span>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down h-3.5 w-3.5 shrink-0 text-[#8C8C8C]/40">
                                <path d="m7 15 5 5 5-5" />
                                <path d="m7 9 5-5 5 5" />
                              </svg>
                            </div>
                          </div>
                          <div className="-mx-2 h-px shrink-0 bg-[#3D3D3D]" />
                        </div>
                        <nav className="flex flex-col gap-1 p-2">
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] bg-white font-medium text-[#18181B]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-4 w-4 shrink-0">
                              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Dashboard</span>
                          </span>
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-inbox h-4 w-4 shrink-0">
                              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Inbox</span>
                          </span>
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 shrink-0">
                              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Goals & Tasks</span>
                          </span>
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 shrink-0">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Team</span>
                          </span>
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open h-4 w-4 shrink-0">
                              <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Docs</span>
                          </span>
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-range h-4 w-4 shrink-0">
                              <rect width="18" height="18" x="3" y="4" rx="2" />
                              <path d="M16 2v4" />
                              <path d="M3 10h18" />
                              <path d="M8 2v4" />
                              <path d="M17 14h-6" />
                              <path d="M13 18H7" />
                              <path d="M7 14h.01" />
                              <path d="M17 18h.01" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Calendar</span>
                          </span>
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-atom h-4 w-4 shrink-0">
                              <circle cx="12" cy="12" r="1" />
                              <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                              <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                            </svg>
                            <span className="whitespace-nowrap transition-opacity ease-out opacity-100 delay-100 duration-200">Ora</span>
                          </span>
                        </nav>
                        <div className="mt-auto flex flex-col gap-[5px] p-2">
                          <div className="-mx-2 h-px shrink-0 bg-[#3D3D3D]" />
                          <div className="flex cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] transition-[height,padding,background-color] duration-200 ease-linear hover:bg-white/10 h-9 p-2">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-xs text-[#121212]">AM</span>
                            <div className="grid min-w-0 flex-1 text-left leading-tight transition-opacity ease-out opacity-100 delay-100 duration-200">
                              <span className="truncate text-[14px] font-semibold text-[#FAFAFA]">Alex Morgan</span>
                              <span className="truncate text-[12px] text-[#8C8C8C]">alex@meridian.co</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <div className="h-full overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#333333_#1F1F1E] [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-[#1F1F1E] [&::-webkit-scrollbar-thumb]:rounded-[5px] [&::-webkit-scrollbar-thumb]:bg-[#333333] [&::-webkit-scrollbar-thumb]:[border:2px_solid_#1F1F1E] [&::-webkit-scrollbar-thumb:hover]:bg-[#4d4d4d]" aria-label="Daily Briefing preview" style={{ maskImage: "linear-gradient(transparent 0px, transparent 38px, black 64px)", colorScheme: "dark" }}>
                        <div className="pl-[10px] pr-[18px] pb-6 pt-[58px]">
                          <div className="mx-auto max-w-3xl">
                            <div className="mb-7 flex items-center justify-between gap-4">
                              <p className="font-sans text-[22px] font-semibold text-[#FAFAFA]">{TODAY_LABEL}</p>
                              <div className="flex shrink-0 items-center gap-3">
                                <span className="flex items-center gap-1.5 text-[11px] text-[#8C8C8C]/40">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  5h 12m
                                </span>
                                <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-[#8C8C8C]/60 transition-colors hover:bg-[#2E2E2E] hover:text-[#FAFAFA]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download h-3.5 w-3.5">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                  </svg>
                                </span>
                                <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-[#8C8C8C]/60 transition-colors hover:bg-[#2E2E2E] hover:text-[#FAFAFA]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw h-3.5 w-3.5">
                                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                  </svg>
                                </span>
                                <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-[#8C8C8C]/60 transition-colors hover:bg-red-400/10 hover:text-red-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3.5 w-3.5">
                                    <path d="M3 6h18" />
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                    <line x1="10" x2="10" y1="11" y2="17" />
                                    <line x1="14" x2="14" y1="11" y2="17" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <p className="text-[15px] leading-[1.8] text-[#FAFAFA]/80">
                              Northwind is the only thing on this week's critical path. is due today, and nothing else on can move before those numbers are signed off. has had the master agreement waiting on your countersignature since yesterday.
                              <span className="cursor-pointer text-[#6699ff] hover:underline">Finalize the Northwind pricing proposal</span>
                              <span className="inline-flex max-w-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[6px] border border-[#3D3D3D]/50 bg-[#3D3D3D] px-2 py-[0.25em] align-middle text-[0.9em] font-medium leading-none text-[#FAFAFA] transition-colors hover:border-[#676765] hover:bg-[#2E2E2E]">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ background: "rgb(96, 165, 250)" }} />
                                <span className="truncate">Q3 revenue push</span>
                              </span>
                              <span className="inline">
                                <span className="relative top-[-0.075em] mr-[0.35em] inline-flex h-[1.35em] w-[1.35em] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] align-middle">
                                  <span className="text-[0.47em] font-semibold leading-none text-[#121212]">SK</span>
                                </span>
                                <span className="cursor-pointer text-[#FAFAFA] hover:underline">Sarah Kim</span>
                              </span>
                            </p>
                            <p className="mt-4 text-[15px] leading-[1.8] text-[#FAFAFA]/80">
                              <span className="inline-flex max-w-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[6px] border border-[#3D3D3D]/50 bg-[#3D3D3D] px-2 py-[0.25em] align-middle text-[0.9em] font-medium leading-none text-[#FAFAFA] transition-colors hover:border-[#676765] hover:bg-[#2E2E2E]">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ background: "rgb(96, 165, 250)" }} />
                                <span className="truncate">EU market expansion</span>
                              </span>
                              <span className="cursor-pointer text-[#6699ff] hover:underline">Review the Munich office lease</span>
                              hangs on one decision: is due in two days, the broker is on the phone about it this afternoon, and that call is hard to reverse once the lease is countersigned.
                            </p>
                            <p className="mt-4 text-[15px] leading-[1.8] text-[#FAFAFA]/80">
                              You closed yesterday, and has taken the compliance paperwork off your plate. still has no tasks on it at all — it will not move on its own.
                              <span className="cursor-pointer text-[#6699ff] hover:underline">Website relaunch brief</span>
                              <span className="inline">
                                <span className="relative top-[-0.075em] mr-[0.35em] inline-flex h-[1.35em] w-[1.35em] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] align-middle">
                                  <span className="text-[0.47em] font-semibold leading-none text-[#121212]">DR</span>
                                </span>
                                <span className="cursor-pointer text-[#FAFAFA] hover:underline">Daniel Ross</span>
                              </span>
                              <span className="inline-flex max-w-full cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[6px] border border-[#3D3D3D]/50 bg-[#3D3D3D] px-2 py-[0.25em] align-middle text-[0.9em] font-medium leading-none text-[#FAFAFA] transition-colors hover:border-[#676765] hover:bg-[#2E2E2E]">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ background: "rgb(140, 140, 140)" }} />
                                <span className="truncate">Hiring: senior engineers</span>
                              </span>
                            </p>
                            <section className="mt-14">
                              <h4 className="mb-4 font-sans text-[15px] font-semibold text-[#FAFAFA]">Waiting on you</h4>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-3 py-2.5">
                                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[9px] font-semibold text-[#121212]">SK</span>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-[14px] text-[#FAFAFA]/85">Countersign the Northwind master agreement</p>
                                    <p className="mt-0.5 text-[13px] text-[#8C8C8C]/60">Sarah Kim asked for your review</p>
                                  </div>
                                  <span className="flex w-[185px] shrink-0 items-baseline justify-end gap-1.5 text-[13px]">
                                    <span className="text-[#8C8C8C]">task deadline</span>
                                    <span className="font-medium text-red-400">1 day overdue</span>
                                  </span>
                                  <span className="inline-flex h-8 shrink-0 cursor-pointer items-center rounded-[6px] border border-[#3D3D3D] bg-[#1F1F1E] px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">Review</span>
                                </div>
                                <div className="flex items-center gap-3 py-2.5">
                                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[9px] font-semibold text-[#121212]">DR</span>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-[14px] text-[#FAFAFA]/85">Partnership deck — final draft</p>
                                    <p className="mt-0.5 text-[13px] text-[#8C8C8C]/60">Daniel Ross asked for your review</p>
                                  </div>
                                  <span className="flex w-[185px] shrink-0 items-baseline justify-end gap-1.5 text-[13px]">
                                    <span className="text-[#8C8C8C]">task deadline</span>
                                    <span className="font-medium text-red-400">3 days overdue</span>
                                  </span>
                                  <span className="inline-flex h-8 shrink-0 cursor-pointer items-center rounded-[6px] border border-[#3D3D3D] bg-[#1F1F1E] px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">Review</span>
                                </div>
                                <div className="flex items-center gap-3 py-2.5">
                                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[9px] font-semibold text-[#121212]">EC</span>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-[14px] text-[#FAFAFA]/85">Sign-off: Q2 financial summary</p>
                                    <p className="mt-0.5 text-[13px] text-[#8C8C8C]/60">Emma Clarke asked for your review</p>
                                  </div>
                                  <span className="flex w-[185px] shrink-0 items-baseline justify-end gap-1.5 text-[13px]" />
                                  <span className="inline-flex h-8 shrink-0 cursor-pointer items-center rounded-[6px] border border-[#3D3D3D] bg-[#1F1F1E] px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">Review</span>
                                </div>
                              </div>
                            </section>
                            <section className="mt-14">
                              <h4 className="mb-4 font-sans text-[15px] font-semibold text-[#FAFAFA]">Prepared for you</h4>
                              <div className="flex flex-col gap-3">
                                <div className="rounded-xl border border-[#3D3D3D] bg-[#2C2C2B] p-4">
                                  <h5 className="mb-1 font-sans text-[14px] font-semibold text-[#FAFAFA]">Chase Northwind on the master agreement</h5>
                                  <p className="text-[14px] leading-relaxed text-[#FAFAFA]/85">Three days ago you wanted to do this as soon as legal replied. Legal replied two days ago.</p>
                                  <div className="mt-3.5 flex items-center gap-2">
                                    <span className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[6px] border border-[#3D3D3D] bg-transparent px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3.5 w-3.5">
                                        <path d="M20 6 9 17l-5-5" />
                                      </svg>
                                      Done
                                    </span>
                                    <span className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[6px] border border-[#3D3D3D] bg-transparent px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-3.5 w-3.5">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                      </svg>
                                      Discuss
                                    </span>
                                    <span className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[6px] border border-[#3D3D3D] bg-transparent px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3.5 w-3.5">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        <line x1="10" x2="10" y1="11" y2="17" />
                                        <line x1="14" x2="14" y1="11" y2="17" />
                                      </svg>
                                      Discard
                                    </span>
                                  </div>
                                </div>
                                <div className="rounded-xl border border-[#3D3D3D] bg-[#2C2C2B] p-4">
                                  <h5 className="mb-1 font-sans text-[14px] font-semibold text-[#FAFAFA]">Office viewing on Maximilianstraße</h5>
                                  <p className="text-[14px] leading-relaxed text-[#FAFAFA]/85">The viewing was yesterday at 15:00. Its description says you would check the square metres — nothing has landed on your board since.</p>
                                  <div className="mt-3.5 flex items-center gap-2">
                                    <span className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[6px] border border-[#3D3D3D] bg-transparent px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-3.5 w-3.5">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                      </svg>
                                      Discuss
                                    </span>
                                    <span className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[6px] border border-[#3D3D3D] bg-transparent px-3 text-[13px] font-medium text-[#FAFAFA] shadow-sm shadow-black/5 transition-colors hover:bg-[#FAFAFA]/10">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-3.5 w-3.5">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        <line x1="10" x2="10" y1="11" y2="17" />
                                        <line x1="14" x2="14" y1="11" y2="17" />
                                      </svg>
                                      Discard
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section className="mt-14">
                              <h4 className="mb-4 font-sans text-[15px] font-semibold text-[#FAFAFA]">The rest of the day</h4>
                              <div className="flex flex-col">
                                <div style={{ marginTop: "0px" }}>
                                  <button type="button" className="group flex w-full items-start gap-3 text-left">
                                    <span className="w-[104px] shrink-0 text-[13px] font-medium leading-[22px] tabular-nums text-[#8C8C8C]">09:30 – 10:30</span>
                                    <span className="mt-[3px] h-4 w-[3px] shrink-0 rounded-full bg-blue-500" />
                                    <span className="min-w-0 flex-1 truncate text-[14px] leading-[22px] text-[#FAFAFA]/85 transition-colors group-hover:text-[#FAFAFA]">Client meeting: Northwind</span>
                                    <span className="w-4 shrink-0 pt-[3px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-[#8C8C8C]/50 transition-transform">
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <div style={{ marginTop: "6px" }}>
                                  <button type="button" className="group flex w-full items-start gap-3 text-left cursor-default">
                                    <span className="w-[104px] shrink-0 text-[13px] font-medium leading-[22px] tabular-nums text-[#8C8C8C]">10:30 – 11:15</span>
                                    <span className="mt-[3px] h-4 w-[3px] shrink-0 rounded-full bg-purple-500" />
                                    <span className="min-w-0 flex-1 truncate text-[14px] leading-[22px] text-[#FAFAFA]/85 transition-colors">Weekly partner sync</span>
                                    <span className="w-4 shrink-0 pt-[3px]" />
                                  </button>
                                </div>
                                <div style={{ marginTop: "50px" }}>
                                  <button type="button" className="group flex w-full items-start gap-3 text-left">
                                    <span className="w-[104px] shrink-0 text-[13px] font-medium leading-[22px] tabular-nums text-[#8C8C8C]">13:30</span>
                                    <span className="mt-[3px] h-4 w-[3px] shrink-0 rounded-full bg-green-500" />
                                    <span className="min-w-0 flex-1 truncate text-[14px] leading-[22px] text-[#FAFAFA]/85 transition-colors group-hover:text-[#FAFAFA]">Call: broker on the Munich office</span>
                                    <span className="w-4 shrink-0 pt-[3px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-[#8C8C8C]/50 transition-transform">
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <div style={{ marginTop: "36px" }}>
                                  <button type="button" className="group flex w-full items-start gap-3 text-left">
                                    <span className="w-[104px] shrink-0 text-[13px] font-medium leading-[22px] tabular-nums text-[#8C8C8C]">15:00 – 16:30</span>
                                    <span className="mt-[3px] h-4 w-[3px] shrink-0 rounded-full bg-orange-500" />
                                    <span className="min-w-0 flex-1 truncate text-[14px] leading-[22px] text-[#FAFAFA]/85 transition-colors group-hover:text-[#FAFAFA]">Contract call: Ardent</span>
                                    <span className="w-4 shrink-0 pt-[3px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-[#8C8C8C]/50 transition-transform">
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <div style={{ marginTop: "16px" }}>
                                  <button type="button" className="group flex w-full items-start gap-3 text-left cursor-default">
                                    <span className="w-[104px] shrink-0 text-[13px] font-medium leading-[22px] tabular-nums text-[#8C8C8C]">17:00 – 17:30</span>
                                    <span className="mt-[3px] h-4 w-[3px] shrink-0 rounded-full bg-[#3D3D3D]" />
                                    <span className="min-w-0 flex-1 truncate text-[14px] leading-[22px] text-[#FAFAFA]/85 transition-colors">Onboarding: new account manager</span>
                                    <span className="w-4 shrink-0 pt-[3px]" />
                                  </button>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 top-0 z-30 flex h-16 items-center gap-2 pl-1 pr-3">
                        <button type="button" className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#FAFAFA]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left h-4 w-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 3v18" />
                          </svg>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-4 w-4 shrink-0 text-[#8C8C8C]">
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                        <span className="flex min-w-0 items-center gap-2.5 text-[14px]">
                          <span className="cursor-pointer text-[#8C8C8C] transition-colors hover:text-[#FAFAFA]">Dashboard</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#8C8C8C]">
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                          <span className="flex min-w-0 items-center gap-1.5 text-[#FAFAFA]">
                            <span className="truncate">Daily Briefing</span>
                          </span>
                        </span>
                        <span className="ml-auto flex shrink-0 items-center gap-1">
                          <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[6px] text-[#FAFAFA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search h-4 w-4">
                              <circle cx="11" cy="11" r="8" />
                              <path d="m21 21-4.3-4.3" />
                            </svg>
                          </span>
                          <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[6px] text-[#FAFAFA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings h-4 w-4">
                              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </span>
                          <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-[6px] text-[#FAFAFA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-4 w-4">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
