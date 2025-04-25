
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import EventsList from "./EventsList";
import { CourseCardProps } from "./CourseCard";
import { Event } from "./EventsList";

interface DashboardActivitiesProps {
  recommendedCourses: CourseCardProps[];
  liveCourses: CourseCardProps[];
  upcomingEvents: Event[];
}

const DashboardActivities: React.FC<DashboardActivitiesProps> = ({
  recommendedCourses,
  liveCourses,
  upcomingEvents,
}) => {
  return (
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
  );
};

export default DashboardActivities;
