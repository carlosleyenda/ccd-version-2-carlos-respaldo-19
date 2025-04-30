
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, BookOpen, FileText } from "lucide-react";

interface LessonProgressProps {
  onGoToExam: () => void;
}

const LessonProgress = ({ onGoToExam }: LessonProgressProps) => {
  // Datos de progreso (en una aplicación real, esto vendría de una API)
  const moduleProgress = 25; // 25% del módulo completado
  const totalCourseProgress = 8; // 8% del curso total completado
  
  const upcomingActivities = [
    {
      id: '1',
      title: 'Evaluación Inicial',
      type: 'quiz',
      dueDate: 'Próxima lección',
      completed: false
    },
    {
      id: '2',
      title: 'Historia de la Minería Subterránea',
      type: 'video',
      dueDate: 'Próxima lección',
      completed: false
    },
    {
      id: '3',
      title: 'Examen Parcial - Módulo 1',
      type: 'exam',
      dueDate: 'Al finalizar el módulo',
      completed: false
    }
  ];
  
  const completedActivities = [
    {
      id: '4',
      title: 'Conceptos Fundamentales',
      type: 'video',
      completedDate: 'Hoy',
      completed: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Tu progreso</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Progreso en este módulo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Módulo 1: Introducción</span>
                  <span className="font-medium">{moduleProgress}%</span>
                </div>
                <Progress value={moduleProgress} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Progreso total del curso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Curso completo</span>
                  <span className="font-medium">{totalCourseProgress}%</span>
                </div>
                <Progress value={totalCourseProgress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Próximas actividades</h3>
        
        <div className="space-y-3">
          {upcomingActivities.map(activity => (
            <div 
              key={activity.id}
              className="flex items-center justify-between p-3 border rounded-md bg-background"
            >
              <div className="flex items-center">
                {activity.type === 'video' && <BookOpen className="h-4 w-4 mr-3 text-blue-500" />}
                {activity.type === 'quiz' && <FileText className="h-4 w-4 mr-3 text-green-500" />}
                {activity.type === 'exam' && <FileText className="h-4 w-4 mr-3 text-orange-500" />}
                
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.dueDate}</p>
                </div>
              </div>
              
              {activity.type === 'exam' ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={onGoToExam}
                >
                  Ver examen
                </Button>
              ) : (
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Actividades completadas</h3>
        
        <div className="space-y-3">
          {completedActivities.map(activity => (
            <div 
              key={activity.id}
              className="flex items-center justify-between p-3 border rounded-md bg-muted/30"
            >
              <div className="flex items-center">
                {activity.type === 'video' && <BookOpen className="h-4 w-4 mr-3 text-blue-500" />}
                {activity.type === 'quiz' && <FileText className="h-4 w-4 mr-3 text-green-500" />}
                
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">Completado: {activity.completedDate}</p>
                </div>
              </div>
              
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <Button 
          variant="default" 
          className="w-full sm:w-auto"
          onClick={onGoToExam}
        >
          Ir al examen del módulo
        </Button>
      </div>
    </div>
  );
};

export default LessonProgress;
