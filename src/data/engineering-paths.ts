
import { LearningPath } from "@/components/paths/types";

export const engineeringPaths: LearningPath[] = [
  {
    id: "forex-mastery",
    title: "Maestría en Trading Forex",
    description: "Domina el mercado de divisas más líquido del mundo con estrategias profesionales",
    category: "forex",
    level: "Avanzado",
    duration: "16 semanas",
    progress: 45,
    color: "from-green-500 to-emerald-500",
    courses: [
      { id: "1", title: "Fundamentos del Forex", duration: "4 semanas", completed: true },
      { id: "2", title: "Análisis Técnico Avanzado", duration: "4 semanas", completed: true },
      { id: "3", title: "Gestión de Riesgo en Forex", duration: "3 semanas", completed: false },
      { id: "4", title: "Estrategias de Scalping", duration: "3 semanas", completed: false },
      { id: "5", title: "Trading con News Events", duration: "2 semanas", completed: false },
    ],
    skills: ["Análisis técnico", "Gestión de riesgo", "Scalping", "Trading de noticias"]
  },
  {
    id: "forex-automation",
    title: "Automatización en Forex",
    description: "Aprende a automatizar estrategias de trading en el mercado de divisas",
    category: "algorithmic",
    level: "Intermedio",
    duration: "10 semanas",
    progress: 25,
    color: "from-blue-500 to-cyan-500",
    courses: [
      { id: "6", title: "Expert Advisors MT4/MT5", duration: "3 semanas", completed: true },
      { id: "7", title: "API Trading Forex", duration: "3 semanas", completed: false },
      { id: "8", title: "Backtesting Automatizado", duration: "2 semanas", completed: false },
      { id: "9", title: "Monitoreo de Algoritmos", duration: "2 semanas", completed: false },
    ],
    skills: ["Expert Advisors", "APIs", "Automatización", "Backtesting"]
  },
];
