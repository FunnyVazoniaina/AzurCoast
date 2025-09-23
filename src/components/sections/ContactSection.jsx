import React from "react";
import { Mail, Phone, Facebook } from "lucide-react";
import logo from "../../assets/logos/blu-azur.png";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#4097FF] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Blu Azur Logo"
            className="h-24 md:h-32 object-contain"
          />
        </div>

        {/* Infos de contact */}
        <div className="flex flex-col gap-5 text-white text-lg text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Contactez-nous
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={22} />
            <span>info@bluazur.com</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={22} />
            <span>+1 555 555-5555</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <Facebook size={22} />
            <span>@ BLU Azur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
