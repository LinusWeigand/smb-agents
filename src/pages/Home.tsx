import { Container } from '../components/Container';
import { Hero } from '../components/home/Hero';
import { FeatureList } from '../components/home/HowItWorks';
import { ManageYourWork } from '../components/home/ManageYourWork';
import { Overview } from '../components/home/Overview';
import { CTASection } from '../components/home/CTASection';
import { Faq } from '../components/home/Faq';

export default function Home() {
  return (
    <Container>
      <main id="main-content" className="w-full max-w-full overflow-x-clip">
        <section id="hero" aria-label="Home">
          <Hero />
        </section>

        <section id="how-it-works">
          <section className="bg-transparent px-4 sm:px-6 min-[1240px]:px-0 pt-0 pb-20 md:pt-0 md:pb-28">
            <div className="max-w-[1190px] mx-auto">
              <FeatureList />

              <div className="mt-[75px] md:mt-[105px]">
                <ManageYourWork />
              </div>

              <div id="overview" className="mt-[75px] md:mt-[105px]">
                <Overview />
              </div>

              <div className="mt-20 md:mt-28">
                <CTASection />
              </div>

              <div id="faq" className="mt-[75px] md:mt-[105px] max-w-3xl mx-auto">
                <Faq />
              </div>
            </div>
          </section>
        </section>
      </main>
    </Container>
  );
}
