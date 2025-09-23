import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Carousel({ images, heightClass = "h-40 md:h-64" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div
      className="relative w-full max-w-4xl mx-auto mt-12 overflow-hidden rounded-lg shadow-lg"
      style={{ aspectRatio: "16/9" }}
    >
      {/* Images: each slide is absolute and we compute the shortest translateX offset so wrap works */}
      {images.map((img, index) => {
        // compute shortest offset between index and currentIndex (handles wrap-around)
        let d = index - currentIndex;
        if (d > length / 2) d -= length;
        if (d <= -length / 2) d += length;
        const offsetPercent = d * 100;

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "pointer-events-auto z-10" : "pointer-events-none"
            }`}
            style={{ transform: `translateX(${offsetPercent}%)` }}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        );
      })}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
