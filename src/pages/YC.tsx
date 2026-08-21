import { useMemo } from 'react';
import { Container } from '../components/Container';
import { useSeo } from '../lib/useSeo';

/** The two talks the product thesis is built on. */
const VIDEOS = [
  { id: 'EN7frwQIbKc', label: 'How To Build An AI-First Company' },
  { id: 'rWUWfj_PqmM', label: 'The New Way To Build A Startup' },
];

const TITLE = 'YC Videos – The Thesis Behind Orakis';
const DESCRIPTION = "The thinking that shaped everything we're building at Orakis.";

export default function YC() {
  /* VideoObject entries let the talks surface as video results rather than a
     plain page link. Memoised so the SEO effect is not re-run every render. */
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        ...VIDEOS.map((v) => ({
          '@type': 'VideoObject',
          name: v.label,
          description: `${v.label} – a Y Combinator video that shaped the thesis behind Orakis.`,
          thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
          uploadDate: '2024-01-01',
          embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
          contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
        })),
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.orakis.com/' },
            { '@type': 'ListItem', position: 2, name: 'YC Videos', item: 'https://www.orakis.com/yc' },
          ],
        },
      ],
    }),
    [],
  );

  useSeo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: 'https://www.orakis.com/yc',
    jsonLd,
  });

  return (
    <Container wrapperClassName="flex-1 flex flex-col" className="flex-1 flex flex-col">
      <main className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-24">
        <div className="text-center mb-14">
          <h1 className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-4xl sm:text-5xl font-normal text-gray-900 leading-[1.05] tracking-tight">
            The thesis behind{' '}
            <span
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              className="font-bold tracking-widest uppercase"
            >
              Orakis
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="font-serif font-normal text-gray-900">by</span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-sm bg-[#FF6600] text-white flex-shrink-0">
                <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.9985 47.9994H0V8.61853e-07H47.9985V47.9994Z" fill="#FF6600" />
                  <path
                    d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-serif font-normal text-gray-900">Combinator</span>
            </span>
          </h1>
          <p
            className="mt-6 text-base font-sans font-normal text-gray-500 max-w-md mx-auto"
            style={{ letterSpacing: '-0.2px', lineHeight: '1.5em' }}
          >
            The thinking that shaped everything we're building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((v) => (
            <div key={v.id}>
              <p className="text-sm font-medium font-sans text-gray-700 mb-3">{v.label}</p>
              {/* youtube-nocookie so an embed does not set tracking cookies
                  before anyone presses play. */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
}
