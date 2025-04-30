
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Trophy, Medal, Crown, Award, Users, ShoppingBag, Star, Gem } from "lucide-react";

const Ranking = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // User ranking data
  const userData = {
    name: "Carlos Rodriguez",
    level: 5,
    rank: "Experto Aprendiz",
    points: 2840,
    nextLevelPoints: 3500,
    badges: 12,
    coins: 560,
    position: 3,
  };
  
  // Ranking levels
  const levels = [
    { level: 1, name: "Principiante", points: 0, color: "bg-gray-400", benefits: ["Acceso básico a cursos", "Foros de discusión"] },
    { level: 3, name: "Técnico", points: 1500, color: "bg-green-400", benefits: ["10% descuento en cursos", "Descarga de material exclusivo"] },
    { level: 5, name: "Experto", points: 2500, color: "bg-blue-500", benefits: ["15% descuento en cursos", "Webinars mensuales exclusivos"] },
    { level: 7, name: "Ingeniero", points: 3500, color: "bg-purple-500", benefits: ["20% descuento en cursos", "Contenido premium exclusivo", "1 consulta mensual con instructor"] },
    { level: 9, name: "Maestro", points: 5000, color: "bg-amber-500", benefits: ["25% descuento en cursos", "Acceso anticipado a nuevos cursos", "2 consultas mensuales con instructor"] },
    { level: 12, name: "Leyenda", points: 10000, color: "bg-red-500", benefits: ["30% descuento en todos los productos", "Acceso ilimitado a todos los cursos", "Conexiones VIP con la industria"] },
  ];
  
  // Top users in ranking
  const topUsers = [
    { id: 1, name: "Maria González", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", points: 4520, level: 8, rank: "Maestro Minero" },
    { id: 2, name: "Javier López", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", points: 3980, level: 7, rank: "Ingeniero Brillante" },
    { id: 3, name: "Carlos Rodriguez", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", points: 2840, level: 5, rank: "Experto Aprendiz" },
    { id: 4, name: "Ana Martinez", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", points: 2610, level: 5, rank: "Experta Aprendiz" },
    { id: 5, name: "Roberto Sánchez", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", points: 2340, level: 4, rank: "Técnico Avanzado" },
  ];
  
  // Available rewards
  const rewards = [
    { id: 1, name: "Insignia de Asistencia Perfecta", cost: 100, type: "badge", image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 2, name: "Acceso a curso premium", cost: 300, type: "course", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 3, name: "Polo con logo", cost: 450, type: "merchandise", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 4, name: "Taza temática", cost: 200, type: "merchandise", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 5, name: "Sesión privada con instructor", cost: 800, type: "session", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 6, name: "Gorra institucional", cost: 300, type: "merchandise", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  ];
  
  // Achievements data
  const achievements = [
    { id: 1, name: "Maestro de la Minería", description: "Completa 3 cursos de Minería", icon: <Trophy className="h-6 w-6 text-amber-500" />, completed: true, progress: 100 },
    { id: 2, name: "Estudiante Dedicado", description: "Completa 10 horas de estudio en una semana", icon: <Star className="h-6 w-6 text-amber-500" />, completed: true, progress: 100 },
    { id: 3, name: "Ingeniero Principiante", description: "Completa todos los cursos básicos de ingeniería", icon: <Award className="h-6 w-6 text-blue-500" />, completed: false, progress: 66 },
    { id: 4, name: "Colaborador Activo", description: "Participa en 5 discusiones en el foro", icon: <Users className="h-6 w-6 text-green-500" />, completed: false, progress: 40 },
    { id: 5, name: "Experto en Gestión", description: "Aprueba el examen final de Gestión de Proyectos", icon: <Star className="h-6 w-6 text-purple-500" />, completed: false, progress: 0 },
  ];

  // Calculate progress to next level
  const remainingPoints = userData.nextLevelPoints - userData.points;
  const progressPercentage = Math.round((userData.points / userData.nextLevelPoints) * 100);
  
  const handleLevelClick = (level: string) => {
    setSelectedLevel(selectedLevel === level ? null : level);
  };
  
  const handleClaimReward = (reward: any) => {
    if (userData.coins >= reward.cost) {
      toast.success(`¡Has adquirido ${reward.name}!`);
    } else {
      toast.error("No tienes suficientes monedas");
    }
  };

  const handleDailyTask = () => {
    toast.success("¡Tarea completada! +20 monedas");
  };

  return (
    <PageLayout title="Ranking y Gamificación" subtitle="Compite, gana recompensas y sube de nivel en nuestra comunidad de aprendizaje">
      {/* User Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Tu Perfil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  {userData.level}
                </div>
                <div>
                  <p className="font-medium text-lg">{userData.rank}</p>
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Posición #{userData.position}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="bg-amber-100 text-amber-800 mb-1">
                  {userData.points} XP
                </Badge>
                <div className="flex items-center justify-end space-x-1">
                  <Gem className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">{userData.coins}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progreso al nivel {userData.level + 1}</span>
                <span>{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                Necesitas {remainingPoints} XP más para subir de nivel
              </p>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Tareas diarias</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                  <span className="text-sm">Completar una lección</span>
                  <Button size="sm" variant="outline" onClick={handleDailyTask}>
                    Completar
                  </Button>
                </div>
                <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                  <span className="text-sm">Participar en el foro</span>
                  <Button size="sm" variant="outline" onClick={handleDailyTask}>
                    Completar
                  </Button>
                </div>
                <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                  <span className="text-sm">Compartir un recurso</span>
                  <Button size="sm" variant="outline" onClick={handleDailyTask}>
                    Completar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Sistema de Niveles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <div className="flex justify-between mb-6">
                {levels.map((level, index) => (
                  <div 
                    key={level.level}
                    className={`flex flex-col items-center cursor-pointer transition-transform ${selectedLevel === level.name ? 'scale-110' : ''}`}
                    onClick={() => handleLevelClick(level.name)}
                  >
                    <div className={`w-10 h-10 rounded-full ${level.color} flex items-center justify-center text-white font-bold mb-1 ${userData.level >= level.level ? 'ring-2 ring-offset-2 ring-primary' : 'opacity-70'}`}>
                      {level.level}
                    </div>
                    <span className={`text-xs font-medium ${userData.level >= level.level ? 'text-primary' : 'text-muted-foreground'}`}>
                      {level.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-gray-200 dark:bg-gray-700 absolute top-5 left-5 right-5 z-[-1]">
                <div 
                  className="h-1 bg-gradient-to-r from-blue-500 to-primary" 
                  style={{
                    width: `${Math.min(100, (userData.points / levels[levels.length - 1].points) * 100)}%`
                  }}
                ></div>
              </div>
            </div>
            
            {selectedLevel && (
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">
                  Nivel: {levels.find(l => l.name === selectedLevel)?.name}
                </h4>
                <p className="text-sm mb-3">
                  Puntos necesarios: {levels.find(l => l.name === selectedLevel)?.points}+ XP
                </p>
                <h5 className="text-sm font-medium mb-1">Beneficios:</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {levels.find(l => l.name === selectedLevel)?.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Main Tabs */}
      <Tabs defaultValue="leaderboard" className="w-full mb-8">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="leaderboard">Clasificación</TabsTrigger>
          <TabsTrigger value="achievements">Logros</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
          <TabsTrigger value="store">Tienda</TabsTrigger>
        </TabsList>
        
        {/* Leaderboard Tab Content */}
        <TabsContent value="leaderboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top 3 Users */}
            <div className="md:col-span-3 flex flex-wrap justify-center gap-4 mb-6">
              {[topUsers[1], topUsers[0], topUsers[2]].map((user, index) => (
                <div 
                  key={user.id} 
                  className={`flex flex-col items-center p-4 rounded-lg border ${index === 1 ? 'order-first md:-mt-4' : ''}`}
                  style={{
                    boxShadow: index === 1 ? '0 0 15px rgba(245, 158, 11, 0.5)' : 'none',
                    borderColor: index === 1 ? 'rgb(245, 158, 11)' : index === 0 ? 'rgb(156, 163, 175)' : 'rgb(180, 83, 9)'
                  }}
                >
                  <div className="relative mb-2">
                    {index === 1 ? (
                      <Crown className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 text-amber-500" />
                    ) : index === 0 ? (
                      <Medal className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 text-gray-400" />
                    ) : (
                      <Medal className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 text-amber-700" />
                    )}
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-20 h-20 rounded-full object-cover border-4"
                      style={{
                        borderColor: index === 1 ? 'rgb(245, 158, 11)' : index === 0 ? 'rgb(156, 163, 175)' : 'rgb(180, 83, 9)'
                      }}
                    />
                    <div 
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{
                        backgroundColor: index === 1 ? 'rgb(245, 158, 11)' : index === 0 ? 'rgb(156, 163, 175)' : 'rgb(180, 83, 9)'
                      }}
                    >
                      {index === 1 ? 1 : index === 0 ? 2 : 3}
                    </div>
                  </div>
                  <p className="font-medium text-center">{user.name}</p>
                  <p className="text-xs text-center text-muted-foreground">{user.rank}</p>
                  <div className="mt-1 flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-amber-500" />
                    <span className="font-medium">{user.points} XP</span>
                  </div>
                </div>
              ))}
            </div>
          
            {/* Full Leaderboard */}
            <div className="md:col-span-3">
              <h3 className="font-medium mb-4">Clasificación General</h3>
              <div className="space-y-3">
                {topUsers.map((user, index) => (
                  <div 
                    key={user.id} 
                    className={`flex items-center justify-between p-4 rounded-lg ${user.id === 3 ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' : 'bg-gray-50 dark:bg-gray-800'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-white"
                        style={{
                          backgroundColor: index === 0 ? 'rgb(245, 158, 11)' : 
                                          index === 1 ? 'rgb(156, 163, 175)' : 
                                          index === 2 ? 'rgb(180, 83, 9)' : 
                                          'rgb(107, 114, 128)'
                        }}
                      >
                        {index + 1}
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                      />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.rank} · Nivel {user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{user.points} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Achievements Tab Content */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      {achievement.completed ? (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          Completado
                        </Badge>
                      ) : (
                        <Badge variant="outline">En progreso</Badge>
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
          </div>
          
          <div className="text-center mt-4">
            <Button variant="outline">
              Ver todos los logros
            </Button>
          </div>
        </TabsContent>
        
        {/* Rewards Tab Content */}
        <TabsContent value="rewards" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Recompensas Disponibles</h3>
            <div className="flex items-center space-x-1">
              <Gem className="h-5 w-5 text-blue-500" />
              <span className="font-medium">{userData.coins} monedas disponibles</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rewards.map((reward) => (
              <Card key={reward.id} className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={reward.image} 
                    alt={reward.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium">{reward.name}</h4>
                  <Badge className="mt-1 mb-3" variant="outline">
                    {reward.type === "badge" ? "Insignia" : 
                    reward.type === "course" ? "Curso" : 
                    reward.type === "session" ? "Sesión" : "Merchandising"}
                  </Badge>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center space-x-1">
                      <Gem className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{reward.cost}</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleClaimReward(reward)}
                      disabled={userData.coins < reward.cost}
                    >
                      Reclamar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Store Tab Content */}
        <TabsContent value="store" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Tienda de Merchandising</h3>
            <div className="flex items-center space-x-1">
              <Gem className="h-5 w-5 text-blue-500" />
              <span className="font-medium">{userData.coins} monedas disponibles</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Sudadera"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium">Sudadera Premium</h4>
                <p className="text-sm text-muted-foreground mb-3">Sudadera con logo institucional</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">650</span>
                  </div>
                  <Button size="sm">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618354691438-25bc04aa15ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Mochila"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium">Mochila Técnica</h4>
                <p className="text-sm text-muted-foreground mb-3">Mochila resistente para equipos</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">800</span>
                  </div>
                  <Button size="sm">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Set de Escritorio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium">Set de Escritorio</h4>
                <p className="text-sm text-muted-foreground mb-3">Kit completo de papelería</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">450</span>
                  </div>
                  <Button size="sm">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-6">
            <Button>Ver todos los productos</Button>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Ranking;
