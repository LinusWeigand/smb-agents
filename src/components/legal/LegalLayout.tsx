import type { ReactNode } from 'react';
import { Container } from '../Container';

/**
 * Shared chrome for the legal routes (/legal-notice, /privacy-policy,
 * /terms-of-service).
 *
 * The body copy on these pages is German on purpose: it is the operator's
 * binding legal text, carried over verbatim from couchtec.com, and translating
 * it would change what it says. `lang="de"` scopes that to the prose so the
 * rest of the site stays announced as English.
 */
export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <main className="relative z-10 w-full flex-1 mx-auto px-4 sm:px-6 min-[1240px]:px-0 pt-10 pb-24 max-w-[760px]">
        <h1
          className="font-display text-[2.2rem] sm:text-4xl md:text-5xl"
          style={{ color: '#171717', letterSpacing: '-0.02em', lineHeight: '1.1' }}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-3 text-base font-sans font-normal text-gray-500 leading-relaxed">
            {intro}
          </p>
        )}
        <div lang="de" className="mt-10">
          {children}
        </div>
      </main>
    </Container>
  );
}

/** Top-level section heading (the `##` level of the source documents). */
export function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-display text-2xl sm:text-[28px] mt-12 first:mt-0 mb-4"
      style={{ color: '#171717', letterSpacing: '-0.01em', lineHeight: '1.2' }}
    >
      {children}
    </h2>
  );
}

/** Sub-heading inside a section (the `###` level of the source documents). */
export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-lg font-semibold text-[#171717] mt-8 mb-3">{children}</h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[15px] leading-[1.75] text-gray-600 mt-4 first:mt-0">
      {children}
    </p>
  );
}

/** Tight block for postal addresses and contact lines — no paragraph spacing. */
export function AddressBlock({ lines }: { lines: string[] }) {
  return (
    <address className="not-italic font-sans text-[15px] leading-[1.75] text-gray-600 mt-4">
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </address>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 font-sans text-[15px] leading-[1.75] text-gray-600 list-disc pl-5 marker:text-gray-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** The `---` separators the source documents use between blocks. */
export function Rule() {
  return <hr className="mt-10 border-0 h-px bg-gray-200" />;
}
