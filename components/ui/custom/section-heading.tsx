import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-medium mb-6">{title}</h2>
      {description && (
        <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;