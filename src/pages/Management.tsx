
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Management = () => {
  const purchasedCourses: CourseCardProps[] = [
    {
      id: "mgt-purchased-1",
      title: "Gestión de Proyectos Mineros",
      description: "Metodologías y herramientas para la gestión eficiente de proyectos en la industria minera.",
      instructor: "Ing. Carmen Rodríguez",
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
      title: "Sostenibilidad en la Industria Minera",
      description: "Estrategias y prácticas para una minería sostenible y responsable con el medio ambiente.",
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
      title: "Evaluación Económica de Proyectos Mineros",
      description: "Análisis financiero y económico para la viabilidad de proyectos en el sector minero.",
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
      title: "Liderazgo en Operaciones Mineras",
      description: "Desarrollo de habilidades de liderazgo para la gestión de equipos en minería.",
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
      title: "Gestión de Recursos Humanos en Minería",
      description: "Estrategias y prácticas para la gestión efectiva del talento en empresas mineras.",
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
      title: "Normativa y Legislación Minera",
      description: "Aspectos legales y regulatorios que rigen las operaciones mineras.",
      instructor: "Abg. Ricardo Morales",
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
      title: "Gestión de la Innovación en Minería",
      description: "Estrategias para fomentar y gestionar la innovación en empresas del sector minero.",
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
      title: "Relaciones Comunitarias y Responsabilidad Social",
      description: "Gestión de relaciones con comunidades y programas de responsabilidad social en minería.",
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
      title: "Gestión de Riesgos en Proyectos Mineros",
      description: "Identificación, evaluación y mitigación de riesgos en proyectos del sector minero.",
      instructor: "Ing. Marco Valencia",
      category: "management",
      level: "advanced",
      duration: "28h 45m",
      enrolled: 234,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout 
      title="Gestión Pública" 
      subtitle="Descubre cursos especializados en gestión y administración del sector minero"
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
