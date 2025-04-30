
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { getSidebarMenuGroups, getSidebarFooterItems } from "./SidebarData";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const isMobile = useIsMobile();
  
  const menuGroups = getSidebarMenuGroups();
  const footerItems = getSidebarFooterItems();

  // Only show the sidebar if it's open (on mobile) or we're on desktop
  const sidebarVisible = isOpen || !isMobile;
  
  const toggleSidebar = () => {
    document.dispatchEvent(new CustomEvent('toggle-sidebar'));
  };
  
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/20 z-10"
          onClick={toggleSidebar}
        />
      )}
      
      <div className={cn(
        "fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out transform",
        sidebarVisible ? "translate-x-0" : "-translate-x-full",
        !isMobile && "lg:translate-x-0" // Always show on desktop, but can be contracted
      )}>
        <div className="flex flex-col h-full py-4">
          <SidebarHeader onToggle={toggleSidebar} />
          <SidebarMenu menuGroups={menuGroups} />
          <SidebarFooter footerItems={footerItems} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
