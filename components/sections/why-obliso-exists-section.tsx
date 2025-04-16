import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";

const WhyOblisoExistsSection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Why I Built Obliso" />
        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 md:p-8">
          <p className="text-sm font-medium text-white/80 mb-4 text-center">
            A message from the creator
          </p>
          <p className="text-sm md:text-base text-white/70 mb-4 leading-relaxed">
            I&apos;ve been in crypto since 2017. I&apos;ve seen exchanges collapse, wallets
            get hacked, scams run rampant, and even trusted tools fail. But I&apos;m
            still here — still believing in Bitcoin, and more importantly, in
            self-reliance.
          </p>
          <p className="text-sm md:text-base text-white/70 mb-4 leading-relaxed">
            And yet, despite everything I know… Despite advising friends, family,
            and newcomers on how to secure their coins… Despite understanding the
            importance of seed phrases and cold wallets…
          </p>
          <p className="text-sm md:text-base text-white/70 mb-4 leading-relaxed">
            I never truly saved my own keys in a safe, long-term, disaster-proof
            way.
          </p>
          <p className="text-sm md:text-base text-white/70 mb-4 leading-relaxed">
            I&apos;ve stored them in notes. In locked apps. In password managers.
            I&apos;ve avoided hardware wallets because I didn&apos;t trust myself to
            not lose or misplace them — and I didn&apos;t trust the companies
            behind them either. Every option felt like a compromise between
            security, usability, and real-life resilience.
          </p>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            That&apos;s why I built Obliso. Not as a product. But as a response —
            to a long-standing problem that no one seems to solve well.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WhyOblisoExistsSection;