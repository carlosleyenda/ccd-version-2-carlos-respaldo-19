
import React from "react";
import { 
  BookOpen, Book, Clock, Award, 
  Calendar, Users, ShoppingBag, 
  CreditCard, BarChart3, Layers, 
  FolderOpen, FileSpreadsheet, Briefcase,
  Settings, HelpCircle, User
} from "lucide-react";

export const SidebarData = [
  {
    title: "Principal",
    links: [
      {
        title: "Dashboard",
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/dashboard",
      },
      {
        title: "Rutas de Aprendizaje",
        icon: <Book className="h-5 w-5" />,
        path: "/learning-paths",
      },
      {
        title: "Centro de Evaluación",
        icon: <FileSpreadsheet className="h-5 w-5" />,
        path: "/assessment",
      },
    ],
  },
  {
    title: "Aprendizaje",
    links: [
      {
        title: "Cursos",
        icon: <BookOpen className="h-5 w-5" />,
        path: "/courses",
        notifications: 3,
      },
      {
        title: "Cursos en Vivo",
        icon: <Clock className="h-5 w-5" />,
        path: "/live-courses",
      },
      {
        title: "Certificaciones",
        icon: <Award className="h-5 w-5" />,
        path: "/certifications",
      },
      {
        title: "Biblioteca de Recursos",
        icon: <FolderOpen className="h-5 w-5" />,
        path: "/resources",
      },
    ],
  },
  {
    title: "Especialidades",
    links: [
      {
        title: "Ingeniería",
        icon: <Layers className="h-5 w-5" />,
        path: "/engineering",
      },
      {
        title: "Minería",
        icon: (
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
          </svg>
        ),
        path: "/mining",
      },
      {
        title: "Gestión",
        icon: (
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
          </svg>
        ),
        path: "/management",
      },
    ],
  },
  {
    title: "Comunidad",
    links: [
      {
        title: "Foros",
        icon: <Users className="h-5 w-5" />,
        path: "/forums",
      },
      {
        title: "Ranking",
        icon: <Award className="h-5 w-5" />,
        path: "/ranking",
      },
      {
        title: "Calendario",
        icon: <Calendar className="h-5 w-5" />,
        path: "/schedule",
      },
      {
        title: "Bolsa de Trabajo",
        icon: <Briefcase className="h-5 w-5" />,
        path: "/job-board",
      },
    ],
  },
  {
    title: "Marketplace",
    links: [
      {
        title: "Tienda",
        icon: <ShoppingBag className="h-5 w-5" />,
        path: "/store",
      },
      {
        title: "Planes",
        icon: <CreditCard className="h-5 w-5" />,
        path: "/pricing",
      },
    ],
  },
];

// Add new functions to export the sidebar menu groups and footer items
export const getSidebarMenuGroups = () => {
  return SidebarData;
};

export const getSidebarFooterItems = () => {
  return [
    {
      icon: <User className="h-5 w-5 mr-2" />,
      text: "Mi Perfil",
      to: "/profile",
    },
    {
      icon: <Settings className="h-5 w-5 mr-2" />,
      text: "Configuración",
      to: "/settings",
    },
    {
      icon: <HelpCircle className="h-5 w-5 mr-2" />,
      text: "Ayuda",
      to: "/help",
    },
  ];
};
