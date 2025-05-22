
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
import { FileText, Search, FilePlus, FileCheck, Filter, Download, Clock } from "lucide-react";

const AdminDocuments = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [newDocumentModal, setNewDocumentModal] = useState(false);

  // Dummy data
  const documents = [
    { id: "DOC-2023-001", type: "Certificación", student: "Laura Torres", requestDate: "2023-06-18", status: "Pendiente", priority: "Alta" },
    { id: "DOC-2023-002", type: "Constancia", student: "Carlos Méndez", requestDate: "2023-06-17", status: "En proceso", priority: "Media" },
    { id: "DOC-2023-003", type: "Cambio de Curso", student: "María López", requestDate: "2023-06-16", status: "Completado", priority: "Baja" },
    { id: "DOC-2023-004", type: "Factura", student: "Juan Pérez", requestDate: "2023-06-15", status: "Pendiente", priority: "Alta" },
    { id: "DOC-2023-005", type: "Certificación", student: "Roberto Díaz", requestDate: "2023-06-14", status: "Rechazado", priority: "Media" },
  ];

  const stats = [
    { title: "Trámites Pendientes", value: 18, icon: <Clock className="h-4 w-4 text-amber-500" /> },
    { title: "Trámites en Proceso", value: 7, icon: <FileText className="h-4 w-4 text-blue-500" /> },
    { title: "Completados Hoy", value: 12, icon: <FileCheck className="h-4 w-4 text-green-500" /> },
    { title: "Tiempo Promedio", value: "1.2 días", icon: <Clock className="h-4 w-4 text-purple-500" /> },
  ];

  const getBadgeVariant = (status) => {
    switch (status) {
      case "Pendiente": return "outline";
      case "En proceso": return "default";
      case "Completado": return "secondary";
      case "Rechazado": return "destructive";
      default: return "outline";
    }
  };

  const getBadgeForPriority = (priority) => {
    switch (priority) {
      case "Alta": return "destructive";
      case "Media": return "default";
      case "Baja": return "secondary";
      default: return "outline";
    }
  };

  const filteredDocuments = documents.filter(doc => {
    if (activeTab === "pending") return doc.status === "Pendiente";
    if (activeTab === "inprocess") return doc.status === "En proceso";
    if (activeTab === "completed") return doc.status === "Completado";
    if (activeTab === "rejected") return doc.status === "Rechazado";
    return true;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Trámites</h2>
        <Button onClick={() => setNewDocumentModal(true)}>
          <FilePlus className="h-4 w-4 mr-2" />
          Nuevo Trámite
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
            <TabsTrigger value="pending">Pendientes</TabsTrigger>
            <TabsTrigger value="inprocess">En Proceso</TabsTrigger>
            <TabsTrigger value="completed">Completados</TabsTrigger>
            <TabsTrigger value="rejected">Rechazados</TabsTrigger>
          </TabsList>
          <div className="flex gap-3 items-center">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar trámites..."
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
                  <TableHead>Tipo</TableHead>
                  <TableHead>Estudiante</TableHead>
                  <TableHead>Fecha Solicitud</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.id}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.student}</TableCell>
                    <TableCell>{doc.requestDate}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeForPriority(doc.priority)}>{doc.priority}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(doc.status)}>{doc.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Ver</Button>
                      <Button variant="ghost" size="sm">Actualizar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {["pending", "inprocess", "completed", "rejected"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Fecha Solicitud</TableHead>
                    <TableHead>Prioridad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.length > 0 ? (
                    filteredDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.id}</TableCell>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.student}</TableCell>
                        <TableCell>{doc.requestDate}</TableCell>
                        <TableCell>
                          <Badge variant={getBadgeForPriority(doc.priority)}>{doc.priority}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getBadgeVariant(doc.status)}>{doc.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Ver</Button>
                          <Button variant="ghost" size="sm">Actualizar</Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        No hay trámites que mostrar en esta categoría
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* New Document Modal */}
      <Dialog open={newDocumentModal} onOpenChange={setNewDocumentModal}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Nuevo Trámite</DialogTitle>
            <DialogDescription>
              Complete los detalles para registrar un nuevo trámite en el sistema.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="docType">Tipo de Trámite</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certification">Certificación</SelectItem>
                    <SelectItem value="constancy">Constancia</SelectItem>
                    <SelectItem value="course-change">Cambio de Curso</SelectItem>
                    <SelectItem value="invoice">Factura</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
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
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="student">Estudiante</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Buscar estudiante" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Laura Torres</SelectItem>
                  <SelectItem value="2">Carlos Méndez</SelectItem>
                  <SelectItem value="3">María López</SelectItem>
                  <SelectItem value="4">Juan Pérez</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="requestDate">Fecha de Solicitud</Label>
                <Input id="requestDate" type="date" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
                <Input id="dueDate" type="date" />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                placeholder="Detalles del trámite solicitado" 
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewDocumentModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Crear Trámite
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDocuments;
