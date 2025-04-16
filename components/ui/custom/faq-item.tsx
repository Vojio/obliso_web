"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/5 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center text-left text-sm font-medium text-white cursor-pointer hover:bg-white/[0.03] transition-colors"
      >
        <span>{question}</span>
        <span className="text-white/60">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`px-4 pb-4 ${isOpen ? "" : "hidden"}`}>
        <p className="text-sm text-white/60 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;