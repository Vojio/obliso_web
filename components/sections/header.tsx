"use client";

import { SplitSquareHorizontal } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 h-16 flex items-center border-b border-white/5 backdrop-blur-xl">
      <div className="flex items-center gap-1.5">
        <SplitSquareHorizontal className="w-5 h-5 stroke-white stroke-[1.5]" />
        <span className="text-sm font-medium">Obliso</span>
      </div>
    </header>
  );
};

export default Header;