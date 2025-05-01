
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileInfo from "@/components/profile/ProfileInfo";
import AccountSettings from "@/components/profile/AccountSettings";
import SecuritySettings from "@/components/profile/SecuritySettings";
import NotificationSettings from "@/components/profile/NotificationSettings";

const UserProfile = () => {
  return (
    <PageLayout 
      title="Mi Perfil" 
      subtitle="Gestiona tu cuenta y personaliza tus preferencias"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full grid grid-cols-4 rounded-none mb-4 px-6 pt-4">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="account">Cuenta</TabsTrigger>
            <TabsTrigger value="security">Seguridad</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <ProfileInfo />
          </TabsContent>
          <TabsContent value="account">
            <AccountSettings />
          </TabsContent>
          <TabsContent value="security">
            <SecuritySettings />
          </TabsContent>
          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default UserProfile;
