import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCarousel from "@/components/courses/CourseCarousel";
import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/card-content";
import TrendingUp from "@/components/ui/trending-up";
import DollarSign from "@/components/ui/dollar-sign";

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
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Trading de Criptomonedas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialízate en el trading de criptomonedas y activos digitales. Desde Bitcoin hasta DeFi, 
            domina todos los aspectos del mercado cripto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10" />
            <CardContent className="relative p-6">
              <svg className="h-12 w-12 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Bitcoin & Altcoins</h3>
              <p className="text-muted-foreground mb-4">
                Aprende a tradear Bitcoin, Ethereum y las principales altcoins con estrategias específicas.
              </p>
              <Button className="w-full">Explorar Cursos</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10" />
            <CardContent className="relative p-6">
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análisis On-Chain</h3>
              <p className="text-muted-foreground mb-4">
                Domina el análisis de métricas on-chain para tomar mejores decisiones de trading.
              </p>
              <Button className="w-full">Empezar Ahora</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
            <CardContent className="relative p-6">
              <DollarSign className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DeFi Trading</h3>
              <p className="text-muted-foreground mb-4">
                Explora las oportunidades de trading en protocolos DeFi y yield farming.
              </p>
              <Button className="w-full">Ver Detalles</Button>
            </CardContent>
          </Card>
        </div>

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
      </div>
    </PageLayout>
  );
};

export default Mining;
