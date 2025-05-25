
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ProfileInfo } from "@/components/profile/ProfileInfo";
import { AccountSettings } from "@/components/profile/AccountSettings";
import { NotificationSettings } from "@/components/profile/NotificationSettings";
import { SecuritySettings } from "@/components/profile/SecuritySettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <PageLayout 
      title="Mi Perfil" 
      subtitle="Gestiona tu información personal y configuración de cuenta"
    >
      <div className="w-full">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="account">Cuenta</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            <TabsTrigger value="security">Seguridad</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <ProfileInfo />
          </TabsContent>
          
          <TabsContent value="account" className="mt-6">
            <AccountSettings />
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <NotificationSettings />
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <SecuritySettings />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Profile;
