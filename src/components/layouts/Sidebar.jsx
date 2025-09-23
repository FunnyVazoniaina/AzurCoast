import React, { useState } from "react";
import { Facebook, Youtube, Twitter, Instagram, ChevronRight, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden md:flex flex-col justify-end items-center h-64 w-20 bg-white/80 rounded-r-lg shadow-md fixed left-4 bottom-20 py-4">
        <nav className="flex flex-col items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={24} className="text-gray-700 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <Youtube size={24} className="text-gray-700 hover:text-red-500 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={24} className="text-gray-700 hover:text-sky-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={24} className="text-gray-700 hover:text-pink-500 transition-colors" />
          </a>
        </nav>
      </aside>

      {/* Mobile toggle button */}
      <div className="md:hidden fixed bottom-8 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white/80 p-2 rounded-full shadow-md"
        >
          {open ? <X size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed bottom-20 left-4 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg flex flex-col items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={28} className="text-gray-700 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <Youtube size={28} className="text-gray-700 hover:text-red-500 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={28} className="text-gray-700 hover:text-sky-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={28} className="text-gray-700 hover:text-pink-500 transition-colors" />
          </a>
        </div>
      )}
    </>
  );
}
