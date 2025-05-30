
export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "quiz" | "reading";
  completed?: boolean;
  locked?: boolean;
}

export interface Instructor {
  name: string;
  title: string;
  avatar: string;
}

export interface CourseReview {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CourseDetailProps {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
  };
  category: "forex" | "crypto" | "stocks" | "management" | "algorithmic";
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  enrolled: number;
  rating: number;
  image: string;
  price?: number;
  originalPrice?: number;
  isLive?: boolean;
  liveDate?: string;
  liveTime?: string;
  modules: CourseModule[];
  reviews: CourseReview[];
  lastUpdated: string;
  language: string;
  progress?: number;
}

export const categoryLabel: Record<string, string> = {
  forex: "Forex",
  crypto: "Criptomonedas", 
  stocks: "Acciones",
  management: "Gestión",
  algorithmic: "Algoritmia",
};

export const levelLabel: Record<string, string> = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
};
