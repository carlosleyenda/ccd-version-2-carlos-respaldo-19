
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Lock, PlayCircle, FileText } from "lucide-react";

const LessonModules = () => {
  const [expandedModules, setExpandedModules] = useState<string[]>(["m1"]);
  
  const toggleModule = (moduleId: string) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
  };
  
  const modules = [
    {
      id: "m1",
      title: "Módulo 1: Introducción a la Minería Subterránea",
      isActive: true,
      lessons: [
        {
          id: "l1-1",
          title: "Conceptos Fundamentales",
          duration: "45min",
          type: "video",
          isActive: true,
          isCompleted: false,
        },
        {
          id: "l1-2",
          title: "Evaluación Inicial",
          duration: "30min",
          type: "quiz",
          isActive: false,
          isCompleted: false,
        },
        {
          id: "l1-3",
          title: "Historia de la Minería Subterránea",
          duration: "35min",
          type: "video",
          isActive: false,
          isCompleted: false,
        },
        {
          id: "l1-4",
          title: "Examen Parcial - Módulo 1",
          duration: "60min",
          type: "exam",
          isActive: false,
          isCompleted: false,
        }
      ]
    },
    {
      id: "m2",
      title: "Módulo 2: Técnicas de Excavación",
      isActive: false,
      lessons: [
        {
          id: "l2-1",
          title: "Métodos Modernos de Excavación",
          duration: "50min",
          type: "video",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        },
        {
          id: "l2-2",
          title: "Prácticas de Laboratorio Virtual",
          duration: "2h",
          type: "reading",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        },
        {
          id: "l2-3",
          title: "Examen Parcial - Módulo 2",
          duration: "60min",
          type: "exam",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        }
      ]
    },
    {
      id: "m3",
      title: "Módulo 3: Seguridad y Ventilación",
      isActive: false,
      lessons: [
        {
          id: "l3-1",
          title: "Sistemas de Ventilación",
          duration: "55min",
          type: "video",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        },
        {
          id: "l3-2",
          title: "Protocolos de Seguridad",
          duration: "45min",
          type: "reading",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        },
        {
          id: "l3-3",
          title: "Equipo de Protección Personal",
          duration: "30min",
          type: "video",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        },
        {
          id: "l3-4",
          title: "Examen Final del Curso",
          duration: "120min",
          type: "exam",
          isActive: false,
          isCompleted: false,
          isLocked: true,
        }
      ]
    }
  ];
  
  return (
    <div className="p-4 space-y-4">
      {modules.map(module => (
        <div key={module.id} className={`border rounded-md overflow-hidden ${module.isActive ? 'border-primary/30' : ''}`}>
          <button
            className={`w-full flex items-center justify-between p-3 text-left ${module.isActive ? 'bg-primary/10' : 'bg-secondary/30'}`}
            onClick={() => toggleModule(module.id)}
          >
            <div className="flex items-center">
              <BookOpen className={`h-4 w-4 mr-2 ${module.isActive ? 'text-primary' : ''}`} />
              <span className={`font-medium ${module.isActive ? 'text-primary' : ''}`}>{module.title}</span>
            </div>
            <svg
              className={`h-5 w-5 transition-transform ${expandedModules.includes(module.id) ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {expandedModules.includes(module.id) && (
            <ul className="divide-y">
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  <Button
                    variant="ghost"
                    className={`w-full flex items-center justify-between p-3 h-auto ${lesson.isActive ? 'bg-accent' : ''}`}
                    disabled={lesson.isLocked}
                  >
                    <div className="flex items-center">
                      {lesson.type === "video" && <PlayCircle className="h-4 w-4 mr-2" />}
                      {lesson.type === "quiz" && <FileText className="h-4 w-4 mr-2" />}
                      {lesson.type === "exam" && <FileText className="h-4 w-4 mr-2 text-orange-500" />}
                      {lesson.type === "reading" && <BookOpen className="h-4 w-4 mr-2" />}
                      
                      <span className={`text-sm ${lesson.isLocked ? 'text-muted-foreground' : ''}`}>
                        {lesson.title}
                      </span>
                      
                      {lesson.type === "quiz" && (
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          Quiz
                        </span>
                      )}
                      
                      {lesson.type === "exam" && (
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                          Examen
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-xs text-muted-foreground mr-2">{lesson.duration}</span>
                      {lesson.isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : lesson.isLocked ? (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      ) : lesson.type === "video" ? (
                        <PlayCircle className="h-4 w-4" />
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default LessonModules;
