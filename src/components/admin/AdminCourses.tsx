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
  const [filterCategory, setFilterCategory] = useState("all");

  // Expanded course data with new categories
  const courses = [
    // Ingeniería
    { id: 1, title: "Residencia y Supervisión de Obras Públicas y Privadas", category: "Ingeniería", level: "Avanzado", students: 245, rating: 4.8, price: 299 },
    { id: 2, title: "BIM Revit Arquitectura", category: "Ingeniería", level: "Intermedio", students: 189, rating: 4.7, price: 199 },
    { id: 3, title: "Topografía y Diseño de Carreteras con Civil 3D", category: "Ingeniería", level: "Avanzado", students: 156, rating: 4.9, price: 349 },
    { id: 4, title: "Diseño de Estructuras Sismorresistentes", category: "Ingeniería", level: "Avanzado", students: 134, rating: 4.8, price: 299 },
    { id: 5, title: "Mecánica de Suelos y Pavimentos", category: "Ingeniería", level: "Intermedio", students: 167, rating: 4.6, price: 249 },
    
    // Minería
    { id: 6, title: "Perforación y Voladura en Minería Subterránea", category: "Minería", level: "Avanzado", students: 98, rating: 4.9, price: 399 },
    { id: 7, title: "SSOMA Aplicado al Sector Minero", category: "Minería", level: "Intermedio", students: 234, rating: 4.7, price: 199 },
    { id: 8, title: "Gestión Ambiental Minera", category: "Minería", level: "Avanzado", students: 112, rating: 4.8, price: 329 },
    { id: 9, title: "Geomecánica Minera", category: "Minería", level: "Avanzado", students: 87, rating: 4.9, price: 379 },
    { id: 10, title: "Ventilación Minera", category: "Minería", level: "Intermedio", students: 145, rating: 4.6, price: 279 },
    
    // Gestión Pública
    { id: 11, title: "Contrataciones del Estado Ley N° 32069", category: "Gestión Pública", level: "Avanzado", students: 312, rating: 4.8, price: 249 },
    { id: 12, title: "Sistema Invierte.PE", category: "Gestión Pública", level: "Intermedio", students: 278, rating: 4.7, price: 199 },
    { id: 13, title: "Administración y Gestión Pública", category: "Gestión Pública", level: "Intermedio", students: 456, rating: 4.6, price: 179 },
    { id: 14, title: "Derecho Penal y Delitos Contra la Administración Pública", category: "Gestión Pública", level: "Avanzado", students: 189, rating: 4.9, price: 299 },
    { id: 15, title: "Power BI e Inteligencia Artificial", category: "Gestión Pública", level: "Intermedio", students: 234, rating: 4.8, price: 229 },
  ];
  
  // Dummy data
  const modules = [
    { id: 1, courseId: 1, title: "Fundamentos de Residencia", lessons: 8, duration: "4h 30m" },
    { id: 2, courseId: 1, title: "Supervisión Técnica", lessons: 6, duration: "3h 15m" },
    { id: 3, courseId: 6, title: "Técnicas de Perforación", lessons: 10, duration: "5h 45m" },
    { id: 4, courseId: 11, title: "Marco Normativo Ley 32069", lessons: 12, duration: "6h 20m" },
  ];
  
  const lessons = [
    { id: 1, moduleId: 1, title: "Introducción a la Residencia de Obras", type: "Video", duration: "25m" },
    { id: 2, moduleId: 1, title: "Marco Legal y Normativo", type: "Lectura", duration: "35m" },
    { id: 3, moduleId: 3, title: "Equipos de Perforación", type: "Video", duration: "40m" },
    { id: 4, moduleId: 4, title: "Principios de la Ley 32069", type: "Video", duration: "30m" },
  ];

  // Filter courses by category
  const filteredCourses = courses.filter(course => 
    filterCategory === "all" || course.category === filterCategory
  );

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
          <div className="flex justify-between mb-4">
            <div className="flex gap-4">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filtrar por categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="Ingeniería">Ingeniería</SelectItem>
                  <SelectItem value="Minería">Minería</SelectItem>
                  <SelectItem value="Gestión Pública">Gestión Pública</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                  <TableHead>Precio</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.title}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.category === 'Ingeniería' ? 'bg-blue-100 text-blue-700' :
                        course.category === 'Minería' ? 'bg-amber-100 text-amber-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {course.category}
                      </span>
                    </TableCell>
                    <TableCell>{course.level}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>{course.rating}/5</TableCell>
                    <TableCell>S/ {course.price}</TableCell>
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
                <SelectTrigger className="w-[300px]">
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
                placeholder="Ej: Residencia de Obras Públicas"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Categoría</Label>
              <Select defaultValue={selectedCourse?.category || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ingeniería">Ingeniería</SelectItem>
                  <SelectItem value="Minería">Minería</SelectItem>
                  <SelectItem value="Gestión Pública">Gestión Pública</SelectItem>
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
              <Label htmlFor="price">Precio (S/)</Label>
              <Input 
                id="price" 
                type="number" 
                defaultValue={selectedCourse?.price || ""}
                placeholder="Ej: 299"
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
                placeholder="Ej: Fundamentos de Residencia"
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
                placeholder="Ej: Introducción a la Residencia de Obras"
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
                placeholder="Ej: 25"
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
