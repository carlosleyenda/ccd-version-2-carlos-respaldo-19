
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MessageCircle, Users, Clock, Share2 } from "lucide-react";

const CourseLive = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleShare = () => {
    toast.success("Enlace copiado al portapapeles");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <div className="flex-1 lg:ml-64">
          <main className="p-4">
            <div className="max-w-6xl mx-auto">
              {/* Video container */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-xl mb-4">Transmisión en vivo iniciando...</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="animate-pulse relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <span>EN VIVO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course info and controls */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h1 className="text-2xl font-bold mb-2">
                    Técnicas Avanzadas de Minería Subterránea
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      324 participantes
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      1h 45m restantes
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Button 
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                </div>

                {/* Chat section */}
                <div className="lg:col-span-1">
                  <div className="border rounded-lg h-[600px] flex flex-col bg-white dark:bg-gray-800">
                    <div className="p-4 border-b">
                      <h2 className="font-semibold flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Chat en vivo
                      </h2>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-4">
                        {/* Example chat messages */}
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200" />
                          <div>
                            <p className="text-sm font-medium">Juan Pérez</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Excelente explicación sobre los sistemas de ventilación
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Escribe un mensaje..."
                          className="flex-1 rounded-md border bg-transparent px-3 py-2 text-sm"
                        />
                        <Button>Enviar</Button>
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

export default CourseLive;
