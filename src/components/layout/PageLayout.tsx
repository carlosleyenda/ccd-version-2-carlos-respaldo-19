
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Add event listener for sidebar toggle
  useEffect(() => {
    const handleSidebarToggle = () => {
      setSidebarOpen(!sidebarOpen);
    };
    
    document.addEventListener('toggle-sidebar', handleSidebarToggle);
    
    return () => {
      document.removeEventListener('toggle-sidebar', handleSidebarToggle);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <div className={cn(
          "flex-1 transition-all duration-300 ease-in-out pt-16",
          sidebarOpen ? "lg:ml-64" : "lg:ml-0"
        )}>
          <main className="p-4 md:p-6 max-w-7xl mx-auto w-full">
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

            <div className="w-full relative z-10">
              {children}
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
