
import { LearningPath } from "@/components/paths/types";

export const engineeringPaths: LearningPath[] = [
  {
    id: "algorithmic-trading",
    title: "Trading Algorítmico Avanzado",
    description: "Domina el desarrollo de algoritmos de trading automatizado y estrategias cuantitativas",
    category: "algorithmic",
    level: "Avanzado",
    duration: "12 semanas",
    progress: 45,
    color: "from-blue-500 to-cyan-500",
    courses: [
      { id: "1", title: "Python para Trading", duration: "4 semanas", completed: true },
      { id: "2", title: "Estrategias Cuantitativas", duration: "3 semanas", completed: true },
      { id: "3", title: "Backtesting Avanzado", duration: "2 semanas", completed: false },
      { id: "4", title: "Machine Learning Trading", duration: "3 semanas", completed: false },
    ],
    skills: ["Python", "Algoritmos", "Backtesting", "Machine Learning"]
  },
  {
    id: "forex-automation",
    title: "Automatización en Forex",
    description: "Aprende a automatizar estrategias de trading en el mercado de divisas",
    category: "forex",
    level: "Intermedio",
    duration: "10 semanas",
    progress: 25,
    color: "from-green-500 to-emerald-500",
    courses: [
      { id: "5", title: "Expert Advisors MT4/MT5", duration: "3 semanas", completed: true },
      { id: "6", title: "API Trading Forex", duration: "3 semanas", completed: false },
      { id: "7", title: "Risk Management Automatizado", duration: "2 semanas", completed: false },
      { id: "8", title: "Monitoreo de Algoritmos", duration: "2 semanas", completed: false },
    ],
    skills: ["Expert Advisors", "APIs", "Automatización", "Gestión de riesgo"]
  },
];
