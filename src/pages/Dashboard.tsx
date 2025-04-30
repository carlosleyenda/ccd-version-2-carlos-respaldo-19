
import React from "react";
import { Bell, Calendar } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { Button } from "@/components/ui/button";
import DashboardCourses from "@/components/dashboard/DashboardCourses";
import DashboardActivities from "@/components/dashboard/DashboardActivities";
import AchievementsList from "@/components/dashboard/AchievementsList";
import UserRanking from "@/components/dashboard/UserRanking";
import { 
  inProgressCourses, 
  recommendedCourses, 
  liveCourses,
  upcomingEvents,
  achievements 
} from "@/components/dashboard/dashboardData";

const Dashboard = () => {
  // Ensure all courses have valid images
  const validateCoursesImages = (courses) => {
    return courses.map(course => ({
      ...course,
      image: course.image || "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
    }));
  };
  
  const validatedInProgressCourses = validateCoursesImages(inProgressCourses);
  const validatedRecommendedCourses = validateCoursesImages(recommendedCourses);
  const validatedLiveCourses = validateCoursesImages(liveCourses);

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
      <DashboardCourses courses={validatedInProgressCourses} />
      <UserRanking />
      <DashboardActivities 
        recommendedCourses={validatedRecommendedCourses}
        liveCourses={validatedLiveCourses}
        upcomingEvents={upcomingEvents}
      />
      <AchievementsList achievements={achievements} />
    </PageLayout>
  );
};

export default Dashboard;
