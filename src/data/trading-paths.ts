
import { LearningPath } from "@/components/paths/types";

export const tradingPaths: LearningPath[] = [
  {
    id: "forex-mastery",
    title: "Forex Mastery Program",
    description: "Domina el mercado de divisas desde cero hasta nivel profesional",
    category: "management",
    level: "Intermedio",
    duration: "12 semanas",
    progress: 0,
    color: "from-emerald-500 to-green-500",
    courses: [
      { id: "1", title: "Fundamentos del Forex", duration: "3 semanas", completed: false },
      { id: "2", title: "Análisis Técnico Avanzado", duration: "3 semanas", completed: false },
      { id: "3", title: "Gestión de Riesgo", duration: "2 semanas", completed: false },
      { id: "4", title: "Psicología del Trading", duration: "2 semanas", completed: false },
      { id: "5", title: "Estrategias Avanzadas", duration: "2 semanas", completed: false },
    ],
    skills: ["Análisis técnico", "Análisis fundamental", "Gestión de riesgo", "Psicología trading"]
  },
  {
    id: "crypto-trading",
    title: "Cryptocurrency Trading Expert",
    description: "Especialízate en el trading de criptomonedas y DeFi",
    category: "management",
    level: "Avanzado",
    duration: "10 semanas",
    progress: 0,
    color: "from-blue-500 to-purple-500",
    courses: [
      { id: "6", title: "Introducción a Criptomonedas", duration: "2 semanas", completed: false },
      { id: "7", title: "Bitcoin y Ethereum Trading", duration: "3 semanas", completed: false },
      { id: "8", title: "Altcoins y Análisis On-Chain", duration: "2 semanas", completed: false },
      { id: "9", title: "DeFi y Yield Farming", duration: "2 semanas", completed: false },
      { id: "10", title: "Futuros Cripto", duration: "1 semana", completed: false },
    ],
    skills: ["Trading cripto", "DeFi", "Análisis on-chain", "Futuros", "Gestión de cartera"]
  },
  {
    id: "stock-trading",
    title: "Stock Market Professional",
    description: "Conviértete en un trader profesional de acciones",
    category: "management", 
    level: "Intermedio",
    duration: "14 semanas",
    progress: 0,
    color: "from-purple-500 to-indigo-500",
    courses: [
      { id: "11", title: "Fundamentos del Mercado de Valores", duration: "3 semanas", completed: false },
      { id: "12", title: "Análisis Fundamental", duration: "4 semanas", completed: false },
      { id: "13", title: "Day Trading y Scalping", duration: "3 semanas", completed: false },
      { id: "14", title: "Swing Trading", duration: "2 semanas", completed: false },
      { id: "15", title: "Opciones y Derivados", duration: "2 semanas", completed: false },
    ],
    skills: ["Análisis fundamental", "Day trading", "Swing trading", "Opciones", "Gestión portafolio"]
  },
  {
    id: "algorithmic-trading",
    title: "Algorithmic Trading Developer",
    description: "Desarrolla bots de trading automatizado y estrategias cuantitativas",
    category: "management",
    level: "Avanzado", 
    duration: "16 semanas",
    progress: 0,
    color: "from-orange-500 to-red-500",
    courses: [
      { id: "16", title: "Programación para Trading", duration: "4 semanas", completed: false },
      { id: "17", title: "Estrategias Cuantitativas", duration: "4 semanas", completed: false },
      { id: "18", title: "Backtesting y Optimización", duration: "3 semanas", completed: false },
      { id: "19", title: "Machine Learning para Trading", duration: "3 semanas", completed: false },
      { id: "20", title: "Deployment y Monitoreo", duration: "2 semanas", completed: false },
    ],
    skills: ["Python", "Estrategias cuantitativas", "Machine Learning", "Backtesting", "APIs"]
  },
];
