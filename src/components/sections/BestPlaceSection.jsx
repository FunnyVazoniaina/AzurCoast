import React from "react";
import bgImage from "../../assets/images/bestPlace/bg-image.png";
import icon1 from "../../assets/icons/bestPlace/icon1.png";
import icon2 from "../../assets/icons/bestPlace/icon2.png";
import icon3 from "../../assets/icons/bestPlace/icon3.png";
import icon4 from "../../assets/icons/bestPlace/icon4.png";
import icon5 from "../../assets/icons/bestPlace/icon5.png";
import icon6 from "../../assets/icons/bestPlace/icon6.png";

export default function BestPlaceSection() {
  const icons = [
    { img: icon1, desc: "Sports nautiques,\nplongée, voile" },
    { img: icon2, desc: "Randonnées et vélo\ndans l’Estérel" },
    { img: icon3, desc: "Nocturne animée\nCasino et vie" },
    { img: icon4, desc: "Villages perchés\net marchés provençaux" },
    { img: icon5, desc: "Un paradis pour\nles golfeurs" },
    { img: icon6, desc: "Montagne\net vélo de route" },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl mb-6">
          <span className="font-medium">
            Saint Raphaël, l’endroit parfait pour <br />
          </span>
          <span className="font-extrabold">
            vivre la Côte d’Azur
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques
          sauvages, Saint-Raphaël est une destination de rêve. Entre mer
          turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique
          pour la détente et l’aventure.
        </p>

        {/* Liste horizontale avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {icons.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3">
                <img src={item.img} alt={`Icon ${idx + 1}`} className="w-full h-full object-contain" />
              </div>
              <p className="text-sm whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Texte bas centré */}
        <p className="max-w-3xl mx-auto text-lg leading-relaxed font-medium">
          Flânez sur la Promenade des Bains, explorez les criques secrètes ou
          partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la
          Côte d’Azur dans toute sa splendeur !
        </p>
      </div>
    </section>
  );
}
