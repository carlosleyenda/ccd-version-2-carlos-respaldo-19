
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
import { MessageSquare, Search, Clock, AlertCircle, CheckCircle, User, Filter } from "lucide-react";

const AdminSupport = () => {
  const [activeTab, setActiveTab] = useState("open");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketDetailModal, setTicketDetailModal] = useState(false);

  // Dummy data
  const tickets = [
    { id: "TK-2023-001", subject: "Problema con acceso al curso", category: "Técnico", student: "Juan Pérez", createdAt: "2023-06-18", status: "Abierto", priority: "Alta" },
    { id: "TK-2023-002", subject: "Facturación incorrecta", category: "Facturación", student: "María López", createdAt: "2023-06-17", status: "En progreso", priority: "Media" },
    { id: "TK-2023-003", subject: "No puedo descargar certificado", category: "Certificación", student: "Carlos Méndez", createdAt: "2023-06-16", status: "Abierto", priority: "Baja" },
    { id: "TK-2023-004", subject: "Problemas de reproducción de video", category: "Contenido", student: "Laura Torres", createdAt: "2023-06-15", status: "Resuelto", priority: "Alta" },
    { id: "TK-2023-005", subject: "Solicitud de reembolso", category: "Facturación", student: "Roberto Díaz", createdAt: "2023-06-14", status: "Cerrado", priority: "Media" },
  ];

  const stats = [
    { title: "Tickets Abiertos", value: 12, icon: <AlertCircle className="h-4 w-4 text-red-500" /> },
    { title: "En Progreso", value: 5, icon: <Clock className="h-4 w-4 text-amber-500" /> },
    { title: "Resueltos Hoy", value: 8, icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { title: "Tiempo Promedio", value: "1.5 hrs", icon: <Clock className="h-4 w-4 text-blue-500" /> },
  ];

  const ticketMessages = [
    { id: 1, sender: "Juan Pérez", role: "student", message: "No puedo acceder a mi curso de Minería. Me aparece un error al intentar reproducir los videos.", timestamp: "2023-06-18 09:15:00" },
    { id: 2, sender: "Ana Castro", role: "support", message: "Hola Juan, gracias por contactarnos. ¿Podrías indicarnos qué mensaje de error estás recibiendo?", timestamp: "2023-06-18 09:30:00" },
    { id: 3, sender: "Juan Pérez", role: "student", message: "Me aparece 'Error de reproducción: El video no está disponible'", timestamp: "2023-06-18 09:35:00" },
    { id: 4, sender: "Ana Castro", role: "support", message: "Entiendo. ¿Podrías intentar limpiar la caché de tu navegador y probar nuevamente? Si el problema persiste, te ayudaremos a solucionarlo.", timestamp: "2023-06-18 09:40:00" },
  ];

  const getBadgeVariant = (status) => {
    switch (status) {
      case "Abierto": return "destructive";
      case "En progreso": return "warning";
      case "Resuelto": return "success";
      case "Cerrado": return "outline";
      default: return "outline";
    }
  };

  const getBadgeForPriority = (priority) => {
    switch (priority) {
      case "Alta": return "destructive";
      case "Media": return "warning";
      case "Baja": return "secondary";
      default: return "outline";
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    if (activeTab === "open") return ticket.status === "Abierto";
    if (activeTab === "progress") return ticket.status === "En progreso";
    if (activeTab === "resolved") return ticket.status === "Resuelto";
    if (activeTab === "closed") return ticket.status === "Cerrado";
    return true;
  });

  const handleOpenTicket = (ticket) => {
    setSelectedTicket(ticket);
    setTicketDetailModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Soporte y Resolución de Problemas</h2>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
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
            <TabsTrigger value="progress">En Progreso</TabsTrigger>
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
                  <TableHead>Asunto</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Estudiante</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{ticket.student}</TableCell>
                    <TableCell>{ticket.createdAt}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeForPriority(ticket.priority)}>{ticket.priority}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(ticket.status)}>{ticket.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleOpenTicket(ticket)}>
                        Ver
                      </Button>
                      <Button variant="ghost" size="sm">
                        Asignar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {["open", "progress", "resolved", "closed"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Asunto</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Prioridad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.length > 0 ? (
                    filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.category}</TableCell>
                        <TableCell>{ticket.student}</TableCell>
                        <TableCell>{ticket.createdAt}</TableCell>
                        <TableCell>
                          <Badge variant={getBadgeForPriority(ticket.priority)}>{ticket.priority}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getBadgeVariant(ticket.status)}>{ticket.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => handleOpenTicket(ticket)}>
                            Ver
                          </Button>
                          <Button variant="ghost" size="sm">
                            Asignar
                          </Button>
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

      {/* Ticket Detail Modal */}
      <Dialog open={ticketDetailModal} onOpenChange={setTicketDetailModal}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Detalles del Ticket #{selectedTicket?.id}</DialogTitle>
            <DialogDescription>
              {selectedTicket?.subject}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium mb-1">Estudiante</p>
                <p className="text-sm">{selectedTicket?.student}</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Estado</p>
                <Badge variant={selectedTicket ? getBadgeVariant(selectedTicket.status) : "outline"}>
                  {selectedTicket?.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Prioridad</p>
                <Badge variant={selectedTicket ? getBadgeForPriority(selectedTicket.priority) : "outline"}>
                  {selectedTicket?.priority}
                </Badge>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Conversación</p>
              <div className="border rounded-md p-4 space-y-4 max-h-[300px] overflow-y-auto">
                {ticketMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex gap-3 ${msg.role === 'support' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`flex flex-col max-w-[80%] p-3 rounded-lg ${
                        msg.role === 'support' 
                          ? 'bg-muted' 
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4" />
                        <span className="text-xs font-medium">{msg.sender}</span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                      <span className="text-xs mt-1 self-end opacity-70">{msg.timestamp.split(' ')[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="response">Respuesta</Label>
              <Textarea 
                id="response" 
                placeholder="Escribe tu respuesta..." 
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="status">Actualizar Estado</Label>
                <Select defaultValue={selectedTicket?.status?.toLowerCase()}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abierto">Abierto</SelectItem>
                    <SelectItem value="en progreso">En Progreso</SelectItem>
                    <SelectItem value="resuelto">Resuelto</SelectItem>
                    <SelectItem value="cerrado">Cerrado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="assignTo">Asignar a</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar agente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ana">Ana Castro</SelectItem>
                    <SelectItem value="pedro">Pedro González</SelectItem>
                    <SelectItem value="sofia">Sofía Rodríguez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setTicketDetailModal(false)}>
              Cerrar
            </Button>
            <Button variant="outline">
              Marcar como Resuelto
            </Button>
            <Button type="submit">
              Enviar Respuesta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminSupport;
