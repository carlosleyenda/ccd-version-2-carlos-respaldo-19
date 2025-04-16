
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { CertificatesList } from "@/components/certificates/CertificatesList";

const Certifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        <div className={`flex-1 transition-all duration-300 ${!isMobile && sidebarOpen ? 'lg:ml-64' : ''}`}>
          <CertificatesList />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Certifications;
