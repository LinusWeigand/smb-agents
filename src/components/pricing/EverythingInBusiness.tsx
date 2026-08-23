import { useT } from '../../lib/i18n';

/**
 * "Everything in Business" — the full capability grid under the plan cards.
 *
 * One tick glyph rendered per label, rather than the twelve hand-copied SVG
 * blocks the recovered prerender carried.
 */
export function EverythingInBusiness() {
  const t = useT();

  return (
    <>
      <h2
        className="font-display font-medium text-2xl md:text-4xl text-gray-900 leading-[1.15] text-center mb-8 md:mb-10"
        style={{ letterSpacing: '-0.02em' }}
      >
        {t.pricing.everything.heading}
      </h2>
      <div className="rounded-[6px] border border-gray-200 bg-white p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 min-[1060px]:grid-cols-3">
          {t.pricing.everything.items.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-check-big w-3.5 h-3.5 text-gray-900 shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="text-[13px] font-sans text-gray-500">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
