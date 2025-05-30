
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CourseDetail from "@/components/courses/CourseDetail";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const CourseView = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Handle sidebar toggle event
  useEffect(() => {
    const handleSidebarToggle = () => {
      setSidebarOpen(!sidebarOpen);
    };
    
    document.addEventListener('toggle-sidebar', handleSidebarToggle);
    
    return () => {
      document.removeEventListener('toggle-sidebar', handleSidebarToggle);
    };
  }, [sidebarOpen]);

  // Mock course data - in a real app, this would come from an API
  const courseData = {
    id: id || "",
    title: "Programa Maestro en Forex",
    description: "Domina el mercado de divisas desde cero hasta nivel profesional",
    longDescription: "Este curso comprehensivo cubre todos los aspectos fundamentales y avanzados del trading en forex, incluyendo análisis técnico, análisis fundamental, gestión de riesgo y psicología del trading.",
    instructor: {
      name: "Dr. Carlos Rodríguez",
      title: "Trader Profesional y Educador",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    },
    category: "forex" as "forex" | "crypto" | "stocks" | "management",
    level: "advanced" as "beginner" | "intermediate" | "advanced",
    duration: "40 horas",
    enrolled: 324,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    lastUpdated: "2024-03-15",
    language: "Español",
    modules: [
      {
        id: "m1",
        title: "Introducción al Trading de Forex",
        duration: "4h",
        lessons: [
          {
            id: "l1",
            title: "Conceptos Fundamentales del Forex",
            duration: "45min",
            type: "video" as "video" | "quiz" | "reading",
          },
          {
            id: "l2",
            title: "Evaluación Inicial",
            duration: "30min",
            type: "quiz" as "video" | "quiz" | "reading",
          },
        ],
      },
      {
        id: "m2",
        title: "Análisis Técnico",
        duration: "6h",
        lessons: [
          {
            id: "l3",
            title: "Indicadores Técnicos Avanzados",
            duration: "1h",
            type: "video" as "video" | "quiz" | "reading",
          },
          {
            id: "l4",
            title: "Patrones de Gráficos",
            duration: "2h",
            type: "reading" as "video" | "quiz" | "reading",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 w-full">
        <Sidebar isOpen={sidebarOpen} />
        <div className={cn(
          "flex-1 transition-all duration-300 ease-in-out pt-16 w-full",
          !isMobile && sidebarOpen ? 'lg:ml-64' : ''
        )}>
          <CourseDetail {...courseData} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CourseView;
