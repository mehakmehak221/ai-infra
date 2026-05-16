import { PageMotion } from "@/components/motion/PageMotion";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Metrics } from "@/components/landing/Metrics";
import { Developer } from "@/components/landing/Developer";
import { UseCases } from "@/components/landing/UseCases";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <PageMotion>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <FeatureCards />
          <HowItWorks />
          <Metrics />
          <Developer />
          <UseCases />
          <Testimonials />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </PageMotion>
  );
}
