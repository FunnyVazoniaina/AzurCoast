import React from "react";
import bgImage from "../../assets/images/booking/bg-image.png";

export default function BookingSection() {
  return (
    <section
      className="relative py-20 px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay dégradé de gauche vers droite */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4896f1] to-transparent"></div>

      <div className="relative max-w-4xl mx-auto text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Réservations
        </h2>

        <p className="text-lg md:text-xl leading-relaxed">
          Offrez-vous un séjour inoubliable dans l’un de nos appartements Blu Azur. Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
        </p>
      </div>
    </section>
  );
}
