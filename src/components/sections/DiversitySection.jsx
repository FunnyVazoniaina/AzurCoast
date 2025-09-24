import React from "react";
import Card from "../ui/Card";

import plage from "../../assets/images/diversity/img1.jpg";
import montagne from "../../assets/images/diversity/img2.jpg";
import gastronomie from "../../assets/images/diversity/img3.jpg";
import culture from "../../assets/images/diversity/img4.jpg";
import nightlife from "../../assets/images/diversity/img5.png";

export default function DiversitySection() {
  const diversities = [
    {
      image: plage,
      title: "Un patrimoine culturel d'exception",
      description:
        "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
    },
    {
      image: montagne,
      title: "Le sport au rythme de la Méditerranée",
      description:
        "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.",
    },
    {
      image: gastronomie,
      title: "Une destination gourmande et authentique",
      description:
        "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.",
    },
    {
      image: culture,
      title: "Des expériences inoubliables en famille",
      description:
        "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.",
    },
    {
      image: nightlife,
      title: "L’évasion en pleine nature",
      description:
        "Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
    },
  ];

  return (
    <section id="diversity" className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grille personnalisée */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {diversities.slice(0, 2).map((item, index) => (
            <div key={index} className="md:col-span-3 flex">
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}

          {diversities.slice(2).map((item, index) => (
            <div key={index} className="md:col-span-2 flex">
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
