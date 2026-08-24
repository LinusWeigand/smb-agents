/**
 * English source copy for the marketing site.
 *
 * This object is the schema: `Copy` in ./index.ts is derived from it, so the
 * German file cannot compile with a key missing, renamed or mistyped. Add a
 * string here first, then in site.de.ts.
 */
export const siteEn = {
  /** Shared by the hero H1 and the footer lockup. */
  tagline: 'Plan projects, manage tasks, and get answers from your data.',

  nav: {
    product: 'Product',
    overview: 'Overview',
    faq: 'FAQ',
    pricing: 'Pricing',
    login: 'Log in',
    signUp: 'Sign up',
    letsTalk: "Let's Talk",
    logoAria: 'Neuroneus - Go to homepage',
    sectionsAria: 'Page sections',
    loginAria: 'Log in to Neuroneus app',
    signUpAria: 'Sign up',
    demoAria: 'Request a demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageAria: 'Language',
    switchToEnglish: 'Switch to English',
    switchToGerman: 'Auf Deutsch umschalten',
    skipToContent: 'Skip to main content',
    homeAria: 'Home',
  },

  home: {
    seoTitle: 'Neuroneus - Company Brain for Task and Knowledge Management',
    seoDescription:
      'Plan projects, manage tasks, and get answers from your data. Neuroneus is the company brain that keeps your team aligned on what matters.',
  },

  hero: {
    subtitle: "Know what's happening, what to do, and when to do it.",
    ycLink: 'The thesis behind Neuroneus, as described by Y Combinator',
    marquee: [
      [
        'Jonas completed his 3 tasks today, ahead of schedule',
        'Investor update ready, waiting for your approval',
        'The team completed 94% of planned tasks today',
        '2 strategic decisions need your input this week. Everything else is handled.',
      ],
      [
        'Team shipped 3 new features this week, on time',
        'Every team member has a clear priority for today',
        'Revenue up 18% this week. Neuron sent the report to the board',
        'A risk in the Q4 roadmap was detected and reassigned before it escalated.',
      ],
      [
        'Neuron identified a market gap in your segment. Summary ready.',
        'All open tasks have been assigned. No one is waiting.',
        'Customer feedback analyzed: 4.8 satisfaction score this week',
        "The weekly standup was summarized and sent to the team. You're all caught up.",
      ],
    ],
  },

  features: {
    briefing: {
      heading: 'Start your day with a Briefing',
      body: "Know what matters, see who's waiting on you, and know exactly what you need to do. Neuroneus manages the work around you, reorganizing your calendar, working through your inbox, and protecting time for what matters most.",
    },
    autopilot: {
      heading: 'Your company, on autopilot',
      badge: 'Human in the loop also possible',
      body: 'Neuroneus orchestrates every task in your team and keeps everything moving efficiently, so your projects run themselves without you having to manually chase it every time.',
    },
    risk: {
      heading: "See the risk before it's a crisis.",
      body: "Neuroneus already analyzes your data and knows what's going on before you do.",
    },
    asset: {
      heading: "You're building an asset.",
      body: "Every source compounds into one connected picture of how your company works. What your people know never has to leave with them. It's the infrastructure your company runs on. AI agents, for example, finally get clean company data to work with.",
    },
  },

  manageYourWork: {
    heading: 'Manage your work',
  },

  overview: {
    heading: 'Overview',
    data: {
      title: 'You already have the data. Let it work for you.',
      body: 'Your tasks, documents, and conversations already hold the context Neuroneus needs to help you.',
    },
    dots: {
      title: "Neuroneus connects the dots so you don't have to.",
      body: 'Your data gets stored clean and structured, automatically, ready for your AI agents, and always there when you need it.',
    },
    tools: {
      title: 'Integrate your existing tools',
      body: 'Neuroneus integrates with the tools your team already uses.',
    },
    harbor: {
      title: 'Your LLM docks at the Neuroneus harbor',
      body: 'Whichever ship you sail, it docks and gets loaded with context from your Company Brain, container by container.',
    },
  },

  cta: {
    heading: 'Try Neuroneus Now.',
    body: 'Give your team the brain it needs to move faster.',
  },

  faq: {
    heading: 'FAQs',
    items: [
      {
        question: 'What is Neuroneus?',
        answer:
          "Neuroneus is the company brain for task and knowledge management. It remembers what you and your team know, and keeps track of what's getting done: projects, tasks, decisions, context. You manage your projects and build up your knowledge as you go. And the AI tells you what needs a decision, and manages tasks for you. People come and go. Neuroneus stays.",
      },
      {
        question: 'What problem does Neuroneus solve?',
        answer:
          'Most organizations lose significant time to coordination overhead. Waiting for updates, misaligned priorities, and scattered information. Neuroneus eliminates these bottlenecks by automating data exchange, surfacing real-time insights, and keeping every team member aligned on what matters most.',
      },
      {
        question: 'How does Neuroneus help?',
        answer:
          'Leaders always understand what is happening across teams, projects, and people, while team members always know exactly what to work on without having to ask. This means faster and more confident decisions backed by live metrics and automated reporting instead of manual status updates. Neuroneus provides clarity on what to do, when to do it, and why it matters. By automating the flow of information, it removes the guesswork and lets everyone focus on high-impact work instead of chasing updates or sitting in alignment meetings.',
      },
      {
        question: 'Can I try Neuroneus for free?',
        answer:
          'Yes. You can try Neuroneus free for 7 days, no credit card required. Every feature is unlocked during the trial.',
      },
      {
        question: 'How long does it take to set up?',
        answer: 'Less than 5 minutes.',
      },
      {
        question: 'What tools does Neuroneus integrate with?',
        answer:
          'Neuroneus connects to the tools you already use, like Outlook, Gmail, and Google Calendar, with more integrations on the way. And through MCP, you can bring your own LLM: Claude, ChatGPT, or anything else that supports MCP, and give it direct access to Neuroneus.',
      },
      {
        question: 'Is my data safe?',
        answer:
          "Yes. Your data is stored in Frankfurt, Germany, and encrypted in transit. We don't train on it, and we don't touch it beyond what it takes to run your workspace. Your data stays yours.",
      },
      {
        question: 'Can I change or cancel my plan anytime?',
        answer: 'Yes. You can upgrade, downgrade, or cancel anytime from your billing portal.',
      },
      {
        question: 'Who are we?',
        answer:
          "Neuroneus is a startup currently based in Stuttgart, Germany. We're building the company brain for task and knowledge management.",
      },
    ],
  },

  footer: {
    productHeading: 'Product',
    companyHeading: 'Company',
    legalHeading: 'Legal',
    contact: 'Contact',
    linkedIn: 'LinkedIn',
    rights: '© 2026 Neuroneus, all rights reserved',
    builtIn: 'Built in Germany',
  },

  pricing: {
    seoTitle: 'Pricing - Neuroneus',
    seoDescription:
      'Try Neuroneus free for 7 days, no credit card required. Business from €24 per user/month billed yearly (€29 monthly), plus custom Enterprise plans.',
    heading: 'Pricing',
    sub: 'Try Neuroneus free for 7 days, no credit card required.',
    controls: {
      users: 'Users',
      decreaseUsers: 'Decrease users',
      increaseUsers: 'Increase users',
      numberOfUsers: 'Number of users',
      billing: 'Billing',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyHint: 'Save 17% with yearly billing',
      yourPrice: 'Your price',
      save: 'Save',
      perMonthBilledYearly: 'per month (excl. VAT), billed yearly',
      perMonthBilledMonthly: 'per month (excl. VAT), billed monthly',
    },
    cards: {
      freeTrial: 'Free Trial',
      free: 'Free',
      freeNote: 'Try it free for 7 days. No credit card required.',
      startFreeTrial: 'Start free trial',
      business: 'Business',
      recommended: 'Recommended',
      standardLicence: 'Standard license',
      proLicence: 'Pro license',
      proNote: '5x higher usage limits',
      perUserPerMonth: 'per user / month (excl. VAT)',
      enterprise: 'Enterprise',
      individual: 'Individual',
      enterpriseNote: 'Roll out Neuroneus across your organization.',
      letsTalk: "Let's talk",
    },
    trialFeatures: {
      header: 'Perfect to get started.',
      allFeatures: 'Every feature unlocked',
      aiCredit: '€5 AI usage included',
      users: 'Up to 50 users',
    },
    businessFeatures: {
      header: 'One platform for your whole team.',
      allFeatures: 'All features included',
      aiUsage: 'AI usage included',
      users: 'Up to 50 users',
    },
    enterpriseFeatures: {
      header: 'For large organizations.',
      users: '50+ users',
      tailored: 'Tailored to your organization',
      covered: 'All your needs covered',
    },
    everything: {
      heading: 'Everything in Business',
      items: [
        'Goals & tasks',
        'Neuron Agent',
        'Shared workspaces & documents',
        'Documents',
        'Daily briefings',
        'Role-based access control',
        'Calendar',
        'Build your Company Brain',
        'Integrations',
        'Team communication',
        'Knowledge base',
        'MCP',
      ],
    },
    waitlist: {
      dialogAria: 'Join the beta waitlist',
      close: 'Close modal',
      heading: "We're in beta",
      body: "Neuroneus is currently in closed beta. Leave your email and we'll notify you as soon as your spot opens up.",
      emailPlaceholder: 'your@email.com',
      submit: 'Notify me',
      sending: 'Sending...',
      doneHeading: "You're on the list",
      doneBody: "We'll reach out as soon as access opens up.",
      invalidEmail: 'Please enter a valid email address.',
      genericError: 'Something went wrong. Please try again.',
    },
  },

  letsTalk: {
    seoTitle: "Let's Talk - Neuroneus",
    seoDescription:
      "Talk to the founder and see Neuroneus in action: goals, tasks, documents and knowledge in one place, with an AI that knows your team's context.",
    heading: "Let's talk",
    sub: "Share a bit about your work and we'll figure out together how Neuroneus fits in.",
    nameLabel: 'Your Name *',
    namePlaceholder: 'Full Name',
    nameRequired: 'Name is required',
    emailLabel: 'Work Email *',
    emailPlaceholder: 'name@organization.com',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    companyLabel: 'Company Size *',
    companyPlaceholder: 'Select...',
    companyRequired: 'Please select a company size',
    companySizes: [
      { value: '1-20', label: '1–20 employees' },
      { value: '21-100', label: '21–100 employees' },
      { value: '101-500', label: '101–500 employees' },
      { value: '501-1000', label: '501–1000 employees' },
      { value: '1000+', label: '1000+ employees' },
    ],
    challengeLabel: 'Biggest Challenge',
    challengePlaceholder: "What's the biggest challenge you're hoping Neuroneus could solve?",
    toolsLabel: 'Your Tools',
    toolsPlaceholder: 'e.g. Slack, Notion, HubSpot...',
    consentBefore: 'By submitting, you agree to our',
    consentLink: 'Privacy Policy',
    consentAfter: '.',
    submit: 'Submit Request',
    submitting: 'Submitting...',
    doneHeading: 'Your request was submitted!',
    doneBody: "Thanks, we'll be in touch with you shortly.",
    fixErrors: 'Please fix the errors below',
    pleaseWait: 'Please wait',
    errorHeading: 'Error submitting request',
    errorBody: 'Please try again later.',
  },

  yc: {
    seoTitle: 'YC Videos – The Thesis Behind Neuroneus',
    seoDescription: "The thinking that shaped everything we're building at Neuroneus.",
    headingBefore: 'The thesis behind',
    by: 'by',
    combinator: 'Combinator',
    sub: "The thinking that shaped everything we're building.",
    videos: {
      aiFirst: 'How To Build An AI-First Company',
      newWay: 'The New Way To Build A Startup',
    },
    videoDescription: 'a Y Combinator video that shaped the thesis behind Neuroneus.',
  },

  notFound: {
    title: 'Page not found',
    body: 'Not part of the landing-page rebuild yet.',
  },

  toast: {
    regionAria: 'Notifications (F8)',
    dismiss: 'Dismiss',
  },

  formGuards: {
    tooSoon: 'One moment — that was just sent.',
    tooMany: 'Too many attempts. Please try again in a few minutes.',
  },
};
