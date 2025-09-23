import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTAButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-md"
    >
      {text}
      <ArrowRight size={20} />
    </button>
  );
}
