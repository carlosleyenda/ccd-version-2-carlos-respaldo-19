
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ReferralSection } from "@/components/referrals/ReferralSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Referrals = () => {
  return (
    <PageLayout 
      title="Programa de Referidos" 
      subtitle="Invita a tus amigos y gana recompensas por cada uno"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="activo">
            <TabsList className="mb-4">
              <TabsTrigger value="activo">Referidos Activos</TabsTrigger>
              <TabsTrigger value="historial">Historial de Recompensas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activo">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <p className="text-lg mb-2">Todavía no tienes referidos activos</p>
                    <p className="text-gray-500">
                      Comparte tu código de referido con tus amigos para comenzar a ganar recompensas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="historial">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <p className="text-lg mb-2">No hay historial de recompensas</p>
                    <p className="text-gray-500">
                      Las recompensas que obtengas aparecerán aquí
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <ReferralSection />
        </div>
      </div>
    </PageLayout>
  );
};

export default Referrals;
