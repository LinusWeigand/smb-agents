import type { RefObject } from 'react';
import { HONEYPOT_NAME } from '../lib/formGuards';

/**
 * Bot trap. Positioned far off-screen rather than `display: none`, because
 * some bots skip hidden inputs but happily fill positioned ones. Hidden from
 * assistive tech and removed from the tab order so nobody reaches it by
 * accident.
 */
export function HoneypotField({ inputRef }: { inputRef: RefObject<HTMLInputElement | null> }) {
  return (
    <div aria-hidden={true} className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor={HONEYPOT_NAME}>Company website</label>
      <input
        ref={inputRef}
        id={HONEYPOT_NAME}
        name={HONEYPOT_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
