import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";
import BulletItem from "../ui/custom/bullet-item";

const WhyUseItSection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Why Use It?" />
        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 md:p-8">
          <ul className="space-y-3">
            <BulletItem>
              Because writing your seed on a piece of paper isn&apos;t a strategy.
            </BulletItem>
            <BulletItem>
              Because most people won&apos;t buy a hardware wallet, and even if they do, they won&apos;t use it properly.
            </BulletItem>
            <BulletItem>
              Because &ldquo;just store it in your password manager&rdquo; is dangerous advice.
            </BulletItem>
            <BulletItem>
              Because even the most seasoned crypto users struggle with this.
            </BulletItem>
            <BulletItem>
              Because the only real way to protect your Bitcoin is to distribute risk without compromising access.
            </BulletItem>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default WhyUseItSection;