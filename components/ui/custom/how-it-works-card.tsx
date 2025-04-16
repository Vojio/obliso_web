import type { ReactNode } from "react";

interface HowItWorksCardProps {
  step: number; // Keeping this in the props but not using it
  icon: ReactNode;
  title: string;
  description: string;
}

const HowItWorksCard = ({
  step,
  icon,
  title,
  description,
}: HowItWorksCardProps) => {
  return (
    <div className="relative bg-white/[0.02] rounded-xl border border-white/5 p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors">
      {/* Removed the step number element completely */}
      <div className="h-16 w-16 mb-4 flex items-center justify-center mx-auto">
        <div className="opacity-60">{icon}</div>
      </div>
      <h3 className="text-sm font-medium text-white/90 mb-2 text-center">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed text-center">{description}</p>
    </div>
  );
};

export default HowItWorksCard;