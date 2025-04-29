
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CourseCard, { CourseCardProps } from "@/components/dashboard/CourseCard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

interface CourseCarouselProps {
  title: string;
  courses: CourseCardProps[];
  viewAllLink?: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({
  title,
  courses,
  viewAllLink,
  badge,
}) => {
  if (courses.length === 0) {
    return null;
  }

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          {badge && (
            <Badge variant={badge.variant || "default"} className="text-xs">
              {badge.text}
            </Badge>
          )}
        </div>
        
        {viewAllLink && (
          <a 
            href={viewAllLink} 
            className="text-sm font-medium text-primary flex items-center hover:underline"
          >
            Ver todos <ChevronRight className="h-4 w-4" />
          </a>
        )}
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {courses.map((course, index) => (
            <CarouselItem key={course.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <CourseCard {...course} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default CourseCarousel;
