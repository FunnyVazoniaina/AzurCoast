import React from "react";
import bgImage from "../../assets/images/location/bg-image.png";
import mapImg from "../../assets/images/location/map.png";

export default function LocationSection() {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 text-gray-800"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay léger pour lisibilité */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Colonne gauche (texte) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Où se trouve Blu Azur à <br />
            <span className="font-extrabold">Saint-Raphaël ?</span>
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur
            de l’une des plus belles stations balnéaires de France. Nos
            appartements se trouvent dans un domaine privé sécurisé, entouré de
            verdure, à quelques minutes à pied de la plage sablonneuse de Santa
            Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la
            résidence permet un accès facile aux boutiques, restaurants et
            animations locales. Une station d’arrêt d’autobus est située à la
            sortie du site, facilitant les déplacements, et une boulangerie à
            proximité vous offre du pain frais chaque matin pour bien commencer
            la journée.
          </p>
        </div>

        {/* Colonne droite (card carte) */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md h-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={mapImg}
              alt="Carte de Saint-Raphaël"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
