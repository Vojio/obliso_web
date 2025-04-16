import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "../ui/custom/section";

const CTASection = () => {
  return (
    <Section>
      <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">
          Ready to secure your Bitcoin seed?
        </h2>
        <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed">
          Start using Obliso today and experience peace of mind knowing your seed
          phrase is secure.
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90"
          asChild
        >
          <Link href="/create">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default CTASection;