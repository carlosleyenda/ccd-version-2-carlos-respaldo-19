
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

export interface CourseDetailProps {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  instructor: Instructor;
  category: "engineering" | "mining" | "management";
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  enrolled: number;
  rating: number;
  reviews: number;
  image: string;
  progress?: number;
  lastUpdated: string;
  language: string;
  modules: CourseModule[];
  isLive?: boolean;
  liveDate?: string;
}

export const categoryLabel: Record<string, string> = {
  engineering: "Ingeniería",
  mining: "Minería",
  management: "Gestión Pública",
};

export const levelLabel: Record<string, string> = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
};
