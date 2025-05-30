
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Mining = () => {
  const purchasedCourses: CourseCardProps[] = [
    {
      id: "crypto-purchased-1",
      title: "Trading Avanzado de Bitcoin",
      description: "Estrategias profesionales para operar Bitcoin en diferentes condiciones de mercado.",
      instructor: "Dr. Pedro Valdés",
      category: "crypto",
      level: "advanced",
      duration: "28h 45m",
      enrolled: 765,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      progress: 18,
    },
    {
      id: "crypto-purchased-2",
      title: "DeFi y Yield Farming",
      description: "Aprende sobre finanzas descentralizadas y estrategias de yield farming.",
      instructor: "Dr. Antonio Guzmán",
      category: "crypto",
      level: "intermediate",
      duration: "22h 10m",
      enrolled: 642,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      progress: 45,
    },
  ];

  const topSelling: CourseCardProps[] = [
    {
      id: "crypto-top-1",
      title: "Máster en Trading de Criptomonedas",
      description: "Curso completo para dominar el trading en el ecosistema de criptomonedas.",
      instructor: "Ing. Francisco Méndez",
      category: "crypto",
      level: "advanced",
      duration: "32h 15m",
      enrolled: 1289,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "crypto-top-2",
      title: "Análisis On-Chain para Traders",
      description: "Aprende a usar métricas on-chain para tomar decisiones de trading.",
      instructor: "Dra. Carmen Olivares",
      category: "crypto",
      level: "intermediate",
      duration: "26h 20m",
      enrolled: 876,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "crypto-top-3",
      title: "Trading de Altcoins Profesional",
      description: "Estrategias especializadas para el trading de altcoins y tokens emergentes.",
      instructor: "Dr. Roberto Gutiérrez",
      category: "crypto",
      level: "advanced",
      duration: "30h 45m",
      enrolled: 754,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "crypto-top-4",
      title: "NFTs y Trading de Coleccionables",
      description: "Aprende sobre el mercado de NFTs y estrategias de trading.",
      instructor: "Ing. Mario Sánchez",
      category: "crypto",
      level: "intermediate",
      duration: "24h 30m",
      enrolled: 623,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const newCourses: CourseCardProps[] = [
    {
      id: "crypto-new-1",
      title: "Web3 y Trading Descentralizado",
      description: "Explora las oportunidades de trading en el ecosistema Web3 y DeFi.",
      instructor: "Dr. Luis Martínez",
      category: "crypto",
      level: "advanced",
      duration: "28h 15m",
      enrolled: 342,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "crypto-new-2",
      title: "Staking y Lending en Crypto",
      description: "Estrategias de inversión pasiva en el ecosistema de criptomonedas.",
      instructor: "Ing. Patricia Vega",
      category: "crypto",
      level: "intermediate",
      duration: "22h 30m",
      enrolled: 287,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "crypto-new-3",
      title: "Fundamentos de Blockchain",
      description: "Comprende la tecnología blockchain aplicada al trading de criptomonedas.",
      instructor: "Ing. Carlos Díaz",
      category: "crypto",
      level: "beginner",
      duration: "18h 20m",
      enrolled: 198,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageLayout 
      title="Trading de Criptomonedas" 
      subtitle="Descubre nuestros cursos especializados en trading de criptomonedas y DeFi"
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
