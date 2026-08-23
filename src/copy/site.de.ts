/**
 * German copy for the marketing site.
 *
 * Mirrors site.en.ts key for key — `Copy` is derived from the English file, so
 * anything missing or misnamed here is a compile error rather than an English
 * string leaking onto the German page.
 *
 * Register: "Sie" throughout, matching the legal pages.
 */
export const siteDe = {
  tagline: 'Projekte planen, Aufgaben steuern und Antworten aus Ihren Daten erhalten.',

  nav: {
    product: 'Produkt',
    overview: 'Überblick',
    faq: 'FAQ',
    pricing: 'Preise',
    login: 'Anmelden',
    signUp: 'Registrieren',
    letsTalk: 'Gespräch vereinbaren',
    logoAria: 'Orakis – zur Startseite',
    sectionsAria: 'Seitenabschnitte',
    loginAria: 'In der Orakis-App anmelden',
    signUpAria: 'Registrieren',
    demoAria: 'Demo anfragen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    languageAria: 'Sprache',
    switchToEnglish: 'Switch to English',
    switchToGerman: 'Auf Deutsch umschalten',
    skipToContent: 'Zum Hauptinhalt springen',
    homeAria: 'Startseite',
  },

  home: {
    seoTitle: 'Orakis – Das Firmengehirn für Aufgaben und Wissen',
    seoDescription:
      'Projekte planen, Aufgaben steuern und Antworten aus Ihren Daten erhalten. Orakis ist das Firmengehirn, das Ihr Team auf das Wesentliche ausrichtet.',
  },

  hero: {
    subtitle: 'Wissen, was läuft, was zu tun ist und wann es dran ist.',
    ycLink: 'Die These hinter Orakis, beschrieben von Y Combinator',
    marquee: [
      [
        'Jonas hat seine 3 Aufgaben heute vorzeitig abgeschlossen',
        'Investoren-Update fertig, wartet auf Ihre Freigabe',
        'Das Team hat heute 94 % der geplanten Aufgaben erledigt',
        '2 strategische Entscheidungen brauchen diese Woche Ihren Input. Alles andere ist erledigt.',
      ],
      [
        'Das Team hat diese Woche 3 neue Features pünktlich ausgeliefert',
        'Jedes Teammitglied hat heute eine klare Priorität',
        'Umsatz diese Woche 18 % höher. Ora hat den Report an den Beirat geschickt',
        'Ein Risiko in der Q4-Roadmap wurde erkannt und neu zugewiesen, bevor es eskalierte.',
      ],
      [
        'Ora hat eine Marktlücke in Ihrem Segment gefunden. Zusammenfassung liegt bereit.',
        'Alle offenen Aufgaben sind zugewiesen. Niemand wartet.',
        'Kundenfeedback ausgewertet: Zufriedenheit diese Woche bei 4,8',
        'Das Weekly wurde zusammengefasst und ans Team geschickt. Sie sind auf dem Stand.',
      ],
    ],
  },

  features: {
    briefing: {
      heading: 'Starten Sie den Tag mit einem Briefing',
      body: 'Sie wissen, worauf es ankommt, wer auf Sie wartet und was genau zu tun ist. Orakis organisiert die Arbeit um Sie herum: Es räumt den Kalender neu, arbeitet Ihren Posteingang ab und hält Zeit für das frei, was wirklich zählt.',
    },
    autopilot: {
      heading: 'Ihr Unternehmen auf Autopilot',
      badge: 'Auch mit Freigabe durch Menschen möglich',
      body: 'Orakis koordiniert jede Aufgabe in Ihrem Team und hält alles effizient in Bewegung. Ihre Projekte laufen von selbst, ohne dass Sie jedem Schritt hinterherlaufen müssen.',
    },
    risk: {
      heading: 'Erkennen Sie das Risiko, bevor es zur Krise wird.',
      body: 'Orakis wertet Ihre Daten längst aus und weiß früher als Sie, was gerade passiert.',
    },
    asset: {
      heading: 'Sie bauen einen Wert auf.',
      body: 'Jede Quelle verdichtet sich zu einem zusammenhängenden Bild davon, wie Ihr Unternehmen arbeitet. Das Wissen Ihrer Leute muss das Haus nie mehr mit ihnen verlassen. Es ist die Infrastruktur, auf der Ihr Unternehmen läuft. KI-Agenten etwa bekommen damit endlich saubere Unternehmensdaten.',
    },
  },

  manageYourWork: {
    heading: 'Ihre Arbeit im Griff',
  },

  overview: {
    heading: 'Überblick',
    data: {
      title: 'Die Daten haben Sie längst. Lassen Sie sie arbeiten.',
      body: 'Ihre Aufgaben, Dokumente und Gespräche enthalten bereits den Kontext, den Orakis braucht, um Ihnen zu helfen.',
    },
    dots: {
      title: 'Orakis verbindet die Punkte, damit Sie es nicht tun müssen.',
      body: 'Ihre Daten werden automatisch sauber und strukturiert abgelegt: bereit für Ihre KI-Agenten und immer da, wenn Sie sie brauchen.',
    },
    tools: {
      title: 'Bestehende Tools einbinden',
      body: 'Orakis integriert sich in die Tools, die Ihr Team ohnehin nutzt.',
    },
    harbor: {
      title: 'Ihr LLM legt im Orakis-Hafen an',
      body: 'Welches Schiff Sie auch fahren: Es legt an und wird Container für Container mit Kontext aus Ihrem Company Brain beladen.',
    },
  },

  cta: {
    heading: 'Testen Sie Orakis jetzt.',
    body: 'Geben Sie Ihrem Team das Gehirn, mit dem es schneller vorankommt.',
  },

  faq: {
    heading: 'Häufige Fragen',
    items: [
      {
        question: 'Was ist Orakis?',
        answer:
          'Orakis ist das Firmengehirn für Aufgaben- und Wissensmanagement. Es merkt sich, was Sie und Ihr Team wissen, und behält im Blick, was erledigt wird: Projekte, Aufgaben, Entscheidungen, Kontext. Sie steuern Ihre Projekte und bauen dabei Ihr Wissen auf. Die KI sagt Ihnen, wo eine Entscheidung ansteht, und übernimmt Aufgaben für Sie. Menschen kommen und gehen. Orakis bleibt.',
      },
      {
        question: 'Welches Problem löst Orakis?',
        answer:
          'Die meisten Organisationen verlieren erhebliche Zeit durch Abstimmungsaufwand: Warten auf Updates, unklare Prioritäten, verstreute Informationen. Orakis beseitigt diese Engpässe, indem es den Datenaustausch automatisiert, Erkenntnisse in Echtzeit sichtbar macht und alle im Team auf das Wesentliche ausrichtet.',
      },
      {
        question: 'Wie hilft Orakis konkret?',
        answer:
          'Führungskräfte sehen jederzeit, was über Teams, Projekte und Personen hinweg passiert, während Teammitglieder immer genau wissen, woran sie arbeiten sollen, ohne nachfragen zu müssen. Das bedeutet schnellere und sicherere Entscheidungen auf Basis aktueller Kennzahlen und automatischer Berichte statt manueller Statusmeldungen. Orakis schafft Klarheit darüber, was zu tun ist, wann es dran ist und warum es zählt. Weil der Informationsfluss automatisiert läuft, entfällt das Rätselraten, und alle können sich auf wirkungsvolle Arbeit konzentrieren, statt Updates hinterherzujagen oder in Abstimmungsmeetings zu sitzen.',
      },
      {
        question: 'Kann ich Orakis kostenlos testen?',
        answer:
          'Ja. Sie können Orakis 7 Tage kostenlos testen, ohne Kreditkarte. Während der Testphase sind alle Funktionen freigeschaltet.',
      },
      {
        question: 'Wie lange dauert die Einrichtung?',
        answer: 'Weniger als 5 Minuten.',
      },
      {
        question: 'Mit welchen Tools lässt sich Orakis verbinden?',
        answer:
          'Orakis verbindet sich mit den Tools, die Sie schon nutzen, etwa Outlook, Gmail und Google Kalender. Weitere Integrationen sind in Arbeit. Über MCP können Sie außerdem Ihr eigenes LLM mitbringen, ob Claude, ChatGPT oder ein anderes System mit MCP-Unterstützung, und ihm direkten Zugriff auf Orakis geben.',
      },
      {
        question: 'Sind meine Daten sicher?',
        answer:
          'Ja. Ihre Daten liegen in Frankfurt am Main und werden bei der Übertragung verschlüsselt. Wir trainieren nicht damit und fassen sie nicht weiter an, als es der Betrieb Ihres Workspace erfordert. Ihre Daten bleiben Ihre Daten.',
      },
      {
        question: 'Kann ich meinen Tarif jederzeit ändern oder kündigen?',
        answer:
          'Ja. Sie können jederzeit im Abrechnungsportal upgraden, downgraden oder kündigen.',
      },
      {
        question: 'Wer sind wir?',
        answer:
          'Orakis ist ein Startup mit Sitz in Stuttgart. Wir bauen das Firmengehirn für Aufgaben- und Wissensmanagement.',
      },
    ],
  },

  footer: {
    productHeading: 'Produkt',
    companyHeading: 'Unternehmen',
    legalHeading: 'Rechtliches',
    contact: 'Kontakt',
    linkedIn: 'LinkedIn',
    rights: '© 2026 Orakis, alle Rechte vorbehalten',
    builtIn: 'Made in Germany',
  },

  pricing: {
    seoTitle: 'Preise – Orakis',
    seoDescription:
      'Testen Sie Orakis 7 Tage kostenlos, ohne Kreditkarte. Business ab 24 € pro Nutzer/Monat bei jährlicher Zahlung (29 € monatlich), dazu individuelle Enterprise-Tarife.',
    heading: 'Preise',
    sub: 'Testen Sie Orakis 7 Tage kostenlos, ohne Kreditkarte.',
    controls: {
      users: 'Nutzer',
      decreaseUsers: 'Nutzerzahl verringern',
      increaseUsers: 'Nutzerzahl erhöhen',
      numberOfUsers: 'Anzahl der Nutzer',
      billing: 'Abrechnung',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      yearlyHint: '17 % sparen bei jährlicher Zahlung',
      yourPrice: 'Ihr Preis',
      save: 'Sie sparen',
      perMonthBilledYearly: 'pro Monat (zzgl. MwSt.), jährliche Zahlung',
      perMonthBilledMonthly: 'pro Monat (zzgl. MwSt.), monatliche Zahlung',
    },
    cards: {
      freeTrial: 'Kostenlos testen',
      free: 'Kostenlos',
      freeNote: '7 Tage kostenlos testen. Keine Kreditkarte nötig.',
      startFreeTrial: 'Kostenlos testen',
      business: 'Business',
      recommended: 'Empfohlen',
      standardLicence: 'Standard-Lizenz',
      proLicence: 'Pro-Lizenz',
      proNote: '5-fach höhere Nutzungsgrenzen',
      perUserPerMonth: 'pro Nutzer / Monat (zzgl. MwSt.)',
      enterprise: 'Enterprise',
      individual: 'Individuell',
      enterpriseNote: 'Orakis in Ihrer gesamten Organisation ausrollen.',
      letsTalk: 'Sprechen wir',
    },
    trialFeatures: {
      header: 'Ideal für den Einstieg.',
      allFeatures: 'Alle Funktionen freigeschaltet',
      aiCredit: '5 € KI-Nutzung inklusive',
      users: 'Bis zu 50 Nutzer',
    },
    businessFeatures: {
      header: 'Eine Plattform für Ihr ganzes Team.',
      allFeatures: 'Alle Funktionen enthalten',
      aiUsage: 'KI-Nutzung inklusive',
      users: 'Bis zu 50 Nutzer',
    },
    enterpriseFeatures: {
      header: 'Für große Organisationen.',
      users: 'Ab 50 Nutzer',
      tailored: 'Auf Ihre Organisation zugeschnitten',
      covered: 'Alle Anforderungen abgedeckt',
    },
    everything: {
      heading: 'Alles in Business enthalten',
      items: [
        'Ziele & Aufgaben',
        'Ora Agent',
        'Geteilte Workspaces & Dokumente',
        'Dokumente',
        'Tägliche Briefings',
        'Rollenbasierte Zugriffssteuerung',
        'Kalender',
        'Company Brain aufbauen',
        'Integrationen',
        'Team-Kommunikation',
        'Wissensdatenbank',
        'MCP',
      ],
    },
    waitlist: {
      dialogAria: 'Auf die Beta-Warteliste setzen',
      close: 'Dialog schließen',
      heading: 'Wir sind in der Beta',
      body: 'Orakis befindet sich derzeit in einer geschlossenen Beta. Hinterlassen Sie Ihre E-Mail-Adresse, und wir melden uns, sobald ein Platz frei wird.',
      emailPlaceholder: 'ihre@mail.de',
      submit: 'Benachrichtigt werden',
      sending: 'Wird gesendet …',
      doneHeading: 'Sie stehen auf der Liste',
      doneBody: 'Wir melden uns, sobald der Zugang öffnet.',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      genericError: 'Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut.',
    },
  },

  letsTalk: {
    seoTitle: 'Gespräch vereinbaren – Orakis',
    seoDescription:
      'Sprechen Sie mit dem Gründer und sehen Sie Orakis in Aktion: Ziele, Aufgaben, Dokumente und Wissen an einem Ort, mit einer KI, die den Kontext Ihres Teams kennt.',
    heading: 'Sprechen wir',
    sub: 'Erzählen Sie uns kurz von Ihrer Arbeit, dann finden wir gemeinsam heraus, wo Orakis passt.',
    nameLabel: 'Ihr Name *',
    namePlaceholder: 'Vor- und Nachname',
    nameRequired: 'Bitte geben Sie Ihren Namen an',
    emailLabel: 'Geschäftliche E-Mail *',
    emailPlaceholder: 'name@unternehmen.de',
    emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse an',
    emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    companyLabel: 'Unternehmensgröße *',
    companyPlaceholder: 'Bitte wählen …',
    companyRequired: 'Bitte wählen Sie eine Unternehmensgröße',
    companySizes: [
      { value: '1-20', label: '1–20 Mitarbeitende' },
      { value: '21-100', label: '21–100 Mitarbeitende' },
      { value: '101-500', label: '101–500 Mitarbeitende' },
      { value: '501-1000', label: '501–1000 Mitarbeitende' },
      { value: '1000+', label: 'Über 1000 Mitarbeitende' },
    ],
    challengeLabel: 'Größte Herausforderung',
    challengePlaceholder: 'Was ist die größte Herausforderung, bei der Orakis helfen soll?',
    toolsLabel: 'Ihre Tools',
    toolsPlaceholder: 'z. B. Slack, Notion, HubSpot …',
    consentBefore: 'Mit dem Absenden stimmen Sie unserer',
    consentLink: 'Datenschutzerklärung',
    consentAfter: 'zu.',
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet …',
    doneHeading: 'Ihre Anfrage ist raus!',
    doneBody: 'Vielen Dank, wir melden uns in Kürze bei Ihnen.',
    fixErrors: 'Bitte korrigieren Sie die markierten Felder',
    pleaseWait: 'Einen Moment',
    errorHeading: 'Anfrage konnte nicht gesendet werden',
    errorBody: 'Bitte versuchen Sie es später noch einmal.',
  },

  yc: {
    seoTitle: 'YC-Videos – Die These hinter Orakis',
    seoDescription: 'Die Überlegungen, die alles geprägt haben, was wir bei Orakis bauen.',
    headingBefore: 'Die These hinter',
    by: 'von',
    combinator: 'Combinator',
    sub: 'Die Überlegungen, die alles geprägt haben, was wir bauen.',
    videos: {
      aiFirst: 'How To Build An AI-First Company',
      newWay: 'The New Way To Build A Startup',
    },
    videoDescription: 'ein Video von Y Combinator, das die These hinter Orakis geprägt hat.',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    body: 'Noch nicht Teil des Landingpage-Neubaus.',
  },

  toast: {
    regionAria: 'Benachrichtigungen (F8)',
    dismiss: 'Schließen',
  },

  formGuards: {
    tooSoon: 'Einen Moment – das wurde gerade schon gesendet.',
    tooMany: 'Zu viele Versuche. Bitte versuchen Sie es in ein paar Minuten erneut.',
  },
};
