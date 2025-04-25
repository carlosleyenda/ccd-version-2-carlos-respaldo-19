
import React from "react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const Engineering = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <div className="flex-1 lg:ml-64 pt-16 transition-all duration-200 ease-in-out">
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">Ingeniería</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Explora nuestros cursos especializados en ingeniería
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Aquí irán los cursos de ingeniería */}
              <div className="p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">Contenido próximamente</h3>
                <p className="text-gray-500 mt-2">
                  Estamos preparando contenido especializado en ingeniería.
                </p>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Engineering;
