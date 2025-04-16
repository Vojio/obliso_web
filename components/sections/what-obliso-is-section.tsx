import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";

const WhatOblisoIsSection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="What Obliso Is" />
        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 md:p-8">
          <p className="text-base md:text-lg font-bold text-white/90 mb-4 leading-relaxed">
            Obliso is a simple way to protect your Bitcoin recovery phrase using Shamir's Secret Sharing.
          </p>
          <p className="text-sm md:text-base text-white/70 mb-6 leading-relaxed">
            Obliso is a modern, open-source Shamir Secret Manager for your Bitcoin seed phrase.
          </p>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            It lets you split your 12- or 24-word seed into multiple share files. Each file on its own is meaningless. Only a defined threshold of shares can recover the original. You can store them in different places u2014 or give them to family, trusted friends, or secure locations.
          </p>
          <p className="text-sm md:text-base text-white/70 mt-6 leading-relaxed">
            This way, no one u2014 including you u2014 can ever lose everything with just a single failure point.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WhatOblisoIsSection;