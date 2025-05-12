
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ReferralSection } from "@/components/referrals/ReferralSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Award, Diamond, DollarSign, Share2, UserPlus } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/sonner";

const Referrals = () => {
  // Estado para simular referidos para la demostración
  const [activeTab, setActiveTab] = useState("activo");
  
  const mockReferrals = [
    { id: 1, name: "Carlos Gutiérrez", email: "carlos.g@ejemplo.com", status: "Activo", date: "2025-05-08", reward: "30" },
    { id: 2, name: "María López", email: "maria.lopez@ejemplo.com", status: "Activo", date: "2025-05-10", reward: "30" },
  ];

  const mockRewards = [
    { id: 1, name: "Carlos Gutiérrez", type: "Diamantes", amount: "30", date: "2025-05-10", status: "Procesado" },
    { id: 2, name: "María López", type: "Efectivo", amount: "30", date: "2025-05-12", status: "Procesado" },
  ];

  return (
    <PageLayout 
      title="Programa de Referidos" 
      subtitle="Invita a tus amigos y gana recompensas por cada registro completado"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="activo" onValueChange={setActiveTab}>
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="activo" className="flex-1">
                <UserPlus className="h-4 w-4 mr-2" />
                Referidos Activos
                <Badge className="ml-2 bg-blue-600">
                  {activeTab === "activo" ? mockReferrals.length : 0}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="historial" className="flex-1">
                <Award className="h-4 w-4 mr-2" />
                Historial de Recompensas
                <Badge className="ml-2 bg-blue-600">
                  {activeTab === "historial" ? mockRewards.length : 0}
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="activo">
              <Card>
                <CardContent className="p-6">
                  {mockReferrals.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-50 dark:bg-blue-900/30">
                            <th className="text-left p-3 border-b">Nombre</th>
                            <th className="text-left p-3 border-b">Email</th>
                            <th className="text-left p-3 border-b">Fecha</th>
                            <th className="text-left p-3 border-b">Estado</th>
                            <th className="text-right p-3 border-b">Recompensa</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockReferrals.map((referral) => (
                            <tr key={referral.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/10">
                              <td className="p-3 border-b">{referral.name}</td>
                              <td className="p-3 border-b">{referral.email}</td>
                              <td className="p-3 border-b">{referral.date}</td>
                              <td className="p-3 border-b">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {referral.status}
                                </span>
                              </td>
                              <td className="p-3 border-b text-right font-medium text-blue-700">
                                S/ {referral.reward}.00
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 mx-auto text-blue-300 mb-4" />
                      <p className="text-lg mb-2 font-medium">Todavía no tienes referidos activos</p>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Comparte tu código de referido con tus amigos para comenzar a ganar recompensas.
                        Cada amigo que se registre te dará 30 soles en recompensas.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="historial">
              <Card>
                <CardContent className="p-6">
                  {mockRewards.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-50 dark:bg-blue-900/30">
                            <th className="text-left p-3 border-b">Referido</th>
                            <th className="text-left p-3 border-b">Tipo</th>
                            <th className="text-left p-3 border-b">Fecha</th>
                            <th className="text-left p-3 border-b">Estado</th>
                            <th className="text-right p-3 border-b">Monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockRewards.map((reward) => (
                            <tr key={reward.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/10">
                              <td className="p-3 border-b">{reward.name}</td>
                              <td className="p-3 border-b">
                                <div className="flex items-center">
                                  {reward.type === "Diamantes" ? 
                                    <Diamond className="h-4 w-4 mr-2 text-blue-600" /> : 
                                    <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                                  }
                                  {reward.type}
                                </div>
                              </td>
                              <td className="p-3 border-b">{reward.date}</td>
                              <td className="p-3 border-b">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {reward.status}
                                </span>
                              </td>
                              <td className="p-3 border-b text-right font-medium text-blue-700">
                                S/ {reward.amount}.00
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 mx-auto text-blue-300 mb-4" />
                      <p className="text-lg mb-2 font-medium">No hay historial de recompensas</p>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Las recompensas que obtengas por referidos aparecerán aquí.
                        Invita a tus amigos para comenzar a acumular beneficios.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <ReferralSection 
            userReferralCode="EDUTECH2024"
            totalEarned={60}
            referralsCount={2}
          />
        </div>
      </div>
      <Toaster />
    </PageLayout>
  );
};

export default Referrals;
