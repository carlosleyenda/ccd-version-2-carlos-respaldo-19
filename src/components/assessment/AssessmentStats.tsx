
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle, Star, Clock } from "lucide-react";

interface AssessmentStatsProps {
  stats: {
    totalAssessments: number;
    completedAssessments: number;
    averageScore: number;
    totalCertifications: number;
    lastCompletedDate: string;
  };
}

const AssessmentStats: React.FC<AssessmentStatsProps> = ({ stats }) => {
  const completionPercentage = Math.round((stats.completedAssessments / stats.totalAssessments) * 100);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Progreso total</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">{completionPercentage}%</span>
                <span className="text-sm text-gray-500 ml-1">completado</span>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <Progress value={completionPercentage} className="h-1.5 mt-2" />
          <p className="text-xs text-gray-500 mt-2">
            {stats.completedAssessments} de {stats.totalAssessments} evaluaciones
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Puntuación media</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">{stats.averageScore}</span>
                <span className="text-sm text-gray-500 ml-1">puntos</span>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Star className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${stats.averageScore}%` }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Buena puntuación media
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Certificaciones</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">{stats.totalCertifications}</span>
                <span className="text-sm text-gray-500 ml-1">obtenidas</span>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <Award className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <Progress value={stats.totalCertifications * 20} className="h-1.5 mt-2 bg-gray-200" />
          <p className="text-xs text-gray-500 mt-2">
            {5 - stats.totalCertifications} certificaciones disponibles
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Última evaluación</p>
              <div className="flex items-baseline">
                <span className="text-lg font-bold truncate max-w-[140px]">{formatDate(stats.lastCompletedDate)}</span>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <div className="h-1.5 mt-2"></div>
          <p className="text-xs text-gray-500 mt-2">
            Mantén un ritmo constante de aprendizaje
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentStats;
