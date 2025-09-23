import React from "react";
import { ChevronRightCircle } from "lucide-react";

export default function CTAButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors shadow-md"
    >
      {text}
      <ChevronRightCircle size={22} />
    </button>
  );
}
