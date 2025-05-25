
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy, Play, BookOpen } from "lucide-react";
import { Assessment } from "./types";
import { allAssessments } from "./assessmentData";

interface AssessmentListProps {
  selectedCategory?: string;
  selectedLevel?: string;
  showCompleted?: boolean;
}

const AssessmentList: React.FC<AssessmentListProps> = ({
  selectedCategory = "all",
  selectedLevel = "all", 
  showCompleted = true
}) => {
  const [assessments] = useState<Assessment[]>(allAssessments);

  const filteredAssessments = assessments.filter(assessment => {
    if (selectedCategory !== "all" && assessment.category !== selectedCategory) return false;
    if (selectedLevel !== "all" && assessment.level !== selectedLevel) return false;
    return true;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-blue-100 text-blue-800";
      case "Avanzado": return "bg-orange-100 text-orange-800";
      case "Profesional": return "bg-purple-100 text-purple-800";
      case "Especialista": return "bg-red-100 text-red-800";
      case "Experto": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "forex": return "bg-emerald-100 text-emerald-800";
      case "crypto": return "bg-blue-100 text-blue-800";
      case "stocks": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Evaluaciones de Trading</h2>
        <p className="text-gray-600">{filteredAssessments.length} evaluaciones disponibles</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <Card key={assessment.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {assessment.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {assessment.description}
                  </p>
                </div>
                {assessment.popularity && (
                  <Badge variant="secondary" className="ml-2">
                    {assessment.popularity}
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className={getCategoryColor(assessment.category)}>
                  {assessment.category === "forex" ? "Forex" : 
                   assessment.category === "crypto" ? "Criptomonedas" : 
                   assessment.category === "stocks" ? "Acciones" : "Trading"}
                </Badge>
                <Badge className={getLevelColor(assessment.level)}>
                  {assessment.level}
                </Badge>
                <Badge variant="outline">
                  {assessment.type === "practice" ? "Práctica" :
                   assessment.type === "certification" ? "Certificación" : "Evaluación"}
                </Badge>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {assessment.duration} min
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {assessment.questionsCount} preguntas
                </div>
              </div>
              
              {assessment.requiresPrevious && (
                <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
                  Requiere completar evaluaciones previas
                </div>
              )}
              
              <div className="flex gap-2">
                <Button className="flex-1" size="sm">
                  <Play className="h-4 w-4 mr-1" />
                  Comenzar
                </Button>
                {assessment.type === "certification" && (
                  <Button variant="outline" size="sm">
                    <Trophy className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssessmentList;
