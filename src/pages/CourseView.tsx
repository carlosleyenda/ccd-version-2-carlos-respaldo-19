
import { useParams, Navigate } from "react-router-dom";
import CourseDetail from "@/components/courses/CourseDetail";
import { CourseReview } from "@/components/courses/types";

const CourseView = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/courses" replace />;
  }

  // Sample course data - replace with actual data fetching
  const courseData = {
    id: id,
    title: "Máster en Trading de Forex",
    description: "Curso completo para dominar el trading en el mercado de divisas más líquido del mundo.",
    longDescription: "Este curso te llevará desde los conceptos básicos del forex hasta estrategias avanzadas de trading. Aprenderás análisis técnico, gestión de riesgo, psicología del trading y mucho más.",
    instructor: {
      name: "Dr. Pedro Valdés",
      title: "Experto en Trading Forex",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    },
    category: "forex" as const,
    level: "advanced" as const,
    duration: "32h 15m",
    enrolled: 1289,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    lastUpdated: "Diciembre 2024",
    language: "Español",
    progress: 0,
    modules: [
      {
        id: "module-1",
        title: "Fundamentos del Forex",
        duration: "8h 30m",
        lessons: [
          { id: "lesson-1", title: "¿Qué es el Forex?", duration: "30m", type: "video" as const },
          { id: "lesson-2", title: "Pares de divisas", duration: "45m", type: "video" as const },
          { id: "lesson-3", title: "Quiz: Conceptos básicos", duration: "15m", type: "quiz" as const }
        ]
      },
      {
        id: "module-2", 
        title: "Análisis Técnico",
        duration: "12h 45m",
        lessons: [
          { id: "lesson-4", title: "Gráficos y timeframes", duration: "60m", type: "video" as const },
          { id: "lesson-5", title: "Indicadores técnicos", duration: "90m", type: "video" as const }
        ]
      }
    ],
    reviews: [
      {
        id: "review-1",
        user: "María González",
        rating: 5,
        comment: "Excelente curso, muy completo y bien explicado.",
        date: "2024-01-15"
      },
      {
        id: "review-2",
        user: "Carlos Rodríguez",
        rating: 4,
        comment: "Muy bueno, aunque podría tener más ejemplos prácticos.",
        date: "2024-01-10"
      }
    ] as CourseReview[]
  };

  return <CourseDetail {...courseData} />;
};

export default CourseView;
