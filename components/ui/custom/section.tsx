import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full";
  py?: "sm" | "md" | "lg" | "xl";
}

const Section = ({
  id,
  className = "",
  children,
  maxWidth = "6xl",
  py = "lg",
}: SectionProps) => {
  const pyClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16 md:py-24",
    xl: "py-20 md:py-32",
  };

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    full: "w-full",
  };

  return (
    <section id={id} className={`px-4 ${pyClasses[py]} relative ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
        {children}
      </div>
    </section>
  );
};

export default Section;