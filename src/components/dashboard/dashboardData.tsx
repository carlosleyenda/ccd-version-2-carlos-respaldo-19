
import { Trophy, Award, BookOpen } from "lucide-react";
import { CourseCardProps } from "./CourseCard";
import { Event } from "./EventsList";
import { Achievement } from "./AchievementsList";

export const inProgressCourses: CourseCardProps[] = [
  {
    id: "course-1",
    title: "Fundamentos del Trading en Forex",
    description: "Aprende los conceptos básicos del mercado de divisas, análisis técnico y fundamental para operar con éxito.",
    instructor: "Dr. Carlos Martínez",
    category: "forex",
    level: "intermediate",
    duration: "24h 30m",
    enrolled: 1241,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    progress: 65,
  },
  {
    id: "course-2",
    title: "Gestión de Riesgo en Trading",
    description: "Domina las técnicas de gestión de capital, stop loss, take profit y psicología del trading profesional.",
    instructor: "Lic. Ana Rodríguez",
    category: "management",
    level: "advanced",
    duration: "36h 15m",
    enrolled: 893,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    progress: 32,
  },
  {
    id: "course-3",
    title: "Trading de Criptomonedas Avanzado",
    description: "Estrategias profesionales para operar Bitcoin, Ethereum y altcoins en mercados volátiles.",
    instructor: "Prof. Miguel Valdés",
    category: "crypto",
    level: "advanced",
    duration: "28h 45m",
    enrolled: 765,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    progress: 18,
  },
];

export const recommendedCourses: CourseCardProps[] = [
  {
    id: "course-4",
    title: "Análisis Técnico Profesional",
    description: "Domina los indicadores técnicos, patrones de gráficos y estrategias de entrada y salida.",
    instructor: "Ing. Laura Méndez",
    category: "forex",
    level: "beginner",
    duration: "16h 20m",
    enrolled: 1578,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "course-5",
    title: "Psicología del Trading Exitoso",
    description: "Controla tus emociones, desarrolla disciplina y mantén una mentalidad ganadora en el trading.",
    instructor: "Dr. Antonio Guzmán",
    category: "management",
    level: "intermediate",
    duration: "22h 10m",
    enrolled: 642,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "course-6",
    title: "Trading de Acciones y ETFs",
    description: "Aprende a invertir en bolsa, análisis fundamental y construcción de portafolios diversificados.",
    instructor: "Dra. María Fernández",
    category: "stocks",
    level: "advanced",
    duration: "18h 30m",
    enrolled: 524,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

export const liveCourses: CourseCardProps[] = [
  {
    id: "live-1",
    title: "Webinar: Estrategias de Scalping en Forex",
    description: "Aprende técnicas avanzadas de scalping para obtener ganancias rápidas en el mercado de divisas.",
    instructor: "Trader Carlos Morales",
    category: "forex",
    level: "intermediate",
    duration: "2h",
    enrolled: 342,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    isLive: true,
  },
  {
    id: "live-2",
    title: "Taller: Análisis de Mercados en Tiempo Real",
    description: "Sesión práctica analizando oportunidades de trading en vivo con herramientas profesionales.",
    instructor: "Analista Miguel Soto",
    category: "forex",
    level: "advanced",
    duration: "3h",
    enrolled: 189,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    liveDate: "Mañana - 18:00",
  },
  {
    id: "live-3",
    title: "Panel: El Futuro de las Criptomonedas",
    description: "Discusión con expertos sobre tendencias, regulaciones y oportunidades en el mundo cripto.",
    instructor: "Panel de expertos",
    category: "crypto",
    level: "intermediate",
    duration: "1h 30m",
    enrolled: 276,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    liveDate: "Viernes - 15:30",
  },
];

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Webinar: Estrategias de Trading para 2025",
    date: "12 Mayo, 2025",
    time: "15:00 - 16:30",
    instructor: "Dr. Jorge Ramírez",
  },
  {
    id: 2,
    title: "Taller Práctico: Trading con Indicadores Avanzados",
    date: "15 Mayo, 2025",
    time: "10:00 - 13:00",
    instructor: "Trader Claudia Moreno",
  },
  {
    id: 3,
    title: "Certificación: Trader Profesional en Forex",
    date: "20 Mayo, 2025",
    time: "09:00 - 17:00",
    instructor: "Múltiples instructores",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Completado 5 cursos de trading",
    icon: <Trophy className="h-8 w-8 text-amber-500" />,
    date: "23 Abril, 2025",
  },
  {
    id: 2,
    title: "Primera certificación obtenida",
    icon: <Award className="h-8 w-8 text-blue-500" />,
    date: "10 Marzo, 2025",
  },
  {
    id: 3,
    title: "10 días consecutivos estudiando",
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    date: "Actual",
  },
];
