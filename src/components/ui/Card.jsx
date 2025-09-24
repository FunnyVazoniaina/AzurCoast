import React from "react";

export default function Card({ image, title, description, other }) {
  return (
    <div className="bg-gray-900/90 text-white rounded-4xl shadow-lg overflow-hidden flex flex-col h-full">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-200 flex-1">{description}</p>

        {/* Affichage conditionnel du lien */}
        {other && (
          <p className="text-sm text-blue-400 mt-4">
            A voir :{" "}
            <a
              href={other}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              {other}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
