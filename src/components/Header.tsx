import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrakisMark } from './OrakisMark';
import { cn } from '../lib/utils';
import { APP_URL } from '../lib/site';

const SECTIONS = [
  { id: 'how-it-works', label: 'Product' },
  { id: 'overview', label: 'Overview' },
  { id: 'faq', label: 'FAQ' },
] as const;

const BUTTON_SHADOW = { boxShadow: '0 1px 3px rgba(23,23,23,0.08)' };

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  /* Scroll-spy. The probe line sits a third of the way down the viewport
     rather than at its top, so a section counts as "current" once it has
     genuinely arrived rather than the instant its first pixel appears.
     Walking the list backwards means the last section past the line wins. */
  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight / 3;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= probe) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The menu is a full-screen overlay; letting the page behind it scroll would
  // leave the user somewhere else when they close it.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* Anchor navigation that also works from another route: when we are not on
     "/" yet, route there first and then poll for the target, since the section
     only exists once the home route has mounted. */
  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const attempt = (tries = 0) => {
      const el = document.getElementById(id);
      if (el) {
        const offset = id === 'hero' ? 0 : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (tries < 40) {
        setTimeout(() => attempt(tries + 1), 50);
      }
    };
    if (pathname !== '/') {
      navigate('/');
      setTimeout(attempt, 150);
    } else {
      attempt();
    }
  };

  return (
    <header
      className="sticky top-0 z-[60] w-full bg-[#F7F7F7] border-b border-gray-200/60"
      role="banner"
    >
      <div className="w-full max-w-[1190px] mx-auto px-4 sm:px-6 min-[1240px]:px-0">
        <div className="flex items-center justify-between h-[60px] sm:h-[64px]">
          <div className="flex items-center gap-6 lg:gap-8">
            <a
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="Orakis - Go to homepage"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <OrakisMark size={32} className="relative flex-shrink-0" />
              <span
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="font-bold whitespace-nowrap text-xl sm:text-2xl tracking-widest uppercase text-[#171717]"
              >
                Orakis
              </span>
            </a>

            <nav
              className="hidden md:flex items-center gap-1"
              role="navigation"
              aria-label="Page sections"
            >
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`/#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(s.id);
                  }}
                  className="text-[13px] font-sans font-medium transition-all duration-150 whitespace-nowrap rounded-[6px] px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-[#F2F2F2]"
                  aria-current={activeSection === s.id ? 'page' : undefined}
                >
                  {s.label}
                </a>
              ))}
              <a
                href="/pricing"
                className="text-[13px] font-sans font-medium text-gray-500 hover:text-gray-700 hover:bg-[#F2F2F2] transition-all duration-150 whitespace-nowrap rounded-[6px] px-3 py-2"
              >
                Pricing
              </a>
            </nav>
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={APP_URL}
              aria-label="Log in to Orakis app"
              className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-[6px] bg-white border border-gray-200 text-[13px] font-sans font-medium text-gray-700 whitespace-nowrap"
              style={BUTTON_SHADOW}
            >
              Log in
            </a>
            <a
              href="/pricing"
              aria-label="Sign up"
              className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-[6px] bg-[#171717] border border-[#171717] text-[13px] font-sans font-medium text-white whitespace-nowrap shrink-0"
              style={BUTTON_SHADOW}
            >
              Sign up
            </a>

            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-[6px] hover:bg-[#EBEBEB] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={cn(
                  'block w-5 h-[1.5px] bg-[#171717] transition-all duration-200 origin-center',
                  menuOpen && 'translate-y-[6.5px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'block w-5 h-[1.5px] bg-[#171717] transition-all duration-200',
                  menuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'block w-5 h-[1.5px] bg-[#171717] transition-all duration-200 origin-center',
                  menuOpen && '-translate-y-[6.5px] -rotate-45',
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-[59] bg-[#F7F7F7] flex flex-col">
          <nav className="flex-1 px-5 pt-4 flex flex-col overflow-y-auto">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`/#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(s.id);
                }}
                className="text-[17px] font-medium text-gray-800 py-4 border-b border-gray-100"
              >
                {s.label}
              </a>
            ))}
            <a
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="text-[17px] font-medium text-gray-800 py-4 border-b border-gray-100"
            >
              Pricing
            </a>
          </nav>
          <div className="px-5 pb-8 pt-4 flex flex-col gap-3">
            <a
              href="/lets-talk"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center h-12 rounded-[8px] bg-white border border-gray-200 text-[15px] font-medium text-gray-700"
              style={BUTTON_SHADOW}
            >
              Let's Talk
            </a>
            <a
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center h-12 rounded-[8px] bg-[#171717] text-[15px] font-medium text-white"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
