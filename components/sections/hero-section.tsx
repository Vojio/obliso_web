import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "../ui/custom/section";

const HeroSection = () => {
  return (
    <Section py="xl" className="pt-24 md:pt-28 mt-6 md:mt-0">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/10 mb-4 md:mb-6 block">
            Secure your Bitcoin seed phrase
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 px-1 mx-auto" style={{ maxWidth: "18ch" }}>
          Secure your Bitcoin.{" "}
          <span className="text-white/80">Share it safely.</span>
        </h1>
        <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-1">
          Split your recovery phrase into encrypted shares, kept safe by you and your trusted people.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 w-full sm:w-auto"
            asChild
          >
            <Link href="/create">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 w-full sm:w-auto"
            asChild
          >
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;