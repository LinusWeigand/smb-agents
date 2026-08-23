import { useT } from '../../lib/i18n';

export function CTASection() {
  const t = useT();
  return (
    <section className="py-0 relative overflow-hidden">
      <div className="max-w-[1190px] mx-auto">
        <div className="rounded-2xl bg-[#171717] overflow-hidden relative">
          {/* Background photo, faded and vignetted with a radial mask so it
              dissolves into the panel instead of ending on a hard edge. */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
            <img
              src="/hero-hands.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width="1920"
              height="1024"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-auto min-w-full max-w-none object-cover opacity-50"
              style={{ maskImage: 'radial-gradient(75% 65%, black 0%, transparent 80%)' }}
            />
          </div>
          <div className="px-8 py-16 md:py-20 relative z-10 text-center">
            <h2
              className="font-display font-medium mb-3 leading-[1.15] text-2xl md:text-4xl text-white"
              style={{ letterSpacing: '-0.02em' }}
            >
              {t.cta.heading}
            </h2>
            <p className="text-white/70 text-base mb-8 font-normal max-w-md mx-auto">
              {t.cta.body}
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/lets-talk"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] bg-white/10 border border-white/20 text-[15px] font-sans font-medium text-white whitespace-nowrap backdrop-blur-sm"
              >
                {t.nav.letsTalk}
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] bg-white text-[15px] font-sans font-medium text-[#171717] whitespace-nowrap"
              >
                {t.nav.signUp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
