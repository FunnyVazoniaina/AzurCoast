import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logos/blu-azur.png'; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const menuItems = [
    { id: "home", label: "Accueil", href: "#home" },
    { id: "about", label: "À propos", href: "#about" },
    { id: "location", label: "Localisation", href: "#location" },
    { id: "activities", label: "Activités", href: "#activities" },
    { id: "booking", label: "Réservation", href: "#book" },
    { id: "contact", label: "Contact", href: "#contact" }

  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 border-b-4 border-white bg-transparent">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12 object-contain" />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 text-white font-semibold">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`relative pb-1 transition-colors ${
                active === item.id
                  ? "text-gray-700" // gris foncé pour actif
                  : "hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white after:transition-all after:duration-300"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Bouton Réserver */}
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
          <nav className="flex flex-col items-center gap-4 py-4 text-white font-semibold">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => { setOpen(false); setActive(item.id); }}
                className={`pb-1 transition-colors ${
                  active === item.id
                    ? "text-gray-700" // gris foncé pour actif
                    : "hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white after:transition-all after:duration-300"
                }`}
              >
                {item.label}
              </a>
            ))}
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
