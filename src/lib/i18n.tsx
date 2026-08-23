import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { COPY, type Copy, type Lang } from '../copy';

export type { Lang };

const STORAGE_KEY = 'orakis:lang';

/** English is the default: a first-time visitor with no stored choice gets EN. */
const DEFAULT_LANG: Lang = 'en';

function readStored(): Lang {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw === 'de' || raw === 'en' ? raw : DEFAULT_LANG;
  } catch {
    // Private mode: fall back to the default rather than crashing the app.
    return DEFAULT_LANG;
  }
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Copy };

const LanguageContext = createContext<Ctx | null>(null);

/**
 * Site language.
 *
 * The choice is client-side state, persisted to localStorage, and it does not
 * change the URL — every route serves both languages. `<html lang>` is kept in
 * step so screen readers and the browser's own translation prompt read the page
 * as what it actually is.
 *
 * The legal routes are deliberately exempt: Impressum, Datenschutzerklärung and
 * AGB are the binding German originals and stay German in either setting.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not persisting is survivable — the choice still holds for this session.
    }
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: COPY[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useCtx(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang/useT must be used inside <LanguageProvider>');
  return ctx;
}

export function useLang() {
  const { lang, setLang } = useCtx();
  return { lang, setLang };
}

/** The copy dictionary for the active language. */
export function useT(): Copy {
  return useCtx().t;
}

/** Locale tag for Intl formatting (dates, numbers) in the active language. */
export const localeOf = (lang: Lang) => (lang === 'de' ? 'de-DE' : 'en-US');
