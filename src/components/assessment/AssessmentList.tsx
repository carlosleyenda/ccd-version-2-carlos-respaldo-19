
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy, Play, BookOpen } from "lucide-react";
import { Assessment } from "./types";

interface AssessmentListProps {
  assessments?: Assessment[];
  selectedCategory?: string;
  selectedLevel?: string;
  showCompleted?: boolean;
  emptyMessage?: string;
}

const AssessmentList: React.FC<AssessmentListProps> = ({
  assessments = [],
  selectedCategory = "all",
  selectedLevel = "all", 
  showCompleted = true,
  emptyMessage = "No se encontraron evaluaciones"
}) => {
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

  const getCategoryName = (category: string) => {
    switch (category) {
      case "forex": return "Forex";
      case "crypto": return "Criptomonedas";
      case "stocks": return "Acciones";
      default: return "Trading";
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case "practice": return "Práctica";
      case "certification": return "Certificación";
      case "skill-check": return "Evaluación";
      default: return "Evaluación";
    }
  };

  if (!assessments || assessments.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-500">
          Explora nuestras otras categorías de evaluaciones de trading
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Evaluaciones de Trading</h2>
        <p className="text-gray-600">{assessments.length} evaluaciones disponibles</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((assessment) => (
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
                  {getCategoryName(assessment.category)}
                </Badge>
                <Badge className={getLevelColor(assessment.level)}>
                  {assessment.level}
                </Badge>
                <Badge variant="outline">
                  {getTypeName(assessment.type)}
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
