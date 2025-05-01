
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Layers, Award, Clock } from "lucide-react";
import { LearningPath } from "./types";

interface PathsListProps {
  paths: LearningPath[];
}

const PathsList: React.FC<PathsListProps> = ({ paths }) => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {paths.map((path) => (
        <Card key={path.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start mb-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${path.color}-100 text-${path.color}-600`}>
                <Layers size={20} />
              </div>
              <Badge className={`bg-${path.color}-100 text-${path.color}-600 hover:bg-${path.color}-200`}>
                {path.level}
              </Badge>
            </div>
            <CardTitle className="text-xl">{path.title}</CardTitle>
            <CardDescription className="line-clamp-2">{path.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Award size={16} className="mr-1" /> 
                  <span>{path.courses.length} cursos</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" /> 
                  <span>{path.duration}</span>
                </div>
              </div>
              
              {path.progress > 0 && (
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span className="font-medium">{path.progress}%</span>
                  </div>
                  <Progress value={path.progress} className="h-1.5" />
                </div>
              )}
              
              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Habilidades adquiridas:</h4>
                <div className="flex flex-wrap gap-1">
                  {path.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {path.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{path.skills.length - 3} más
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              variant={path.progress > 0 ? "view" : "enroll"}
              onClick={() => navigate(`/learning-paths/${path.id}`)}
            >
              {path.progress > 0 ? "Continuar" : "Ver ruta"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PathsList;
