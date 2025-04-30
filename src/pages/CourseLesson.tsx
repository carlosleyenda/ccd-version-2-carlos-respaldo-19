
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronLeft, 
  ChevronRight, 
  List,
  MessageCircle,
  BookOpen,
  CheckCircle,
  X,
  FileText,
  PenLine,
  PlayCircle
} from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import LessonContent from "@/components/lessons/LessonContent";
import LessonModules from "@/components/lessons/LessonModules";
import LessonResources from "@/components/lessons/LessonResources";
import LessonSurvey from "@/components/lessons/LessonSurvey";
import LessonChat from "@/components/lessons/LessonChat";
import LessonProgress from "@/components/lessons/LessonProgress";

const CourseLesson = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModules, setShowModules] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("content");
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
  
  const navigateToCourseExam = () => {
    toast.info("Navegando al examen del módulo...");
    navigate(`/course/${id}/exam/module-1`);
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
                  <PlayCircle className="h-16 w-16 cursor-pointer hover:scale-105 transition-transform" />
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

              {/* Lesson tabs and content */}
              <div className="flex-1 overflow-y-auto">
                <div className="max-w-6xl mx-auto p-4">
                  <h1 className="text-2xl font-bold mb-4">
                    1.1 Conceptos Fundamentales
                  </h1>
                  
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
                    <TabsList className="grid grid-cols-5 mb-6">
                      <TabsTrigger value="content">Contenido</TabsTrigger>
                      <TabsTrigger value="resources">Recursos</TabsTrigger>
                      <TabsTrigger value="chat">Discusión</TabsTrigger>
                      <TabsTrigger value="survey">Encuesta</TabsTrigger>
                      <TabsTrigger value="progress">Progreso</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="content">
                      <LessonContent />
                    </TabsContent>
                    
                    <TabsContent value="resources">
                      <LessonResources />
                    </TabsContent>
                    
                    <TabsContent value="chat">
                      <LessonChat />
                    </TabsContent>
                    
                    <TabsContent value="survey">
                      <LessonSurvey />
                    </TabsContent>
                    
                    <TabsContent value="progress">
                      <LessonProgress onGoToExam={navigateToCourseExam} />
                    </TabsContent>
                  </Tabs>
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
                  <LessonModules />
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
