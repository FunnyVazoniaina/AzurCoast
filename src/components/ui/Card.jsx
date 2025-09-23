import React from "react";

export default function Card({ image, title, description }) {
  return (
    <div className="bg-black text-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      
      {/* Texte */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
