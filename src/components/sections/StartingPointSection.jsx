import React from "react";
import startImage from "../../assets/images/startingPoint/imgStart.png";
import bgImage from "../../assets/images/startingPoint/bg-image.png";

export default function StartingPointSection() {
  return (
    <section
      className="relative py-20 px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay léger pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Colonne gauche : image */}
        <div className="w-full h-96 md:h-[28rem] overflow-hidden rounded-lg">
          <img
            src={startImage}
            alt="Start Point"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Colonne droite : texte */}
        <div>
          <h2 className="text-3xl md:text-4xl mb-6 text-white leading-snug">
            <span className="font-medium">Un point de départ idéal pour </span>
            <br />
            <span className="font-extrabold">découvrir la Côte d’Azur !</span>
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Entre mer et montagne, Saint-Raphaël est une destination idéale pour
            les amateurs de plein air et de découvertes. Randonnées dans le
            Massif de l’Estérel, sports nautiques sur les eaux cristallines de
            la Méditerranée, balades en bateau vers les îles de Lérins ou encore
            golf et cyclisme sur des parcours panoramiques, chaque journée offre
            son lot d’aventures. Entre marchés provençaux, villages perchés et
            animations locales, l’art de vivre azuréen se dévoile à chaque
            instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
          </p>
        </div>
      </div>
    </section>
  );
}
