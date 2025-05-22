
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminUsers from "@/components/admin/AdminUsers";
import AdminCourses from "@/components/admin/AdminCourses";
import AdminCertifications from "@/components/admin/AdminCertifications";
import AdminReferrals from "@/components/admin/AdminReferrals";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminSettings from "@/components/admin/AdminSettings";
import AdminFinances from "@/components/admin/AdminFinances";
import { Shield } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <PageLayout 
      title="Panel de Administración" 
      subtitle="Gestión completa de la plataforma educativa"
    >
      <div className="flex items-center gap-2 mb-6 text-blue-600">
        <Shield className="h-5 w-5" />
        <h2 className="text-lg font-medium">Panel de Control</h2>
      </div>
      
      <Tabs 
        defaultValue="dashboard" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
          <TabsTrigger value="dashboard">Resumen</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
          <TabsTrigger value="referrals">Referidos</TabsTrigger>
          <TabsTrigger value="finances">Finanzas</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard">
          <AdminDashboard />
        </TabsContent>
        
        <TabsContent value="users">
          <AdminUsers />
        </TabsContent>
        
        <TabsContent value="courses">
          <AdminCourses />
        </TabsContent>
        
        <TabsContent value="certifications">
          <AdminCertifications />
        </TabsContent>
        
        <TabsContent value="referrals">
          <AdminReferrals />
        </TabsContent>
        
        <TabsContent value="finances">
          <AdminFinances />
        </TabsContent>
        
        <TabsContent value="settings">
          <AdminSettings />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Admin;
