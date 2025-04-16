import { Github, Lock, Share2 } from "lucide-react";
import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";

const DesignPrinciplesSection = () => {
  return (
    <Section>
      <SectionHeading
        title="Our Design Principles"
        description="Obliso is built with these fundamental principles in mind."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Security First</h4>
              <p className="text-xs text-white/50">Core Principle</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Security is never an afterthought. Every design decision in Obliso
            prioritizes the protection of your seed phrase with mathematical
            guarantees of security.
          </p>
        </div>

        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Trustless Design</h4>
              <p className="text-xs text-white/50">Core Principle</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Obliso requires no trust in any third party. All cryptographic
            operations happen locally, with your seed phrase never leaving your
            device.
          </p>
        </div>

        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Open Source</h4>
              <p className="text-xs text-white/50">Core Principle</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Transparency builds trust. Obliso is 100% open source, allowing
            anyone to verify the implementation and security of the cryptographic
            protocols used.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default DesignPrinciplesSection;