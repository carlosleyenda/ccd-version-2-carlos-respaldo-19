
import React from "react";
import { Bell, Calendar } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { Button } from "@/components/ui/button";
import DashboardCourses from "@/components/dashboard/DashboardCourses";
import DashboardActivities from "@/components/dashboard/DashboardActivities";
import AchievementsList from "@/components/dashboard/AchievementsList";
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
      <DashboardCourses courses={inProgressCourses} />
      <DashboardActivities 
        recommendedCourses={recommendedCourses}
        liveCourses={liveCourses}
        upcomingEvents={upcomingEvents}
      />
      <AchievementsList achievements={achievements} />
    </PageLayout>
  );
};

export default Dashboard;
