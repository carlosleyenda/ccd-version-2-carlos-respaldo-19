
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Engineering = () => {
  const purchasedCourses: CourseCardProps[] = [
    {
      id: "eng-purchased-1",
      title: "Tecnologías de Procesamiento de Minerales",
      description: "Técnicas y métodos modernos para el tratamiento y procesamiento de minerales.",
      instructor: "Dr. Pedro Valdés",
      category: "engineering",
      level: "advanced",
      duration: "28h 45m",
      enrolled: 765,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&w=800&q=80",
      progress: 18,
    },
    {
      id: "eng-purchased-2",
      title: "Ingeniería de Ventilación en Minería Subterránea",
      description: "Diseño y mantenimiento de sistemas de ventilación para minas subterráneas.",
      instructor: "Dr. Antonio Guzmán",
      category: "engineering",
      level: "intermediate",
      duration: "22h 10m",
      enrolled: 642,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1604334204928-e5a248c41090?auto=format&fit=crop&w=800&q=80",
      progress: 45,
    },
  ];

  const topSelling: CourseCardProps[] = [
    {
      id: "eng-top-1",
      title: "Automatización Industrial para Minería",
      description: "Sistemas de automatización y control para optimizar procesos mineros.",
      instructor: "Ing. Francisco Méndez",
      category: "engineering",
      level: "advanced",
      duration: "32h 15m",
      enrolled: 1289,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "eng-top-2",
      title: "Diseño de Estructuras para Minería",
      description: "Fundamentos de diseño estructural aplicados a instalaciones mineras.",
      instructor: "Dra. Carmen Olivares",
      category: "engineering",
      level: "intermediate",
      duration: "26h 20m",
      enrolled: 876,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "eng-top-3",
      title: "Mecánica de Rocas Avanzada",
      description: "Análisis y modelamiento del comportamiento mecánico de macizos rocosos.",
      instructor: "Dr. Roberto Gutiérrez",
      category: "engineering",
      level: "advanced",
      duration: "30h 45m",
      enrolled: 754,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "eng-top-4",
      title: "Sistemas Hidráulicos en Minería",
      description: "Diseño y mantenimiento de sistemas hidráulicos para operaciones mineras.",
      instructor: "Ing. Mario Sánchez",
      category: "engineering",
      level: "intermediate",
      duration: "24h 30m",
      enrolled: 623,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const newCourses: CourseCardProps[] = [
    {
      id: "eng-new-1",
      title: "Inteligencia Artificial en Procesos Mineros",
      description: "Aplicaciones de IA para optimización y automatización de procesos en minería.",
      instructor: "Dr. Luis Martínez",
      category: "engineering",
      level: "advanced",
      duration: "28h 15m",
      enrolled: 342,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "eng-new-2",
      title: "Diseño CAD para Ingeniería Minera",
      description: "Uso de software CAD especializado para proyectos de ingeniería en minería.",
      instructor: "Ing. Patricia Vega",
      category: "engineering",
      level: "intermediate",
      duration: "22h 30m",
      enrolled: 287,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "eng-new-3",
      title: "Electrónica Industrial para Minería",
      description: "Fundamentos de electrónica aplicada a equipos y sistemas mineros.",
      instructor: "Ing. Carlos Díaz",
      category: "engineering",
      level: "beginner",
      duration: "18h 20m",
      enrolled: 198,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout 
      title="Ingeniería" 
      subtitle="Descubre nuestros cursos especializados en ingeniería para el sector minero"
    >
      <div className="mb-6">
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
                viewAllLink="/courses?category=engineering&purchased=true"
              />
            )}
            
            <CourseCarousel
              title="Top 10 más vendidos"
              courses={topSelling}
              badge={{ text: "MÁS POPULARES", variant: "secondary" }}
              viewAllLink="/courses?category=engineering&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=engineering&sort=newest"
            />
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Planes de membresía</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Accede a todos nuestros cursos de ingeniería con una membresía
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
                title="Tus cursos de ingeniería"
                courses={purchasedCourses}
                viewAllLink="/courses?category=engineering&purchased=true"
              />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">Aún no tienes cursos de ingeniería</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explora nuestra oferta y comienza a aprender hoy
                </p>
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => window.location.href = "/courses?category=engineering"}
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
              viewAllLink="/courses?category=engineering&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=engineering&sort=newest"
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
