import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Section from "../ui/custom/section";
import SectionHeading from "../ui/custom/section-heading";

const DemoSection = () => {
  return (
    <Section>
      <SectionHeading
        title="See How Obliso Works"
        description="Experience the simplicity and security of Obliso's seed phrase management."
      />
      <div className="max-w-4xl mx-auto border border-white/5 rounded-lg overflow-hidden">
        <div className="flex border-b border-white/5">
          <button
            type="button"
            className="flex-1 px-4 py-3 text-sm font-medium text-white bg-white/5"
          >
            Create Shares
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-3 text-sm font-medium text-white/50"
          >
            Recover Secret
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-3 text-sm font-medium text-white/50"
          >
            Verify Shares
          </button>
        </div>
        <div className="p-6 bg-white/[0.02]">
          <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/50 mb-2">Demo Coming Soon</p>
              <p className="text-xs text-white/30 max-w-md mx-auto mb-4">
                We&apos;re currently preparing demonstration videos to showcase
                Obliso&apos;s features.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/5 hover:bg-white/10"
                disabled
              >
                Coming Soon <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DemoSection;