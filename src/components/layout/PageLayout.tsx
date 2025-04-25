
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} />
          
          <div className="flex-1 lg:ml-64 pt-16 transition-all duration-200 ease-in-out">
            <main className="p-4 md:p-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold">{title}</h1>
                  {subtitle && (
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              {children}
            </main>
            
            <Footer />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PageLayout;
