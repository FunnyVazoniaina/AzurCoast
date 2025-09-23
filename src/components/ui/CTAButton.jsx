import React from "react";
import { ChevronRightCircle } from "lucide-react";

export default function CTAButton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`mt-12 inline-flex items-center gap-3 px-6 py-3 border-2 font-semibold rounded-full transition-colors shadow-md ${className}`}
    >
      {text}
      <ChevronRightCircle size={22} />
    </button>
  );
}
