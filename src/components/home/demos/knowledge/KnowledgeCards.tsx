import { CornerDownRight, EllipsisVertical, Pin } from 'lucide-react';
import { ENTRIES, ROOT_ENTRIES, SUBPAGE_COUNT, preview, typeInfo } from './data';
import { localizeEntries, typeLabel } from './i18n';
import { useLang } from '../../../../lib/i18n';

/**
 * The knowledge-base card grid.
 *
 * The recovered prerender carried forty hand-copied copies of this card; this
 * is that markup once, rendered from ENTRIES. Sub-page counts and preview text
 * are derived, so they follow the fixture instead of drifting from it.
 */
export function KnowledgeCards() {
  const { lang } = useLang();
  const entries = localizeEntries(ENTRIES, lang);
  const byId = new Map(entries.map((e) => [e.id, e]));
  const roots = ROOT_ENTRIES.map((r) => byId.get(r.id)!).filter(Boolean);

  return (
    <div className="grid grid-cols-2 gap-3">
      {roots.map((entry) => {
        const info = typeInfo(entry.type);
        const children = SUBPAGE_COUNT.get(entry.id) ?? 0;
        const pinned = 'pinned' in entry && (entry as { pinned?: boolean }).pinned;

        return (
          <div
            key={entry.id}
            className="group flex cursor-pointer flex-col rounded-lg border border-[#3D3D3D] bg-[#2C2C2B] transition-shadow hover:shadow-md"
          >
            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="flex items-center gap-1.5 truncate text-[16px] font-semibold leading-tight text-[#FAFAFA]">
                    {pinned && <Pin className="h-3.5 w-3.5 shrink-0 fill-amber-500 text-amber-500" />}
                    {entry.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded border border-[#FAFAFA]/15 px-1.5 py-0 text-[10px] text-[#FAFAFA]/70">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-[2px]"
                        style={{ backgroundColor: info.color }}
                      />
                      {typeLabel(entry.type, lang)}
                    </span>
                    {children > 0 && (
                      <span className="flex items-center gap-0.5 text-[10px] text-[#8C8C8C]">
                        <CornerDownRight className="h-3 w-3" />
                        {children}
                      </span>
                    )}
                  </div>
                </div>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[#8C8C8C]/50 opacity-0 transition-all duration-150 hover:bg-white/10 hover:text-[#FAFAFA] group-hover:opacity-100">
                  <EllipsisVertical className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="line-clamp-3 text-[14px] leading-normal text-[#8C8C8C]">
                {preview(entry.content)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
