import type { ReactNode } from 'react';
import { BriefingDemo } from './demos/BriefingDemo';
import { AutopilotDemo } from './demos/AutopilotDemo';
import { TeamMapDemo } from './demos/TeamMapDemo';
import { KnowledgeDemo } from './demos/KnowledgeDemo';
import { useT } from '../../lib/i18n';

type Feature = {
  heading: string;
  badge?: string;
  body: string;
  demo: ReactNode;
};

export function FeatureList() {
  const t = useT();
  const features: Feature[] = [
    { ...t.features.briefing, demo: <BriefingDemo /> },
    { ...t.features.autopilot, demo: <AutopilotDemo /> },
    { ...t.features.risk, demo: <TeamMapDemo /> },
    { ...t.features.asset, demo: <KnowledgeDemo /> },
  ];

  return (
    <ul className="flex flex-col gap-20 md:gap-28">
      {features.map((f, i) => (
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
