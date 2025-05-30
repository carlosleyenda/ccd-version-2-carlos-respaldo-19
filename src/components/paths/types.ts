
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: "forex" | "crypto" | "stocks" | "algorithmic";
  level: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
  courses: {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
  }[];
  skills: string[];
  progress: number;
  color: string;
  image?: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  courses: string[];
  skills: string[];
  completed: boolean;
}
