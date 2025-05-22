
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
  MoreVertical,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  CreditCard,
  FileText,
  BarChart3,
  CircleDollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminFinances = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Datos de ejemplo para estadísticas financieras
  const financeStats = [
    {
      title: "Ingresos Totales",
      value: "S/ 58,320",
      change: "+8.2%",
      timeframe: "vs mes anterior",
      icon: <DollarSign className="h-5 w-5 text-green-600" />
    },
    {
      title: "Ventas del Mes",
      value: "S/ 12,845",
      change: "+12.5%",
      timeframe: "vs mes anterior",
      icon: <TrendingUp className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Ticket Promedio",
      value: "S/ 320",
      change: "+5.2%",
      timeframe: "vs mes anterior",
      icon: <CreditCard className="h-5 w-5 text-amber-600" />
    },
    {
      title: "Comisiones Pagadas",
      value: "S/ 4,580",
      change: "+18.3%",
      timeframe: "vs mes anterior",
      icon: <CircleDollarSign className="h-5 w-5 text-indigo-600" />
    }
  ];
  
  // Datos de ejemplo para transacciones
  const transactions = [
    {
      id: "TRX-10045",
      date: "15/05/2023",
      user: "Carlos Rodríguez",
      description: "Compra de curso: Fundamentos de Ingeniería Civil",
      amount: 299,
      method: "credit_card",
      status: "completed"
    },
    {
      id: "TRX-10044",
      date: "14/05/2023",
      user: "María López",
      description: "Suscripción Premium - Renovación Mensual",
      amount: 49.90,
      method: "paypal",
      status: "completed"
    },
    {
      id: "TRX-10043",
      date: "14/05/2023",
      user: "Juan Pérez",
      description: "Compra de curso: Seguridad en Operaciones Mineras",
      amount: 349,
      method: "credit_card",
      status: "completed"
    },
    {
      id: "TRX-10042",
      date: "13/05/2023",
      user: "Ana García",
      description: "Suscripción Premium - Anual",
      amount: 499,
      method: "bank_transfer",
      status: "pending"
    },
    {
      id: "TRX-10041",
      date: "12/05/2023",
      user: "Roberto Méndez",
      description: "Compra de curso: Gestión de Proyectos Avanzada",
      amount: 399,
      method: "credit_card",
      status: "refunded"
    }
  ];
  
  const getStatusBadge = (status) => {
    switch(status) {
      case "completed":
        return <Badge className="bg-green-500">Completado</Badge>;
      case "pending":
        return <Badge className="bg-amber-500">Pendiente</Badge>;
      case "refunded":
        return <Badge className="bg-red-500">Reembolsado</Badge>;
      default:
        return <Badge className="bg-gray-500">-</Badge>;
    }
  };
  
  const getMethodIcon = (method) => {
    switch(method) {
      case "credit_card":
        return <CreditCard className="h-4 w-4" />;
      case "paypal":
        return <DollarSign className="h-4 w-4" />;
      case "bank_transfer":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <DollarSign className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financeStats.map((stat, index) => (
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
        defaultValue="transactions" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <TabsTrigger value="transactions">Transacciones</TabsTrigger>
          <TabsTrigger value="invoices">Facturas</TabsTrigger>
          <TabsTrigger value="reports">Reportes</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar transacción..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-1" />
                Filtrar por fecha
              </Button>
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
                  <TableHead>Fecha</TableHead>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Monto (S/)</TableHead>
                  <TableHead>Método</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.user}</TableCell>
                    <TableCell className="max-w-md truncate">{transaction.description}</TableCell>
                    <TableCell>
                      {transaction.status === "refunded" ? (
                        <span className="text-red-500">-{transaction.amount.toFixed(2)}</span>
                      ) : (
                        transaction.amount.toFixed(2)
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getMethodIcon(transaction.method)}
                        <span className="capitalize text-sm">
                          {transaction.method.replace("_", " ")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
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
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Ver factura
                          </DropdownMenuItem>
                          {transaction.status === "completed" && (
                            <DropdownMenuItem className="text-red-600">
                              Solicitar reembolso
                            </DropdownMenuItem>
                          )}
                          {transaction.status === "pending" && (
                            <DropdownMenuItem className="text-green-600">
                              Marcar como pagado
                            </DropdownMenuItem>
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
              Mostrando 5 de 1,254 transacciones
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
        
        <TabsContent value="invoices">
          <div className="rounded-md border p-4">
            <div className="flex flex-col items-center justify-center py-8">
              <FileText className="h-10 w-10 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Gestión de Facturas</h3>
              <p className="text-gray-500 text-center max-w-md mb-4">
                Administre todas las facturas emitidas, genere reportes y configure sus plantillas de facturación.
              </p>
              <Button>
                Acceder al módulo de facturación
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reports">
          <div className="rounded-md border p-4">
            <div className="flex flex-col items-center justify-center py-8">
              <BarChart3 className="h-10 w-10 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Reportes Financieros</h3>
              <p className="text-gray-500 text-center max-w-md mb-4">
                Acceda a informes detallados, estadísticas y métricas sobre el rendimiento financiero de la plataforma.
              </p>
              <Button>
                Generar reportes
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="rounded-md border p-4">
            <div className="flex flex-col items-center justify-center py-8">
              <h3 className="text-lg font-medium mb-2">Configuración Financiera</h3>
              <p className="text-gray-500 text-center max-w-md">
                Configure los métodos de pago, divisas, impuestos y otros parámetros financieros.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminFinances;
