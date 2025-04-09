
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CourseDetail from "@/components/courses/CourseDetail";
import { toast } from "sonner";

const CourseView = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Mock course data - in a real app, this would come from an API
  const courseData = {
    id: id || "",
    title: "Técnicas Avanzadas de Minería Subterránea",
    description: "Aprende las últimas técnicas y metodologías en minería subterránea",
    longDescription: "Este curso comprehensivo cubre todos los aspectos fundamentales y avanzados de la minería subterránea moderna, incluyendo técnicas de excavación, sistemas de soporte, ventilación y seguridad.",
    instructor: {
      name: "Dr. Carlos Rodríguez",
      title: "Ingeniero de Minas Senior",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    },
    category: "mining" as "mining" | "engineering" | "management",
    level: "advanced" as "beginner" | "intermediate" | "advanced",
    duration: "40 horas",
    enrolled: 324,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    lastUpdated: "2024-03-15",
    language: "Español",
    modules: [
      {
        id: "m1",
        title: "Introducción a la Minería Subterránea",
        duration: "4h",
        lessons: [
          {
            id: "l1",
            title: "Conceptos Fundamentales",
            duration: "45min",
            type: "video",
          },
          {
            id: "l2",
            title: "Evaluación Inicial",
            duration: "30min",
            type: "quiz",
          },
        ],
      },
      {
        id: "m2",
        title: "Técnicas de Excavación",
        duration: "6h",
        lessons: [
          {
            id: "l3",
            title: "Métodos Modernos de Excavación",
            duration: "1h",
            type: "video",
          },
          {
            id: "l4",
            title: "Prácticas de Laboratorio Virtual",
            duration: "2h",
            type: "reading",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 lg:ml-64">
          <CourseDetail {...courseData} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseView;
