
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
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

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

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

  return (
    <ShadcnSidebar className={cn(isOpen ? "translate-x-0" : "-translate-x-full", "fixed inset-y-0 z-20 w-64")}>
      <SidebarContent>
        {menuGroups.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={itemIndex}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.to}
                        className={cn(
                          "flex w-full items-center px-3 py-2 text-sm",
                          currentPath === item.to
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        {item.icon}
                        <span className="ml-3 flex-1">{item.text}</span>
                        {item.badge && (
                          <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.to}
                      className={cn(
                        "flex w-full items-center px-3 py-2 text-sm",
                        currentPath === item.to
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {item.icon}
                      <span className="ml-3">{item.text}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

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
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
