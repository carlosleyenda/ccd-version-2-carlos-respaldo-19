
import { LearningPath } from "@/components/paths/types";

export const engineeringPaths: LearningPath[] = [
  {
    id: "construction-management",
    title: "Gestión de Construcción",
    description: "Domina la supervisión y gestión integral de proyectos de construcción",
    category: "engineering",
    level: "Avanzado",
    duration: "12 semanas",
    progress: 45,
    color: "from-blue-500 to-cyan-500",
    courses: [
      { id: "1", title: "Residencia y Supervisión de Obras", duration: "4 semanas", completed: true },
      { id: "2", title: "Gestión de Proyectos", duration: "3 semanas", completed: true },
      { id: "3", title: "Control de Costos", duration: "2 semanas", completed: false },
      { id: "4", title: "Valorización de Obras", duration: "3 semanas", completed: false },
    ],
    skills: ["Supervisión de obra", "Control de calidad", "Gestión de presupuestos", "Normativa legal"]
  },
  {
    id: "bim-specialist",
    title: "Especialista BIM",
    description: "Conviértete en experto en metodología BIM para proyectos de construcción",
    category: "engineering",
    level: "Intermedio",
    duration: "10 semanas",
    progress: 25,
    color: "from-green-500 to-emerald-500",
    courses: [
      { id: "5", title: "BIM Revit Arquitectura", duration: "3 semanas", completed: true },
      { id: "6", title: "BIM Revit Estructuras", duration: "3 semanas", completed: false },
      { id: "7", title: "BIM Revit MEP", duration: "2 semanas", completed: false },
      { id: "8", title: "Coordinador BIM", duration: "2 semanas", completed: false },
    ],
    skills: ["Modelado 3D", "Coordinación BIM", "Detección de interferencias", "Gestión de información"]
  },
];
