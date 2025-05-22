
import React from "react";
import { 
  Shield, Users, BookOpen, Award, UserPlus, BarChart2, Settings, 
  FileText, HelpCircle, School, FileCheck, ShoppingBag, BookMarked, ClipboardList
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    { id: "dashboard", icon: BarChart2, label: "Resumen" },
    { id: "users", icon: Users, label: "Usuarios" },
    { id: "courses", icon: BookOpen, label: "Cursos" },
    { id: "exams", icon: ClipboardList, label: "Exámenes" },
    { id: "certifications", icon: Award, label: "Certificaciones" },
    { id: "enrollments", icon: School, label: "Matrículas" },
    { id: "documents", icon: FileText, label: "Trámites" },
    { id: "support", icon: HelpCircle, label: "Soporte" },
    { id: "referrals", icon: UserPlus, label: "Referidos" },
    { id: "store", icon: ShoppingBag, label: "Tienda" },
    { id: "resources", icon: BookMarked, label: "Recursos" },
    { id: "finances", icon: BarChart2, label: "Finanzas" },
    { id: "reports", icon: FileCheck, label: "Reportes" },
    { id: "settings", icon: Settings, label: "Configuración" },
  ];

  return (
    <Sidebar variant="inset" className="border-r border-gray-200 dark:border-gray-800">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-lg">Panel Admin</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    isActive={activeTab === item.id}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t">
        <div className="text-sm text-gray-500">
          Panel de Administración v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
