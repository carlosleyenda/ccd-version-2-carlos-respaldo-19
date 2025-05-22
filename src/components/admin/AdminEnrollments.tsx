
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { FileUp, Search, UserPlus, Users, Download, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AdminEnrollments = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [bulkEnrollModal, setBulkEnrollModal] = useState(false);
  const [singleEnrollModal, setSingleEnrollModal] = useState(false);

  // Dummy data
  const enrollments = [
    { id: 1, student: "Carlos Méndez", course: "Introducción a la Minería", date: "2023-06-15", status: "Activo" },
    { id: 2, student: "María López", course: "Seguridad en Excavaciones", date: "2023-06-12", status: "Activo" },
    { id: 3, student: "Juan Pérez", course: "Gestión de Proyectos Mineros", date: "2023-06-10", status: "Pendiente" },
    { id: 4, student: "Laura Torres", course: "Introducción a la Minería", date: "2023-06-08", status: "Completado" },
    { id: 5, student: "Roberto Díaz", course: "Seguridad en Excavaciones", date: "2023-06-05", status: "Activo" },
  ];

  const stats = [
    { title: "Total Matrículas", value: 1245, change: "+12% este mes" },
    { title: "Matrículas Activas", value: 876, change: "+5% este mes" },
    { title: "Tasa de Finalización", value: "68%", change: "+2% este mes" },
    { title: "Promedio de Inscripción Diaria", value: 18, change: "+3 este mes" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Matrículas</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setSingleEnrollModal(true)}>
            <UserPlus className="h-4 w-4 mr-2" />
            Nueva Matrícula
          </Button>
          <Button onClick={() => setBulkEnrollModal(true)}>
            <Users className="h-4 w-4 mr-2" />
            Matrícula Masiva
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="current">Matrículas Actuales</TabsTrigger>
              <TabsTrigger value="pending">Pendientes</TabsTrigger>
              <TabsTrigger value="completed">Completadas</TabsTrigger>
              <TabsTrigger value="canceled">Canceladas</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar matrículas..."
                  className="pl-8 w-[250px]"
                />
              </div>
            </div>
          </div>

          <TabsContent value="current" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrollments.map((enrollment) => (
                    <TableRow key={enrollment.id}>
                      <TableCell>{enrollment.id}</TableCell>
                      <TableCell className="font-medium">{enrollment.student}</TableCell>
                      <TableCell>{enrollment.course}</TableCell>
                      <TableCell>{enrollment.date}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            enrollment.status === "Activo" ? "default" : 
                            enrollment.status === "Pendiente" ? "outline" :
                            "secondary"
                          }
                        >
                          {enrollment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Detalles</Button>
                        <Button variant="ghost" size="sm">Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="pending">
            {/* Similar table structure for pending enrollments */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrollments
                    .filter(enrollment => enrollment.status === "Pendiente")
                    .map((enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell>{enrollment.id}</TableCell>
                        <TableCell className="font-medium">{enrollment.student}</TableCell>
                        <TableCell>{enrollment.course}</TableCell>
                        <TableCell>{enrollment.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline">Pendiente</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Aprobar</Button>
                          <Button variant="ghost" size="sm">Rechazar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            {/* Similar structure for completed enrollments */}
            <div className="flex items-center justify-center p-8 text-center">
              <div className="max-w-md">
                <h3 className="text-lg font-medium">No hay matrículas completadas recientes</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Las matrículas completadas aparecerán aquí cuando los estudiantes finalicen sus cursos.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="canceled">
            {/* Similar structure for canceled enrollments */}
            <div className="flex items-center justify-center p-8 text-center">
              <div className="max-w-md">
                <h3 className="text-lg font-medium">No hay matrículas canceladas recientes</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Las matrículas canceladas aparecerán aquí cuando los estudiantes o administradores cancelen cursos.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal for bulk enrollment */}
      <Dialog open={bulkEnrollModal} onOpenChange={setBulkEnrollModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Matrícula Masiva</DialogTitle>
            <DialogDescription>
              Importa una lista de estudiantes para matricularlos en un curso específico o utiliza la plantilla CSV.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="course">Curso</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Introducción a la Minería</SelectItem>
                  <SelectItem value="2">Seguridad en Excavaciones</SelectItem>
                  <SelectItem value="3">Gestión de Proyectos Mineros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label>Archivo CSV</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <FileUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="mb-2 text-sm font-medium">
                  Arrastra y suelta un archivo CSV o haz clic para seleccionar
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Formato: Nombre, Email, ID (opcional)
                </p>
                <Button variant="outline">
                  Seleccionar Archivo
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar Plantilla
                </Button>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">
                  Tamaño máximo: 5MB
                </span>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setBulkEnrollModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              <Upload className="h-4 w-4 mr-2" />
              Importar y Matricular
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal for single enrollment */}
      <Dialog open={singleEnrollModal} onOpenChange={setSingleEnrollModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nueva Matrícula</DialogTitle>
            <DialogDescription>
              Completa los detalles para matricular a un estudiante en un curso.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="student">Estudiante</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Buscar estudiante" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Carlos Méndez</SelectItem>
                  <SelectItem value="2">María López</SelectItem>
                  <SelectItem value="3">Juan Pérez</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="course">Curso</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Introducción a la Minería</SelectItem>
                  <SelectItem value="2">Seguridad en Excavaciones</SelectItem>
                  <SelectItem value="3">Gestión de Proyectos Mineros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="startDate">Fecha de inicio</Label>
              <Input id="startDate" type="date" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="notes">Notas adicionales</Label>
              <Input id="notes" placeholder="Notas opcionales sobre esta matrícula" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setSingleEnrollModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Matricular
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminEnrollments;
