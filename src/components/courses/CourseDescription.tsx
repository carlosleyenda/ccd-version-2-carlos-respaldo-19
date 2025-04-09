
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface CourseDescriptionProps {
  longDescription: string;
}

export const CourseDescription = ({ longDescription }: CourseDescriptionProps) => {
  const [showMore, setShowMore] = useState(false);
  
  const handleShowMore = () => {
    setShowMore(true);
    toast.info("Mostrando más información del curso");
  };
  
  const learningPoints = [
    "Comprender los principios fundamentales de la ingeniería de minas.",
    "Aplicar técnicas avanzadas de extracción minera.",
    "Gestionar proyectos mineros de forma eficiente y segura.",
    "Implementar protocolos de seguridad conforme a regulaciones internacionales."
  ];

  const prerequisites = [
    "Conocimientos básicos de geología",
    "Experiencia previa en entornos industriales (recomendado)",
    "Comprensión de matemáticas y física a nivel universitario"
  ];

  const additionalInfo = [
    "Este curso incluye ejercicios prácticos y simulaciones virtuales",
    "Acceso a materiales de estudio exclusivos de la industria",
    "Mentoría personalizada con profesionales del sector"
  ];

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h3 className="text-xl font-bold mb-4">Descripción del curso</h3>
      <p>{longDescription}</p>
      
      <h4 className="font-bold mt-6 mb-2">Lo que aprenderás</h4>
      <ul className="space-y-2">
        {learningPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      
      <h4 className="font-bold mt-6 mb-2">Requisitos previos</h4>
      <ul className="space-y-1 list-disc pl-5">
        {prerequisites.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      {showMore ? (
        <>
          <h4 className="font-bold mt-6 mb-2">Información adicional</h4>
          <ul className="space-y-1 list-disc pl-5">
            {additionalInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </>
      ) : (
        <div className="mt-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleShowMore}
          >
            Ver más información
          </Button>
        </div>
      )}
    </div>
  );
};
