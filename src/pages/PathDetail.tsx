
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Clock, Award, BookOpen, Check, Layers, BookText } from "lucide-react";
import { learningPaths } from "@/components/paths/pathsData";
import { LearningPath } from "@/components/paths/types";
import PathMilestones from "@/components/paths/PathMilestones";
import PathCourses from "@/components/paths/PathCourses";
import PathResources from "@/components/paths/PathResources";

const PathDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [path, setPath] = useState<LearningPath | null>(null);
  
  useEffect(() => {
    // Simulando una petición a la API
    const foundPath = learningPaths.find(p => p.id === id);
    if (foundPath) {
      setPath(foundPath);
    } else {
      toast.error("Ruta de aprendizaje no encontrada");
      navigate("/learning-paths");
    }
  }, [id, navigate]);
  
  const handleEnroll = () => {
    toast.success("¡Te has inscrito exitosamente en esta ruta!");
  };
  
  const handleContinue = () => {
    // Encontrar el primer curso no completado
    if (path) {
      const nextCourse = path.courses.find(course => !course.completed);
      if (nextCourse) {
        toast.info(`Continuando con: ${nextCourse.title}`);
        navigate(`/course/${nextCourse.id}`);
      }
    }
  };
  
  if (!path) {
    return (
      <PageLayout title="Cargando..." subtitle="Obteniendo información de la ruta">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </PageLayout>
    );
  }
  
  const completedCourses = path.courses.filter(course => course.completed).length;
  
  return (
    <PageLayout 
      title={path.title} 
      subtitle={path.description}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div className={`px-3 py-1 rounded-full bg-${path.color}-100 text-${path.color}-700 text-sm font-medium`}>
                  {path.category === "engineering" ? "Ingeniería" : 
                   path.category === "mining" ? "Minería" : "Gestión"}
                </div>
                <Badge variant="outline">{path.level}</Badge>
              </div>
              <CardTitle className="text-2xl mt-2">{path.title}</CardTitle>
              <CardDescription className="text-base">{path.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Clock className="h-6 w-6 text-gray-500 mb-2" />
                  <p className="text-sm text-gray-500">Duración</p>
                  <p className="font-medium">{path.duration}</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <BookOpen className="h-6 w-6 text-gray-500 mb-2" />
                  <p className="text-sm text-gray-500">Cursos</p>
                  <p className="font-medium">{path.courses.length}</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Award className="h-6 w-6 text-gray-500 mb-2" />
                  <p className="text-sm text-gray-500">Certificado</p>
                  <p className="font-medium">Incluido</p>
                </div>
              </div>
              
              {path.progress > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Progreso de la ruta</span>
                    <span className="font-medium">{path.progress}%</span>
                  </div>
                  <Progress value={path.progress} className="h-2" />
                  <p className="text-sm text-gray-500 mt-2">
                    <Check size={14} className="inline mr-1 text-green-500" />
                    {completedCourses} de {path.courses.length} cursos completados
                  </p>
                </div>
              )}
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-medium mb-3">Habilidades que desarrollarás</h3>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="courses">Cursos</TabsTrigger>
              <TabsTrigger value="milestones">Hitos</TabsTrigger>
              <TabsTrigger value="resources">Recursos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <PathCourses path={path} />
            </TabsContent>
            
            <TabsContent value="milestones">
              <PathMilestones pathId={path.id} />
            </TabsContent>
            
            <TabsContent value="resources">
              <PathResources pathId={path.id} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comienza tu ruta</CardTitle>
              <CardDescription>
                Inscríbete para acceder a todos los cursos y recursos
              </CardDescription>
            </CardHeader>
            <CardContent>
              {path.progress > 0 ? (
                <Button 
                  variant="view" 
                  className="w-full mb-4" 
                  onClick={handleContinue}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Continuar ruta
                </Button>
              ) : (
                <Button 
                  variant="enroll" 
                  className="w-full mb-4" 
                  onClick={handleEnroll}
                >
                  <BookText className="mr-2 h-4 w-4" />
                  Inscribirme en esta ruta
                </Button>
              )}
              
              <p className="text-sm text-gray-500 mb-6">
                Al inscribirte en esta ruta tendrás acceso a todos los materiales, tutorías y certificación final.
              </p>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <h3 className="font-medium">Esta ruta incluye:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <Check size={18} className="mr-2 text-green-500" />
                    <span>{path.courses.length} cursos completos</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={18} className="mr-2 text-green-500" />
                    <span>Materiales descargables</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={18} className="mr-2 text-green-500" />
                    <span>Evaluaciones prácticas</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={18} className="mr-2 text-green-500" />
                    <span>Tutoría personalizada</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={18} className="mr-2 text-green-500" />
                    <span>Certificado profesional</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Instructores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Dr. Carlos Mendoza",
                    role: "Especialista Senior",
                    avatar: "https://github.com/shadcn.png"
                  },
                  {
                    name: "Ing. Laura Vega",
                    role: "Gerente de Proyectos",
                    avatar: "https://github.com/shadcn.png"
                  }
                ].map((instructor, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{instructor.name}</h4>
                      <p className="text-sm text-gray-500">{instructor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default PathDetail;
