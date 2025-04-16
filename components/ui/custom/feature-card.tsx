import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group rounded-lg border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors">
      <div className="h-24 w-24 mb-4 flex items-center justify-center mx-auto">
        <div className="opacity-60 group-hover:opacity-80 transition-opacity">
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-medium text-white/90 mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;