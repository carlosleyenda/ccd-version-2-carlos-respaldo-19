
import React from "react";

interface CertificateHeaderProps {
  image: string;
  title: string;
  course: string;
  type: "completed" | "in-progress" | "expired";
}

export const CertificateHeader = ({ image, title, course, type }: CertificateHeaderProps) => {
  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-6 right-6 text-white">
        <div className="mb-2">
          {type === "completed" && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
              Completado
            </span>
          )}
          {type === "in-progress" && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
              En progreso
            </span>
          )}
          {type === "expired" && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
              Expirado
            </span>
          )}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-sm md:text-base opacity-90">{course}</p>
      </div>
    </div>
  );
};
