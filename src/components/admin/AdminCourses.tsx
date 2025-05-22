
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
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminCourses = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [searchQuery, setSearchQuery] = useState("");

  // Datos de ejemplo para cursos
  const courses = [
    {
      id: "ENG101",
      title: "Fundamentos de Ingeniería Civil",
      instructor: "Carlos Ramírez",
      category: "engineering",
      status: "active",
      students: 145,
      price: 299,
      rating: 4.8,
      created: "12/01/2023"
    },
    {
      id: "MIN202",
      title: "Seguridad en Operaciones Mineras",
      instructor: "Laura Mendoza",
      category: "mining",
      status: "active",
      students: 89,
      price: 349,
      rating: 4.6,
      created: "03/03/2023"
    },
    {
      id: "MGT305",
      title: "Gestión de Proyectos Avanzada",
      instructor: "Javier Torres",
      category: "management",
      status: "draft",
      students: 0,
      price: 399,
      rating: 0,
      created: "22/04/2023"
    },
    {
      id: "ENG205",
      title: "Cálculo Estructural",
      instructor: "Marta Gómez",
      category: "engineering",
      status: "active",
      students: 112,
      price: 329,
      rating: 4.7,
      created: "05/02/2023"
    },
    {
      id: "MIN301",
      title: "Legislación Ambiental en Minería",
      instructor: "Roberto Paredes",
      category: "mining",
      status: "inactive",
      students: 56,
      price: 279,
      rating: 4.2,
      created: "18/11/2022"
    }
  ];

  // Datos de ejemplo para categorías
  const categories = [
    { name: "engineering", title: "Ingeniería", courses: 34, color: "blue" },
    { name: "mining", title: "Minería", courses: 22, color: "amber" },
    { name: "management", title: "Gestión", courses: 18, color: "green" },
    { name: "safety", title: "Seguridad", courses: 15, color: "red" },
    { name: "environment", title: "Medio Ambiente", courses: 11, color: "emerald" },
  ];

  const getCategoryBadge = (category) => {
    switch(category) {
      case "engineering":
        return <Badge className="bg-blue-500">Ingeniería</Badge>;
      case "mining":
        return <Badge className="bg-amber-500">Minería</Badge>;
      case "management":
        return <Badge className="bg-green-500">Gestión</Badge>;
      default:
        return <Badge>{category}</Badge>;
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-500">Publicado</Badge>;
      case "draft":
        return <Badge variant="outline">Borrador</Badge>;
      case "inactive":
        return <Badge className="bg-gray-500">Inactivo</Badge>;
      default:
        return <Badge className="bg-gray-500">-</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <Tabs 
        defaultValue="courses" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="categories">Categorías</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar curso..."
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
              <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-1" />
                Nuevo Curso
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Estudiantes</TableHead>
                  <TableHead>Precio (S/)</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.id}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{getCategoryBadge(course.category)}</TableCell>
                    <TableCell>{getStatusBadge(course.status)}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>{course.price}</TableCell>
                    <TableCell>{course.rating > 0 ? course.rating : '-'}</TableCell>
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
                            <Eye className="h-4 w-4 mr-2" />
                            Ver curso
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Eliminar
                          </DropdownMenuItem>
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
              Mostrando 5 de 124 cursos
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
        
        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex justify-between items-center">
                    <span>{category.title}</span>
                    <Badge className={`bg-${category.color}-500`}>{category.courses}</Badge>
                  </CardTitle>
                  <CardDescription>
                    {category.courses} cursos en esta categoría
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    Ver cursos
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            <Card className="border-dashed border-2 flex items-center justify-center">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Button variant="ghost" size="sm">
                  <PlusCircle className="h-5 w-5 mr-1" />
                  Añadir Categoría
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews">
          <div className="rounded-md border p-4 text-center">
            <p className="text-gray-500">Módulo de reseñas en desarrollo</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminCourses;
