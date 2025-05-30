
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import CourseCard, { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, BookOpen, Clock } from "lucide-react";

const Courses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const allCourses: CourseCardProps[] = [
    {
      id: "course-1",
      title: "Fundamentos del Trading en Forex",
      description: "Aprende los conceptos básicos del mercado de divisas, análisis técnico y fundamental para operar con éxito.",
      instructor: "Dr. Carlos Martínez",
      category: "forex",
      level: "intermediate",
      duration: "24h 30m",
      enrolled: 1241,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      progress: 65,
    },
    {
      id: "course-2",
      title: "Gestión de Riesgo en Trading",
      description: "Domina las técnicas de gestión de capital, stop loss, take profit y psicología del trading profesional.",
      instructor: "Lic. Ana Rodríguez",
      category: "management",
      level: "advanced",
      duration: "36h 15m",
      enrolled: 893,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      progress: 32,
    },
    {
      id: "course-3",
      title: "Trading de Criptomonedas Avanzado",
      description: "Estrategias profesionales para operar Bitcoin, Ethereum y altcoins en mercados volátiles.",
      instructor: "Prof. Miguel Valdés",
      category: "crypto",
      level: "advanced",
      duration: "28h 45m",
      enrolled: 765,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      progress: 18,
    },
    {
      id: "course-4",
      title: "Análisis Técnico Profesional",
      description: "Domina los indicadores técnicos, patrones de gráficos y estrategias de entrada y salida.",
      instructor: "Ing. Laura Méndez",
      category: "forex",
      level: "beginner",
      duration: "16h 20m",
      enrolled: 1578,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "course-5",
      title: "Psicología del Trading Exitoso",
      description: "Controla tus emociones, desarrolla disciplina y mantén una mentalidad ganadora en el trading.",
      instructor: "Dr. Antonio Guzmán",
      category: "management",
      level: "intermediate",
      duration: "22h 10m",
      enrolled: 642,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "course-6",
      title: "Trading de Acciones y ETFs",
      description: "Aprende a invertir en bolsa, análisis fundamental y construcción de portafolios diversificados.",
      instructor: "Dra. María Fernández",
      category: "stocks",
      level: "advanced",
      duration: "18h 30m",
      enrolled: 524,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "course-7",
      title: "Day Trading y Scalping",
      description: "Estrategias de trading intradiario para obtener ganancias rápidas en mercados volátiles.",
      instructor: "Dr. Javier López",
      category: "forex",
      level: "intermediate",
      duration: "20h 15m",
      enrolled: 735,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "course-8",
      title: "Trading Algorítmico con Python",
      description: "Desarrolla bots de trading automatizado y estrategias cuantitativas usando Python.",
      instructor: "Ing. Alberto Torres",
      category: "stocks",
      level: "advanced",
      duration: "32h 20m",
      enrolled: 489,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "course-9",
      title: "DeFi y Yield Farming",
      description: "Aprende sobre finanzas descentralizadas, protocolos DeFi y estrategias de yield farming.",
      instructor: "Dra. Elena Martínez",
      category: "crypto",
      level: "intermediate",
      duration: "26h 30m",
      enrolled: 612,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const forexCourses = allCourses.filter(course => course.category === "forex");
  const cryptoCourses = allCourses.filter(course => course.category === "crypto");
  const stocksCourses = allCourses.filter(course => course.category === "stocks");
  const managementCourses = allCourses.filter(course => course.category === "management");
  
  const myCourses = allCourses.filter(course => course.progress && course.progress > 0);

  return (
    <PageLayout title="Cursos de Trading" subtitle="Explora nuestra biblioteca de cursos especializados en trading.">
      <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar cursos..."
            className="pl-8 w-full sm:w-64"
          />
        </div>
        
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-40">
            <div className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filtrar por" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los cursos</SelectItem>
            <SelectItem value="popular">Más populares</SelectItem>
            <SelectItem value="recent">Más recientes</SelectItem>
            <SelectItem value="price-low">Precio: Bajo a Alto</SelectItem>
            <SelectItem value="price-high">Precio: Alto a Bajo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Tabs defaultValue="all" className="w-full mt-6">
        <TabsList className="grid grid-cols-2 sm:grid-cols-6 mb-6">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="my-courses">Mis Cursos</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="stocks">Acciones</TabsTrigger>
          <TabsTrigger value="management">Gestión</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>{allCourses.length} cursos disponibles</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span>Duración total: 225h+</span>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="my-courses">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>{myCourses.length} cursos en progreso</span>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map((course) => (
              <CourseCard key={course.id} {...course} showContinueButton={true} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="forex">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>{forexCourses.length} cursos de forex</span>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forexCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="crypto">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>{cryptoCourses.length} cursos de criptomonedas</span>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="stocks">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>{stocksCourses.length} cursos de acciones</span>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocksCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="management">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span>{managementCourses.length} cursos de gestión</span>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Courses;
