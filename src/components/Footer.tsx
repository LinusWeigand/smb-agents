import { Link, useNavigate } from 'react-router-dom';
import { TAGLINE } from '../lib/constants';

const COL_HEADING =
  'font-serif text-[11px] font-bold tracking-[0.16em] uppercase text-[#F7F7F7] mb-5';
const COL_LIST = 'space-y-3.5 text-sm text-white/50 font-sans font-normal';
const LINK = 'hover:text-white transition-colors duration-200';

export function Footer() {
  const navigate = useNavigate();

  // Same cross-route anchor dance as the header: if we are not on "/", route
  // there first and poll until the section exists.
  const scrollToSection = (id: string) => {
    const attempt = (tries = 0) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (tries < 40) {
        setTimeout(() => attempt(tries + 1), 50);
      }
    };
    if (window.location.pathname === '/') attempt();
    else {
      navigate('/');
      setTimeout(attempt, 150);
    }
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-[1190px] mx-auto px-4 sm:px-6 min-[1240px]:px-0 pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">
          <div className="max-w-xs flex flex-col gap-6">
            <a href="/" className="w-fit flex items-center gap-2">
              {/* `is-flat` freezes the shimmer: on the dark footer the animated
                  metal gradient reads as noise, so it renders as a solid mark. */}
              <div className="ora-icon-shimmer is-flat w-12 h-12" aria-hidden="true" />
              <span
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="font-bold text-4xl tracking-widest uppercase text-[#F7F7F7]"
              >
                Orakis
              </span>
            </a>
            <p className="font-serif text-2xl font-medium leading-snug text-[#F7F7F7]">
              {TAGLINE}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            <div>
              <p className={COL_HEADING}>Product</p>
              <ul className={COL_LIST} style={{ letterSpacing: '-0.1px' }}>
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className={LINK}>
                    Product
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('overview')} className={LINK}>
                    Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className={LINK}>
                    FAQ
                  </button>
                </li>
                <li>
                  <Link to="/pricing" onClick={toTop} className={LINK}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/lets-talk" onClick={() => window.scrollTo({ top: 0 })} className={LINK}>
                    Let's Talk
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={COL_HEADING}>Company</p>
              <ul className={COL_LIST} style={{ letterSpacing: '-0.1px' }}>
                <li>
                  <a href="mailto:info@orakis.com" className={LINK}>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/orakis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className={COL_HEADING}>Legal</p>
              <ul className={COL_LIST} style={{ letterSpacing: '-0.1px' }}>
                {/* German names on purpose: these documents have legally
                    prescribed titles, so they are not translated for the rest
                    of the English site. */}
                <li>
                  <Link to="/impressum" onClick={toTop} className={LINK}>
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="/datenschutz" onClick={toTop} className={LINK}>
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link to="/agb" onClick={toTop} className={LINK}>
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1190px] mx-auto px-4 sm:px-6 min-[1240px]:px-0">
        {/* Hairline that fades out at both ends rather than butting into the
            container edges. */}
        <div
          className="h-px"
          style={{
            background:
              'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 8%, rgba(255,255,255,0.12) 92%, transparent 100%)',
          }}
        />
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-white/50 font-sans flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span>© 2026 Orakis, all rights reserved</span>
          </p>
          <p className="text-sm text-white/50 font-sans flex items-center gap-2">
            <svg width="16" height="11" viewBox="0 0 5 3" className="rounded-[1px] shrink-0" aria-hidden="true">
              <rect width="5" height="1" fill="#000000" />
              <rect y="1" width="5" height="1" fill="#DD0000" />
              <rect y="2" width="5" height="1" fill="#FFCE00" />
            </svg>
            Built in Germany
          </p>
        </div>
      </div>

      {/* Oversized wordmark bled off the bottom edge. -mb pulls the glyph's
          descender space off-screen so the letters sit flush with the fold. */}
      <div className="overflow-hidden" aria-hidden="true">
        <span
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          className="block select-none text-center font-bold uppercase leading-none tracking-[0.06em] text-white/[0.045] text-[17vw] -mb-[0.14em]"
        >
          Orakis
        </span>
      </div>
    </footer>
  );
}
