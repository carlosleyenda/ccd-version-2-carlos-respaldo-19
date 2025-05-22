
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Shield } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminUsers from "@/components/admin/AdminUsers";
import AdminCourses from "@/components/admin/AdminCourses";
import AdminCertifications from "@/components/admin/AdminCertifications";
import AdminReferrals from "@/components/admin/AdminReferrals";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminSettings from "@/components/admin/AdminSettings";
import AdminFinances from "@/components/admin/AdminFinances";
import AdminEnrollments from "@/components/admin/AdminEnrollments";
import AdminDocuments from "@/components/admin/AdminDocuments";
import AdminSupport from "@/components/admin/AdminSupport";
import AdminReports from "@/components/admin/AdminReports";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard />;
      case "users":
        return <AdminUsers />;
      case "courses":
        return <AdminCourses />;
      case "certifications":
        return <AdminCertifications />;
      case "enrollments":
        return <AdminEnrollments />;
      case "documents":
        return <AdminDocuments />;
      case "support":
        return <AdminSupport />;
      case "referrals":
        return <AdminReferrals />;
      case "finances":
        return <AdminFinances />;
      case "reports":
        return <AdminReports />;
      case "settings":
        return <AdminSettings />;
      default:
        return <AdminDashboard />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 py-3 flex items-center">
          <Shield className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-lg font-semibold">Panel de Administración</h1>
        </div>
      </header>
      
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-56px)] w-full">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="flex-1 p-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              {renderContent()}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Admin;
