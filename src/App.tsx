
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
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
import Engineering from "./pages/Engineering";
import Mining from "./pages/Mining";
import Management from "./pages/Management";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      
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
      
      const shouldRedirect = tempRoutes.some(route => path.startsWith(route));
      
      if (shouldRedirect && path !== "/dashboard" && path !== "/courses" && path !== "/live-courses") {
        console.log(`Ruta ${path} aún no implementada. Redireccionando a dashboard.`);
        window.history.pushState({}, "", "/dashboard");
      }
    };
    
    handleNavigation();
    
    window.addEventListener("popstate", handleNavigation);
    
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider>
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
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/mining" element={<Mining />} />
              <Route path="/management" element={<Management />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
