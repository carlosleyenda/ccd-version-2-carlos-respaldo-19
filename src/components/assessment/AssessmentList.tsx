
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Clock, HelpCircle, Award, Lock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Assessment } from "./types";

interface AssessmentListProps {
  assessments: Assessment[];
  emptyMessage: string;
}

const AssessmentList: React.FC<AssessmentListProps> = ({ 
  assessments, 
  emptyMessage 
}) => {
  const navigate = useNavigate();
  
  const handleStartAssessment = (assessment: Assessment) => {
    if (assessment.requiresPrevious) {
      toast.info("Se requiere completar cursos previos para esta evaluación");
    } else {
      toast.success(`Iniciando: ${assessment.title}`);
      navigate(`/assessment/${assessment.id}`);
    }
  };
  
  const handleContinueAssessment = (assessment: Assessment) => {
    toast.success(`Continuando: ${assessment.title}`);
    navigate(`/assessment/${assessment.id}`);
  };
  
  const handleViewResults = (assessment: Assessment) => {
    toast.success(`Mostrando resultados de: ${assessment.title}`);
    navigate(`/assessment/${assessment.id}/results`);
  };
  
  const getCategoryColor = (category: Assessment["category"]) => {
    switch(category) {
      case "mining": return "mining";
      case "engineering": return "engineering";
      case "management": return "management";
      default: return "gray";
    }
  };
  
  const getLevelBadgeVariant = (level: Assessment["level"]) => {
    switch(level) {
      case "Principiante": return "outline";
      case "Intermedio": return "secondary";
      case "Avanzado": return "default";
      case "Profesional": return "default";
      case "Especialista": return "destructive";
      case "Experto": return "destructive";
      default: return "outline";
    }
  };
  
  if (assessments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <HelpCircle size={48} className="mb-4 opacity-50" />
        <p>{emptyMessage}</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assessments.map((assessment) => (
        <Card key={assessment.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className={`h-2 bg-${getCategoryColor(assessment.category)}-500`}></div>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <Badge variant={getLevelBadgeVariant(assessment.level)}>
                {assessment.level}
              </Badge>
              
              {assessment.popularity && (
                <Badge variant="secondary" className={
                  assessment.popularity === "Popular" ? "bg-blue-100 text-blue-700" :
                  assessment.popularity === "Destacado" ? "bg-amber-100 text-amber-700" : 
                  "bg-green-100 text-green-700"
                }>
                  {assessment.popularity === "Destacado" && <Star size={12} className="mr-1" />}
                  {assessment.popularity}
                </Badge>
              )}
            </div>
            
            <CardTitle className="text-lg mt-2">{assessment.title}</CardTitle>
            <CardDescription className="line-clamp-2">{assessment.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="pb-4">
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{assessment.duration} min</span>
              </div>
              <div className="flex items-center">
                <FileText size={16} className="mr-1" />
                <span>{assessment.questionsCount} preguntas</span>
              </div>
            </div>
            
            {assessment.progress !== undefined && (
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Progreso</span>
                  <span className="font-medium">{assessment.progress}%</span>
                </div>
                <Progress value={assessment.progress} className="h-1.5" />
              </div>
            )}
            
            {assessment.bestScore !== undefined && (
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-500">Mejor puntuación</span>
                <div className="flex items-center">
                  <Award size={16} className="mr-1 text-amber-500" />
                  <span className="font-medium">{assessment.bestScore}/100</span>
                </div>
              </div>
            )}
            
            {assessment.attempts !== undefined && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Intentos</span>
                <span>{assessment.attempts}</span>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="pt-0">
            {assessment.requiresPrevious && !assessment.progress ? (
              <Button className="w-full" disabled>
                <Lock size={16} className="mr-2" />
                Requiere cursos previos
              </Button>
            ) : assessment.progress && assessment.progress < 100 ? (
              <Button 
                variant="view" 
                className="w-full"
                onClick={() => handleContinueAssessment(assessment)}
              >
                Continuar
              </Button>
            ) : assessment.progress === 100 ? (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleViewResults(assessment)}
              >
                Ver resultados
              </Button>
            ) : (
              <Button 
                variant={
                  assessment.type === "certification" ? "cta" : 
                  assessment.type === "skill-check" ? "action" : 
                  "default"
                }
                className="w-full"
                onClick={() => handleStartAssessment(assessment)}
              >
                Comenzar evaluación
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AssessmentList;
