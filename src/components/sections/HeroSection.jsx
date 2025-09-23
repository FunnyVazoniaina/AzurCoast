import React from "react";
import heroImg from "../../assets/images/home/home-background.jpg";
import CTAButton from "../ui/CTAButton";
import Carousel from "../ui//Carousel";
import img1 from "../../assets/images/carousel/img1.jpg";
import img2 from "../../assets/images/carousel/img2.jpg";
import img3 from "../../assets/images/carousel/img3.png";

export default function HeroSection() {
  const images = [img1, img2, img3];

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-start md:justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="pt-48 sm:pt-56 md:pt-0 max-w-lg lg:max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl mb-6">
            <span className="font-extrabold">Votre évasion </span> <br />
            <span className="font-medium">sur la Côte d'Azur !</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-8">
            Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
            destination d'exception nichée entre Cannes et Saint-Tropez. Nos
            appartements tout équipés, situés dans un domaine privé sécurisé,
            offrent un cadre verdoyant et paisible, à quelques pas de la marina
            de Santa Lucia, des plages de sable fin et du centre-ville animé.
            Profitez d'un séjour alliant confort, sérénité et élégance au cœur
            de la Riviera française !
          </p>
          {/* Bouton CTA */}
          <CTAButton
            text="Réserver dès maintenant votre séjour !"
            onClick={() => alert("Réservation !")}
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute bottom-6 left-[calc(50%+1.5rem)] transform -translate-x-1/2 md:left-auto md:right-12 md:transform-none w-[200px] md:w-[350px] z-20">
        <Carousel images={images} heightClass="h-28 md:h-44" />
      </div>
    </section>
  );
}
