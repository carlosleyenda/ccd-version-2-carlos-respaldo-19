
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import CourseCard from "@/components/dashboard/CourseCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar } from "lucide-react";

// Import our refactored components
import EventsList from "@/components/dashboard/EventsList";
import AchievementsList from "@/components/dashboard/AchievementsList";

// Import data from our data file
import { 
  inProgressCourses, 
  recommendedCourses, 
  liveCourses,
  upcomingEvents,
  achievements 
} from "@/components/dashboard/dashboardData";

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard" subtitle="Bienvenido de nuevo, Carlos. Continúa con tu aprendizaje.">
      <div className="mt-4 md:mt-0 flex space-x-2 mb-6">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Bell className="h-4 w-4" />
          <span>Notificaciones</span>
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Calendario</span>
        </Button>
      </div>
            
      <DashboardStats />
      
      <div className="mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-bold">Tus cursos en progreso</h2>
          <Link to="/courses" className="text-primary hover:underline mt-2 md:mt-0">
            Ver todos los cursos
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgressCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Actividades recientes</h2>
        
        <Tabs defaultValue="recommended" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="recommended">Recomendados</TabsTrigger>
            <TabsTrigger value="live">Cursos en Vivo</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="live">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <EventsList events={upcomingEvents} />
          </TabsContent>
        </Tabs>
      </div>
      
      <AchievementsList achievements={achievements} />
    </PageLayout>
  );
};

export default Dashboard;
