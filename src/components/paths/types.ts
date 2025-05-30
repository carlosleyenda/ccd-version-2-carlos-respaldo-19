
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: "forex" | "crypto" | "stocks" | "management" | "algorithmic";
  level: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
  progress: number;
  color: string;
  courses: Course[];
  skills: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}
