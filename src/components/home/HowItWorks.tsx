import type { ReactNode } from 'react';
import { BriefingDemo } from './demos/BriefingDemo';
import { AutopilotDemo } from './demos/AutopilotDemo';
import { TeamMapDemo } from './demos/TeamMapDemo';
import { KnowledgeDemo } from './demos/KnowledgeDemo';

type Feature = {
  heading: string;
  badge?: string;
  body: string;
  demo: ReactNode;
};

const FEATURES: Feature[] = [
  {
    heading: 'Start your day with a Briefing',
    body: "Know what matters, see who's waiting on you, and know exactly what you need to do. Orakis manages the work around you, reorganizing your calendar, working through your inbox, and protecting time for what matters most.",
    demo: <BriefingDemo />,
  },
  {
    heading: 'Your company, on autopilot',
    badge: 'Human in the loop also possible',
    body: 'Orakis orchestrates every task in your team and keeps everything moving efficiently, so your projects run themselves without you having to manually chase it every time.',
    demo: <AutopilotDemo />,
  },
  {
    heading: "See the risk before it's a crisis.",
    body: "Orakis already analyzes your data and knows what's going on before you do.",
    demo: <TeamMapDemo />,
  },
  {
    heading: "You're building an asset.",
    body: "Every source compounds into one connected picture of how your company works. What your people know never has to leave with them. It's the infrastructure your company runs on. AI agents, for example, finally get clean company data to work with.",
    demo: <KnowledgeDemo />,
  },
];

export function FeatureList() {
  return (
    <ul className="flex flex-col gap-20 md:gap-28">
      {FEATURES.map((f, i) => (
        <li
          key={f.heading}
          /* Odd rows flip to `flex-row-reverse` so the mock window alternates
             sides down the page. */
          className={`flex flex-col gap-6 lg:gap-12 lg:items-center ${
            i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          <div className="lg:w-[30%] flex-shrink-0 space-y-5">
            <h2
              className="font-display text-2xl md:text-4xl font-medium text-gray-900 leading-[1.15]"
              style={{ letterSpacing: '-0.02em' }}
            >
              {f.heading}
            </h2>
            {f.badge && (
              <span className="inline-flex items-center mt-3 px-3 py-1 rounded-[6px] text-sm font-sans font-medium text-gray-600 bg-gray-100 border border-gray-200 whitespace-nowrap">
                {f.badge}
              </span>
            )}
            <p className="text-base font-sans font-normal text-gray-500 leading-relaxed">
              {f.body}
            </p>
          </div>
          <div className="lg:flex-1 min-w-0 w-full">{f.demo}</div>
        </li>
      ))}
    </ul>
  );
}
