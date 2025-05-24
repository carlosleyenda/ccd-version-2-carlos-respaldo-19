
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  HelpCircle, 
  Search, 
  Filter, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  User,
  Calendar,
  Mail,
  Plus
} from "lucide-react";

const AdminSupport = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [newTicketModal, setNewTicketModal] = useState(false);

  // Datos de ejemplo para tickets de soporte
  const supportTickets = [
    {
      id: "TICKET-001",
      user: "María García",
      email: "maria.garcia@email.com",
      subject: "Problema con certificado",
      description: "No puedo descargar mi certificado del curso de Ingeniería Civil",
      category: "Certificados",
      priority: "Alta",
      status: "Abierto",
      createdDate: "2023-06-20",
      lastUpdate: "2023-06-20",
      assignedTo: "Juan Pérez"
    },
    {
      id: "TICKET-002",
      user: "Carlos Rodríguez",
      email: "carlos.rodriguez@email.com",
      subject: "Error al acceder al curso",
      description: "No puedo acceder al curso de Seguridad Minera después del pago",
      category: "Acceso",
      priority: "Alta",
      status: "En progreso",
      createdDate: "2023-06-19",
      lastUpdate: "2023-06-20",
      assignedTo: "Ana López"
    },
    {
      id: "TICKET-003",
      user: "Ana Martínez",
      email: "ana.martinez@email.com",
      subject: "Consulta sobre refund",
      description: "Quiero solicitar reembolso por un curso que no pude completar",
      category: "Pagos",
      priority: "Media",
      status: "Resuelto",
      createdDate: "2023-06-18",
      lastUpdate: "2023-06-19",
      assignedTo: "Pedro Sánchez"
    },
    {
      id: "TICKET-004",
      user: "Roberto Díaz",
      email: "roberto.diaz@email.com",
      subject: "Problema técnico en video",
      description: "Los videos del curso no cargan correctamente en mi dispositivo",
      category: "Técnico",
      priority: "Media",
      status: "Abierto",
      createdDate: "2023-06-17",
      lastUpdate: "2023-06-18",
      assignedTo: "María Flores"
    },
    {
      id: "TICKET-005",
      user: "Laura Torres",
      email: "laura.torres@email.com",
      subject: "Actualización de perfil",
      description: "No puedo actualizar mi información de contacto en mi perfil",
      category: "Cuenta",
      priority: "Baja",
      status: "Cerrado",
      createdDate: "2023-06-16",
      lastUpdate: "2023-06-17",
      assignedTo: "Juan Pérez"
    }
  ];

  const stats = [
    { title: "Tickets Abiertos", value: 15, icon: <MessageSquare className="h-4 w-4 text-blue-500" /> },
    { title: "En Progreso", value: 8, icon: <Clock className="h-4 w-4 text-amber-500" /> },
    { title: "Resueltos Hoy", value: 12, icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { title: "Tiempo Promedio", value: "2.3h", icon: <Clock className="h-4 w-4 text-purple-500" /> },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Abierto":
        return <Badge variant="destructive">{status}</Badge>;
      case "En progreso":
        return <Badge variant="default">{status}</Badge>;
      case "Resuelto":
        return <Badge variant="secondary">{status}</Badge>;
      case "Cerrado":
        return <Badge variant="outline">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "Alta":
        return <Badge variant="destructive">{priority}</Badge>;
      case "Media":
        return <Badge variant="default">{priority}</Badge>;
      case "Baja":
        return <Badge variant="secondary">{priority}</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const filteredTickets = supportTickets.filter(ticket => {
    if (activeTab === "open") return ticket.status === "Abierto";
    if (activeTab === "inprogress") return ticket.status === "En progreso";
    if (activeTab === "resolved") return ticket.status === "Resuelto";
    if (activeTab === "closed") return ticket.status === "Cerrado";
    return true;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold">Centro de Soporte</h2>
        </div>
        <Button onClick={() => setNewTicketModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Ticket
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="open">Abiertos</TabsTrigger>
            <TabsTrigger value="inprogress">En Progreso</TabsTrigger>
            <TabsTrigger value="resolved">Resueltos</TabsTrigger>
            <TabsTrigger value="closed">Cerrados</TabsTrigger>
          </TabsList>
          <div className="flex gap-3 items-center">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar tickets..."
                className="pl-8 w-[250px]"
              />
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Asunto</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Asignado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {supportTickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{ticket.user}</div>
                        <div className="text-sm text-gray-500">{ticket.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                    <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                    <TableCell>{ticket.assignedTo}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Ver</Button>
                      <Button variant="ghost" size="sm">Responder</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {["open", "inprogress", "resolved", "closed"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Asunto</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Prioridad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Asignado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.length > 0 ? (
                    filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{ticket.user}</div>
                            <div className="text-sm text-gray-500">{ticket.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.category}</TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>{ticket.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Ver</Button>
                          <Button variant="ghost" size="sm">Responder</Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-6">
                        No hay tickets que mostrar en esta categoría
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* New Ticket Modal */}
      <Dialog open={newTicketModal} onOpenChange={setNewTicketModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Nuevo Ticket de Soporte</DialogTitle>
            <DialogDescription>
              Crear un nuevo ticket de soporte para atender consultas de usuarios.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="user">Usuario</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar usuario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">María García</SelectItem>
                    <SelectItem value="2">Carlos Rodríguez</SelectItem>
                    <SelectItem value="3">Ana Martínez</SelectItem>
                    <SelectItem value="4">Roberto Díaz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="category">Categoría</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certificates">Certificados</SelectItem>
                    <SelectItem value="access">Acceso</SelectItem>
                    <SelectItem value="payments">Pagos</SelectItem>
                    <SelectItem value="technical">Técnico</SelectItem>
                    <SelectItem value="account">Cuenta</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="priority">Prioridad</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar prioridad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="medium">Media</SelectItem>
                    <SelectItem value="low">Baja</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="assignedTo">Asignar a</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar agente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="juan">Juan Pérez</SelectItem>
                    <SelectItem value="ana">Ana López</SelectItem>
                    <SelectItem value="pedro">Pedro Sánchez</SelectItem>
                    <SelectItem value="maria">María Flores</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="subject">Asunto</Label>
              <Input id="subject" placeholder="Descripción breve del problema" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Descripción detallada</Label>
              <Textarea 
                id="description" 
                placeholder="Describa el problema en detalle..." 
                rows={4}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewTicketModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Crear Ticket
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminSupport;
