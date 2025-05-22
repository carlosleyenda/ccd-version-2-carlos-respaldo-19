
import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit2, Trash2, FilePlus, FileEdit } from "lucide-react";

const AdminCourses = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [moduleModalOpen, setModuleModalOpen] = useState(false);
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  // Dummy data
  const courses = [
    { id: 1, title: "Introducción a la Minería", category: "Minería", level: "Principiante", students: 245, rating: 4.8 },
    { id: 2, title: "Gestión de Proyectos Mineros", category: "Gestión", level: "Intermedio", students: 120, rating: 4.5 },
    { id: 3, title: "Seguridad en Excavaciones", category: "Ingeniería", level: "Avanzado", students: 89, rating: 4.9 },
  ];
  
  const modules = [
    { id: 1, courseId: 1, title: "Fundamentos de Minería", lessons: 5, duration: "2h 30m" },
    { id: 2, courseId: 1, title: "Tipos de Excavación", lessons: 4, duration: "1h 45m" },
    { id: 3, courseId: 2, title: "Gestión de Recursos", lessons: 6, duration: "3h 15m" },
  ];
  
  const lessons = [
    { id: 1, moduleId: 1, title: "Historia de la Minería", type: "Video", duration: "15m" },
    { id: 2, moduleId: 1, title: "Conceptos Básicos", type: "Lectura", duration: "20m" },
    { id: 3, moduleId: 2, title: "Minería a Cielo Abierto", type: "Video", duration: "25m" },
  ];

  // Filter modules and lessons based on selection
  const filteredModules = modules.filter(module => 
    selectedCourse ? module.courseId === selectedCourse.id : true
  );
  
  const filteredLessons = lessons.filter(lesson => 
    selectedModule ? lesson.moduleId === selectedModule.id : true
  );

  const handleOpenCourseModal = (course = null) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  const handleOpenModuleModal = (module = null) => {
    setSelectedModule(module);
    setModuleModalOpen(true);
  };

  const handleOpenLessonModal = (lesson = null) => {
    setLessonModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Cursos</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="modules">Módulos</TabsTrigger>
          <TabsTrigger value="lessons">Lecciones</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="flex justify-end mb-4">
            <Button onClick={() => handleOpenCourseModal()}>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Curso
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Nivel</TableHead>
                  <TableHead>Estudiantes</TableHead>
                  <TableHead>Calificación</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.title}</TableCell>
                    <TableCell>{course.category}</TableCell>
                    <TableCell>{course.level}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>{course.rating}/5</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenCourseModal(course)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="modules">
          <div className="flex justify-between mb-4">
            <div>
              <Select onValueChange={(value) => {
                const course = courses.find(c => c.id === parseInt(value));
                setSelectedCourse(course);
              }}>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Seleccionar curso" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course.id} value={course.id.toString()}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => handleOpenModuleModal()}>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Módulo
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Lecciones</TableHead>
                  <TableHead>Duración</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredModules.map((module) => (
                  <TableRow key={module.id}>
                    <TableCell className="font-medium">{module.title}</TableCell>
                    <TableCell>{module.lessons}</TableCell>
                    <TableCell>{module.duration}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenModuleModal(module)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="lessons">
          <div className="flex justify-between mb-4">
            <div className="flex gap-4">
              <Select onValueChange={(value) => {
                const course = courses.find(c => c.id === parseInt(value));
                setSelectedCourse(course);
                setSelectedModule(null);
              }}>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Seleccionar curso" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course.id} value={course.id.toString()}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select onValueChange={(value) => {
                const module = modules.find(m => m.id === parseInt(value));
                setSelectedModule(module);
              }} disabled={!selectedCourse}>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Seleccionar módulo" />
                </SelectTrigger>
                <SelectContent>
                  {modules
                    .filter(module => selectedCourse ? module.courseId === selectedCourse.id : false)
                    .map(module => (
                      <SelectItem key={module.id} value={module.id.toString()}>
                        {module.title}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => handleOpenLessonModal()} disabled={!selectedModule}>
              <Plus className="h-4 w-4 mr-2" />
              Nueva Lección
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Duración</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLessons.map((lesson) => (
                  <TableRow key={lesson.id}>
                    <TableCell className="font-medium">{lesson.title}</TableCell>
                    <TableCell>{lesson.type}</TableCell>
                    <TableCell>{lesson.duration}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenLessonModal(lesson)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Course Modal */}
      <Dialog open={courseModalOpen} onOpenChange={setCourseModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedCourse ? "Editar Curso" : "Nuevo Curso"}</DialogTitle>
            <DialogDescription>
              {selectedCourse 
                ? "Modifica los detalles del curso existente" 
                : "Completa los detalles para crear un nuevo curso"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Título</Label>
              <Input 
                id="title" 
                defaultValue={selectedCourse?.title || ""} 
                placeholder="Ej: Introducción a la Minería"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Categoría</Label>
              <Select defaultValue={selectedCourse?.category || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Minería">Minería</SelectItem>
                  <SelectItem value="Ingeniería">Ingeniería</SelectItem>
                  <SelectItem value="Gestión">Gestión</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="level">Nivel</Label>
              <Select defaultValue={selectedCourse?.level || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Principiante">Principiante</SelectItem>
                  <SelectItem value="Intermedio">Intermedio</SelectItem>
                  <SelectItem value="Avanzado">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="price">Precio</Label>
              <Input 
                id="price" 
                type="number" 
                placeholder="Ej: 49.99"
              />
            </div>
            
            <div className="col-span-2 grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                placeholder="Descripción detallada del curso" 
                rows={4}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setCourseModalOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              {selectedCourse ? "Guardar Cambios" : "Crear Curso"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Module Modal */}
      <Dialog open={moduleModalOpen} onOpenChange={setModuleModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedModule ? "Editar Módulo" : "Nuevo Módulo"}</DialogTitle>
            <DialogDescription>
              {selectedModule 
                ? "Modifica los detalles del módulo existente" 
                : "Completa los detalles para crear un nuevo módulo"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {!selectedModule && (
              <div className="grid gap-2">
                <Label htmlFor="courseId">Curso</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar curso" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map(course => (
                      <SelectItem key={course.id} value={course.id.toString()}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="grid gap-2">
              <Label htmlFor="moduleTitle">Título</Label>
              <Input 
                id="moduleTitle" 
                defaultValue={selectedModule?.title || ""} 
                placeholder="Ej: Introducción a la Minería"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="moduleDescription">Descripción</Label>
              <Textarea 
                id="moduleDescription" 
                placeholder="Descripción detallada del módulo" 
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setModuleModalOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              {selectedModule ? "Guardar Cambios" : "Crear Módulo"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Lesson Modal */}
      <Dialog open={lessonModalOpen} onOpenChange={setLessonModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nueva Lección</DialogTitle>
            <DialogDescription>
              Completa los detalles para crear una nueva lección
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="lessonTitle">Título</Label>
              <Input 
                id="lessonTitle" 
                placeholder="Ej: Introducción a Conceptos Básicos"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="lessonType">Tipo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Video">Video</SelectItem>
                  <SelectItem value="Lectura">Lectura</SelectItem>
                  <SelectItem value="Cuestionario">Cuestionario</SelectItem>
                  <SelectItem value="Ejercicio">Ejercicio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="lessonDuration">Duración (minutos)</Label>
              <Input 
                id="lessonDuration" 
                type="number" 
                placeholder="Ej: 15"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="lessonContent">Contenido</Label>
              <Textarea 
                id="lessonContent" 
                placeholder="Contenido o descripción de la lección" 
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setLessonModalOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Crear Lección
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCourses;
