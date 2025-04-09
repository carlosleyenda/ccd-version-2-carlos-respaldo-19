
import { CheckCircle2 } from "lucide-react";

interface CourseDescriptionProps {
  longDescription: string;
}

export const CourseDescription = ({ longDescription }: CourseDescriptionProps) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h3 className="text-xl font-bold mb-4">Descripción del curso</h3>
      <p>{longDescription}</p>
      
      <h4 className="font-bold mt-6 mb-2">Lo que aprenderás</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Comprender los principios fundamentales de la ingeniería de minas.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Aplicar técnicas avanzadas de extracción minera.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Gestionar proyectos mineros de forma eficiente y segura.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span>Implementar protocolos de seguridad conforme a regulaciones internacionales.</span>
        </li>
      </ul>
      
      <h4 className="font-bold mt-6 mb-2">Requisitos previos</h4>
      <ul className="space-y-1 list-disc pl-5">
        <li>Conocimientos básicos de geología</li>
        <li>Experiencia previa en entornos industriales (recomendado)</li>
        <li>Comprensión de matemáticas y física a nivel universitario</li>
      </ul>
    </div>
  );
};
