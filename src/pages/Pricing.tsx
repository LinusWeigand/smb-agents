import { useMemo, useState } from 'react';
import { Container } from '../components/Container';
import { CTASection } from '../components/home/CTASection';
import { Faq } from '../components/home/Faq';
import { EverythingInBusiness } from '../components/pricing/EverythingInBusiness';
import { PlanCards } from '../components/pricing/PlanCards';
import { PriceControls } from '../components/pricing/PriceControls';
import { WaitlistModal } from '../components/pricing/WaitlistModal';
import { usePricing } from '../components/pricing/usePricing';
import { pricingJsonLd } from '../components/pricing/seo';
import { useSeo } from '../lib/useSeo';
import { siteUrl } from '../lib/site';
import { useLang, useT } from '../lib/i18n';

export default function Pricing() {
  const t = useT();
  const { lang } = useLang();
  const { billing, setBilling, tier, setTier, users, setUsers, step } = usePricing();
  const [waitlistPlan, setWaitlistPlan] = useState<string | null>(null);

  const jsonLd = useMemo(() => pricingJsonLd(t, lang), [t, lang]);

  useSeo({
    title: t.pricing.seoTitle,
    description: t.pricing.seoDescription,
    canonical: siteUrl('/pricing'),
    jsonLd,
  });

  return (
    <Container>
      <main className="relative z-10 w-full flex-1 mx-auto px-4 sm:px-6 min-[1240px]:px-0 pt-10 pb-24 max-w-[1190px]">
        <div className="mb-4 text-center">
          <h1
            className="font-display text-[2.2rem] sm:text-4xl md:text-[64px]"
            style={{ color: '#171717', letterSpacing: '-0.02em', lineHeight: '1.1' }}
          >
            {t.pricing.heading}
          </h1>
          <p className="mt-3 text-base font-sans font-normal text-gray-500 max-w-md mx-auto leading-relaxed">
            {t.pricing.sub}
          </p>
        </div>

        {/* The sidebar and the Business card share state in both directions:
            picking a licence updates the price, changing billing updates both. */}
        <div className="mt-12 flex flex-col gap-8 min-[1060px]:flex-row min-[1060px]:items-start">
          <PriceControls
            users={users}
            setUsers={setUsers}
            step={step}
            billing={billing}
            setBilling={setBilling}
            tier={tier}
          />
          <PlanCards
            billing={billing}
            tier={tier}
            setTier={setTier}
            onStartTrial={setWaitlistPlan}
          />
        </div>

        <div className="mt-8 md:mt-12">
          <EverythingInBusiness />
        </div>

        <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
          <Faq />
        </div>

        <div className="mt-8 md:mt-12">
          <CTASection />
        </div>
        <WaitlistModal
          open={waitlistPlan !== null}
          plan={waitlistPlan ?? ''}
          onClose={() => setWaitlistPlan(null)}
        />
      </main>
    </Container>
  );
}
