
import React from "react";
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

export const getSidebarMenuGroups = () => [
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

export const getSidebarFooterItems = () => [
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
