import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { HeroSection } from "../components/sections/hero-section";
import { WhyChooseUsSection } from "../components/sections/why-choose-us-section";
import PricingSection from "../components/sections/pricing-section";
import { FeaturesGridSection } from "../components/sections/features-grid-section";
import { HowItWorksSection } from "../components/sections/how-it-works-section";
import { WaitlistSection } from "../components/sections/waitlist-section";
import { CountdownSection } from "@/components/old/countdown-section";
import EffortlessIntegration from "../components/sections/effortless-integration";
import SlidingIntegrations from "../components/sections/sliding-integrations";
import FAQSection from "../components/sections/faq-section";
import { AboutUsSection } from "../components/sections/about-us-section";

export default function CoachMeLanding() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main className="">
        <HeroSection />
        <SlidingIntegrations />
        <FeaturesGridSection />
        <EffortlessIntegration />
        {/* <PricingSection /> */}
        <HowItWorksSection />
        {/* <WhyChooseUsSection /> */}
        <AboutUsSection />
        <FAQSection />
        <WaitlistSection />
        {/* <CountdownSection /> */}
      </main>
      <Footer />
    </div>
  );
}
