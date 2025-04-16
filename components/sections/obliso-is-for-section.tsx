import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";
import BulletItem from "../ui/custom/bullet-item";

const OblisoIsForSection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Who Obliso is For" />
        <div className="backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-6 md:p-8">
          <ul className="space-y-3">
            <BulletItem>
              People who want to pass on Bitcoin to their kids someday.
            </BulletItem>
            <BulletItem>
              People who want to protect their seed phrase from fire, theft, or forgetfulness.
            </BulletItem>
            <BulletItem>
              People who help friends and family get started and need a better answer than &ldquo;just write it down&rdquo;.
            </BulletItem>
            <BulletItem>
              People who still believe that self-custody is the cornerstone of crypto — and want to do it right.
            </BulletItem>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default OblisoIsForSection;