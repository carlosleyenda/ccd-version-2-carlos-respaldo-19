
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Target } from "lucide-react";

const Management = () => {
  const purchasedCourses: CourseCardProps[] = [
    {
      id: "mgt-purchased-1",
      title: "Psicología del Trading Avanzada",
      description: "Metodologías y técnicas para dominar la psicología del trading profesional.",
      instructor: "Dra. Carmen Rodríguez",
      category: "management",
      level: "advanced",
      duration: "36h 15m",
      enrolled: 893,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1638536531518-b0b8fff29c2b?auto=format&fit=crop&w=800&q=80",
      progress: 32,
    },
    {
      id: "mgt-purchased-2",
      title: "Gestión de Capital en Trading",
      description: "Estrategias y prácticas para una gestión eficiente del capital de trading.",
      instructor: "Dr. Javier López",
      category: "management",
      level: "intermediate",
      duration: "20h 15m",
      enrolled: 735,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      progress: 52,
    },
  ];

  const topSelling: CourseCardProps[] = [
    {
      id: "mgt-top-1",
      title: "Plan de Trading Profesional",
      description: "Crea y ejecuta un plan de trading sistemático y disciplinado.",
      instructor: "Dra. María Fernández",
      category: "management",
      level: "advanced",
      duration: "18h 30m",
      enrolled: 967,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "mgt-top-2",
      title: "Control Emocional en Trading",
      description: "Desarrolla habilidades para controlar las emociones durante el trading.",
      instructor: "Dr. Alberto Sánchez",
      category: "management",
      level: "intermediate",
      duration: "22h 30m",
      enrolled: 825,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mgt-top-3",
      title: "Gestión de Riesgo Avanzada",
      description: "Técnicas profesionales para la gestión del riesgo en operaciones de trading.",
      instructor: "Dra. Claudia Vega",
      category: "management",
      level: "intermediate",
      duration: "24h 15m",
      enrolled: 678,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mgt-top-4",
      title: "Diario y Análisis de Trading",
      description: "Aprende a llevar un diario de trading efectivo y analizar tus operaciones.",
      instructor: "Lic. Ricardo Morales",
      category: "management",
      level: "intermediate",
      duration: "20h 45m",
      enrolled: 592,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const newCourses: CourseCardProps[] = [
    {
      id: "mgt-new-1",
      title: "Mentalidad del Trader Exitoso",
      description: "Desarrolla la mentalidad y disciplina necesaria para ser un trader exitoso.",
      instructor: "Dr. Francisco Torres",
      category: "management",
      level: "advanced",
      duration: "26h 15m",
      enrolled: 312,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "mgt-new-2",
      title: "Objetivos y Metas en Trading",
      description: "Establece objetivos realistas y crea un plan para alcanzar tus metas de trading.",
      instructor: "Dra. Ana María Rodríguez",
      category: "management",
      level: "intermediate",
      duration: "22h 30m",
      enrolled: 278,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mgt-new-3",
      title: "Stress Management para Traders",
      description: "Técnicas para manejar el estrés y mantener la calma durante el trading.",
      instructor: "Lic. Marco Valencia",
      category: "management",
      level: "beginner",
      duration: "18h 45m",
      enrolled: 234,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout 
      title="Gestión y Psicología del Trading" 
      subtitle="Descubre cursos especializados en psicología y gestión del trading"
    >
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Gestión y Psicología del Trading
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrolla la mentalidad ganadora y las habilidades de gestión necesarias para ser un trader exitoso. 
            Domina la psicología del trading y la gestión de riesgo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />
            <CardContent className="relative p-6">
              <Brain className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Psicología del Trading</h3>
              <p className="text-muted-foreground mb-4">
                Controla tus emociones y desarrolla la mentalidad disciplinada del trader profesional.
              </p>
              <Button className="w-full">Explorar Cursos</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10" />
            <CardContent className="relative p-6">
              <Shield className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestión de Riesgo</h3>
              <p className="text-muted-foreground mb-4">
                Aprende técnicas avanzadas de gestión de capital y protección de tu cuenta de trading.
              </p>
              <Button className="w-full">Empezar Ahora</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <CardContent className="relative p-6">
              <Target className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plan de Trading</h3>
              <p className="text-muted-foreground mb-4">
                Desarrolla un plan de trading profesional y sistemático para alcanzar tus objetivos.
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
                viewAllLink="/courses?category=management&purchased=true"
              />
            )}
            
            <CourseCarousel
              title="Top 10 más vendidos"
              courses={topSelling}
              badge={{ text: "MÁS POPULARES", variant: "secondary" }}
              viewAllLink="/courses?category=management&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=management&sort=newest"
            />
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Planes de membresía</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Accede a todos nuestros cursos de gestión con una membresía
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
                title="Tus cursos de gestión"
                courses={purchasedCourses}
                viewAllLink="/courses?category=management&purchased=true"
              />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">Aún no tienes cursos de gestión</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explora nuestra oferta y comienza a aprender hoy
                </p>
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => window.location.href = "/courses?category=management"}
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
              viewAllLink="/courses?category=management&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=management&sort=newest"
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

export default Management;
