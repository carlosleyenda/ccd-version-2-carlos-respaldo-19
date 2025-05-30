
import { LearningPath } from "@/components/paths/types";

export const managementPaths: LearningPath[] = [
  {
    id: "trading-psychology",
    title: "Psicología y Gestión del Trading",
    description: "Domina los aspectos psicológicos y de gestión emocional para ser un trader exitoso",
    category: "management",
    level: "Avanzado",
    duration: "10 semanas",
    progress: 70,
    color: "from-purple-500 to-indigo-500",
    courses: [
      { id: "16", title: "Psicología del Trading", duration: "4 semanas", completed: true },
      { id: "17", title: "Gestión de Emociones", duration: "2 semanas", completed: true },
      { id: "18", title: "Disciplina y Consistencia", duration: "3 semanas", completed: false },
      { id: "19", title: "Plan de Trading Profesional", duration: "1 semana", completed: false },
    ],
    skills: ["Psicología", "Control emocional", "Disciplina", "Planificación"]
  },
  {
    id: "risk-management",
    title: "Gestión de Riesgo en Trading",
    description: "Aprende las técnicas avanzadas de gestión de riesgo y capital en trading",
    category: "management",
    level: "Intermedio",
    duration: "8 semanas",
    progress: 50,
    color: "from-teal-500 to-green-500",
    courses: [
      { id: "20", title: "Money Management", duration: "3 semanas", completed: true },
      { id: "21", title: "Position Sizing", duration: "3 semanas", completed: false },
      { id: "22", title: "Portfolio Management", duration: "2 semanas", completed: false },
    ],
    skills: ["Gestión de capital", "Sizing", "Portfolio", "Risk/Reward"]
  },
];
