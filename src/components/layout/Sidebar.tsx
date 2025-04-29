
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Video,
  GraduationCap,
  Award,
  Calendar,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();

  const menuGroups = [
    {
      label: "Principal",
      items: [
        {
          icon: <LayoutDashboard size={20} />,
          text: "Dashboard",
          to: "/dashboard",
          badge: null,
        },
        {
          icon: <BookOpen size={20} />,
          text: "Mis Cursos",
          to: "/courses",
          badge: "3",
        },
        {
          icon: <Video size={20} />,
          text: "Cursos en Vivo",
          to: "/live-courses",
          badge: "Nuevo",
        },
      ],
    },
    {
      label: "Especialidades",
      items: [
        {
          icon: <GraduationCap size={20} />,
          text: "Ingeniería",
          to: "/engineering",
          badge: null,
        },
        {
          icon: <GraduationCap size={20} />,
          text: "Minería",
          to: "/mining",
          badge: null,
        },
        {
          icon: <GraduationCap size={20} />,
          text: "Gestión",
          to: "/management",
          badge: null,
        },
      ],
    },
    {
      label: "Mi Progreso",
      items: [
        {
          icon: <Award size={20} />,
          text: "Certificaciones",
          to: "/certifications",
          badge: null,
        },
        {
          icon: <Calendar size={20} />,
          text: "Horario",
          to: "/schedule",
          badge: null,
        },
      ],
    },
    {
      label: "Comunidad",
      items: [
        {
          icon: <Users size={20} />,
          text: "Foros",
          to: "/forums",
          badge: null,
        },
      ],
    },
  ];

  const footerItems = [
    {
      icon: <Settings size={20} />,
      text: "Configuración",
      to: "/settings",
    },
    {
      icon: <HelpCircle size={20} />,
      text: "Ayuda",
      to: "/help",
    },
  ];

  // Solo mostramos el sidebar si está abierto (en móvil) o estamos en desktop
  const sidebarVisible = isOpen || !isMobile;

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out transform",
      sidebarVisible ? "translate-x-0" : "-translate-x-full",
      !isMobile && "lg:translate-x-0" // En desktop siempre mostramos, pero puede ser contraído
    )}>
      <div className="flex flex-col h-full py-4">
        <div className="px-4 pb-2">
          <Link to="/" className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/222ebd34-3bc5-4f1d-8b3c-79ac998b8b9c.png" 
              alt="CCD Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 py-2">
          {menuGroups.map((group, index) => (
            <div key={index} className="mb-6">
              <h2 className="mb-2 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                {group.label}
              </h2>
              <ul className="space-y-1">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.to}
                      className={cn(
                        "flex w-full items-center px-3 py-2 text-sm rounded-md",
                        currentPath === item.to
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item.icon}
                      <span className="ml-3 flex-1">{item.text}</span>
                      {item.badge && (
                        <Badge variant="outline" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-2 px-3">
          <ul className="space-y-1">
            {footerItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex w-full items-center px-3 py-2 text-sm rounded-md",
                    currentPath === item.to
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="p-4">
            <div className="rounded-lg bg-mining-50 p-3 dark:bg-mining-900/30">
              <h3 className="text-sm font-medium text-mining-900 dark:text-mining-200">
                Plan Actual: Gratuito
              </h3>
              <p className="mt-1 text-xs text-mining-700 dark:text-mining-300">
                Actualiza a Premium para acceso completo
              </p>
              <button className="mt-2 w-full rounded-md bg-mining-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-mining-700">
                Actualizar Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
