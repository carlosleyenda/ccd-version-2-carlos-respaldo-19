
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Clock } from "lucide-react";

const Engineering = () => {
  const purchasedCourses: CourseCardProps[] = [
    {
      id: "eng-purchased-1",
      title: "Estrategias Avanzadas de Forex",
      description: "Desarrolla estrategias avanzadas de trading para el mercado de divisas.",
      instructor: "Dr. Pedro Valdés",
      category: "forex",
      level: "advanced",
      duration: "28h 45m",
      enrolled: 765,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      progress: 18,
    },
    {
      id: "eng-purchased-2",
      title: "Trading Automático en Forex",
      description: "Aplica técnicas de automatización para el trading de divisas.",
      instructor: "Dr. Antonio Guzmán",
      category: "forex",
      level: "intermediate",
      duration: "22h 10m",
      enrolled: 642,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      progress: 45,
    },
  ];

  const topSelling: CourseCardProps[] = [
    {
      id: "eng-top-1",
      title: "Maestría en Trading Forex",
      description: "Curso completo para convertirte en un trader profesional de forex.",
      instructor: "Ing. Francisco Méndez",
      category: "forex",
      level: "advanced",
      duration: "32h 15m",
      enrolled: 1289,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "eng-top-2",
      title: "APIs para Trading Forex",
      description: "Aprende a conectar y usar APIs de brokers para trading de divisas.",
      instructor: "Dra. Carmen Olivares",
      category: "forex",
      level: "intermediate",
      duration: "26h 20m",
      enrolled: 876,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "eng-top-3",
      title: "Análisis Técnico Forex",
      description: "Técnicas avanzadas de análisis técnico para el mercado de divisas.",
      instructor: "Dr. Roberto Gutiérrez",
      category: "forex",
      level: "advanced",
      duration: "30h 45m",
      enrolled: 754,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "eng-top-4",
      title: "Gestión de Riesgo en Forex",
      description: "Implementa sistemas de gestión de riesgo en tus operaciones forex.",
      instructor: "Ing. Mario Sánchez",
      category: "management",
      level: "intermediate",
      duration: "24h 30m",
      enrolled: 623,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const newCourses: CourseCardProps[] = [
    {
      id: "eng-new-1",
      title: "Scalping en Forex",
      description: "Domina las técnicas de scalping para obtener ganancias rápidas en forex.",
      instructor: "Dr. Luis Martínez",
      category: "forex",
      level: "advanced",
      duration: "28h 15m",
      enrolled: 342,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "eng-new-2",
      title: "Trading de Sesiones Forex",
      description: "Aprende a tradear en las diferentes sesiones del mercado forex.",
      instructor: "Ing. Patricia Vega",
      category: "forex",
      level: "intermediate",
      duration: "22h 30m",
      enrolled: 287,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "eng-new-3",
      title: "Fundamentos del Mercado Forex",
      description: "Comprende los fundamentos económicos que mueven el mercado de divisas.",
      instructor: "Ing. Carlos Díaz",
      category: "forex",
      level: "beginner",
      duration: "18h 20m",
      enrolled: 198,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout 
      title="Trading de Forex" 
      subtitle="Descubre nuestros cursos especializados en trading de divisas"
    >
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Trading de Forex
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Domina el mercado de divisas más líquido del mundo. Aprende estrategias profesionales de trading forex 
            desde análisis técnico hasta automatización avanzada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
            <CardContent className="relative p-6">
              <TrendingUp className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análisis Técnico Forex</h3>
              <p className="text-muted-foreground mb-4">
                Aprende a leer gráficos, identificar patrones y usar indicadores técnicos para el trading de divisas.
              </p>
              <Button className="w-full">Explorar Cursos</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
            <CardContent className="relative p-6">
              <BarChart3 className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestión de Riesgo</h3>
              <p className="text-muted-foreground mb-4">
                Domina las técnicas de gestión de capital y riesgo específicas para el mercado forex.
              </p>
              <Button className="w-full">Empezar Ahora</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />
            <CardContent className="relative p-6">
              <Clock className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trading Automático</h3>
              <p className="text-muted-foreground mb-4">
                Automatiza tus estrategias forex con Expert Advisors y sistemas de trading automático.
              </p>
              <Button className="w-full">Ver Detalles</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="all">Todos los cursos</TabsTrigger>
            <TabsTrigger value="purchased">Mis cursos</TabsTrigger>
            <TabsTrigger value="available">Disponibles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            {purchasedCourses.length > 0 && (
              <CourseCarousel
                title="Continúa aprendiendo"
                courses={purchasedCourses}
                viewAllLink="/courses?category=forex&purchased=true"
              />
            )}
            
            <CourseCarousel
              title="Top 10 más vendidos"
              courses={topSelling}
              badge={{ text: "MÁS POPULARES", variant: "secondary" }}
              viewAllLink="/courses?category=forex&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=forex&sort=newest"
            />
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Planes de membresía</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Accede a todos nuestros cursos de forex con una membresía
              </p>
              <Button 
                variant="action" 
                size="lg" 
                className="mx-auto"
                onClick={() => window.location.href = "/pricing"}
              >
                Ver planes de membresía
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="purchased">
            {purchasedCourses.length > 0 ? (
              <CourseCarousel
                title="Tus cursos de forex"
                courses={purchasedCourses}
                viewAllLink="/courses?category=forex&purchased=true"
              />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">Aún no tienes cursos de forex</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explora nuestra oferta y comienza a aprender hoy
                </p>
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => window.location.href = "/courses?category=forex"}
                >
                  Explorar cursos
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="available">
            <CourseCarousel
              title="Top 10 más vendidos"
              courses={topSelling}
              badge={{ text: "MÁS POPULARES", variant: "secondary" }}
              viewAllLink="/courses?category=forex&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=forex&sort=newest"
            />
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Opciones de compra</h3>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Compra única</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Adquiere cursos individuales con acceso de por vida
                  </p>
                  <Button variant="outline">Ver cursos</Button>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-lg shadow-sm border border-primary/20">
                  <h4 className="font-semibold text-lg mb-2">Membresía</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Acceso ilimitado a todos nuestros cursos
                  </p>
                  <Button 
                    variant="action"
                    onClick={() => window.location.href = "/pricing"}
                  >
                    Ver planes
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Engineering;
