
import React from "react";
import { 
  BookOpen, Book, Clock, Award, 
  Calendar, Users, ShoppingBag, 
  CreditCard, BarChart3, Layers, 
  FolderOpen, FileSpreadsheet, Briefcase,
  Settings, HelpCircle, User, UserPlus,
  Shield, TrendingUp, DollarSign, Activity
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
        title: "Rutas de Trading",
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
    title: "Educación Trading",
    links: [
      {
        title: "Cursos de Trading",
        icon: <BookOpen className="h-5 w-5" />,
        path: "/courses",
        notifications: 3,
      },
      {
        title: "Trading en Vivo",
        icon: <Clock className="h-5 w-5" />,
        path: "/live-courses",
      },
      {
        title: "Certificaciones",
        icon: <Award className="h-5 w-5" />,
        path: "/certifications",
      },
      {
        title: "Biblioteca Trading",
        icon: <FolderOpen className="h-5 w-5" />,
        path: "/resources",
      },
    ],
  },
  {
    title: "Mercados",
    links: [
      {
        title: "Forex",
        icon: <DollarSign className="h-5 w-5" />,
        path: "/engineering",
      },
      {
        title: "Criptomonedas",
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
        title: "Acciones & ETFs",
        icon: <TrendingUp className="h-5 w-5" />,
        path: "/management",
      },
    ],
  },
  {
    title: "Comunidad Trading",
    links: [
      {
        title: "Foros de Trading",
        icon: <Users className="h-5 w-5" />,
        path: "/forums",
      },
      {
        title: "Ranking Traders",
        icon: <Award className="h-5 w-5" />,
        path: "/ranking",
      },
      {
        title: "Calendario Económico",
        icon: <Calendar className="h-5 w-5" />,
        path: "/schedule",
      },
      {
        title: "Oportunidades Trading",
        icon: <Briefcase className="h-5 w-5" />,
        path: "/job-board",
      },
      {
        title: "Programa de Afiliados",
        icon: <UserPlus className="h-5 w-5" />,
        path: "/referrals",
        highlight: true,
      },
    ],
  },
  {
    title: "Tienda Trading",
    links: [
      {
        title: "Herramientas & Robots",
        icon: <ShoppingBag className="h-5 w-5" />,
        path: "/store",
      },
      {
        title: "Planes de Suscripción",
        icon: <CreditCard className="h-5 w-5" />,
        path: "/pricing",
      },
    ],
  },
  {
    title: "Administración",
    links: [
      {
        title: "Panel de Admin",
        icon: <Shield className="h-5 w-5" />,
        path: "/admin",
      },
    ],
  },
];

// Transform SidebarData to match the MenuGroup structure expected by SidebarMenu
export const getSidebarMenuGroups = () => {
  return SidebarData.map(group => ({
    label: group.title,
    items: group.links.map(link => ({
      icon: link.icon,
      text: link.title,
      to: link.path,
      badge: link.notifications ? String(link.notifications) : null,
      highlight: link.highlight || false
    }))
  }));
};

export const getSidebarFooterItems = () => {
  return [
    {
      icon: <User className="h-5 w-5 mr-2" />,
      text: "Mi Perfil Trader",
      to: "/profile",
    },
    {
      icon: <Settings className="h-5 w-5 mr-2" />,
      text: "Configuración",
      to: "/settings",
    },
    {
      icon: <HelpCircle className="h-5 w-5 mr-2" />,
      text: "Soporte Trading",
      to: "/help",
    },
  ];
};
