import type { Lang } from '../../../../lib/i18n';
import type { Entry, EntryType } from './data';

/**
 * German for the knowledge-base fixture.
 *
 * Keyed by entry id, not by the English string: the bodies are prose and ids
 * are the only thing in the fixture that is genuinely stable. Every `[[link]]`
 * inside a German body must match the German `title` of the entry it points at
 * — the graph resolves edges by title, so a mismatched link silently drops an
 * edge. `npm run build` will not catch that; the check in scripts/ does.
 */
const DE: Record<string, { title: string; content: string }> = {
  northwind: {
    title: 'Northwind Energy',
    content:
      "Enterprise-Kunde seit 2024. Der dreijährige Rahmenvertrag hat vor zwei Tagen die Rechtsabteilung passiert und wartet seit gestern auf Alex' Gegenzeichnung — die offenen Punkte stehen in [[Rahmenvertrag — Redlines]]. Sarah Kim betreut die Beziehung, und alles, woran der Abschluss hängt, steht in [[Umsatzschub Q3]].",
  },
  'nw-redlines': {
    title: 'Rahmenvertrag — Redlines',
    content:
      'Haftungsobergrenze und Kündigungsfrist. Die Rechtsabteilung hat vor zwei Tagen geantwortet; alles unterhalb der Liste braucht zuerst [[Richtlinie zur Rabattuntergrenze]].',
  },
  'nw-priya': {
    title: 'Priya Raman — CTO bei Northwind',
    content:
      'Entscheidet über Architektur, nicht über den Preis. Will vor jedem Gespräch eine schriftliche Zusammenfassung — siehe [[Briefing vor einem Termin mit der Geschäftsleitung]].',
  },
  'nw-marcus': {
    title: 'Marcus Feld — Einkauf bei Northwind',
    content:
      'Verantwortet den Sicherheitsfragebogen. Nichts wird unterschrieben, bevor [[SOC-2-Nachweisliste]] durch ist.',
  },
  'nw-onboard': {
    title: 'Onboarding — Ops-Team von Northwind',
    content:
      'Zugänge, Umgebungen und der Fragebogen aus [[SOC-2-Nachweisliste]]. Entspricht [[Kunden-Onboarding — Standard]].',
  },
  'nw-renewal': {
    title: 'Northwind — Verlängerungsfahrplan',
    content:
      'Das Kündigungsfenster öffnet im Oktober. Bis dahin muss alles in [[Preisstufen 2026]] Bestand haben.',
  },
  'nw-pricing': {
    title: 'Northwind — Preishistorie',
    content:
      'Was sie seit 2024 pro Platz gezahlt haben, und die zwei Rabatte, die wir mitten in der Laufzeit gewährt haben.',
  },
  'nw-escal': {
    title: 'Northwind — Support-Eskalationen',
    content:
      'Jede Eskalation seit dem Pilotprojekt, und welche davon wir selbst verursacht haben. Ist in [[Postmortems zu Eskalationen]] eingeflossen.',
  },
  harborline: {
    title: 'Harborline Logistics',
    content:
      'Zweitgrößter Kunde. Der Einkauf fährt dasselbe Drehbuch wie [[Northwind Energy]], deshalb kommt der Sicherheitsfragebogen vor dem Angebot.',
  },
  'hl-pilot': {
    title: 'Harborline — Pilotumfang',
    content: 'Zwei Depots, neunzig Tage, eine Erfolgskennzahl, auf die sich alle wirklich geeinigt haben.',
  },
  'hl-dana': {
    title: 'Dana Okoro — Ops-Leitung bei Harborline',
    content: 'Die einzige Person, die einen Rollout freigeben kann. Liest alles, antwortet in einer Zeile.',
  },
  'hl-integration': {
    title: 'Harborline — Telemetrie-Anbindung',
    content:
      'Ihr Depot-Feed in unsere Ingestion. Dieselbe Form, die [[Migration der Datenplattform]] für alle haben will.',
  },
  'hl-renewal': {
    title: 'Harborline — Verlängerungsrisiko',
    content:
      'Sie wandern ab, sobald der Fürsprecher geht. Der Fürsprecher ist [[Dana Okoro — Ops-Leitung bei Harborline]].',
  },
  cavendish: {
    title: 'Cavendish Retail',
    content:
      'Im März unterschrieben, noch im Onboarding. Langsamer als [[Harborline Logistics]], weil ihre Daten an vier Orten liegen — siehe [[Migration der Datenplattform]].',
  },
  'cv-rollout': {
    title: 'Cavendish — Rollout-Plan für die Filialen',
    content:
      'Vierzig Filialen in drei Wellen. Welle eins ist die Belastungsprobe für [[Kunden-Onboarding — Standard]].',
  },
  'cv-owner': {
    title: 'Ines Bauer — Programmleitung bei Cavendish',
    content: 'Verantwortet den Rollout intern. Will ein wöchentliches schriftliches Update, kein Gespräch.',
  },
  'cv-data': {
    title: 'Cavendish — Befunde zur Datenqualität',
    content:
      'Vier Systeme, drei Schreibweisen pro Filiale. Der Grund, warum es [[Migration der Datenplattform]] gibt.',
  },
  ardent: {
    title: 'Ardent Manufacturing',
    content:
      'In der Endphase. Ihre Rechtsabteilung hat die Redlines von [[Northwind Energy]] fast wörtlich übernommen, deshalb beantwortet [[Rahmenvertrag — Redlines]] das meiste davon.',
  },
  'ar-security': {
    title: 'Ardent — Sicherheitsprüfung',
    content: 'Derselbe Fragebogen, strengerer Prüfer. Alles kommt aus [[SOC-2-Nachweisliste]].',
  },
  'ar-tomas': {
    title: 'Tomas Brandt — CFO bei Ardent',
    content: 'Unterschreibt den Vertrag. Interessiert sich nur für die Zahl in [[Preisstufen 2026]].',
  },
  vellum: {
    title: 'Vellum Publishing',
    content:
      'Klein, laut, nützlich: Sie schreiben die besten Fehlerberichte, die wir bekommen. Fließt in [[Postmortems zu Eskalationen]] ein.',
  },
  've-usage': {
    title: 'Vellum — Nutzungsmuster',
    content:
      'Sie nutzen zu neunzig Prozent eine einzige Funktion. Wegen dieser Funktion gibt es in [[Preisstufen 2026]] überhaupt eine Nutzungsgrenze.',
  },
  kestrel: {
    title: 'Kestrel Foods',
    content:
      'Über Reseller, nicht direkt — die Konditionen kommen aus [[Partnerprogramm — Reseller-Stufen]].',
  },
  'ke-margin': {
    title: 'Kestrel — Ausnahme bei der Marge',
    content:
      'Einmal genehmigt, 4 Punkte über Band, unter der Bedingung, dass es nie Präzedenzfall wird. Es wurde Präzedenzfall — siehe [[Richtlinie zur Rabattuntergrenze]].',
  },
  lumen: {
    title: 'Lumen Health',
    content:
      'Reguliert: Ohne [[SOC-2-Nachweisliste]] und den AVV in [[Auftragsverarbeitungsvertrag]] bewegt sich nichts.',
  },
  'lu-dpa': {
    title: 'Lumen — Änderungen am AVV',
    content:
      'Zwei Klauseln akzeptieren wir, eine niemals. Die, die wir niemals akzeptieren, steht in [[Auftragsverarbeitungsvertrag]].',
  },
  brightpath: {
    title: 'Brightpath Education',
    content:
      'Nur Pilotprojekt. Der Grund, warum [[Preisstufen 2026]] überhaupt ein Bildungsband hat.',
  },
  pricing: {
    title: 'Preisstufen 2026',
    content:
      'Drei Stufen, neu um die Nutzungsgrenzen herum gebaut. Nie unter Liste anbieten, ohne [[Richtlinie zur Rabattuntergrenze]] gelesen zu haben. Das Bildungsband gibt es wegen [[Brightpath Education]].',
  },
  'pr-caps': {
    title: 'Nutzungsgrenzen — wie sie entstanden sind',
    content:
      'Die Grenze ist das 90. Perzentil der tatsächlichen Nutzung, keine Schätzung. Die Form kam von [[Vellum — Nutzungsmuster]].',
  },
  'pr-floor': {
    title: 'Richtlinie zur Rabattuntergrenze',
    content:
      'Nichts unter Liste ohne schriftliche Begründung. [[Kestrel — Ausnahme bei der Marge]] zeigt, was passiert, wenn wir das überspringen.',
  },
  'pr-migration': {
    title: 'Stufenwechsel — Bestandskunden',
    content:
      'Wer wechselt, wer Bestandsschutz behält, und was wir [[Northwind Energy]] zur Verlängerung sagen.',
  },
  partner: {
    title: 'Partnerprogramm — Reseller-Stufen',
    content:
      'Margenbänder, Zertifizierungsanforderungen und wer die ersten fünf unterschriebenen Partner betreut. Hängt an [[Preisstufen 2026]].',
  },
  'pt-cert': {
    title: 'Zertifizierungspfad für Partner',
    content:
      'Drei Module, eine Prüfung, jährlich erneuert. Aufgebaut auf [[Kunden-Onboarding — Standard]].',
  },
  'pt-margins': {
    title: 'Margenbänder für Reseller',
    content:
      'Vier Bänder nach Volumen. Unterhalb von Band vier verkaufen wir direkt — [[Kestrel Foods]] ist die Ausnahme.',
  },
  'usage-api': {
    title: 'API zur Nutzungsmessung',
    content:
      'Womit die Grenzen aus [[Preisstufen 2026]] tatsächlich gemessen werden. Verantwortet vom Plattform-Team.',
  },
  'ua-accuracy': {
    title: 'Genauigkeit der Messung — bekannte Lücken',
    content:
      'Zwei Ereignisse werden bei Wiederholungen doppelt gezählt. In Staging behoben, in [[Migration der Datenplattform]] noch nicht.',
  },
  sso: {
    title: 'SSO-/SAML-Unterstützung',
    content:
      'Pflicht für jeden Kunden oberhalb des mittleren Bands. [[Ardent Manufacturing]] hat es zur Bedingung gemacht.',
  },
  eu: {
    title: 'Gründung der EU-Gesellschaft',
    content:
      'Erst die Gesellschaft, dann der Mietvertrag, dann die lokale Recruiting-Pipeline. [[Mietvertrag Büro München]] ist derzeit der Engpass, und eine zweite Gesellschaft bedeutet einen zweiten Durchgang bei [[Auftragsverarbeitungsvertrag]].',
  },
  'eu-payroll': {
    title: 'Lohnabrechnung EU — Wahl des Anbieters',
    content: 'Zwei Anbieter, einer deckt DE und AT gemeinsam ab. Der gewinnt.',
  },
  'eu-hiring': {
    title: 'München — die ersten drei Einstellungen',
    content:
      'Eine Leitung, zwei Engineers. Die Leitung muss stehen, bevor [[Mietvertrag Büro München]] anfängt, Geld zu kosten.',
  },
  soc2: {
    title: 'SOC-2-Nachweisliste',
    content:
      'Zugriffsprüfungen, Change-Management und die Dienstleisterliste. Zwei Auditor-Hinweise sind noch offen — siehe [[Dienstleisterliste — 2026]]. Jede Sicherheitsprüfung eines Kunden beginnt hier, von [[Northwind Energy]] bis [[Lumen Health]].',
  },
  'soc-access': {
    title: 'Quartalsweise Zugriffsprüfung',
    content:
      'Wer Produktionszugriff hat und warum. Neunzig Minuten, wenn [[Dienstleisterliste — 2026]] aktuell ist.',
  },
  'soc-vendors': {
    title: 'Dienstleisterliste — 2026',
    content:
      'Jeder Unterauftragsverarbeiter, worauf er zugreift und welcher AVV ihn abdeckt — siehe [[Auftragsverarbeitungsvertrag]].',
  },
  'soc-change': {
    title: 'Change-Management — Nachweiskette',
    content: 'Was der Auditor tatsächlich verlangt hat, im Gegensatz zu dem, was wir vermutet hatten.',
  },
  onboarding: {
    title: 'Kunden-Onboarding — Standard',
    content:
      'Der Weg, den jeder Kunde geht: Kickoff, Umgebungen, Fragebogen, erster Nutzen. [[Cavendish — Rollout-Plan für die Filialen]] ist die Belastungsprobe.',
  },
  'on-kickoff': {
    title: 'Kickoff — die ersten 30 Minuten',
    content: 'Namen, Entscheidungsbefugnisse und die eine Kennzahl, an der sie uns messen werden.',
  },
  'on-value': {
    title: 'Erster Nutzen — was zählt',
    content:
      'Nicht der Login. Nicht die Einrichtung. Der erste Bericht, den sie an ihre eigene Führung schicken.',
  },
  dpa: {
    title: 'Auftragsverarbeitungsvertrag',
    content:
      'Unser Standard-AVV und die zwei Klauseln, über die wir verhandeln. [[Lumen — Änderungen am AVV]] ist der schwierige Fall.',
  },
  incident: {
    title: 'Incident Response — Rufbereitschaft',
    content:
      'Wer alarmiert wird, was diese Person sagt und wann der Kunde davon erfährt. Fließt in [[Postmortems zu Eskalationen]] ein.',
  },
  'in-sev': {
    title: 'Schweregrade — die ehrliche Fassung',
    content: 'Sev 1 heißt, jemand ist wach. Alles andere kann bis zum Morgen warten.',
  },
  'hiring-loop': {
    title: 'Einstellungsprozess — Engineering',
    content:
      'Vier Stufen, ein Maßstab, schriftliche Nachbesprechung vor der Runde. Denselben Prozess nutzt [[München — die ersten drei Einstellungen]].',
  },
  munich: {
    title: 'Mietvertrag Büro München',
    content:
      '12 Jahre Laufzeit in der Maximilianstraße mit Sonderkündigungsrecht im fünften Jahr. Der Makler will innerhalb weniger Tage eine Antwort, und die Recruiting-Pipeline in [[Gründung der EU-Gesellschaft]] kann nicht starten, bevor unterschrieben ist.',
  },
  'mu-terms': {
    title: 'Mietkonditionen — Quadratmeter und Mietstaffel',
    content: 'Quadratmeter, der Staffelplan und die Obergrenze für die Nebenkosten.',
  },
  'mu-alt': {
    title: 'München — die Option, die wir ausgeschlagen haben',
    content:
      'Günstiger, kleiner, falsche Seite der Isar. Wieder ein Thema, falls [[München — die ersten drei Einstellungen]] sich verzögert.',
  },
  'build-buy': {
    title: 'Make or Buy — Analytics',
    content:
      'Wir kaufen. Neu bewerten, sobald die Anbieterrechnung zwei Engineers pro Jahr übersteigt. Hängt mit [[Migration der Datenplattform]] zusammen.',
  },
  region: {
    title: 'EU-Datenstandort — wo wir hosten',
    content:
      'Frankfurt, nicht Dublin, weil [[Lumen Health]] danach gefragt hat und [[Auftragsverarbeitungsvertrag]] das Ja billig gemacht hat.',
  },
  'support-tiers': {
    title: 'Support-Stufen — was wir zusagen',
    content:
      'Reaktionszeiten je Band. Nur das oberste Band hat einen namentlich benannten Menschen, und der ist in [[Preisstufen 2026]] eingepreist.',
  },
  'roadmap-q3': {
    title: 'Q3-Roadmap — was gestrichen wurde',
    content:
      'Zwei Features gestrichen, damit [[Migration der Datenplattform]] ausgeliefert werden konnte. Die Streichliste ist der interessante Teil.',
  },
  relaunch: {
    title: 'Briefing für den Website-Relaunch',
    content:
      'Positionierung, Sitemap und das Text-Deck, auf dem der Relaunch läuft — gestern freigegeben, damit die Website live ist, bevor der Umsatzschub Landingpages braucht. Der Text der Preisseite kommt direkt aus [[Preisstufen 2026]].',
  },
  'rl-positioning': {
    title: 'Positionierung — der eine Satz',
    content:
      'Vier Wochen und elf Entwürfe. Der Gewinner stammte aus einem Support-Ticket.',
  },
  'rl-pricing-page': {
    title: 'Preisseite — offene Fragen',
    content:
      'Zeigen wir die Grenzen? [[Nutzungsgrenzen — wie sie entstanden sind]] sagt ja, der Vertrieb sagt nein.',
  },
  dataplat: {
    title: 'Migration der Datenplattform',
    content:
      'Ein Warehouse statt vier Pipelines. [[Cavendish — Befunde zur Datenqualität]] ist der Grund, warum es finanziert wurde, und [[Genauigkeit der Messung — bekannte Lücken]] der Grund, warum es dringend ist.',
  },
  'dp-cutover': {
    title: 'Umstellungsplan — die kritische Stunde',
    content: 'Was parallel läuft, was bricht und wer Stopp sagt.',
  },
  'dp-cost': {
    title: 'Migration — Kostenmodell',
    content: 'Ab Monat sieben günstiger. Monat eins bis sechs ist die Diskussion.',
  },
  q3push: {
    title: 'Umsatzschub Q3',
    content:
      '[[Northwind Energy]] und [[Ardent Manufacturing]] abschließen, wiederkehrenden Umsatz um 30 % steigern. Alles andere wartet.',
  },
  brand: {
    title: 'Marken-Refresh — Phase zwei',
    content:
      'Die Teile von [[Briefing für den Website-Relaunch]], die in Phase eins nicht mehr hineinpassten.',
  },
  sarah: {
    title: 'Sarah Kim — Account-Leitung',
    content:
      'Verantwortet [[Northwind Energy]] und die Hälfte von [[Umsatzschub Q3]]. Vor jedem Angebot mit ihr sprechen.',
  },
  daniel: {
    title: 'Daniel Ross — Marketing',
    content:
      "Verantwortet [[Briefing für den Website-Relaunch]]. Hat Alex in diesem Quartal den Compliance-Papierkram abgenommen.",
  },
  emma: {
    title: 'Emma Clarke — Operations',
    content:
      'Leitet [[Gründung der EU-Gesellschaft]] und die Audit-Seite von [[SOC-2-Nachweisliste]].',
  },
  raj: {
    title: 'Raj Patel — Plattform-Leitung',
    content:
      'Verantwortet [[Migration der Datenplattform]] und [[API zur Nutzungsmessung]]. Der Engpass, und er weiß es — [[Einstellungsprozess — Engineering]] ist der Plan, keiner mehr zu sein.',
  },
  postmortems: {
    title: 'Postmortems zu Eskalationen',
    content:
      'Jede Eskalation, ihre Ursache, was wir geändert haben. Die meisten lassen sich darauf zurückführen, dass [[Kunden-Onboarding — Standard]] übersprungen wurde.',
  },
  'pm-pattern': {
    title: 'Das Muster hinter den meisten Eskalationen',
    content:
      'Niemand hat aufgeschrieben, wer entscheidet. [[Kickoff — die ersten 30 Minuten]] fragt das jetzt ab.',
  },
  'exec-brief': {
    title: 'Briefing vor einem Termin mit der Geschäftsleitung',
    content:
      'Eine Seite, drei Zahlen, eine Bitte. [[Priya Raman — CTO bei Northwind]] hat uns das auf die harte Tour beigebracht.',
  },
  'discount-lesson': {
    title: 'Was Rabatte wirklich kosten',
    content:
      'Zwei Punkte Marge sind ein Engineer. [[Richtlinie zur Rabattuntergrenze]] gibt es wegen dieser Notiz.',
  },
  'churn-signals': {
    title: 'Abwanderungssignale, die wir immer übersehen',
    content:
      'Der Fürsprecher wird sechs Wochen vor der Kündigung still. [[Harborline — Verlängerungsrisiko]] ist das laufende Beispiel.',
  },
  'demo-lesson': {
    title: 'Demos, die ankommen',
    content:
      'Ihre Daten zeigen, nicht unsere. Kostet zwanzig Minuten Vorbereitung und verdoppelt die Abschlussquote. Es ist dieselbe Vorbereitung, die [[Kickoff — die ersten 30 Minuten]] verlangt.',
  },
  competitors: {
    title: 'Wettbewerbsnotizen — 2026',
    content:
      'An wen wir verlieren und warum. Zwei der drei Gründe stehen in [[Preisstufen 2026]].',
  },
  glossary: {
    title: 'Glossar — was wir womit meinen',
    content:
      'Account, Workspace, Platz, Mandant. Vier Wörter, vier vermiedene Diskussionen. Entstanden während [[Kunden-Onboarding — Standard]], nachdem wir zum dritten Mal Verschiedenes gemeint hatten.',
  },
  'board-q2': {
    title: 'Beirats-Update — Q2',
    content:
      'Die drei Folien, auf die es ankam: [[Umsatzschub Q3]], [[Gründung der EU-Gesellschaft]], [[Migration der Datenplattform]].',
  },
  tooling: {
    title: 'Tooling — wofür wir zahlen',
    content:
      'Jedes Abo und wer es nutzt. Überschneidet sich stärker mit [[Dienstleisterliste — 2026]], als es sollte.',
  },
};

const TYPE_LABEL: Record<Lang, Record<EntryType, string>> = {
  en: {
    note: 'Note',
    customer: 'Customer',
    process: 'Process',
    project: 'Project',
    person: 'Person',
    decision: 'Decision',
    learning: 'Learning',
    product: 'Product',
  },
  de: {
    note: 'Notiz',
    customer: 'Kunde',
    process: 'Prozess',
    project: 'Projekt',
    person: 'Person',
    decision: 'Entscheidung',
    learning: 'Erkenntnis',
    product: 'Produkt',
  },
};

export const typeLabel = (t: EntryType, lang: Lang) => TYPE_LABEL[lang][t] ?? TYPE_LABEL[lang].note;

/** The fixture in the active language, ids and structure untouched. */
export const localizeEntries = (entries: Entry[], lang: Lang): Entry[] =>
  lang === 'en'
    ? entries
    : entries.map((e) => {
        const de = DE[e.id];
        return de ? { ...e, title: de.title, content: de.content } : e;
      });

const UI = {
  en: {
    search: 'Search knowledge...',
    allTypes: 'All types',
    subpages: 'subpages',
    subpage: 'subpage',
    backlinks: 'Backlinks',
    graphTitle: 'Knowledge graph',
  },
  de: {
    search: 'Wissen durchsuchen …',
    allTypes: 'Alle Typen',
    subpages: 'Unterseiten',
    subpage: 'Unterseite',
    backlinks: 'Rückverweise',
    graphTitle: 'Wissensgraph',
  },
};

export const knowledgeUi = (lang: Lang) => UI[lang];
