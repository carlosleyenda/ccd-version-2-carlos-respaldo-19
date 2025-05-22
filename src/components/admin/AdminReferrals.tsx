
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  Clock,
  Check,
  X,
  MoreVertical,
  DollarSign,
  UserCheck,
  LineChart
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminReferrals = () => {
  const [activeTab, setActiveTab] = useState("withdrawals");
  const [searchQuery, setSearchQuery] = useState("");

  // Datos de ejemplo para retiros
  const withdrawals = [
    {
      id: "W83921",
      user: "Carlos Rodríguez",
      amount: 120,
      method: "bank",
      status: "pending",
      requested: "15/05/2023",
      processed: null
    },
    {
      id: "W83922",
      user: "María López",
      amount: 350,
      method: "wallet",
      status: "completed",
      requested: "12/05/2023",
      processed: "14/05/2023"
    },
    {
      id: "W83920",
      user: "Juan Pérez",
      amount: 60,
      method: "bank",
      status: "completed",
      requested: "10/05/2023",
      processed: "12/05/2023"
    },
    {
      id: "W83919",
      user: "Ana García",
      amount: 220,
      method: "wallet",
      status: "rejected",
      requested: "08/05/2023",
      processed: "09/05/2023"
    },
    {
      id: "W83918",
      user: "Roberto Méndez",
      amount: 180,
      method: "bank",
      status: "pending",
      requested: "07/05/2023",
      processed: null
    }
  ];

  // Datos de ejemplo para estadísticas
  const referralStats = [
    {
      title: "Total Referidos",
      value: "2,845",
      change: "+145",
      timeframe: "este mes",
      icon: <UserCheck className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Comisiones Pagadas",
      value: "S/ 18,320",
      change: "+S/ 2,840",
      timeframe: "este mes",
      icon: <DollarSign className="h-5 w-5 text-green-600" />
    },
    {
      title: "Comisiones Pendientes",
      value: "S/ 4,580",
      change: "24 solicitudes",
      timeframe: "por aprobar",
      icon: <Clock className="h-5 w-5 text-amber-600" />
    },
    {
      title: "Tasa de Conversión",
      value: "32.8%",
      change: "+2.4%",
      timeframe: "vs mes anterior",
      icon: <LineChart className="h-5 w-5 text-purple-600" />
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case "pending":
        return <Badge className="bg-amber-500">Pendiente</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completado</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rechazado</Badge>;
      default:
        return <Badge className="bg-gray-500">-</Badge>;
    }
  };

  const getMethodBadge = (method) => {
    switch(method) {
      case "bank":
        return "Transferencia bancaria";
      case "wallet":
        return "Billetera digital";
      default:
        return method;
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {referralStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">
                {stat.change} {stat.timeframe}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Tabs 
        defaultValue="withdrawals" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <TabsTrigger value="withdrawals">Solicitudes de Retiro</TabsTrigger>
          <TabsTrigger value="commissions">Comisiones</TabsTrigger>
          <TabsTrigger value="network">Red de Referidos</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>
        
        <TabsContent value="withdrawals" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar por ID o usuario..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Exportar
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Monto (S/)</TableHead>
                  <TableHead>Método</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Solicitado</TableHead>
                  <TableHead>Procesado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {withdrawals.map((withdrawal) => (
                  <TableRow key={withdrawal.id}>
                    <TableCell className="font-medium">{withdrawal.id}</TableCell>
                    <TableCell>{withdrawal.user}</TableCell>
                    <TableCell>{withdrawal.amount.toFixed(2)}</TableCell>
                    <TableCell>{getMethodBadge(withdrawal.method)}</TableCell>
                    <TableCell>{getStatusBadge(withdrawal.status)}</TableCell>
                    <TableCell>{withdrawal.requested}</TableCell>
                    <TableCell>{withdrawal.processed || "-"}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            Ver detalles
                          </DropdownMenuItem>
                          {withdrawal.status === "pending" && (
                            <>
                              <DropdownMenuItem className="text-green-600">
                                <Check className="h-4 w-4 mr-2" />
                                Aprobar
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <X className="h-4 w-4 mr-2" />
                                Rechazar
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Mostrando 5 de 24 solicitudes
            </p>
            <div className="space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="commissions">
          <div className="rounded-md border p-4 text-center">
            <p className="text-gray-500">Módulo de comisiones en desarrollo</p>
          </div>
        </TabsContent>
        
        <TabsContent value="network">
          <div className="rounded-md border p-4 text-center">
            <p className="text-gray-500">Visualización de red de referidos en desarrollo</p>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="rounded-md border p-4 text-center">
            <p className="text-gray-500">Configuración del programa de referidos en desarrollo</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminReferrals;
