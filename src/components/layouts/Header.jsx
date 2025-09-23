
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logos/blu-azur.png'; 

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 border-b-4 border-white bg-transparent rounded-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12 object-contain" />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#about" className="hover:text-gray-300 transition-colors">À propos</a>
          <a href="#location" className="hover:text-gray-300 transition-colors">Localisation</a>
          <a href="#activities" className="hover:text-gray-300 transition-colors">Activités</a>
          <a
            href="#book"
            className="bg-[#4097FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Réserver
          </a>
        </nav>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white p-2">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm w-full absolute top-full left-0">
          <nav className="flex flex-col items-center gap-4 py-4 text-white font-medium">
            <a href="#about" className="hover:text-gray-300 transition-colors" onClick={() => setOpen(false)}>À propos</a>
            <a href="#location" className="hover:text-gray-300 transition-colors" onClick={() => setOpen(false)}>Localisation</a>
            <a href="#activities" className="hover:text-gray-300 transition-colors" onClick={() => setOpen(false)}>Activités</a>
            <a
              href="#book"
              className="bg-[#4097FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Réserver
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
