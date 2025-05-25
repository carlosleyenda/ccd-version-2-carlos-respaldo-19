
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TrendingUp, DollarSign, BarChart3, Shield, CheckCircle2, ArrowRight, Clock, Users, Star, PlayCircle, Gift } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExploreCoursesClick = () => {
    navigate("/courses");
    toast.success("Explorando cursos de trading disponibles");
  };

  const handlePlansClick = () => {
    toast.info("Próximamente: Detalles de planes de membresía");
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/${category}`);
    const categoryNames = {
      'forex': 'Forex',
      'crypto': 'Criptomonedas', 
      'stocks': 'Acciones'
    };
    toast.success(`Explorando cursos de ${categoryNames[category as keyof typeof categoryNames]}`);
  };

  const handleViewAllCoursesClick = () => {
    navigate("/courses");
    toast.success("Mostrando todos los cursos de trading disponibles");
  };

  const handleAccessAccountClick = () => {
    navigate("/dashboard");
    toast.success("Accediendo a tu cuenta de trading");
  };

  const handleStartFreeClick = () => {
    navigate("/courses");
    toast.success("Comenzando tu journey de trading");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 OFERTA LIMITADA
              </div>
              <div className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-sm font-bold">
                70% OFF - Solo quedan 48 horas
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trading Academy Pro
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-emerald-200 font-semibold">
              Aprende Trading Profesional y Genera $1000+ Mensuales en 6 Meses
            </p>
            <p className="text-lg mb-8 text-white/90">
              Accede a estrategias probadas de trading que han ayudado a más de 10,000 estudiantes 
              a generar ingresos consistentes desde casa. Método respaldado por traders profesionales.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-4"
                onClick={handleStartFreeClick}
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Comenzar GRATIS Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-4"
                onClick={handlePlansClick}
              >
                Ver Planes Premium
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span>Certificación incluida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span>Mentorías 1:1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resultados Reales de Nuestros Estudiantes</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Más de 10,000 traders exitosos han transformado sus vidas financieras con nuestro método.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Carlos M."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">Carlos M.</CardTitle>
                    <p className="text-sm text-gray-500">Ingeniero → Trader Full-time</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "En 4 meses pasé de no saber nada a generar $2,500 mensuales. 
                  El método es claro y los mentores son increíbles."
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                  <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                    Ganancia mensual: $2,500
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b9997fb0?auto=format&fit=crop&w=150&q=80"
                    alt="Ana R."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">Ana R.</CardTitle>
                    <p className="text-sm text-gray-500">Mamá → Trader Profesional</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Ahora puedo trabajar desde casa mientras cuido a mis hijos. 
                  Gano más que en mi trabajo anterior."
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                  <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                    Ganancia mensual: $1,800
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                    alt="Miguel S."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">Miguel S.</CardTitle>
                    <p className="text-sm text-gray-500">Estudiante → Trader Exitoso</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Siendo estudiante logré generar mis primeros ingresos con trading. 
                  Los cursos son súper completos."
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                  <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                    Ganancia mensual: $900
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué Trading Academy Pro?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              La academia de trading más completa con método probado y resultados verificables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl">Método Probado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Estrategias respaldadas por 5+ años de resultados consistentes en mercados reales.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Trading en Vivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Aprende viendo a traders profesionales en sesiones de trading en tiempo real.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-xl">Simulador Incluido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Practica sin riesgo con nuestro simulador avanzado antes de usar dinero real.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Garantía Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  30 días de garantía o devolvemos tu dinero. Sin preguntas, sin complicaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Trading Categories Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestras Especialidades en Trading</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explora nuestras áreas de trading y encuentra el programa que transforme tu futuro financiero.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-card-effect border-0 shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
                  alt="Forex Trading"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-700 dark:text-emerald-400">Forex Trading</CardTitle>
                <CardDescription>
                  Domina el mercado de divisas más grande del mundo
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Pares de divisas principales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Análisis fundamental y técnico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Gestión avanzada de riesgo</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button 
                  variant="ghost" 
                  className="w-full text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 justify-between"
                  onClick={() => handleCategoryClick("forex")}
                >
                  <span>Ver cursos</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden hover-card-effect border-0 shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=800&q=80"
                  alt="Criptomonedas"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">Criptomonedas</CardTitle>
                <CardDescription>
                  Aprovecha la volatilidad del mercado cripto
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Bitcoin, Ethereum y Altcoins</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">DeFi y Trading Spot</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Futuros y Derivados Cripto</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button 
                  variant="ghost" 
                  className="w-full text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 justify-between"
                  onClick={() => handleCategoryClick("crypto")}
                >
                  <span>Ver cursos</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden hover-card-effect border-0 shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
                  alt="Acciones y Bolsa"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-400">Acciones y Bolsa</CardTitle>
                <CardDescription>
                  Invierte en las empresas más exitosas del mundo
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Análisis de empresas (S&P 500)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Day Trading y Swing Trading</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Opciones y Estrategias Avanzadas</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button 
                  variant="ghost" 
                  className="w-full text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 justify-between"
                  onClick={() => handleCategoryClick("stocks")}
                >
                  <span>Ver cursos</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Urgency Section */}
      <div className="py-16 bg-red-50 dark:bg-red-900/20 border-y-2 border-red-200 dark:border-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-red-600" />
              <h2 className="text-3xl font-bold text-red-600">¡OFERTA POR TIEMPO LIMITADO!</h2>
            </div>
            <p className="text-xl mb-6">
              Solo quedan <span className="font-bold text-red-600">23 cupos</span> disponibles 
              para el programa premium con mentorías 1:1
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600">01</div>
                <div className="text-sm text-gray-500">Días</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600">15</div>
                <div className="text-sm text-gray-500">Horas</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600">23</div>
                <div className="text-sm text-gray-500">Minutos</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600">47</div>
                <div className="text-sm text-gray-500">Segundos</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="h-5 w-5 text-amber-600" />
              <span className="text-lg font-semibold">
                BONUS: Simulador Pro + Señales VIP (Valor $500) ¡GRATIS!
              </span>
            </div>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6"
              onClick={handleStartFreeClick}
            >
              Asegurar Mi Cupo Ahora
            </Button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Comienza Tu Transformación Financiera Hoy</h2>
            <p className="text-lg mb-8 text-white/80">
              Únete a más de 10,000 traders exitosos que han transformado sus vidas con nuestro método probado.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-emerald-800 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={handleViewAllCoursesClick}
              >
                Ver Todos los Cursos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                onClick={handleAccessAccountClick}
              >
                Acceder a Mi Cuenta
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-300" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-300" />
                <span>+10,000 estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-emerald-300 fill-emerald-300" />
                <span>4.9/5 estrellas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
