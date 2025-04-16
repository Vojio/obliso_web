import HeroSection from "@/components/sections/hero-section";
import WhyOblisoExistsSection from "@/components/sections/why-obliso-exists-section";
import WhatOblisoIsSection from "@/components/sections/what-obliso-is-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import StatisticsSection from "@/components/sections/statistics-section";
import WhyUseItSection from "@/components/sections/why-use-it-section";
import OblisoIsForSection from "@/components/sections/obliso-is-for-section";
import FeaturesSection from "@/components/sections/features-section";
import DemoSection from "@/components/sections/demo-section";
import FAQSection from "@/components/sections/faq-section";
import DesignPrinciplesSection from "@/components/sections/design-principles-section";
import CTASection from "@/components/sections/cta-section";
import NewsletterSection from "@/components/sections/newsletter-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <main className="relative">
        <HeroSection />
        <WhyOblisoExistsSection />
        <WhatOblisoIsSection />
        <HowItWorksSection />
        <StatisticsSection />
        <OblisoIsForSection />
        <WhyUseItSection />
        <FeaturesSection />
        <DemoSection />
        <FAQSection />
        <DesignPrinciplesSection />
        <CTASection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}