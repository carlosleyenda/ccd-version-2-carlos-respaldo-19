
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Mining = () => {
  const purchasedCourses: CourseCardProps[] = [
    {
      id: "min-purchased-1",
      title: "Fundamentos de Geomecánica Aplicada a la Minería",
      description: "Estudio de las propiedades mecánicas de rocas y suelos para el diseño y análisis de estructuras en minería.",
      instructor: "Dr. Roberto Sánchez",
      category: "mining",
      level: "intermediate",
      duration: "24h 30m",
      enrolled: 1241,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1626438366685-c6dbad875f0b?auto=format&fit=crop&w=800&q=80",
      progress: 65,
    },
    {
      id: "min-purchased-2",
      title: "Seguridad y Prevención de Riesgos en Minería",
      description: "Protocolos y procedimientos para garantizar la seguridad en operaciones mineras.",
      instructor: "Ing. Laura Méndez",
      category: "mining",
      level: "beginner",
      duration: "16h 20m",
      enrolled: 1578,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
      progress: 28,
    },
  ];

  const topSelling: CourseCardProps[] = [
    {
      id: "min-top-1",
      title: "Perforación y Voladura Avanzada",
      description: "Técnicas modernas y optimizadas de perforación y voladura para minería.",
      instructor: "Ing. Héctor Ramírez",
      category: "mining",
      level: "advanced",
      duration: "30h 45m",
      enrolled: 1423,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "min-top-2",
      title: "Planificación de Minas a Cielo Abierto",
      description: "Metodologías para la planificación y diseño de minas a cielo abierto.",
      instructor: "Dr. Alejandro Torres",
      category: "mining",
      level: "intermediate",
      duration: "28h 15m",
      enrolled: 986,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "min-top-3",
      title: "Hidrometalurgia y Procesamiento de Minerales",
      description: "Fundamentos y aplicaciones de procesos hidrometalúrgicos para la extracción de metales.",
      instructor: "Dra. Elena Martínez",
      category: "mining",
      level: "intermediate",
      duration: "26h 30m",
      enrolled: 612,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1578079999898-221a4df608f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "min-top-4",
      title: "Minería Subterránea: Métodos y Aplicaciones",
      description: "Técnicas y metodologías para operaciones mineras subterráneas.",
      instructor: "Ing. Juan Mendoza",
      category: "mining",
      level: "advanced",
      duration: "32h 20m",
      enrolled: 845,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const newCourses: CourseCardProps[] = [
    {
      id: "min-new-1",
      title: "Minería Digital: Transformación e Innovación",
      description: "Implementación de tecnologías digitales para transformar operaciones mineras.",
      instructor: "Ing. Carolina Vásquez",
      category: "mining",
      level: "intermediate",
      duration: "24h 30m",
      enrolled: 387,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "min-new-2",
      title: "Gestión del Agua en Operaciones Mineras",
      description: "Estrategias para el manejo eficiente y responsable del agua en minería.",
      instructor: "Dr. Felipe Morales",
      category: "mining",
      level: "intermediate",
      duration: "20h 15m",
      enrolled: 254,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "min-new-3",
      title: "Drones en Exploración y Monitoreo Minero",
      description: "Uso de tecnología de drones para mapeo, exploración y monitoreo en minería.",
      instructor: "Ing. Gabriela Ruiz",
      category: "mining",
      level: "beginner",
      duration: "16h 45m",
      enrolled: 219,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1626438366685-c6dbad875f0b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout 
      title="Minería" 
      subtitle="Explora nuestros cursos especializados en operaciones y tecnologías mineras"
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
                viewAllLink="/courses?category=mining&purchased=true"
              />
            )}
            
            <CourseCarousel
              title="Top 10 más vendidos"
              courses={topSelling}
              badge={{ text: "MÁS POPULARES", variant: "secondary" }}
              viewAllLink="/courses?category=mining&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=mining&sort=newest"
            />
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Planes de membresía</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Accede a todos nuestros cursos de minería con una membresía
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
                title="Tus cursos de minería"
                courses={purchasedCourses}
                viewAllLink="/courses?category=mining&purchased=true"
              />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">Aún no tienes cursos de minería</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explora nuestra oferta y comienza a aprender hoy
                </p>
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => window.location.href = "/courses?category=mining"}
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
              viewAllLink="/courses?category=mining&sort=popular"
            />
            
            <CourseCarousel
              title="Nuevos cursos"
              courses={newCourses}
              badge={{ text: "NUEVO", variant: "destructive" }}
              viewAllLink="/courses?category=mining&sort=newest"
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

export default Mining;
