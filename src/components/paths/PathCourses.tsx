
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Check, PlayCircle, Lock } from "lucide-react";
import { LearningPath } from "./types";

interface PathCoursesProps {
  path: LearningPath;
}

const PathCourses: React.FC<PathCoursesProps> = ({ path }) => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-4">
      {path.courses.map((course, index) => (
        <Card key={course.id} className={course.completed ? "border-green-200" : ""}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <Badge variant={course.completed ? "success" : "outline"}>
                {course.completed ? "Completado" : `Módulo ${index + 1}`}
              </Badge>
              {course.completed ? (
                <Check size={20} className="text-green-500" />
              ) : index > 0 && !path.courses[index-1].completed ? (
                <Lock size={20} className="text-gray-400" />
              ) : null}
            </div>
            <CardTitle className="text-lg mt-2">{course.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Clock size={16} className="mr-1" /> 
              <span>{course.duration}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {index === 0 ? 
                "Curso introductorio que establece las bases fundamentales para esta ruta de aprendizaje." :
                index === path.courses.length - 1 ?
                "Curso final que consolida todos los conocimientos adquiridos e incluye evaluación para certificación." :
                `Este curso profundiza en conceptos clave y proporciona herramientas prácticas para tu desarrollo profesional.`
              }
            </p>
          </CardContent>
          <CardFooter>
            {course.completed ? (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                Revisar curso
              </Button>
            ) : index > 0 && !path.courses[index-1].completed ? (
              <Button
                variant="outline"
                className="w-full"
                disabled
              >
                Bloqueado
              </Button>
            ) : (
              <Button
                variant="default"
                className="w-full"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                <PlayCircle size={16} className="mr-1" />
                Comenzar curso
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PathCourses;
