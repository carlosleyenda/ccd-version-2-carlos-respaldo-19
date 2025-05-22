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
  BookOpen,
  FileText,
  Video,
  Plus,
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AdminCourses = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [moduleDialogOpen, setModuleDialogOpen] = useState(false);
  const [lessonDialogOpen, setLessonDialogOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

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

  // Datos de ejemplo para módulos de cursos
  const courseModules = [
    {
      id: "mod-1",
      courseId: "ENG101",
      title: "Introducción a la Ingeniería Civil",
      description: "Conceptos básicos y fundamentos de la ingeniería civil",
      duration: "4h 30m",
      order: 1,
      lessons: [
        {
          id: "les-1",
          title: "Historia de la Ingeniería Civil",
          type: "video",
          duration: "45m",
          order: 1
        },
        {
          id: "les-2",
          title: "Principios fundamentales",
          type: "reading",
          duration: "1h 15m",
          order: 2
        },
        {
          id: "les-3",
          title: "Evaluación de conceptos básicos",
          type: "quiz",
          duration: "30m",
          order: 3
        }
      ]
    },
    {
      id: "mod-2",
      courseId: "ENG101",
      title: "Materiales de Construcción",
      description: "Estudio de los materiales utilizados en la ingeniería civil",
      duration: "6h 15m",
      order: 2,
      lessons: [
        {
          id: "les-4",
          title: "Concreto y sus propiedades",
          type: "video",
          duration: "1h",
          order: 1
        },
        {
          id: "les-5",
8 title: "Acero estructural",
          type: "video",
          duration: "55m",
          order: 2
        }
      ]
    },
    {
      id: "mod-3",
      courseId: "MIN202",
      title: "Normativas de Seguridad Minera",
      description: "Marco legal y normativo de seguridad en minería",
      duration: "5h",
      order: 1,
      lessons: [
        {
          id: "les-6",
          title: "Legislación minera actual",
          type: "reading",
          duration: "2h",
          order: 1
        },
        {
          id: "les-7",
          title: "Protocolos de seguridad",
          type: "video",
          duration: "1h 30m",
          order: 2
        }
      ]
    }
  ];

  // Función para obtener módulos por curso
  const getModulesByCourse = (courseId) => {
    return courseModules.filter(module => module.courseId === courseId);
  };

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

  const getLessonTypeIcon = (type) => {
    switch(type) {
      case "video":
        return <Video className="h-4 w-4 text-blue-500" />;
      case "reading":
        return <BookOpen className="h-4 w-4 text-green-500" />;
      case "quiz":
        return <FileText className="h-4 w-4 text-amber-500" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const handleViewModules = (course) => {
    setSelectedCourse(course);
    setActiveTab("modules");
  };

  return (
    <div className="space-y-4">
      <Tabs 
        defaultValue="courses" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="categories">Categorías</TabsTrigger>
          <TabsTrigger value="modules">Módulos</TabsTrigger>
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
                          <DropdownMenuItem onClick={() => handleViewModules(course)}>
                            <BookOpen className="h-4 w-4 mr-2" />
                            Ver módulos
                          </DropdownMenuItem>
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
        
        <TabsContent value="modules" className="space-y-6">
          {selectedCourse && (
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-medium">{selectedCourse.title}</h3>
                  <p className="text-sm text-gray-500">ID: {selectedCourse.id} · Instructor: {selectedCourse.instructor}</p>
                </div>
                <Button onClick={() => setActiveTab("courses")}>
                  Volver a cursos
                </Button>
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Módulos del curso</h3>
            <Dialog open={moduleDialogOpen} onOpenChange={setModuleDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Nuevo módulo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Añadir nuevo módulo</DialogTitle>
                  <DialogDescription>
                    Crea un nuevo módulo para este curso
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="module-title" className="text-sm font-medium">Título</label>
                    <Input id="module-title" placeholder="Título del módulo" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="module-description" className="text-sm font-medium">Descripción</label>
                    <Input id="module-description" placeholder="Descripción del módulo" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="module-order" className="text-sm font-medium">Orden</label>
                      <Input id="module-order" type="number" placeholder="1" min="1" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="module-duration" className="text-sm font-medium">Duración estimada</label>
                      <Input id="module-duration" placeholder="Ej: 4h 30m" />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setModuleDialogOpen(false)}>Cancelar</Button>
                    <Button onClick={() => setModuleDialogOpen(false)}>Guardar módulo</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="space-y-4">
            {selectedCourse ? (
              getModulesByCourse(selectedCourse.id).length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {getModulesByCourse(selectedCourse.id).map((module) => (
                    <AccordionItem key={module.id} value={module.id}>
                      <AccordionTrigger className="hover:bg-gray-50 dark:hover:bg-gray-900/20 px-4">
                        <div className="flex items-center justify-between w-full pr-4">
                          <div className="flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-sm mr-3">
                              {module.order}
                            </span>
                            <div className="text-left">
                              <span className="font-medium">{module.title}</span>
                              <p className="text-xs text-gray-500">{module.lessons.length} lecciones · {module.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" onClick={(e) => {
                              e.stopPropagation();
                              setSelectedModule(module);
                              setLessonDialogOpen(true);
                            }}>
                              <Plus className="h-4 w-4 mr-1" />
                              Lección
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/10 mb-4">
                          <p className="text-sm">{module.description}</p>
                        </div>
                        
                        <div className="border rounded-md overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Orden</TableHead>
                                <TableHead>Título</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Duración</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {module.lessons.length > 0 ? (
                                module.lessons.map((lesson) => (
                                  <TableRow key={lesson.id}>
                                    <TableCell className="font-medium">{lesson.order}</TableCell>
                                    <TableCell>{lesson.title}</TableCell>
                                    <TableCell>
                                      <div className="flex items-center">
                                        {getLessonTypeIcon(lesson.type)}
                                        <span className="ml-2">
                                          {lesson.type === 'video' ? 'Video' : 
                                           lesson.type === 'reading' ? 'Lectura' : 
                                           lesson.type === 'quiz' ? 'Evaluación' : lesson.type}
                                        </span>
                                      </div>
                                    </TableCell>
                                    <TableCell>{lesson.duration}</TableCell>
                                    <TableCell className="text-right">
                                      <div className="flex justify-end space-x-1">
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                          <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                ))
                              ) : (
                                <TableRow>
                                  <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                                    No hay lecciones en este módulo
                                  </TableCell>
                                </TableRow>
                              )}
                            </TableBody>
                          </Table>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="border rounded-md p-8 text-center">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No hay módulos</h3>
                  <p className="text-gray-500 mb-4">Este curso aún no tiene módulos creados.</p>
                  <Button onClick={() => setModuleDialogOpen(true)}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Crear primer módulo
                  </Button>
                </div>
              )
            ) : (
              <div className="border rounded-md p-8 text-center">
                <h3 className="text-lg font-medium mb-2">Selecciona un curso</h3>
                <p className="text-gray-500">Selecciona un curso en la pestaña de cursos para administrar sus módulos.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="reviews">
          <div className="rounded-md border p-4 text-center">
            <p className="text-gray-500">Módulo de reseñas en desarrollo</p>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Diálogo para añadir lección */}
      <Dialog open={lessonDialogOpen} onOpenChange={setLessonDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Añadir nueva lección</DialogTitle>
            <DialogDescription>
              {selectedModule && `Añade una lección al módulo "${selectedModule.title}"`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="lesson-title" className="text-sm font-medium">Título</label>
              <Input id="lesson-title" placeholder="Título de la lección" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lesson-type" className="text-sm font-medium">Tipo de lección</label>
              <select id="lesson-type" className="w-full rounded-md border border-gray-300 p-2">
                <option value="video">Video</option>
                <option value="reading">Lectura</option>
                <option value="quiz">Evaluación</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="lesson-order" className="text-sm font-medium">Orden</label>
                <Input id="lesson-order" type="number" placeholder="1" min="1" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lesson-duration" className="text-sm font-medium">Duración</label>
                <Input id="lesson-duration" placeholder="Ej: 45m" />
              </div>
            </div>
            <div className="pt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setLessonDialogOpen(false)}>Cancelar</Button>
              <Button onClick={() => setLessonDialogOpen(false)}>Guardar lección</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCourses;
