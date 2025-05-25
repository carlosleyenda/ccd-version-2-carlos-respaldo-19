
export type AssessmentType = "practice" | "certification" | "skill-check";
export type AssessmentCategory = "forex" | "crypto" | "stocks";
export type AssessmentLevel = "Principiante" | "Intermedio" | "Avanzado" | "Profesional" | "Especialista" | "Experto";
export type AssessmentPopularity = "Popular" | "Destacado" | "Nuevo" | null;

export interface Assessment {
  id: string;
  title: string;
  description: string;
  category: AssessmentCategory;
  type: AssessmentType;
  level: AssessmentLevel;
  duration: number; // in minutes
  questionsCount: number;
  requiresPrevious: boolean;
  popularity: AssessmentPopularity;
  image: string;
  progress?: number; // if started
  bestScore?: number; // best score achieved
  attempts?: number; // number of attempts
}

export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
}
