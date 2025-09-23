import React from "react";
import Carousel from "../../components/ui/Carousel"; 
import img1 from "../../assets/images/about/img1.png";
import img2 from "../../assets/images/about/img2.jpg";

export default function AboutBluAzur() {
  const carouselImages = [img1, img2]; // les images spécifiques pour cette section

  return (
    <section id="about" className="bg-[#F9FAFB] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Colonne gauche (texte) */}
        <div>
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 leading-snug">
            <span className="font-medium">Le confort et la sérénité d’un</span>
            <br />
            <span className="font-black">appartement privé</span>
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Blu Azur vous propose des appartements élégants et spacieux, conçus
            pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
            moderne, ils sont parfaits pour une escapade détente ou un séjour
            prolongé.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Les inclusions :
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 marker:text-[#4097FF]">
            <li>Stationnement privé</li>
            <li>Piscine extérieure avec chaises longues</li>
            <li>Linge de lit et serviettes</li>
            <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
            <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
            <li>Kit bébé : lit parapluie avec matelas et chaise haute</li>
            <li>Autres commodités en prêt à la réception...</li>
          </ul>
        </div>

        {/* Colonne droite (carousel) */}
        <div className="flex items-center justify-center">
          <Carousel images={carouselImages} heightClass="h-72 md:h-80" />
        </div>
      </div>
    </section>
  );
}
