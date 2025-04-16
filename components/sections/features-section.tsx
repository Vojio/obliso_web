import { Key, ShieldCheck, SplitSquareHorizontal } from "lucide-react";
import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";
import FeatureCard from "../ui/custom/feature-card";

const FeaturesSection = () => {
  return (
    <Section id="features">
      <SectionHeading title="Features" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Key className="w-12 h-12 stroke-white stroke-1" />}
          title="Decentralized Security"
          description="Split your seed into multiple shares, requiring a threshold to recover."
        />
        <FeatureCard
          icon={
            <ShieldCheck className="w-12 h-12 stroke-white stroke-1" />
          }
          title="User-Friendly"
          description="Simple interface for creating and managing your seed shares securely."
        />
        <FeatureCard
          icon={
            <SplitSquareHorizontal className="w-12 h-12 stroke-white stroke-1" />
          }
          title="Robust Metadata"
          description="Comprehensive share information and validation tools built-in."
        />
      </div>
    </Section>
  );
};

export default FeaturesSection;