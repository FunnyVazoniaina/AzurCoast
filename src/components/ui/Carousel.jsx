import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 overflow-hidden">
      <div className="relative flex items-center justify-center h-80">
        {images.map((img, index) => {
          let position = index - currentIndex;
          if (position > length / 2) position -= length;
          if (position <= -length / 2) position += length;

          const isActive = position === 0;
          const scale = isActive ? 1 : 0.8;
          const opacity = isActive ? 1 : 0.4;
          const zIndex = isActive ? 20 : 10;

          return (
            <div
              key={index}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out`}
              style={{
                transform: `translateX(${position * 60}%) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-64 md:w-80 h-48 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
