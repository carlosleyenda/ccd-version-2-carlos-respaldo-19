
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarHeaderProps {
  onToggle: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onToggle }) => {
  const isMobile = useIsMobile();

  return (
    <div className="px-4 pb-2 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-1">
        <img 
          src="/lovable-uploads/222ebd34-3bc5-4f1d-8b3c-79ac998b8b9c.png" 
          alt="CCD Logo" 
          className="h-10 w-auto"
        />
        <span className="text-xl font-bold">CCD</span>
      </Link>
      
      {!isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle}
          className="ml-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default SidebarHeader;
