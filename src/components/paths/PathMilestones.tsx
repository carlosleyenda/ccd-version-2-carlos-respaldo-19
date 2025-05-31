
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Milestone } from "./types";
import { Check, ArrowRight } from "lucide-react";

interface PathMilestonesProps {
  pathId: string;
}

const PathMilestones: React.FC<PathMilestonesProps> = ({ pathId }) => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  
  useEffect(() => {
    // Simulación de carga de datos
    const pathMilestones: Milestone[] = [
      {
        id: "m1",
        title: "Fundamentos",
        description: "Dominar los conceptos básicos y principios fundamentales de la especialidad.",
        completed: true,
        progress: 100,
        courses: [
          { id: "safety-fundamentals", title: "Fundamentos de Seguridad", duration: "4h", completed: true },
          { id: "metallurgy-fundamentals", title: "Fundamentos de Metalurgia", duration: "6h", completed: true }
        ],
        skills: ["Comprensión teórica", "Conocimiento normativo"]
      },
      {
        id: "m2",
        title: "Aplicación práctica",
        description: "Aplicar los conocimientos en escenarios reales y desarrollar habilidades prácticas.",
        completed: true,
        progress: 100,
        courses: [
          { id: "risk-assessment", title: "Evaluación de Riesgos", duration: "5h", completed: true },
          { id: "hydrometallurgy", title: "Hidrometalurgia", duration: "8h", completed: true }
        ],
        skills: ["Resolución de problemas", "Análisis técnico"]
      },
      {
        id: "m3",
        title: "Especialización técnica",
        description: "Profundizar en áreas específicas y desarrollar experiencia especializada.",
        completed: false,
        progress: 45,
        courses: [
          { id: "pyrometallurgy", title: "Pirometalurgia", duration: "10h", completed: false },
          { id: "emergency-protocols", title: "Protocolos de Emergencia", duration: "6h", completed: false }
        ],
        skills: ["Optimización de procesos", "Gestión de emergencias"]
      },
      {
        id: "m4",
        title: "Maestría y certificación",
        description: "Consolidar conocimientos, demostrar competencia y obtener certificación oficial.",
        completed: false,
        progress: 0,
        courses: [
          { id: "process-optimization", title: "Optimización de Procesos", duration: "12h", completed: false },
          { id: "safety-leadership", title: "Liderazgo en Seguridad", duration: "8h", completed: false }
        ],
        skills: ["Liderazgo técnico", "Mejora continua"]
      }
    ];
    
    setMilestones(pathMilestones);
  }, [pathId]);
  
  return (
    <div className="relative">
      {/* Línea de conexión vertical */}
      <div className="absolute left-6 top-10 h-[calc(100%-88px)] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      {milestones.map((milestone, index) => (
        <Card key={milestone.id} className={`mb-6 ${milestone.completed ? 'border-green-200' : ''}`}>
          <CardHeader className="pb-2">
            <div className="flex">
              <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full ${
                milestone.completed 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-600'
              } mr-4`}>
                {milestone.completed ? (
                  <Check size={24} />
                ) : (
                  <span className="text-lg font-bold">{index + 1}</span>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-medium">{milestone.title}</h3>
                <p className="text-sm text-gray-500">{milestone.description}</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="ml-16 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Habilidades desarrolladas:</h4>
                <div className="flex flex-wrap gap-2">
                  {milestone.skills?.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Cursos relacionados:</h4>
                <ul className="space-y-1">
                  {milestone.courses?.map((course) => (
                    <li key={course.id} className="text-sm flex items-center">
                      <ArrowRight size={14} className="mr-1 text-gray-400" />
                      {course.title} - {course.duration}
                    </li>
                  ))}
                </ul>
              </div>
              
              {milestone.completed ? (
                <Button variant="outline" size="sm">Ver certificado</Button>
              ) : (
                <Button variant="outline" size="sm" disabled={index > 0 && !milestones[index-1]?.completed}>
                  {index > 0 && !milestones[index-1]?.completed ? 'Bloqueado' : 'Comenzar'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PathMilestones;
