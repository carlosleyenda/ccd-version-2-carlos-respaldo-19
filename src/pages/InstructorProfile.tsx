
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/dashboard/CourseCard";
import { Mail, LinkedinIcon, GraduationCap, Users, Star } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const InstructorProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { name } = useParams();
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Mock instructor courses
  const instructorCourses = [
    {
      id: "1",
      title: "Técnicas Avanzadas de Trading en Forex",
      description: "Aprende las técnicas más avanzadas para operar en el mercado de divisas",
      instructor: "Dr. Carlos Rodríguez",
      category: "forex" as "forex" | "crypto" | "stocks" | "management",
      level: "advanced" as "beginner" | "intermediate" | "advanced",
      duration: "40 horas",
      enrolled: 324,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Gestión de Riesgo en Trading",
      description: "Implementa protocolos efectivos de gestión de riesgo en tus operaciones",
      instructor: "Dr. Carlos Rodríguez",
      category: "management" as "forex" | "crypto" | "stocks" | "management",
      level: "intermediate" as "beginner" | "intermediate" | "advanced",
      duration: "30 horas",
      enrolled: 256,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleContact = () => {
    toast.success("Mensaje enviado al instructor");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <div className={`flex-1 transition-all duration-300 ${!isMobile && sidebarOpen ? 'lg:ml-64' : ''}`}>
          <main className="p-4">
            <div className="max-w-6xl mx-auto">
              {/* Profile header */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-48 mx-auto md:mx-0">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                    alt="Instructor"
                    className="w-48 h-48 rounded-lg object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2 text-center md:text-left">Dr. Carlos Rodríguez</h1>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 text-center md:text-left">
                    Ingeniero de Minas Senior con más de 15 años de experiencia
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-gray-500" />
                      <span>2 cursos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span>580 estudiantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-amber-400" />
                      <span>4.8 calificación promedio</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Button 
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={handleContact}
                    >
                      <Mail className="h-4 w-4" />
                      Contactar
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => window.open("https://linkedin.com", "_blank")}
                    >
                      <LinkedinIcon className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Biografía</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Especialista en minería subterránea con más de 15 años de experiencia
                    en el sector. PhD en Ingeniería de Minas por la Universidad de Chile
                    y consultor internacional en proyectos mineros.
                  </p>
                </div>
              </div>

              {/* Courses */}
              <div>
                <h2 className="text-xl font-bold mb-4">Cursos del instructor</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {instructorCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InstructorProfile;
