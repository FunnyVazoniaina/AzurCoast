import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images, heightClass = "h-80" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  const nextSlide = () =>
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className={`relative flex items-center justify-center ${heightClass}`}>
        {images.map((img, index) => {
          let position = index - currentIndex;
          if (position > length / 2) position -= length;
          if (position <= -length / 2) position += length;

          const isActive = position === 0;
          const scale = isActive ? 1 : 0.7;
          const opacity = isActive ? 1 : 0.4;
          const zIndex = isActive ? 20 : 10;

          return (
            <div
              key={index}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${position * 45}%) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-32 h-20 xs:w-40 xs:h-24 sm:w-48 sm:h-32 md:w-64 md:h-40 lg:w-80 lg:h-52 object-cover rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronRight size={16} className="sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}