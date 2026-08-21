import { Container } from '../components/Container';
import { CTASection } from '../components/home/CTASection';
import { Faq } from '../components/home/Faq';
import { EverythingInBusiness } from '../components/pricing/EverythingInBusiness';
import { PlanCards } from '../components/pricing/PlanCards';
import { PriceControls } from '../components/pricing/PriceControls';
import { usePricing } from '../components/pricing/usePricing';

export default function Pricing() {
  const { billing, setBilling, tier, setTier, users, setUsers, step } = usePricing();

  return (
    <Container>
      <main className="relative z-10 w-full flex-1 mx-auto px-4 sm:px-6 min-[1240px]:px-0 pt-10 pb-24 max-w-[1190px]">
        <div className="mb-4 text-center">
          <h1
            className="font-display text-[2.2rem] sm:text-4xl md:text-[64px]"
            style={{ color: '#171717', letterSpacing: '-0.02em', lineHeight: '1.1' }}
          >
            Pricing
          </h1>
          <p className="mt-3 text-base font-sans font-normal text-gray-500 max-w-md mx-auto leading-relaxed">
            Try Orakis free for 7 days, no credit card required.
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
          <PlanCards billing={billing} tier={tier} setTier={setTier} />
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
      </main>
    </Container>
  );
}
