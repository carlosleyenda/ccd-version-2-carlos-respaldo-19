
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import LiveCourses from "./pages/LiveCourses";
import NotFound from "./pages/NotFound";
import CourseView from "./pages/CourseView";
import CourseLive from "./pages/CourseLive";
import CoursePreview from "./pages/CoursePreview";
import CourseLesson from "./pages/CourseLesson";
import InstructorProfile from "./pages/InstructorProfile";
import Certifications from "./pages/Certifications";
import Schedule from "./pages/Schedule";
import Forums from "./pages/Forums";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Agregar rutas temporales para desarrollo
  useEffect(() => {
    // Este código es solo para desarrollo y simulará redirecciones en rutas que aún no existen
    const handleNavigation = () => {
      const path = window.location.pathname;
      
      // Lista de rutas que aún no están implementadas pero a las que se puede intentar navegar
      const tempRoutes = [
        "/engineering",
        "/mining",
        "/management",
        "/profile",
        "/settings",
        "/course/",
        "/instructor/",
        "/live-classroom",
      ];
      
      // Si la ruta actual comienza con alguna de las rutas temporales, redireccionar a dashboard
      const shouldRedirect = tempRoutes.some(route => path.startsWith(route));
      
      if (shouldRedirect && path !== "/dashboard" && path !== "/courses" && path !== "/live-courses") {
        console.log(`Ruta ${path} aún no implementada. Redireccionando a dashboard.`);
        window.history.pushState({}, "", "/dashboard");
      }
    };
    
    // Verificar al cargar la página
    handleNavigation();
    
    // Escuchar cambios de URL
    window.addEventListener("popstate", handleNavigation);
    
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/live-courses" element={<LiveCourses />} />
            <Route path="/course/:id" element={<CourseView />} />
            <Route path="/course/:id/live" element={<CourseLive />} />
            <Route path="/course/:id/preview" element={<CoursePreview />} />
            <Route path="/course/lesson/:id" element={<CourseLesson />} />
            <Route path="/instructor/:name" element={<InstructorProfile />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
