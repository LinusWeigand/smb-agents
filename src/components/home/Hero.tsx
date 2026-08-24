import { Marquee } from '../Marquee';
import { useT } from '../../lib/i18n';

const BUTTON_SHADOW = { boxShadow: '0 1px 3px rgba(23,23,23,0.08)' };

export function Hero() {
  const t = useT();
  /** Three rows of ambient "what Neuroneus just handled" notifications. */
  const marqueeRows = t.hero.marquee;
  return (
    <section className="relative bg-transparent pb-12 md:pb-[72px] overflow-hidden">
      <div className="relative pt-14 pb-4 md:pt-20 md:pb-6 w-full z-10">
        <div className="w-full max-w-[1190px] mx-auto px-4 sm:px-6 min-[1240px]:px-0 flex flex-col items-center justify-center relative z-10">
          <div className="text-center w-full max-w-5xl mx-auto">
            <h1
              className="font-display text-[2.2rem] sm:text-4xl md:text-[64px] mb-5 mx-auto max-w-screen-lg text-balance text-center break-words"
              style={{
                color: 'rgb(23, 23, 23)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                fontWeight: 500,
              }}
            >
              {t.tagline}
            </h1>
            {/* h2 rather than p because the JSON-LD marks `.hero-description`
                as speakable alongside the h1. */}
            <h2 className="hero-description max-w-2xl mx-auto mb-7 font-sans font-normal text-base text-gray-500 leading-relaxed">
              {t.hero.subtitle}
            </h2>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/lets-talk"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] bg-white border border-gray-200 text-[15px] font-sans font-medium text-gray-700 whitespace-nowrap"
                style={BUTTON_SHADOW}
              >
                {t.nav.letsTalk}
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] bg-[#171717] border border-[#171717] text-[15px] font-sans font-medium text-white whitespace-nowrap"
                style={BUTTON_SHADOW}
              >
                {t.nav.signUp}
              </a>
            </div>
          </div>

          <div className="relative mt-8 w-full overflow-hidden">
            <div className="flex flex-col gap-2">
              {marqueeRows.map((row, i) => (
                <Marquee
                  key={i}
                  reverse={i % 2 === 1}
                  duration={`${38 + i * 6}s`}
                  gap="0.75rem"
                  pauseOnHover
                >
                  {row.map((msg) => (
                    <span
                      key={msg}
                      className="border border-gray-200 bg-white/80 px-4 py-1.5 text-xs text-gray-500 whitespace-nowrap backdrop-blur-sm rounded-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {msg}
                    </span>
                  ))}
                </Marquee>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-30 w-full flex justify-center mt-6 pb-4 px-4 sm:px-6">
          <a
            href="/yc"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 transition-colors duration-200 text-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="flex-shrink-0 rounded-[4px]"
            >
              <path d="M47.9985 47.9994H0V8.61853e-07H47.9985V47.9994Z" fill="#FF6600" />
              <path
                d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z"
                fill="white"
              />
            </svg>
            <span className="font-normal">{t.hero.ycLink}</span>
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
