
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, CheckCircle2, Lock } from "lucide-react";
import { toast } from "sonner";

const CoursePreview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleEnroll = () => {
    toast.success("¡Inscripción exitosa!");
    setTimeout(() => navigate(`/course/${id}`), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <div className="flex-1 lg:ml-64">
          <main className="p-4">
            <div className="max-w-6xl mx-auto">
              {/* Preview video */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-6">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80"
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    onClick={() => toast.info("Reproduciendo vista previa...")}
                  >
                    <PlayCircle className="h-6 w-6 mr-2" />
                    Ver vista previa
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h1 className="text-2xl font-bold mb-4">
                    Técnicas Avanzadas de Minería Subterránea
                  </h1>
                  
                  <div className="prose dark:prose-invert max-w-none mb-6">
                    <p>
                      Este curso comprehensivo cubre todos los aspectos fundamentales
                      y avanzados de la minería subterránea moderna, incluyendo técnicas
                      de excavación, sistemas de soporte, ventilación y seguridad.
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h2 className="text-xl font-semibold">Contenido del curso</h2>
                    
                    <div className="space-y-2">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Módulo 1: Introducción</h3>
                          <span className="text-sm text-gray-500">45 min</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <PlayCircle className="h-4 w-4 mr-2 text-gray-500" />
                            <span>1.1 Conceptos Fundamentales</span>
                            <CheckCircle2 className="h-4 w-4 ml-auto text-green-500" />
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Lock className="h-4 w-4 mr-2" />
                            <span>1.2 Evaluación Inicial</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Módulo 2: Técnicas Básicas</h3>
                          <span className="text-sm text-gray-500">1h 30min</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Lock className="h-4 w-4 mr-2" />
                            <span>2.1 Métodos de Excavación</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Lock className="h-4 w-4 mr-2" />
                            <span>2.2 Prácticas Seguras</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="border rounded-lg p-6 sticky top-24">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">$299.99</div>
                        <p className="text-sm text-gray-500 mb-4">Acceso de por vida</p>
                        <Button 
                          className="w-full mb-2" 
                          size="lg"
                          onClick={handleEnroll}
                        >
                          Inscribirme ahora
                        </Button>
                        <p className="text-xs text-gray-500">
                          30 días de garantía de devolución
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium">Este curso incluye:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                            40 horas de contenido
                          </li>
                          <li className="flex items-center text-sm">
                            <PlayCircle className="h-4 w-4 mr-2 text-gray-500" />
                            150 lecciones
                          </li>
                          <li className="flex items-center text-sm">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-gray-500" />
                            Certificado al completar
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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

export default CoursePreview;
