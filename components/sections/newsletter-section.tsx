import { Button } from "@/components/ui/button";
import Section from "../ui/custom/section";

const NewsletterSection = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto backdrop-blur-xs bg-white/[0.02] rounded-xl border border-white/5 p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-center">
          Stay Updated
        </h2>
        <p className="text-sm md:text-base text-white/50 max-w-md mx-auto mb-8 text-center leading-relaxed">
          Subscribe to our newsletter for the latest security tips, feature
          updates, and Bitcoin insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 px-4 bg-white/5 border border-white/10 rounded-md text-sm focus:outline-hidden focus:ring-1 focus:ring-white/20"
            />
          </div>
          <Button className="bg-white text-black hover:bg-white/90">
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-white/40 text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </Section>
  );
};

export default NewsletterSection;