
import { LearningPath } from "@/components/paths/types";

export const managementPaths: LearningPath[] = [
  {
    id: "public-contracting",
    title: "Contrataciones del Estado",
    description: "Especialízate en la nueva Ley 32069 y procesos de contratación pública",
    category: "management",
    level: "Avanzado",
    duration: "10 semanas",
    progress: 70,
    color: "from-purple-500 to-indigo-500",
    courses: [
      { id: "16", title: "Ley 32069 Contrataciones", duration: "4 semanas", completed: true },
      { id: "17", title: "SEACE 3.0", duration: "2 semanas", completed: true },
      { id: "18", title: "Certificación OSCE", duration: "3 semanas", completed: false },
      { id: "19", title: "Ejecución de Obras Públicas", duration: "1 semana", completed: false },
    ],
    skills: ["Contratación pública", "Normativa legal", "Procesos administrativos", "SEACE"]
  },
  {
    id: "public-investment",
    title: "Inversión Pública - Invierte.PE",
    description: "Domina el sistema nacional de programación multianual de inversiones",
    category: "management",
    level: "Intermedio",
    duration: "8 semanas",
    progress: 50,
    color: "from-teal-500 to-green-500",
    courses: [
      { id: "20", title: "Sistema Invierte.PE", duration: "3 semanas", completed: true },
      { id: "21", title: "Formulación de PIPs", duration: "3 semanas", completed: false },
      { id: "22", title: "Fichas Técnicas", duration: "2 semanas", completed: false },
    ],
    skills: ["Formulación de proyectos", "Evaluación económica", "Invierte.PE", "Fichas técnicas"]
  },
];
