
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  List,
  MessageCircle,
  BookOpen,
  CheckCircle,
  X
} from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const CourseLesson = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModules, setShowModules] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Cerrar el panel de módulos al hacer clic fuera en dispositivos móviles
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && showModules) {
        const modulesSidebar = document.getElementById('modules-sidebar');
        if (modulesSidebar && !modulesSidebar.contains(event.target as Node)) {
          setShowModules(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, showModules]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleComplete = () => {
    toast.success("¡Lección completada!");
    // En una app real, esto actualizaría el progreso del usuario
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <div className={`flex-1 transition-all duration-300 ${!isMobile && sidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="h-full flex">
            {/* Main content */}
            <div className="flex-1 flex flex-col">
              {/* Video section */}
              <div className="bg-black aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <span>Contenido de la lección</span>
                </div>
              </div>

              {/* Navigation bar */}
              <div className="border-b p-4">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2"
                    onClick={() => navigate(`/course/${id}`)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Anterior</span>
                  </Button>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      className="lg:hidden"
                      onClick={() => setShowModules(!showModules)}
                    >
                      <List className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="success"
                      className="flex items-center gap-2"
                      onClick={handleComplete}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span className="hidden sm:inline">Marcar como completada</span>
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    className="flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Siguiente</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Lesson content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="max-w-6xl mx-auto">
                  <h1 className="text-2xl font-bold mb-4">
                    1.1 Conceptos Fundamentales
                  </h1>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      En esta lección, exploraremos los conceptos fundamentales
                      de la minería subterránea y su importancia en la industria
                      moderna.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules sidebar - hidden on mobile unless toggled */}
            <div 
              id="modules-sidebar"
              className={`
                fixed inset-y-0 right-0 w-80 bg-background border-l transform transition-transform lg:relative lg:translate-x-0 z-30
                ${showModules ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
              `}
            >
              <div className="h-full flex flex-col">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="font-semibold">Contenido del curso</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="lg:hidden" 
                    onClick={() => setShowModules(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-4">
                    {/* Module */}
                    <div>
                      <h3 className="font-medium mb-2">Módulo 1: Introducción</h3>
                      <ul className="space-y-2">
                        <li>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-sm font-normal bg-accent"
                          >
                            <BookOpen className="h-4 w-4 mr-2" />
                            1.1 Conceptos Fundamentales
                          </Button>
                        </li>
                        <li>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-sm font-normal"
                          >
                            <BookOpen className="h-4 w-4 mr-2" />
                            1.2 Evaluación Inicial
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay para cerrar el sidebar de módulos en móvil */}
      {showModules && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden" 
          onClick={() => setShowModules(false)}
        />
      )}
    </div>
  );
};

export default CourseLesson;
