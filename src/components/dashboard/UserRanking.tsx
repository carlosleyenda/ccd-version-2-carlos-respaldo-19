
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Star, Trophy, Award, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface RankingUser {
  id: number;
  name: string;
  avatar: string;
  points: number;
  badges: number;
  level: number;
  rank: string;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  progress?: number;
}

const UserRanking: React.FC = () => {
  const currentUser = {
    name: "Carlos Rodriguez",
    points: 2840,
    badges: 12,
    level: 5,
    rank: "Experto Aprendiz",
    nextLevel: {
      points: 3500,
      remaining: 660,
      progress: 81
    }
  };
  
  const topUsers: RankingUser[] = [
    {
      id: 1,
      name: "Maria González",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      points: 4520,
      badges: 18,
      level: 8,
      rank: "Maestro Minero"
    },
    {
      id: 2,
      name: "Javier López",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      points: 3980,
      badges: 15,
      level: 7,
      rank: "Ingeniero Brillante"
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      points: 2840,
      badges: 12,
      level: 5,
      rank: "Experto Aprendiz"
    },
    {
      id: 4,
      name: "Ana Martinez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      points: 2610,
      badges: 10,
      level: 5,
      rank: "Experta Aprendiz"
    },
    {
      id: 5,
      name: "Roberto Sánchez",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      points: 2340,
      badges: 9,
      level: 4,
      rank: "Técnico Avanzado"
    }
  ];
  
  const achievements: Achievement[] = [
    {
      id: 1,
      name: "Maestro de la Minería",
      description: "Completa 3 cursos de Minería",
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      completed: true,
      progress: 100
    },
    {
      id: 2,
      name: "Estudiante Dedicado",
      description: "Completa 10 horas de estudio en una semana",
      icon: <Star className="h-6 w-6 text-amber-500" />,
      completed: true,
      progress: 100
    },
    {
      id: 3,
      name: "Ingeniero Principiante",
      description: "Completa todos los cursos básicos de ingeniería",
      icon: <Award className="h-6 w-6 text-blue-500" />,
      completed: false,
      progress: 66
    },
    {
      id: 4,
      name: "Colaborador Activo",
      description: "Participa en 5 discusiones en el foro",
      icon: <Users className="h-6 w-6 text-green-500" />,
      completed: false,
      progress: 40
    },
    {
      id: 5,
      name: "Experto en Gestión",
      description: "Aprueba el examen final de Gestión de Proyectos",
      icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
      completed: false,
      progress: 0
    }
  ];
  
  const rankLevels = [
    { level: 1, name: "Principiante", points: 500, color: "bg-gray-400" },
    { level: 3, name: "Técnico", points: 1500, color: "bg-green-400" },
    { level: 5, name: "Experto", points: 2500, color: "bg-blue-500" },
    { level: 7, name: "Ingeniero", points: 3500, color: "bg-purple-500" },
    { level: 9, name: "Maestro", points: 5000, color: "bg-amber-500" },
    { level: 12, name: "Leyenda", points: 10000, color: "bg-red-500" }
  ];
  
  const handleClaimReward = () => {
    toast.success("¡Recompensa reclamada exitosamente! +100 XP");
  };

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold mb-6">Ranking y Gamificación</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Progress Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Tu Progreso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {currentUser.level}
                </div>
                <div>
                  <p className="font-medium">{currentUser.rank}</p>
                  <p className="text-xs text-muted-foreground">Nivel {currentUser.level}</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-amber-100 text-amber-800">
                {currentUser.points} XP
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progreso al nivel {currentUser.level + 1}</span>
                <span>{currentUser.nextLevel.progress}%</span>
              </div>
              <Progress value={currentUser.nextLevel.progress} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                Necesitas {currentUser.nextLevel.remaining} XP más para alcanzar el nivel {currentUser.level + 1}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-3 rounded-md">
              <p className="text-sm font-medium mb-2">Recompensa disponible:</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="text-sm">Insignia de asistencia perfecta</span>
                </div>
                <Button size="sm" variant="outline" onClick={handleClaimReward}>
                  Reclamar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Ranking Tab Card */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Ranking de Estudiantes</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ranking" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="ranking">Ranking Global</TabsTrigger>
                <TabsTrigger value="achievements">Logros</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ranking" className="space-y-4">
                <div className="space-y-4">
                  {topUsers.map((user, index) => (
                    <div key={user.id} className={`flex items-center justify-between p-3 rounded-lg ${user.id === 3 ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' : ''}`}>
                      <div className="flex items-center space-x-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? 'bg-amber-400 text-white' : index === 1 ? 'bg-gray-300 text-gray-800' : index === 2 ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                          {index + 1}
                        </div>
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-800"
                        />
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.rank} · Nivel {user.level}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{user.points} XP</p>
                        <p className="text-xs text-muted-foreground">{user.badges} insignias</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Niveles de Ranking</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {rankLevels.map((rank) => (
                      <div 
                        key={rank.level}
                        className="flex flex-col items-center p-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                      >
                        <div className={`w-3 h-3 rounded-full ${rank.color} mb-1`}></div>
                        <p className="text-xs font-medium">{rank.name}</p>
                        <p className="text-xs text-muted-foreground">Niv. {rank.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`p-4 rounded-lg border ${achievement.completed ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${achievement.completed ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{achievement.name}</h4>
                          {achievement.completed && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                              Completado
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.progress !== undefined && achievement.progress < 100 && (
                          <div className="mt-2 space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progreso</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-1.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserRanking;
