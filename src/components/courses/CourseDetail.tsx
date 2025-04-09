
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseHeader } from "./CourseHeader";
import { CourseModules } from "./CourseModules";
import { CourseDescription } from "./CourseDescription";
import { CourseReviews } from "./CourseReviews";
import { CourseSidebar } from "./CourseSidebar";
import { CourseDetailProps } from "./types";

const CourseDetail = ({
  id,
  title,
  description,
  longDescription,
  instructor,
  category,
  level,
  duration,
  enrolled,
  rating,
  reviews,
  image,
  progress = 0,
  lastUpdated,
  language,
  modules,
  isLive = false,
  liveDate,
}: CourseDetailProps) => {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="container max-w-6xl py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CourseHeader
            title={title}
            description={description}
            image={image}
            category={category}
            level={level}
            isLive={isLive}
            liveDate={liveDate}
          />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="content">Contenido del Curso</TabsTrigger>
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-4">
              <CourseModules modules={modules} />
            </TabsContent>
            
            <TabsContent value="description">
              <CourseDescription longDescription={longDescription} />
            </TabsContent>
            
            <TabsContent value="reviews">
              <CourseReviews rating={rating} reviews={reviews} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <CourseSidebar
            instructor={instructor}
            duration={duration}
            enrolled={enrolled}
            lastUpdated={lastUpdated}
            language={language}
            level={level}
            progress={progress}
            isLive={isLive}
            modules={modules}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
