/** Prices always read with two decimals — €24,00, not €24. Paired with the
 *  de-DE locale this yields a comma as the decimal separator. */
export const PRICE_FORMAT = { minimumFractionDigits: 2, maximumFractionDigits: 2 } as const;

/**
 * Pricing plans and credit packs, recovered from the deployed bundle.
 *
 * The Stripe `price_...` values are publishable price identifiers, not secret
 * keys -- they are meant to be visible to the client and are what Checkout is
 * opened with. The `*Test` variants point at the Stripe test mode catalogue.
 */

export type Feature = { text: string; value?: boolean | string; header?: boolean };

export type Plan = {
  name: string;
  info: string;
  monthly: number;
  yearly: number;
  period: string;
  cta: string;
  ctaHref?: string;
  custom?: boolean;
  features: Feature[];
  stripePriceMonthly?: string;
  stripePriceYearly?: string;
  stripePriceMonthlyTest?: string;
  stripePriceYearlyTest?: string;
  bundledPrices?: Record<string, { monthlyTest: string; yearlyTest: string }>;
};

export type CreditPack = {
  credits: number;
  price: number;
  yearlyPerMonth: number;
  yearlyAddOn: number;
  label: string;
};

export const CREDIT_PACKS: CreditPack[] = [
  {
    "credits": 100,
    "price": 0,
    "yearlyPerMonth": 0,
    "yearlyAddOn": 0,
    "label": "100 Credits / month"
  },
  {
    "credits": 200,
    "price": 14.99,
    "yearlyPerMonth": 12.99,
    "yearlyAddOn": 155.88,
    "label": "200 Credits / month"
  },
  {
    "credits": 400,
    "price": 41.99,
    "yearlyPerMonth": 34.99,
    "yearlyAddOn": 419.88,
    "label": "400 Credits / month"
  },
  {
    "credits": 600,
    "price": 64.99,
    "yearlyPerMonth": 54.99,
    "yearlyAddOn": 659.88,
    "label": "600 Credits / month"
  },
  {
    "credits": 800,
    "price": 83.99,
    "yearlyPerMonth": 69.99,
    "yearlyAddOn": 839.88,
    "label": "800 Credits / month"
  },
  {
    "credits": 1000,
    "price": 98.99,
    "yearlyPerMonth": 82.99,
    "yearlyAddOn": 995.88,
    "label": "1000 Credits / month"
  }
];

/** Plans shown when the workspace is a single person. */
export const SOLO_PLANS: Plan[] = [
  {
    "name": "Starter",
    "info": "For individuals getting started",
    "monthly": 17.99,
    "yearly": 14.99,
    "stripePriceMonthly": "price_1TdyTWRvurhi4kJLl9kc3gFD",
    "stripePriceYearly": "price_1TdyTjRvurhi4kJLd32nh5jk",
    "stripePriceMonthlyTest": "price_1TgWhpRvurhi4kJLhr4Ae57R",
    "stripePriceYearlyTest": "price_1TgWhqRvurhi4kJL9gHrhZrS",
    "bundledPrices": {
      "200": {
        "monthlyTest": "price_1TgWhrRvurhi4kJLYqhbDLH2",
        "yearlyTest": "price_1TgWhrRvurhi4kJL7SvyuRqh"
      },
      "400": {
        "monthlyTest": "price_1TgWhsRvurhi4kJLbQ2tV0nD",
        "yearlyTest": "price_1TgWhtRvurhi4kJLMGc5LsHc"
      },
      "600": {
        "monthlyTest": "price_1TgWhtRvurhi4kJLR9k3JXx0",
        "yearlyTest": "price_1TgWhuRvurhi4kJLdrjaACZT"
      },
      "800": {
        "monthlyTest": "price_1TgWhvRvurhi4kJLfv1UHZnM",
        "yearlyTest": "price_1TgWhwRvurhi4kJLFSsyOUUy"
      },
      "1000": {
        "monthlyTest": "price_1TgWhwRvurhi4kJLiDCWpP5z",
        "yearlyTest": "price_1TgWhxRvurhi4kJLSDF08GAk"
      }
    },
    "period": "/month",
    "cta": "Get started",
    "ctaHref": "/sign-up",
    "features": [
      {
        "text": "Organized goals & tasks",
        "value": true
      },
      {
        "text": "Stay on top of your time",
        "value": true
      },
      {
        "text": "Keep all documents organized",
        "value": true
      },
      {
        "text": "AI that knows your work",
        "value": true
      },
      {
        "text": "Briefings",
        "value": true
      },
      {
        "text": "Company Brain",
        "value": false
      },
      {
        "text": "Workspaces",
        "value": "1"
      },
      {
        "text": "Basic support",
        "value": true
      }
    ]
  },
  {
    "name": "Pro",
    "info": "For power users & freelancers",
    "monthly": 23.99,
    "yearly": 19.99,
    "stripePriceMonthly": "price_1TdyTkRvurhi4kJL33tpbKGq",
    "stripePriceYearly": "price_1TdyTlRvurhi4kJLezLRyel8",
    "stripePriceMonthlyTest": "price_1TgWhyRvurhi4kJLU21ZIYbu",
    "stripePriceYearlyTest": "price_1TgWhzRvurhi4kJL1aY0OhqP",
    "bundledPrices": {
      "200": {
        "monthlyTest": "price_1TgWhzRvurhi4kJLmEVMXYaI",
        "yearlyTest": "price_1TgWi0Rvurhi4kJLYf9EGp8n"
      },
      "400": {
        "monthlyTest": "price_1TgWi1Rvurhi4kJLIDSwjFSO",
        "yearlyTest": "price_1TgWi2Rvurhi4kJLWl7nqkiq"
      },
      "600": {
        "monthlyTest": "price_1TgWi2Rvurhi4kJLjDbOhYy1",
        "yearlyTest": "price_1TgWi3Rvurhi4kJLzG7H3XRx"
      },
      "800": {
        "monthlyTest": "price_1TgWi4Rvurhi4kJL7kHYPbvs",
        "yearlyTest": "price_1TgWi5Rvurhi4kJLIl5lAZZu"
      },
      "1000": {
        "monthlyTest": "price_1TgWi6Rvurhi4kJLsP5TrgXU",
        "yearlyTest": "price_1TgWi6Rvurhi4kJLYMmKXpFn"
      }
    },
    "period": "/month",
    "highlight": true,
    "badge": "Most popular",
    "cta": "Choose Pro",
    "ctaHref": "/sign-up",
    "features": [
      {
        "text": "Everything in Solo Starter, plus:",
        "header": true
      },
      {
        "text": "More Briefings",
        "value": true
      },
      {
        "text": "More AI usage",
        "value": true
      },
      {
        "text": "Company Brain",
        "value": true
      }
    ]
  },
  {
    "name": "Max",
    "info": "For heavy users who need it all",
    "monthly": 77.99,
    "yearly": 64.99,
    "stripePriceMonthly": "price_1TeXsZRvurhi4kJL8hCVaEoK",
    "stripePriceYearly": "price_1TeXsaRvurhi4kJLWjNVZBJC",
    "stripePriceMonthlyTest": "price_1TgWi7Rvurhi4kJLBsIbB1KC",
    "stripePriceYearlyTest": "price_1TgWi8Rvurhi4kJLgocSwuwM",
    "bundledPrices": {
      "200": {
        "monthlyTest": "price_1TgWi9Rvurhi4kJLywxQpbuZ",
        "yearlyTest": "price_1TgWi9Rvurhi4kJLdkm9bMdm"
      },
      "400": {
        "monthlyTest": "price_1TgWiARvurhi4kJLceIQyP9j",
        "yearlyTest": "price_1TgWiBRvurhi4kJLNtRVChAW"
      },
      "600": {
        "monthlyTest": "price_1TgWiBRvurhi4kJLAe62Vpe9",
        "yearlyTest": "price_1TgWiCRvurhi4kJL1HKM2ifJ"
      },
      "800": {
        "monthlyTest": "price_1TgWiDRvurhi4kJLUqy60b4N",
        "yearlyTest": "price_1TgWiDRvurhi4kJLs970ma8k"
      },
      "1000": {
        "monthlyTest": "price_1TgWiERvurhi4kJLE3OAuK0d",
        "yearlyTest": "price_1TgWiFRvurhi4kJLktKzk93b"
      }
    },
    "period": "/month",
    "cta": "Coming soon",
    "ctaHref": "/sign-up",
    "features": [
      {
        "text": "Everything in Solo Pro, plus:",
        "header": true
      },
      {
        "text": "Coming soon",
        "value": true
      }
    ]
  }
] as Plan[];

/** Plans shown for teams; Enterprise is quote-only. */
export const TEAM_PLANS: Plan[] = [
  {
    "name": "Starter",
    "info": "For small teams getting started",
    "monthly": 24.99,
    "yearly": 20.99,
    "stripePriceMonthly": "price_1TdyTpRvurhi4kJLuUiRbP3g",
    "stripePriceYearly": "price_1TdyTqRvurhi4kJLdwEFjSSS",
    "stripePriceMonthlyTest": "price_1TgWiFRvurhi4kJLGckGBw2E",
    "stripePriceYearlyTest": "price_1TgWiGRvurhi4kJLXxuGpZxD",
    "bundledPrices": {
      "200": {
        "monthlyTest": "price_1TgWiHRvurhi4kJLBdAPZnNT",
        "yearlyTest": "price_1TgWiHRvurhi4kJL8DDCpIoB"
      },
      "400": {
        "monthlyTest": "price_1TgWiIRvurhi4kJLeWhhXqGA",
        "yearlyTest": "price_1TgWiJRvurhi4kJLqOrgrngj"
      },
      "600": {
        "monthlyTest": "price_1TgWiKRvurhi4kJL72ftrx1K",
        "yearlyTest": "price_1TgWiKRvurhi4kJLKbmgy7vd"
      },
      "800": {
        "monthlyTest": "price_1TgWiLRvurhi4kJL2Akuj0GW",
        "yearlyTest": "price_1TgWiMRvurhi4kJLrCVG1ekS"
      },
      "1000": {
        "monthlyTest": "price_1TgWiMRvurhi4kJL2A3JPT3M",
        "yearlyTest": "price_1TgWiNRvurhi4kJLa8Rj97xM"
      }
    },
    "period": "/month",
    "cta": "Start Team",
    "ctaHref": "/sign-up",
    "features": [
      {
        "text": "Organized goals & tasks",
        "value": true
      },
      {
        "text": "Stay on top of your time",
        "value": true
      },
      {
        "text": "Keep all documents organized",
        "value": true
      },
      {
        "text": "AI that knows your work",
        "value": true
      },
      {
        "text": "Briefings",
        "value": true
      },
      {
        "text": "Company Brain",
        "value": false
      },
      {
        "text": "Workspaces",
        "value": "1"
      },
      {
        "text": "Basic support",
        "value": true
      },
      {
        "text": "Shared Workspaces",
        "value": true
      },
      {
        "text": "Shared documents",
        "value": true
      },
      {
        "text": "Role Based Access Control (RBAC)",
        "value": true
      }
    ]
  },
  {
    "name": "Pro",
    "info": "For growing teams that move fast",
    "monthly": 29.99,
    "yearly": 24.99,
    "stripePriceMonthly": "price_1TdyTsRvurhi4kJLZR5A5JH8",
    "stripePriceYearly": "price_1TdyTtRvurhi4kJLvlss821C",
    "stripePriceMonthlyTest": "price_1TgWiORvurhi4kJLTb6kYbxZ",
    "stripePriceYearlyTest": "price_1TgWiPRvurhi4kJLgBhUHM2F",
    "bundledPrices": {
      "200": {
        "monthlyTest": "price_1TgWiPRvurhi4kJLEBGV5vNG",
        "yearlyTest": "price_1TgWiQRvurhi4kJLfHwfD5RG"
      },
      "400": {
        "monthlyTest": "price_1TgWiRRvurhi4kJLWoHcBu8P",
        "yearlyTest": "price_1TgWiRRvurhi4kJLi2bqIyva"
      },
      "600": {
        "monthlyTest": "price_1TgWiSRvurhi4kJLvaXnjbJF",
        "yearlyTest": "price_1TgWiTRvurhi4kJLWenlFSeC"
      },
      "800": {
        "monthlyTest": "price_1TgWiTRvurhi4kJLHQIDV1wi",
        "yearlyTest": "price_1TgWiVRvurhi4kJLNh9Uu1Ql"
      },
      "1000": {
        "monthlyTest": "price_1TgWiVRvurhi4kJL0bl9kQwM",
        "yearlyTest": "price_1TgWiWRvurhi4kJLLsmy04po"
      }
    },
    "period": "/month",
    "highlight": true,
    "badge": "Most popular",
    "cta": "Choose Team Pro",
    "ctaHref": "/sign-up",
    "features": [
      {
        "text": "Everything in Team Starter, plus:",
        "header": true
      },
      {
        "text": "More Briefings",
        "value": true
      },
      {
        "text": "More AI usage",
        "value": true
      },
      {
        "text": "Company Brain",
        "value": true
      }
    ]
  },
  {
    "name": "Max",
    "info": "For large orgs with custom needs",
    "monthly": 89.99,
    "yearly": 74.99,
    "stripePriceMonthly": "price_1TeXsbRvurhi4kJL0iGmR8A0",
    "stripePriceYearly": "price_1TeXscRvurhi4kJLH6jVPBsL",
    "stripePriceMonthlyTest": "price_1TgWiXRvurhi4kJLiT5maT9F",
    "stripePriceYearlyTest": "price_1TgWiYRvurhi4kJLZPLXf7PE",
    "bundledPrices": {
      "200": {
        "monthlyTest": "price_1TgWiZRvurhi4kJLNGs90rMj",
        "yearlyTest": "price_1TgWiZRvurhi4kJL8v4SShSf"
      },
      "400": {
        "monthlyTest": "price_1TgWiaRvurhi4kJLf3mo76EU",
        "yearlyTest": "price_1TgWibRvurhi4kJL9paiA7IG"
      },
      "600": {
        "monthlyTest": "price_1TgWibRvurhi4kJLiCjPAnXB",
        "yearlyTest": "price_1TgWicRvurhi4kJLxFHmBxPW"
      },
      "800": {
        "monthlyTest": "price_1TgWidRvurhi4kJLq4uFyicK",
        "yearlyTest": "price_1TgWidRvurhi4kJL2EC7yJ1U"
      },
      "1000": {
        "monthlyTest": "price_1TgWieRvurhi4kJLnQqZ8Prh",
        "yearlyTest": "price_1TgWifRvurhi4kJLTqs7GGrl"
      }
    },
    "period": "/month",
    "cta": "Coming soon",
    "ctaHref": "/sign-up",
    "features": [
      {
        "text": "Everything in Team Pro, plus:",
        "header": true
      },
      {
        "text": "Coming soon",
        "value": true
      }
    ]
  },
  {
    "name": "Enterprise",
    "info": "For large orgs with custom needs",
    "monthly": 0,
    "yearly": 0,
    "custom": true,
    "period": "/month",
    "cta": "Contact us",
    "ctaHref": "/lets-talk",
    "features": [
      {
        "text": "Everything your organization needs.",
        "value": true
      },
      {
        "text": "Tailored to your preferences.",
        "value": true
      }
    ]
  }
] as Plan[];

/* --- headline pricing used by the calculator in the sidebar --- */

/** Per-user reference price for the standard tier. */
export const STANDARD_PRICE = { monthly: 29, yearly: 24 };
/** Per-user reference price for the top tier. */
export const MAX_PRICE = { monthly: 119, yearly: 99 };
/** Seat ceiling for the stepper; past this it is an Enterprise conversation. */
export const MAX_USERS = 50;

/** Feature blurbs for the three headline cards. */
export const TRIAL_FEATURES: Feature[] = [
  { text: 'Perfect to get started.', header: true },
  { text: 'Every feature unlocked', value: true },
  { text: '\u20AC5 AI usage included', value: true },
  { text: 'Up to 50 users', value: true },
];

export const BUSINESS_FEATURES: Feature[] = [
  { text: 'One platform for your whole team.', header: true },
  { text: 'All features included', value: true },
  { text: 'AI usage included', value: true },
  { text: 'Up to 50 users', value: true },
];

export const ENTERPRISE_FEATURES: Feature[] = [
  { text: 'For large organizations.', header: true },
  { text: '50+ users', value: true },
  { text: 'Tailored to your organization', value: true },
  { text: 'All your needs covered', value: true },
];

/** Yearly saving per seat, over a year. */
export const yearlySaving = (tier: 'standard' | 'max') => {
  const p = tier === 'max' ? MAX_PRICE : STANDARD_PRICE;
  return Math.round((p.monthly - p.yearly) * 12);
};
