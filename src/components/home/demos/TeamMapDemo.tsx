import { useId, useMemo, useState } from 'react';
import { cn } from '../../../lib/utils';
import { TeamGraph } from './team/TeamGraph';
import { MemberDetail, MemberTable } from './team/ListView';
import { LIST_MEMBERS, MEMBERS } from './team/data';
import { DEMO_HEIGHT, DEMO_WIDTH, useFitScale } from './useFitScale';

const VIEW_TAB =
  'relative z-10 h-full rounded-[6px] px-4 text-sm font-medium transition-colors duration-200 ease-in-out';
const VIEW_TAB_ON = 'text-[#1F1F1E]';
const VIEW_TAB_OFF = 'text-[#8C8C8C] hover:text-[#FAFAFA]';

const TOTAL_OVERDUE = MEMBERS.reduce((n, m) => n + m.overdue, 0);

/**
 * Team Overview: the list/map view of who owns what and where the overdue work sits.
 *
 * Recovered from the deployed prerender, so the markup and Tailwind classes are
 * the ones the live site actually ships. Purely presentational: this is a mock
 * of the product UI, not the product UI.
 */
export function TeamMapDemo() {
  const { ref: fitRef, scale: fitScale } = useFitScale();
  const maskId = `orakis-mark-solid-cut-${useId()}`;
  const [view, setView] = useState<'map' | 'list'>('map');
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const selectedRow = useMemo(
    () => LIST_MEMBERS.find((m) => m.id === selectedMember) ?? null,
    [selectedMember],
  );
  // Switching view drops the selection; a person highlighted in the list has
  // no meaning on the map, and vice versa.
  const changeView = (v: 'map' | 'list') => {
    setView(v);
    setSelectedMember(null);
  };
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
                          <span className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden rounded-[6px] px-2 text-[14px] bg-white font-medium text-[#18181B]">
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
                      <div className="relative flex h-full pb-2">
                        <div className="pointer-events-none absolute left-1 top-[58px] z-30 flex w-[256px] items-start">
                          <button type="button" title="Hide sidebar" className="pointer-events-auto mt-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] border border-[#3D3D3D] bg-[#2C2C2B] text-[#8C8C8C] transition-colors duration-150 hover:bg-[#3D3D3D] hover:text-[#FAFAFA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-4 w-4">
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                          </button>
                          <div className="pointer-events-auto mx-3 mt-3 flex-1">
                            <span className="flex h-7 w-full cursor-pointer items-center justify-center rounded-[6px] bg-[#FAFAFA] px-3 text-sm font-medium text-[#1F1F1E]">Overview</span>
                          </div>
                        </div>
                        <div className="relative z-10 h-full shrink-0 overflow-hidden bg-[#1F1F1E]/50 transition-[width,opacity] duration-200 ease-in-out w-[260px] opacity-100">
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[58px] border-b border-r border-t border-[#3D3D3D] rounded-tr-lg" />
                          <div className="flex h-full w-[260px] flex-col pb-4 pr-[13px] pt-[58px]">
                            <div className="h-14 shrink-0" />
                            <div className="shrink-0">
                              <div className="flex items-center justify-between px-2">
                                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8C8C8C]">Channels</span>
                                <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-[6px] text-[#8C8C8C] transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-3 w-3">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                  </svg>
                                </span>
                              </div>
                              <div className="mt-2 space-y-0.5">
                                <span className="flex h-8 w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 text-sm text-[#8C8C8C] transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash h-3.5 w-3.5 shrink-0">
                                    <line x1="4" x2="20" y1="9" y2="9" />
                                    <line x1="4" x2="20" y1="15" y2="15" />
                                    <line x1="10" x2="8" y1="3" y2="21" />
                                    <line x1="16" x2="14" y1="3" y2="21" />
                                  </svg>
                                  <span className="flex-1 truncate text-left text-[13px]">general</span>
                                </span>
                              </div>
                            </div>
                            <div className="my-2 -mr-[13px] h-px shrink-0 bg-[#3D3D3D]" />
                            <div className="flex min-h-0 flex-1 flex-col">
                              <div className="shrink-0">
                                <div className="flex items-center justify-between px-2">
                                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8C8C8C]">Direct Messages</span>
                                  <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-[6px] text-[#8C8C8C] transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-3 w-3">
                                      <path d="M5 12h14" />
                                      <path d="M12 5v14" />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div className="min-h-0 flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(transparent 0px, rgb(0, 0, 0) 12px)" }}>
                                <div className="h-full space-y-0.5 pt-3">
                                  <span className="flex h-8 w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 text-sm text-[#8C8C8C] transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA]">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[9px] font-semibold text-[#121212]">SK</span>
                                    <span className="flex-1 truncate text-left text-[13px]">Sarah Kim</span>
                                  </span>
                                  <span className="flex h-8 w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 text-sm text-[#8C8C8C] transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA]">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-[9px] font-semibold text-[#121212]">DR</span>
                                    <span className="flex-1 truncate text-left text-[13px]">Daniel Ross</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col pt-[58px]">
                          <div className="flex min-h-[28px] shrink-0 items-center gap-5 pb-2 pr-2 pt-3 transition-[padding-left] duration-200 ease-in-out pl-[18px] border-b border-[#3D3D3B]">
                            <div className="flex min-w-0 flex-wrap items-center gap-1">
                              <div className="relative grid h-7 shrink-0 grid-cols-2 overflow-hidden rounded-[6px] border border-[#3D3D3B] bg-[#2E2E2E]">
                                <div className="pointer-events-none absolute inset-y-0 w-1/2 rounded-[6px] bg-[#FAFAFA] transition-[left] duration-200 ease-in-out" style={{ left: view === 'map' ? '50%' : '0%' }} />
                                <button type="button" onClick={() => changeView('list')} className={cn(VIEW_TAB, view === 'list' ? VIEW_TAB_ON : VIEW_TAB_OFF)}>List</button>
                                <button type="button" onClick={() => changeView('map')} className={cn(VIEW_TAB, view === 'map' ? VIEW_TAB_ON : VIEW_TAB_OFF)}>Map</button>
                              </div>
                              <span className="flex h-7 cursor-pointer items-center gap-1.5 rounded-[6px] px-2.5 text-sm text-[#8C8C8C] transition-colors hover:bg-white/10 hover:text-[#FAFAFA]">
                                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#f87171]" />
                                {TOTAL_OVERDUE} overdue
                              </span>
                            </div>
                          </div>
                          <div className="flex min-h-0 flex-1">
                            <div className="min-w-0 flex-1">
                              {view === 'map' ? (
                                <TeamGraph />
                              ) : (
                                <MemberTable
                                  selectedId={selectedMember}
                                  onSelect={(id) => setSelectedMember((cur) => (cur === id ? null : id))}
                                />
                              )}
                            </div>
                            {view === 'list' && selectedRow && (
                              <div className="min-h-0 w-[320px] shrink-0 pr-3">
                                <MemberDetail row={selectedRow} onClose={() => setSelectedMember(null)} />
                              </div>
                            )}
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 shrink-0 text-[#8C8C8C]">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span className="flex min-w-0 items-center gap-2.5 text-[14px]">
                          <span className="cursor-pointer text-[#8C8C8C] transition-colors hover:text-[#FAFAFA]">Team</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#8C8C8C]">
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                          <span className="flex min-w-0 items-center gap-1.5 text-[#FAFAFA]">
                            <span className="truncate">Overview</span>
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
                    <div className="pointer-events-none absolute bottom-2 z-10 h-[13px] w-[13px] border-b border-r border-[#3D3D3D] bg-[#262626] transition-[left] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ left: "211px" }} />
                    <div className="pointer-events-none absolute z-10 h-px bg-[#3D3D3D] transition-[left] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ left: "223px", bottom: "8px", right: "0px" }} />
                    <div className="pointer-events-none absolute z-10 h-px bg-[#3D3D3D] transition-[left] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] w-[14px]" style={{ left: "223px", top: "58px" }} />
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
