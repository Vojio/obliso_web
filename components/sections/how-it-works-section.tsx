import { History, Lock, Share2 } from "lucide-react";
import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";
import HowItWorksCard from "../ui/custom/how-it-works-card";

const HowItWorksSection = () => {
  return (
    <Section id="how-it-works">
      <SectionHeading title="How It Works" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HowItWorksCard
          step={1}
          icon={<Lock className="w-12 h-12 stroke-white stroke-[1.5]" />}
          title="Create Shares"
          description="Input your seed phrase and split it securely using Shamir's Secret Sharing algorithm."
        />
        <HowItWorksCard
          step={2}
          icon={<Share2 className="w-12 h-12 stroke-white stroke-[1.5]" />}
          title="Distribute"
          description="Store your shares in different secure locations to eliminate single points of failure."
        />
        <HowItWorksCard
          step={3}
          icon={<History className="w-12 h-12 stroke-white stroke-[1.5]" />}
          title="Recover"
          description="Combine the required number of shares to restore your original seed phrase when needed."
        />
      </div>
    </Section>
  );
};

export default HowItWorksSection;