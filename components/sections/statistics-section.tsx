import Section from "../ui/custom/section";

const StatisticsSection = () => {
  return (
    <Section className="overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        <div className="text-center backdrop-blur-xs bg-white/[0.02] rounded-lg border border-white/5 p-6">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">256-bit</div>
          <p className="text-sm text-white/60">Encryption</p>
        </div>
        <div className="text-center backdrop-blur-xs bg-white/[0.02] rounded-lg border border-white/5 p-6">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">5/3</div>
          <p className="text-sm text-white/60">Default Threshold</p>
        </div>
        <div className="text-center backdrop-blur-xs bg-white/[0.02] rounded-lg border border-white/5 p-6">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">BIP39</div>
          <p className="text-sm text-white/60">Compatible</p>
        </div>
        <div className="text-center backdrop-blur-xs bg-white/[0.02] rounded-lg border border-white/5 p-6">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
          <p className="text-sm text-white/60">Open Source</p>
        </div>
      </div>
    </Section>
  );
};

export default StatisticsSection;