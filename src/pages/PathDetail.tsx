import React from "react";
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { List, ListOrdered, CheckCheck, Clock, Award } from "lucide-react";
import { learningPaths } from "@/components/paths/pathsData";
import { useNavigate } from "react-router-dom";

const PathDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const path = learningPaths.find(path => path.id === id);

  if (!path) {
    return (
      <PageLayout title="Ruta no encontrada" subtitle="La ruta de aprendizaje especificada no existe.">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ruta no encontrada</h2>
          <p>La ruta de aprendizaje que estás buscando no existe.</p>
          <Button onClick={() => navigate("/learning-paths")}>Volver a las rutas de aprendizaje</Button>
        </div>
      </PageLayout>
    );
  }

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "forex":
        return { name: "Forex", color: "emerald" };
      case "crypto":
        return { name: "Criptomonedas", color: "blue" };
      case "stocks":
        return { name: "Acciones", color: "purple" };
      case "algorithmic":
        return { name: "Algorítmico", color: "orange" };
      default:
        return { name: "Trading", color: "gray" };
    }
  };

  const categoryInfo = getCategoryInfo(path.category);

  return (
    <PageLayout title={path.title} subtitle={path.description}>
      <div className="container mx-auto mt-8">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 p-6 pb-0">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-bold">{path.title}</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">{path.description}</CardDescription>
            </div>
            <Badge className={`bg-${categoryInfo.color}-100 text-${categoryInfo.color}-800 hover:bg-${categoryInfo.color}-200`}>
              {path.level}
            </Badge>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contenido del programa</h3>
                <ul className="space-y-2">
                  {path.courses.map((course, index) => (
                    <li key={course.id} className="flex items-center">
                      {index < 3 ? (
                        <CheckCheck className="h-5 w-5 mr-2 text-green-500" />
                      ) : (
                        <List className="h-5 w-5 mr-2 text-gray-500" />
                      )}
                      <span>{course.title} ({course.duration})</span>
                    </li>
                  ))}
                  {path.courses.length > 3 && (
                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      <ListOrdered className="h-4 w-4 mr-1 inline-block" />
                      +{path.courses.length - 3} cursos adicionales
                    </li>
                  )}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Habilidades que adquirirás</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {path.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 py-4 border-t">
              <h3 className="text-xl font-semibold mb-4">Detalles del programa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  Duración: {path.duration}
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-gray-500" />
                  Nivel: {path.level}
                </div>
                <div className="flex items-center">
                  <List className="h-4 w-4 mr-2 text-gray-500" />
                  {path.courses.length} cursos
                </div>
                <div className="flex items-center">
                  <Badge className={`bg-${categoryInfo.color}-100 text-${categoryInfo.color}-800`}>
                    {categoryInfo.name}
                  </Badge>
                </div>
              </div>
            </div>
            
            {path.progress > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Tu progreso</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Progreso total</span>
                    <span className="font-medium">{path.progress}%</span>
                  </div>
                  <Progress value={path.progress} />
                </div>
              </div>
            )}
            
            <div className="mt-8">
              <Button className="w-full" onClick={() => navigate("/courses")}>
                {path.progress > 0 ? "Continuar aprendiendo" : "Empezar ahora"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default PathDetail;
