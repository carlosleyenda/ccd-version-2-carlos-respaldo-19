
import { LearningPath } from "@/components/paths/types";

export const miningPaths: LearningPath[] = [
  {
    id: "mining-operations",
    title: "Operaciones Mineras",
    description: "Especialízate en las operaciones técnicas de la industria minera",
    category: "mining",
    level: "Avanzado",
    duration: "14 semanas",
    progress: 60,
    color: "from-orange-500 to-amber-500",
    courses: [
      { id: "9", title: "Perforación y Voladura", duration: "4 semanas", completed: true },
      { id: "10", title: "Geomecánica Minera", duration: "3 semanas", completed: true },
      { id: "11", title: "Ventilación Minera", duration: "3 semanas", completed: false },
      { id: "12", title: "Control de Operaciones", duration: "4 semanas", completed: false },
    ],
    skills: ["Perforación técnica", "Geomecánica", "Seguridad minera", "Optimización de procesos"]
  },
  {
    id: "mining-safety",
    title: "Seguridad y Medio Ambiente Minero",
    description: "Domina los aspectos de seguridad y gestión ambiental en minería",
    category: "mining",
    level: "Intermedio",
    duration: "8 semanas",
    progress: 35,
    color: "from-yellow-500 to-orange-500",
    courses: [
      { id: "13", title: "SSOMA Minero", duration: "3 semanas", completed: true },
      { id: "14", title: "Gestión Ambiental Minera", duration: "3 semanas", completed: false },
      { id: "15", title: "Gestión del Riesgo", duration: "2 semanas", completed: false },
    ],
    skills: ["Seguridad ocupacional", "Gestión ambiental", "Prevención de riesgos", "Normativa minera"]
  },
];
