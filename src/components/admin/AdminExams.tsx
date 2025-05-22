
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
  Plus, Search, Edit, Trash2, Filter, Download, 
  ClipboardList, Clock, Award, BarChart2, 
  Eye, Copy, Check, X, ChevronDown
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AdminExams = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [newExamModal, setNewExamModal] = useState(false);
  const [editExamModal, setEditExamModal] = useState(false);
  const [questionModal, setQuestionModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const exams = [
    { 
      id: "EX-001", 
      title: "Certificación en Gestión de Proyectos", 
      course: "Gestión de Proyectos Avanzada",
      duration: 60, 
      questions: 25, 
      passingScore: 70, 
      status: "active",
      createdAt: "2023-05-15" 
    },
    { 
      id: "EX-002", 
      title: "Evaluación Final de Minería Sostenible", 
      course: "Minería Sostenible",
      duration: 90, 
      questions: 40, 
      passingScore: 75, 
      status: "active",
      createdAt: "2023-06-10" 
    },
    { 
      id: "EX-003", 
      title: "Prueba de Seguridad en Operaciones Mineras", 
      course: "Seguridad Operacional",
      duration: 45, 
      questions: 20, 
      passingScore: 80, 
      status: "draft",
      createdAt: "2023-07-05" 
    },
    { 
      id: "EX-004", 
      title: "Evaluación de Técnicas de Excavación", 
      course: "Técnicas de Excavación Moderna",
      duration: 75, 
      questions: 30, 
      passingScore: 65, 
      status: "archived",
      createdAt: "2023-04-22" 
    },
    { 
      id: "EX-005", 
      title: "Certificación en Análisis de Datos Geológicos", 
      course: "Análisis Geológico Avanzado",
      duration: 120, 
      questions: 50, 
      passingScore: 70, 
      status: "active",
      createdAt: "2023-08-01" 
    }
  ];

  // Sample stats
  const statsData = [
    { 
      title: "Total Exámenes", 
      value: exams.length,
      icon: <ClipboardList className="h-4 w-4 text-blue-500" /> 
    },
    { 
      title: "Evaluaciones Activas", 
      value: exams.filter(e => e.status === "active").length,
      icon: <Check className="h-4 w-4 text-green-500" /> 
    },
    { 
      title: "Tiempo Promedio", 
      value: `${Math.round(exams.reduce((sum, e) => sum + e.duration, 0) / exams.length)} min`,
      icon: <Clock className="h-4 w-4 text-amber-500" /> 
    },
    { 
      title: "Tasa de Aprobación", 
      value: "62%",
      icon: <BarChart2 className="h-4 w-4 text-purple-500" /> 
    },
  ];

  // Sample questions for the selected exam
  const sampleQuestions = [
    {
      id: "Q1",
      text: "¿Cuál es la técnica más adecuada para la estimación de costos en un proyecto minero?",
      type: "multiple_choice",
      options: [
        "Estimación análoga",
        "Estimación paramétrica",
        "Estimación ascendente",
        "Todas las anteriores"
      ],
      correctAnswer: 3,
      points: 5
    },
    {
      id: "Q2",
      text: "En la gestión de proyectos, ¿qué representa la ruta crítica?",
      type: "multiple_choice",
      options: [
        "La secuencia de actividades con mayor riesgo",
        "La secuencia de actividades con mayor costo",
        "La secuencia de actividades que determina la duración mínima del proyecto",
        "La secuencia de actividades con mayor número de recursos"
      ],
      correctAnswer: 2,
      points: 5
    },
    {
      id: "Q3",
      text: "Explique los principios fundamentales de la gestión de riesgos en proyectos mineros.",
      type: "essay",
      wordLimit: 300,
      points: 10
    }
  ];

  const handleEditExam = (exam) => {
    setSelectedExam(exam);
    setEditExamModal(true);
  };

  const handleDeleteExam = (examId) => {
    // Delete exam logic here
    console.log("Delete exam:", examId);
  };

  const handleAddQuestion = () => {
    setQuestionModal(true);
  };

  const filteredExams = exams.filter(exam => {
    // Filter by search term
    const matchesSearch = 
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      exam.course.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by tab
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "active") return exam.status === "active" && matchesSearch;
    if (activeTab === "draft") return exam.status === "draft" && matchesSearch;
    if (activeTab === "archived") return exam.status === "archived" && matchesSearch;
    
    return matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "active": return <Badge variant="default">Activo</Badge>;
      case "draft": return <Badge variant="outline">Borrador</Badge>;
      case "archived": return <Badge variant="secondary">Archivado</Badge>;
      default: return <Badge variant="outline">Desconocido</Badge>;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Exámenes</h2>
        <Button onClick={() => setNewExamModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Examen
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, index) => (
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
            <TabsTrigger value="active">Activos</TabsTrigger>
            <TabsTrigger value="draft">Borradores</TabsTrigger>
            <TabsTrigger value="archived">Archivados</TabsTrigger>
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
                placeholder="Buscar exámenes..."
                className="pl-8 w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <TabsContent value={activeTab} className="mt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Curso</TableHead>
                  <TableHead>Duración</TableHead>
                  <TableHead>Preguntas</TableHead>
                  <TableHead>Nota Aprobatoria</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExams.length > 0 ? (
                  filteredExams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium">{exam.id}</TableCell>
                      <TableCell>{exam.title}</TableCell>
                      <TableCell>{exam.course}</TableCell>
                      <TableCell>{exam.duration} min</TableCell>
                      <TableCell>{exam.questions}</TableCell>
                      <TableCell>{exam.passingScore}%</TableCell>
                      <TableCell>
                        {getStatusBadge(exam.status)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleEditExam(exam)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteExam(exam.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-6">
                      No hay exámenes que coincidan con la búsqueda
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* New/Edit Exam Modal */}
      <Dialog open={newExamModal || editExamModal} onOpenChange={(open) => {
        if (!open) {
          setNewExamModal(false);
          setEditExamModal(false);
          setSelectedExam(null);
        }
      }}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>{editExamModal ? "Editar Examen" : "Nuevo Examen"}</DialogTitle>
            <DialogDescription>
              {editExamModal 
                ? "Actualice la información del examen y gestione sus preguntas."
                : "Configure un nuevo examen para evaluar a los estudiantes."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="title">Título del Examen</Label>
                <Input 
                  id="title" 
                  placeholder="Título descriptivo" 
                  defaultValue={selectedExam?.title || ""} 
                />
              </div>
              
              <div>
                <Label htmlFor="course">Curso Asociado</Label>
                <Select defaultValue={selectedExam?.course || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Gestión de Proyectos Avanzada">Gestión de Proyectos Avanzada</SelectItem>
                    <SelectItem value="Minería Sostenible">Minería Sostenible</SelectItem>
                    <SelectItem value="Seguridad Operacional">Seguridad Operacional</SelectItem>
                    <SelectItem value="Técnicas de Excavación Moderna">Técnicas de Excavación Moderna</SelectItem>
                    <SelectItem value="Análisis Geológico Avanzado">Análisis Geológico Avanzado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="duration">Duración (minutos)</Label>
                  <Input 
                    id="duration" 
                    type="number" 
                    placeholder="60" 
                    defaultValue={selectedExam?.duration || ""} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="passing_score">Nota Aprobatoria (%)</Label>
                  <Input 
                    id="passing_score" 
                    type="number" 
                    placeholder="70" 
                    defaultValue={selectedExam?.passingScore || ""} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="status">Estado</Label>
                  <Select defaultValue={selectedExam?.status || "draft"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Borrador</SelectItem>
                      <SelectItem value="active">Activo</SelectItem>
                      <SelectItem value="archived">Archivado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Descripción e Instrucciones</Label>
                <Textarea 
                  id="description" 
                  placeholder="Instrucciones detalladas para los estudiantes" 
                  rows={3}
                  defaultValue={selectedExam?.description || ""} 
                />
              </div>
              
              {editExamModal && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Preguntas</Label>
                    <Button size="sm" onClick={handleAddQuestion}>
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Añadir Pregunta
                    </Button>
                  </div>
                  
                  <div className="border rounded-md">
                    <Accordion type="single" collapsible className="w-full">
                      {sampleQuestions.map((question, index) => (
                        <AccordionItem key={question.id} value={question.id}>
                          <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="flex items-center justify-between w-full pr-4">
                              <span>Pregunta {index + 1}</span>
                              <span className="text-muted-foreground text-sm">
                                {question.type === "multiple_choice" ? "Opción múltiple" : "Desarrollo"} • {question.points} puntos
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3">
                            <div className="space-y-2">
                              <p className="font-medium">{question.text}</p>
                              
                              {question.type === "multiple_choice" && (
                                <div className="space-y-2 mt-2">
                                  {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className={`flex items-center gap-2 p-2 border rounded-md ${optionIndex === question.correctAnswer ? 'border-green-500' : ''}`}>
                                      <div className={`h-4 w-4 rounded-full ${optionIndex === question.correctAnswer ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                                      <span>{option}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {question.type === "essay" && (
                                <div className="p-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-muted-foreground text-sm">
                                  Pregunta de desarrollo • Límite de palabras: {question.wordLimit}
                                </div>
                              )}
                              
                              <div className="flex justify-end gap-2 pt-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="h-3.5 w-3.5 mr-1" />
                                  Editar
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="h-3.5 w-3.5 mr-1" />
                                  Eliminar
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setNewExamModal(false);
              setEditExamModal(false);
            }}>
              Cancelar
            </Button>
            <Button type="submit">
              {editExamModal ? "Actualizar Examen" : "Crear Examen"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Add Question Modal */}
      <Dialog open={questionModal} onOpenChange={setQuestionModal}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Añadir Pregunta</DialogTitle>
            <DialogDescription>
              Configure una nueva pregunta para el examen.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="questionType">Tipo de Pregunta</Label>
              <Select defaultValue="multiple_choice">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple_choice">Opción múltiple</SelectItem>
                  <SelectItem value="true_false">Verdadero/Falso</SelectItem>
                  <SelectItem value="essay">Desarrollo</SelectItem>
                  <SelectItem value="matching">Relacionar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="questionText">Texto de la Pregunta</Label>
              <Textarea 
                id="questionText" 
                placeholder="Escribe la pregunta aquí" 
                rows={3}
              />
            </div>
            
            <div>
              <Label className="mb-2 block">Opciones de Respuesta</Label>
              
              <div className="space-y-3">
                {[1, 2, 3, 4].map(index => (
                  <div key={index} className="flex gap-3">
                    <div className="flex items-center mr-2">
                      <input type="radio" name="correctAnswer" id={`option${index}`} className="h-4 w-4" />
                    </div>
                    <Input placeholder={`Opción ${index}`} className="flex-grow" />
                    {index > 2 ? (
                      <Button variant="ghost" size="icon" className="h-10 w-10">
                        <X className="h-4 w-4" />
                      </Button>
                    ) : null}
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="mt-3 w-full">
                <Plus className="h-4 w-4 mr-2" />
                Añadir Opción
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="points">Puntos</Label>
                <Input id="points" type="number" placeholder="5" />
              </div>
              
              <div>
                <Label htmlFor="difficulty">Dificultad</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar dificultad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Fácil</SelectItem>
                    <SelectItem value="medium">Media</SelectItem>
                    <SelectItem value="hard">Difícil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setQuestionModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Añadir Pregunta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminExams;
