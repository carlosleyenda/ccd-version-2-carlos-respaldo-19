
import { LearningPath } from "@/components/paths/types";

export const miningPaths: LearningPath[] = [
  {
    id: "crypto-advanced",
    title: "Trading Avanzado de Criptomonedas",
    description: "Especialízate en el trading profesional de criptomonedas y DeFi",
    category: "crypto",
    level: "Avanzado",
    duration: "14 semanas",
    progress: 60,
    color: "from-orange-500 to-amber-500",
    courses: [
      { id: "10", title: "Bitcoin Trading Avanzado", duration: "4 semanas", completed: true },
      { id: "11", title: "Altcoins y Análisis On-Chain", duration: "3 semanas", completed: true },
      { id: "12", title: "DeFi y Yield Farming", duration: "3 semanas", completed: false },
      { id: "13", title: "NFTs y Trading", duration: "4 semanas", completed: false },
    ],
    skills: ["Bitcoin", "Altcoins", "DeFi", "Análisis on-chain"]
  },
  {
    id: "crypto-fundamentals",
    title: "Fundamentos de Trading Cripto",
    description: "Domina los conceptos básicos del trading de criptomonedas",
    category: "crypto",
    level: "Intermedio",
    duration: "8 semanas",
    progress: 35,
    color: "from-yellow-500 to-orange-500",
    courses: [
      { id: "14", title: "Blockchain y Criptomonedas", duration: "3 semanas", completed: true },
      { id: "15", title: "Exchanges y Wallets", duration: "3 semanas", completed: false },
      { id: "16", title: "Análisis Técnico Cripto", duration: "2 semanas", completed: false },
    ],
    skills: ["Blockchain", "Exchanges", "Wallets", "Análisis técnico"]
  },
];
