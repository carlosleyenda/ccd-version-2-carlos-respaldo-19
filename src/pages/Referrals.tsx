
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ReferralSection } from "@/components/referrals/ReferralSection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Award, Diamond, DollarSign, Share2, UserPlus, Users } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/sonner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Referrals = () => {
  const [activeTab, setActiveTab] = useState("activo");
  
  // Datos simulados para la demostración
  const mockReferrals = [
    { 
      id: 1, 
      name: "Carlos Gutiérrez", 
      email: "carlos.g@ejemplo.com", 
      status: "Activo", 
      date: "2025-05-08", 
      reward: "30",
      level: 1,
      referralCode: "CARLOS2025",
      referralsCount: 3
    },
    { 
      id: 2, 
      name: "María López", 
      email: "maria.lopez@ejemplo.com", 
      status: "Activo", 
      date: "2025-05-10", 
      reward: "30",
      level: 1,
      referralCode: "MARIA2025",
      referralsCount: 2
    },
    { 
      id: 3, 
      name: "Juan Pérez", 
      email: "juan.perez@ejemplo.com", 
      status: "Activo", 
      date: "2025-05-11", 
      reward: "6",
      level: 2,
      referralCode: "JUAN2025",
      referralsCount: 5
    },
    { 
      id: 4, 
      name: "Ana Rodríguez", 
      email: "ana.rodriguez@ejemplo.com", 
      status: "Activo", 
      date: "2025-05-12", 
      reward: "6",
      level: 2,
      referralCode: "ANA2025",
      referralsCount: 0
    },
    { 
      id: 5, 
      name: "Luis Mendoza", 
      email: "luis.mendoza@ejemplo.com", 
      status: "Activo", 
      date: "2025-05-13", 
      reward: "1",
      level: 3,
      referralCode: "LUIS2025",
      referralsCount: 0
    }
  ];

  const mockRewards = [
    { id: 1, name: "Carlos Gutiérrez", type: "Diamantes", amount: "30", date: "2025-05-10", status: "Procesado", level: 1 },
    { id: 2, name: "María López", type: "Efectivo", amount: "30", date: "2025-05-12", status: "Procesado", level: 1 },
    { id: 3, name: "Juan Pérez", type: "Efectivo", amount: "6", date: "2025-05-13", status: "Procesado", level: 2 },
    { id: 4, name: "Ana Rodríguez", type: "Diamantes", amount: "6", date: "2025-05-14", status: "Procesado", level: 2 },
    { id: 5, name: "Luis Mendoza", type: "Efectivo", amount: "1", date: "2025-05-15", status: "Procesado", level: 3 },
  ];

  const mockWithdrawals = [
    { id: 1, date: "2025-05-05", amount: "40", status: "Completado", method: "Transferencia bancaria" },
    { id: 2, date: "2025-05-15", amount: "25", status: "En proceso", method: "Billetera digital" },
  ];

  // Calcular estadísticas
  const totalCommissions = mockRewards.reduce((sum, reward) => sum + parseFloat(reward.amount), 0);
  const level1Total = mockRewards.filter(r => r.level === 1).reduce((sum, reward) => sum + parseFloat(reward.amount), 0);
  const level2Total = mockRewards.filter(r => r.level === 2).reduce((sum, reward) => sum + parseFloat(reward.amount), 0);
  const level3Total = mockRewards.filter(r => r.level === 3).reduce((sum, reward) => sum + parseFloat(reward.amount), 0);
  
  const level1Count = mockReferrals.filter(r => r.level === 1).length;
  const level2Count = mockReferrals.filter(r => r.level === 2).length;
  const level3Count = mockReferrals.filter(r => r.level === 3).length;

  // Calcular saldo disponible (comisiones menos retiros)
  const totalWithdrawals = mockWithdrawals.reduce((sum, withdrawal) => sum + parseFloat(withdrawal.amount), 0);
  const availableBalance = totalCommissions - totalWithdrawals;

  return (
    <PageLayout 
      title="Programa de Referidos" 
      subtitle="Sistema multinivel: gana por tus referidos directos y por su red hasta 3 niveles"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="activo" onValueChange={setActiveTab}>
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="activo" className="flex-1">
                <UserPlus className="h-4 w-4 mr-2" />
                Red de Referidos
                <Badge className="ml-2 bg-blue-600">
                  {activeTab === "activo" ? mockReferrals.length : 0}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="historial" className="flex-1">
                <Award className="h-4 w-4 mr-2" />
                Historial de Comisiones
                <Badge className="ml-2 bg-blue-600">
                  {activeTab === "historial" ? mockRewards.length : 0}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="retiros" className="flex-1">
                <DollarSign className="h-4 w-4 mr-2" />
                Retiros
                <Badge className="ml-2 bg-blue-600">
                  {activeTab === "retiros" ? mockWithdrawals.length : 0}
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="activo">
              <Card>
                <CardContent className="p-6">
                  {mockReferrals.length > 0 ? (
                    <>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Nivel 1</p>
                          <p className="text-2xl font-bold">{level1Count}</p>
                          <p className="text-xs text-blue-600">Comisión de S/ 30.00 c/u</p>
                        </div>
                        <div className="bg-blue-50/70 dark:bg-blue-900/20 p-4 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Nivel 2</p>
                          <p className="text-2xl font-bold">{level2Count}</p>
                          <p className="text-xs text-blue-600">Comisión de S/ 6.00 c/u</p>
                        </div>
                        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Nivel 3</p>
                          <p className="text-2xl font-bold">{level3Count}</p>
                          <p className="text-xs text-blue-600">Comisión de S/ 1.00 c/u</p>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-blue-50 dark:bg-blue-900/30">
                              <TableHead>Nombre</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Nivel</TableHead>
                              <TableHead>Fecha</TableHead>
                              <TableHead>Sus Referidos</TableHead>
                              <TableHead className="text-right">Comisión</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {mockReferrals.map((referral) => (
                              <TableRow key={referral.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/10">
                                <TableCell>{referral.name}</TableCell>
                                <TableCell>{referral.email}</TableCell>
                                <TableCell>
                                  <Badge className={`${
                                    referral.level === 1 ? 'bg-blue-600' : 
                                    referral.level === 2 ? 'bg-blue-500' : 'bg-blue-400'
                                  }`}>
                                    Nivel {referral.level}
                                  </Badge>
                                </TableCell>
                                <TableCell>{referral.date}</TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Users className="h-3.5 w-3.5 mr-1 text-blue-600" />
                                    {referral.referralsCount}
                                  </div>
                                </TableCell>
                                <TableCell className="text-right font-medium text-blue-700">
                                  S/ {referral.reward}.00
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 mx-auto text-blue-300 mb-4" />
                      <p className="text-lg mb-2 font-medium">Todavía no tienes referidos activos</p>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Comparte tu código de referido con tus amigos para comenzar a ganar comisiones.
                        Cada amigo que se registre te dará comisiones en tres niveles.
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
                    <>
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg col-span-1">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Total</p>
                          <p className="text-2xl font-bold">S/ {totalCommissions}.00</p>
                          <p className="text-xs text-blue-600">Todos los niveles</p>
                        </div>
                        <div className="bg-blue-50/80 dark:bg-blue-900/20 p-4 rounded-lg col-span-1">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Nivel 1</p>
                          <p className="text-2xl font-bold">S/ {level1Total}.00</p>
                          <p className="text-xs text-blue-600">{level1Count} referidos</p>
                        </div>
                        <div className="bg-blue-50/60 dark:bg-blue-900/15 p-4 rounded-lg col-span-1">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Nivel 2</p>
                          <p className="text-2xl font-bold">S/ {level2Total}.00</p>
                          <p className="text-xs text-blue-600">{level2Count} referidos</p>
                        </div>
                        <div className="bg-blue-50/40 dark:bg-blue-900/10 p-4 rounded-lg col-span-1">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Nivel 3</p>
                          <p className="text-2xl font-bold">S/ {level3Total}.00</p>
                          <p className="text-xs text-blue-600">{level3Count} referidos</p>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-blue-50 dark:bg-blue-900/30">
                              <TableHead>Referido</TableHead>
                              <TableHead>Nivel</TableHead>
                              <TableHead>Tipo</TableHead>
                              <TableHead>Fecha</TableHead>
                              <TableHead>Estado</TableHead>
                              <TableHead className="text-right">Monto</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {mockRewards.map((reward) => (
                              <TableRow key={reward.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/10">
                                <TableCell>{reward.name}</TableCell>
                                <TableCell>
                                  <Badge className={`${
                                    reward.level === 1 ? 'bg-blue-600' : 
                                    reward.level === 2 ? 'bg-blue-500' : 'bg-blue-400'
                                  }`}>
                                    Nivel {reward.level}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    {reward.type === "Diamantes" ? 
                                      <Diamond className="h-4 w-4 mr-2 text-blue-600" /> : 
                                      <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                                    }
                                    {reward.type}
                                  </div>
                                </TableCell>
                                <TableCell>{reward.date}</TableCell>
                                <TableCell>
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    {reward.status}
                                  </span>
                                </TableCell>
                                <TableCell className="text-right font-medium text-blue-700">
                                  S/ {reward.amount}.00
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 mx-auto text-blue-300 mb-4" />
                      <p className="text-lg mb-2 font-medium">No hay historial de comisiones</p>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Las comisiones que obtengas por referidos aparecerán aquí.
                        Invita a tus amigos para comenzar a acumular beneficios.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="retiros">
              <Card>
                <CardContent className="p-6">
                  {mockWithdrawals.length > 0 ? (
                    <>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-300">Total ganado</p>
                          <p className="text-2xl font-bold">S/ {totalCommissions}.00</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-300">Disponible</p>
                          <p className="text-2xl font-bold">S/ {availableBalance}.00</p>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                          <p className="text-sm text-amber-800 dark:text-amber-300">Total retirado</p>
                          <p className="text-2xl font-bold">S/ {totalWithdrawals}.00</p>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-blue-50 dark:bg-blue-900/30">
                              <TableHead>Fecha</TableHead>
                              <TableHead>Método</TableHead>
                              <TableHead>Estado</TableHead>
                              <TableHead className="text-right">Monto</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {mockWithdrawals.map((withdrawal) => (
                              <TableRow key={withdrawal.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/10">
                                <TableCell>{withdrawal.date}</TableCell>
                                <TableCell>{withdrawal.method}</TableCell>
                                <TableCell>
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    withdrawal.status === "Completado" 
                                      ? "bg-green-100 text-green-800" 
                                      : "bg-amber-100 text-amber-800"
                                  }`}>
                                    {withdrawal.status}
                                  </span>
                                </TableCell>
                                <TableCell className="text-right font-medium text-blue-700">
                                  S/ {withdrawal.amount}.00
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 mx-auto text-blue-300 mb-4" />
                      <p className="text-lg mb-2 font-medium">No hay retiros realizados</p>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Aquí aparecerán los retiros que solicites de tus comisiones por referidos.
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
            totalEarned={totalCommissions}
            referralsCount={mockReferrals.length}
            directReferralsCount={level1Count}
            secondLevelCount={level2Count}
            thirdLevelCount={level3Count}
            withdrawableBalance={availableBalance}
          />
        </div>
      </div>
      <Toaster />
    </PageLayout>
  );
};

export default Referrals;
