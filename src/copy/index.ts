import { siteEn } from './site.en';
import { siteDe } from './site.de';

export type Lang = 'en' | 'de';

/* The English dictionary is the schema. Every other language is annotated with
   `Copy`, so a missing or misspelled key fails the build instead of quietly
   rendering English on a German page. */
const en = siteEn;
export type Copy = typeof en;

const de: Copy = siteDe;

export const COPY: Record<Lang, Copy> = { en, de };
