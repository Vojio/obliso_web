import type { ReactNode } from "react";

interface BulletItemProps {
  children: ReactNode;
}

const BulletItem = ({ children }: BulletItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <div className="h-6 w-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
      </div>
      <p className="text-sm md:text-base text-white/70 leading-relaxed">
        {children}
      </p>
    </li>
  );
};

export default BulletItem;