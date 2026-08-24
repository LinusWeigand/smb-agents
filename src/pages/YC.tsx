import { useMemo } from 'react';
import { Container } from '../components/Container';
import { useSeo } from '../lib/useSeo';
import { siteUrl } from '../lib/site';
import { useT } from '../lib/i18n';

/** YouTube ids of the two talks the product thesis is built on. The titles are
 *  the videos' own, so they stay English in both site languages. */
const VIDEO_IDS = { aiFirst: 'EN7frwQIbKc', newWay: 'rWUWfj_PqmM' } as const;

export default function YC() {
  const t = useT();

  const videos = [
    { id: VIDEO_IDS.aiFirst, label: t.yc.videos.aiFirst },
    { id: VIDEO_IDS.newWay, label: t.yc.videos.newWay },
  ];

  /* VideoObject entries let the talks surface as video results rather than a
     plain page link. Memoised so the SEO effect is not re-run every render. */
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        ...videos.map((v) => ({
          '@type': 'VideoObject',
          name: v.label,
          description: `${v.label} – ${t.yc.videoDescription}`,
          thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
          uploadDate: '2024-01-01',
          embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
          contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
        })),
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.homeAria, item: siteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'YC Videos', item: siteUrl('/yc') },
          ],
        },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t],
  );

  useSeo({
    title: t.yc.seoTitle,
    description: t.yc.seoDescription,
    canonical: siteUrl('/yc'),
    jsonLd,
  });

  return (
    <Container wrapperClassName="flex-1 flex flex-col" className="flex-1 flex flex-col">
      <main className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-24">
        <div className="text-center mb-14">
          <h1 className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-4xl sm:text-5xl font-normal text-gray-900 leading-[1.05] tracking-tight">
            {t.yc.headingBefore}{' '}
            <span
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              className="font-bold tracking-widest uppercase"
            >
              Neuroneus
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="font-serif font-normal text-gray-900">{t.yc.by}</span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-sm bg-[#FF6600] text-white flex-shrink-0">
                <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.9985 47.9994H0V8.61853e-07H47.9985V47.9994Z" fill="#FF6600" />
                  <path
                    d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-serif font-normal text-gray-900">{t.yc.combinator}</span>
            </span>
          </h1>
          <p
            className="mt-6 text-base font-sans font-normal text-gray-500 max-w-md mx-auto"
            style={{ letterSpacing: '-0.2px', lineHeight: '1.5em' }}
          >
            {t.yc.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((v) => (
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
