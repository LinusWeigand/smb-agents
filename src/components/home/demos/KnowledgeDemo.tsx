import { useId, useState } from 'react';
import { Minimize2 } from 'lucide-react';
import { KnowledgeGraph } from './knowledge/KnowledgeGraph';
import { DEMO_HEIGHT, DEMO_WIDTH, useFitScale } from './useFitScale';

/**
 * Knowledge base: every entry in the company brain and how the entries reference each other.
 *
 * Recovered from the deployed prerender, so the markup and Tailwind classes are
 * the ones the live site actually ships. Purely presentational: this is a mock
 * of the product UI, not the product UI.
 */
export function KnowledgeDemo() {
  const { ref: fitRef, scale: fitScale } = useFitScale();
  const maskId = `orakis-mark-solid-cut-${useId()}`;
  const [fullscreen, setFullscreen] = useState(false);
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
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] font-normal text-white transition-colors hover:bg-white/10">
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
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] bg-white font-medium text-[#18181B]">
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
                      <div className="h-full overflow-hidden" style={{ maskImage: "linear-gradient(transparent 0px, transparent 38px, black 64px)" }}>
                        <div className="h-full pt-[42px]">
                          <div className="pl-[10px] pr-[18px] pt-4">
                            <div className="flex w-full items-start gap-4">
                              <div className="relative shrink-0" style={{ width: "400px", height: "774px" }}>
                                <KnowledgeGraph />
                                <button type="button" onClick={() => setFullscreen(true)} title="Expand graph" className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-[6px] border border-[#3D3D3D] bg-[#2C2C2B]/80 text-[#8C8C8C] backdrop-blur transition-colors hover:bg-[#3D3D3D] hover:text-[#FAFAFA]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize2 h-3.5 w-3.5">
                                    <polyline points="15 3 21 3 21 9" />
                                    <polyline points="9 21 3 21 3 15" />
                                    <line x1="21" x2="14" y1="3" y2="10" />
                                    <line x1="3" x2="10" y1="21" y2="14" />
                                  </svg>
                                </button>
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="mb-6 flex items-center gap-3">
                                  <div className="flex min-w-0 flex-1 items-center gap-3">
                                    <span className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[6px] border border-[#3D3D3D] text-[#8C8C8C] transition-colors hover:bg-[#2E2E2E] hover:text-[#FAFAFA]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive h-4 w-4">
                                        <rect width="20" height="5" x="2" y="3" rx="1" />
                                        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                                        <path d="M10 12h4" />
                                      </svg>
                                    </span>
                                    <div className="relative min-w-0 flex-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-[#8C8C8C]">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                      </svg>
                                      <div className="flex h-9 w-full items-center rounded-[6px] border border-[#3D3D3D] bg-transparent pl-10 text-[14px] text-[#8C8C8C]">Search knowledge…</div>
                                    </div>
                                  </div>
                                  <div className="flex shrink-0 items-center gap-3">
                                    <span className="relative flex h-9 shrink-0 cursor-pointer items-center rounded-[6px] bg-[#2E2E2E] pl-3 pr-8 text-[14px] text-white transition-colors hover:bg-[#3D3D3D]">
                                      Grid
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 opacity-60">
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    </span>
                                    <span className="relative flex h-9 shrink-0 cursor-pointer items-center rounded-[6px] bg-[#2E2E2E] pl-3 pr-8 text-[14px] text-white transition-colors hover:bg-[#3D3D3D]">
                                      All types
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 opacity-60">
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    </span>
                                    <span className="group relative inline-flex h-[34px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[6px] bg-white px-4 shadow-sm">
                                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "0px", transitionDelay: "0.141946s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "0px", transitionDelay: "0.0877088s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "0px", transitionDelay: "0.445825s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "0px", transitionDelay: "0.0903512s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "0px", transitionDelay: "0.253767s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "0px", transitionDelay: "0.25009s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "0px", transitionDelay: "0.39835s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "0px", transitionDelay: "0.266711s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "0px", transitionDelay: "0.0908587s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "0px", transitionDelay: "0.26383s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "0px", transitionDelay: "0.210821s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "0px", transitionDelay: "0.131632s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "0px", transitionDelay: "0.346582s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "0px", transitionDelay: "0.113395s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "0px", transitionDelay: "0.272119s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "0px", transitionDelay: "0.368525s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "128px", top: "0px", transitionDelay: "0.4623s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "136px", top: "0px", transitionDelay: "0.231796s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "8px", transitionDelay: "0.22434s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "8px", transitionDelay: "0.0866517s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "8px", transitionDelay: "0.0339645s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "8px", transitionDelay: "0.239849s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "8px", transitionDelay: "0.415072s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "8px", transitionDelay: "0.0485491s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "8px", transitionDelay: "0.485026s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "8px", transitionDelay: "0.393614s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "8px", transitionDelay: "0.109207s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "8px", transitionDelay: "0.228118s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "8px", transitionDelay: "0.0701599s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "8px", transitionDelay: "0.100558s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "8px", transitionDelay: "0.477268s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "8px", transitionDelay: "0.128182s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "8px", transitionDelay: "0.146931s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "8px", transitionDelay: "0.37829s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "128px", top: "8px", transitionDelay: "0.435532s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "136px", top: "8px", transitionDelay: "0.0131401s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "16px", transitionDelay: "0.204061s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "16px", transitionDelay: "0.0318354s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "16px", transitionDelay: "0.363193s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "16px", transitionDelay: "0.0334592s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "16px", transitionDelay: "0.222226s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "16px", transitionDelay: "0.431956s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "16px", transitionDelay: "0.412925s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "16px", transitionDelay: "0.317004s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "16px", transitionDelay: "0.0198658s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "16px", transitionDelay: "0.375941s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "16px", transitionDelay: "0.243134s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "16px", transitionDelay: "0.314624s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "16px", transitionDelay: "0.454521s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "16px", transitionDelay: "0.147083s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "16px", transitionDelay: "0.314968s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "16px", transitionDelay: "0.143022s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "128px", top: "16px", transitionDelay: "0.340312s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "136px", top: "16px", transitionDelay: "0.294475s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "24px", transitionDelay: "0.115485s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "24px", transitionDelay: "0.249482s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "24px", transitionDelay: "0.298713s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "24px", transitionDelay: "0.126833s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "24px", transitionDelay: "0.22465s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "24px", transitionDelay: "0.282937s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "24px", transitionDelay: "0.451421s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "24px", transitionDelay: "0.296425s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "24px", transitionDelay: "0.3713s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "24px", transitionDelay: "0.331298s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "24px", transitionDelay: "0.141697s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "24px", transitionDelay: "0.20146s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "24px", transitionDelay: "0.00937521s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "24px", transitionDelay: "0.210561s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "24px", transitionDelay: "0.241627s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "24px", transitionDelay: "0.18932s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "128px", top: "24px", transitionDelay: "0.216167s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "136px", top: "24px", transitionDelay: "0.149017s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "0px", top: "32px", transitionDelay: "0.173212s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "8px", top: "32px", transitionDelay: "0.377627s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "16px", top: "32px", transitionDelay: "0.10196s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "24px", top: "32px", transitionDelay: "0.478849s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "32px", top: "32px", transitionDelay: "0.405481s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "40px", top: "32px", transitionDelay: "0.274933s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "48px", top: "32px", transitionDelay: "0.298767s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "56px", top: "32px", transitionDelay: "0.220037s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "64px", top: "32px", transitionDelay: "0.322581s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "72px", top: "32px", transitionDelay: "0.265684s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "80px", top: "32px", transitionDelay: "0.467798s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "88px", top: "32px", transitionDelay: "0.214151s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "96px", top: "32px", transitionDelay: "0.0419424s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "104px", top: "32px", transitionDelay: "0.257609s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "112px", top: "32px", transitionDelay: "0.169491s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "120px", top: "32px", transitionDelay: "0.36708s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "128px", top: "32px", transitionDelay: "0.484838s" }} />
                                        <span className="absolute h-2 w-2 bg-[#18181b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" style={{ left: "136px", top: "32px", transitionDelay: "0.352281s" }} />
                                      </span>
                                      <span className="relative z-10 font-orbitron text-sm font-semibold uppercase leading-none tracking-wider text-zinc-900 transition-colors delay-150 duration-300 group-hover:text-white">New Entry</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pin h-3.5 w-3.5 shrink-0 fill-amber-500 text-amber-500">
                                              <path d="M12 17v5" />
                                              <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
                                            </svg>
                                            Northwind Energy
                                          </h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              7
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Enterprise account since 2024. The three-year master agreement cleared legal two days ago and has been waiting on Alex's countersignature si…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Harborline Logistics</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              4
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Second-biggest account. Procurement runs the same playbook as Northwind Energy, so the security questionnaire lands before the quote does.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Cavendish Retail</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              3
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Signed in March, still onboarding. Slower than Harborline Logistics because their data lives in four places — see Data platform migration.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Ardent Manufacturing</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Late-stage. Their legal team lifted the redlines from Northwind Energy almost word for word, so Master agreement — redlines answers most of…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Vellum Publishing</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              1
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Small, loud, useful: they file the best bug reports we get. Feeds Escalation postmortems.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Kestrel Foods</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              1
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Reseller-led, not direct — the terms come from Partner program — reseller tiers.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Lumen Health</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              1
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Regulated: nothing moves without SOC 2 evidence checklist and the DPA in Data processing agreement.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Brightpath Education</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(34, 139, 230)" }} />
                                              Customer
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Pilot only. The reason Pricing tiers 2026 has an education band at all.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Pricing tiers 2026</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(21, 170, 191)" }} />
                                              Product
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              3
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Three tiers rebuilt around the new usage caps. Never quote below list without reading Discount floor policy. The education band exists becau…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Partner program — reseller tiers</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(21, 170, 191)" }} />
                                              Product
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Margin bands, certification requirements and who owns the first five signed partners. Depends on Pricing tiers 2026.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Usage metering API</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(21, 170, 191)" }} />
                                              Product
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              1
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">What the caps in Pricing tiers 2026 are actually measured with. Owned by the platform team.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">SSO / SAML support</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(21, 170, 191)" }} />
                                              Product
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Table stakes for every account above the mid band. Ardent Manufacturing made it a condition.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">EU entity setup</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(64, 192, 87)" }} />
                                              Process
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Legal entity first, then the lease, then the local hiring pipeline. Munich office lease is the current blocker, and a second entity means a…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">SOC 2 evidence checklist</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(64, 192, 87)" }} />
                                              Process
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              3
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Access reviews, change management and the vendor list. Two auditor notes are still open — see Vendor list — 2026. Every customer security re…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Customer onboarding — standard</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(64, 192, 87)" }} />
                                              Process
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">The path every account walks: kickoff, environments, questionnaire, first value. Cavendish — store rollout plan is the stress test.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Data processing agreement</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(64, 192, 87)" }} />
                                              Process
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Our standard DPA and the two clauses we negotiate. Lumen — DPA amendments is the hard case.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Incident response — on call</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(64, 192, 87)" }} />
                                              Process
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              1
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Who is paged, what they say, and when the customer hears it. Feeds Escalation postmortems.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Hiring loop — engineering</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(64, 192, 87)" }} />
                                              Process
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Four stages, one bar, written debrief before the room. Same loop Munich — first three hires uses.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Munich office lease</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 82, 82)" }} />
                                              Decision
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">12-year term on Maximilianstraße with a break clause at year five. The broker wants an answer within days, and the hiring pipeline in EU ent…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Build vs buy — analytics</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 82, 82)" }} />
                                              Decision
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">We buy. Revisit when the vendor bill passes two engineers a year. Ties into Data platform migration.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">EU data residency — where we host</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 82, 82)" }} />
                                              Decision
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Frankfurt, not Dublin, because Lumen Health asked and Data processing agreement made it cheap to say yes.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Support tiers — what we promise</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 82, 82)" }} />
                                              Decision
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Response times by band. The top band is the only one with a named human, and it is priced in Pricing tiers 2026.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Q3 roadmap — what got cut</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 82, 82)" }} />
                                              Decision
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Two features cut so Data platform migration could ship. The cut list is the interesting part.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Website relaunch brief</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(121, 80, 242)" }} />
                                              Project
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Positioning, sitemap and the copy deck the relaunch runs on — signed off yesterday, so the site can be live before the revenue push needs la…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Data platform migration</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(121, 80, 242)" }} />
                                              Project
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">One warehouse instead of four pipelines. Cavendish — data quality findings is the reason it got funded, and Metering accuracy — known gaps i…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Q3 revenue push</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(121, 80, 242)" }} />
                                              Project
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Close Northwind Energy and Ardent Manufacturing, lift recurring revenue 30%. Everything else waits.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Brand refresh — phase two</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(121, 80, 242)" }} />
                                              Project
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">The parts of Website relaunch brief that did not fit in phase one.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Sarah Kim — account lead</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(253, 126, 20)" }} />
                                              Person
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Owns Northwind Energy and half of Q3 revenue push. Ask her before quoting anything.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Daniel Ross — marketing</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(253, 126, 20)" }} />
                                              Person
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Owns Website relaunch brief. Took the compliance paperwork off Alex's plate this quarter.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Emma Clarke — operations</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(253, 126, 20)" }} />
                                              Person
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Runs EU entity setup and the audit side of SOC 2 evidence checklist.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Raj Patel — platform lead</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(253, 126, 20)" }} />
                                              Person
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Owns Data platform migration and Usage metering API. The bottleneck, and knows it — Hiring loop — engineering is the plan to stop being one.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Escalation postmortems</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 176, 5)" }} />
                                              Learning
                                            </span>
                                            <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right h-3 w-3">
                                                <polyline points="15 10 20 15 15 20" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                              </svg>
                                              1
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Every escalation, what caused it, what we changed. Most of them trace to Customer onboarding — standard being skipped.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Briefing before an exec call</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 176, 5)" }} />
                                              Learning
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">One page, three numbers, one ask. Priya Raman — Northwind CTO taught us this the hard way.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">What discounting actually costs</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 176, 5)" }} />
                                              Learning
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Two points of margin is one engineer. Discount floor policy exists because of this note.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Churn signals we keep missing</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 176, 5)" }} />
                                              Learning
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">The champion goes quiet six weeks before the notice. Harborline — renewal risk is the live example.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Demos that land</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(250, 176, 5)" }} />
                                              Learning
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Show their data, not ours. Costs twenty minutes of prep and doubles the close rate. The prep is the same one Kickoff — the first 30 minutes…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Competitive notes — 2026</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(134, 142, 150)" }} />
                                              Note
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Who we lose to and why. Two of the three reasons are in Pricing tiers 2026.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Glossary — what we mean by what</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(134, 142, 150)" }} />
                                              Note
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Account, workspace, seat, tenant. Four words, four arguments avoided. Written during Customer onboarding — standard, after the third time we…</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Board update — Q2</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(134, 142, 150)" }} />
                                              Note
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">The three slides that mattered: Q3 revenue push, EU entity setup, Data platform migration.</p>
                                    </div>
                                  </div>
                                  <div className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-4">
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                          <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">Tooling — what we pay for</h3>
                                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                                            <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                                              <span className="h-1.5 w-1.5 shrink-0 rounded-[2px]" style={{ backgroundColor: "rgb(134, 142, 150)" }} />
                                              Note
                                            </span>
                                          </div>
                                        </div>
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical h-3.5 w-3.5">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                          </svg>
                                        </span>
                                      </div>
                                      <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">Every subscription and who uses it. Overlaps with Vendor list — 2026 more than it should.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {fullscreen && (
                        <div className="absolute inset-x-0 bottom-0 top-[58px] z-40 bg-[#1F1F1E] px-4 pb-2">
                          <KnowledgeGraph />
                          <button
                            type="button"
                            onClick={() => setFullscreen(false)}
                            title="Exit fullscreen"
                            className="absolute right-6 top-2 flex h-7 w-7 items-center justify-center rounded-[6px] border border-[#3D3D3D] bg-[#2C2C2B]/80 text-[#8C8C8C] backdrop-blur transition-colors hover:bg-[#3D3D3D] hover:text-[#FAFAFA]"
                          >
                            <Minimize2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                      <div className="absolute inset-x-0 top-0 z-30 flex h-16 items-center gap-2 pl-1 pr-3">
                        <button type="button" className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#FAFAFA]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left h-4 w-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 3v18" />
                          </svg>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-atom h-4 w-4 shrink-0 text-[#8C8C8C]">
                          <circle cx="12" cy="12" r="1" />
                          <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                          <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                        </svg>
                        <span className="flex min-w-0 items-center gap-2.5 text-[14px]">
                          <span className="cursor-pointer text-[#8C8C8C] transition-colors hover:text-[#FAFAFA]">Ora</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#8C8C8C]">
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                          <span className="flex min-w-0 items-center gap-1.5 text-[#FAFAFA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waypoints h-4 w-4 shrink-0">
                              <circle cx="12" cy="4.5" r="2.5" />
                              <path d="m10.2 6.3-3.9 3.9" />
                              <circle cx="4.5" cy="12" r="2.5" />
                              <path d="M7 12h10" />
                              <circle cx="19.5" cy="12" r="2.5" />
                              <path d="m13.8 17.7 3.9-3.9" />
                              <circle cx="12" cy="19.5" r="2.5" />
                            </svg>
                            <span className="truncate">Knowledge</span>
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
