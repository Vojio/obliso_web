import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";
import FAQItem from "../ui/custom/faq-item";

const FAQSection = () => {
  return (
    <Section id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        description="Everything you need to know about Obliso and your seed phrase security."
      />
      <div className="max-w-3xl mx-auto space-y-4">
        <FAQItem
          question="How secure is Shamir's Secret Sharing?"
          answer="Shamir's Secret Sharing is mathematically proven to be secure. Unless an attacker has access to the threshold number of shares, they gain no information about your seed phrase. It's considered information-theoretically secure, which means it is unbreakable even with unlimited computing power."
          defaultOpen={true}
        />
        <FAQItem
          question="What happens if I lose some of my shares?"
          answer="You can still recover your seed phrase as long as you have the threshold number of shares. For example, if you created 5 shares with a threshold of 3, you only need any 3 of those shares to recover your secret. If you have fewer shares than the threshold, recovery isn't possible."
        />
        <FAQItem
          question="Is Obliso compatible with all Bitcoin wallets?"
          answer="Yes, Obliso works with any Bitcoin wallet that uses standard BIP39 seed phrases. After recovering your seed phrase with Obliso, you can import it into any compatible wallet software or hardware device."
        />
        <FAQItem
          question="Does Obliso have access to my seed phrase?"
          answer="No. Obliso is a client-side application that runs entirely in your browser. Your seed phrase is never sent to any server and all cryptographic operations happen locally on your device. We've designed Obliso with a security-first approach to ensure your sensitive information never leaves your control."
        />
      </div>
    </Section>
  );
};

export default FAQSection;