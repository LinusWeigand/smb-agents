import { useState } from 'react';
import { FAQ_ITEMS } from '../../lib/faq';

/**
 * Single-open accordion.
 *
 * The panel animates on `grid-template-rows` between 0fr and 1fr rather than on
 * height, which is what lets it slide open to its natural content height
 * without anyone having to measure it. The child needs `min-h-0` or the grid
 * row refuses to shrink below the content's intrinsic height and nothing moves.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-0 pb-0 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2
          className="font-display font-medium text-2xl md:text-4xl text-gray-900 leading-[1.15] text-center mb-[75px]"
          id="faq-heading"
          style={{ letterSpacing: '-0.02em' }}
        >
          FAQs
        </h2>

        <div className="relative flex w-full flex-col">
          {FAQ_ITEMS.map((item, i) => {
            const expanded = openIndex === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden border-t border-black/10 last:border-b last:border-black/10"
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  data-expanded={expanded ? '' : undefined}
                  onClick={() => setOpenIndex(expanded ? null : i)}
                  className="group w-full py-5 text-left focus:outline-none group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-base text-gray-900 leading-snug font-serif">
                      {item.question}
                    </span>
                    {/* One plus glyph that rotates 45° into a cross when open. */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus h-4 w-4 text-black/40 flex-shrink-0 transition-transform duration-300 group-data-[expanded]:rotate-45"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div
                      className={`transition-opacity duration-200 ${
                        expanded ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className="text-gray-500 text-base leading-relaxed pb-5 pr-8 whitespace-pre-line font-sans">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
