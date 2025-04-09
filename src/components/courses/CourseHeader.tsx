
import { Calendar } from "lucide-react";
import { CourseDetailProps, categoryLabel, levelLabel } from "./types";

interface CourseHeaderProps {
  title: string;
  description: string;
  image: string;
  category: CourseDetailProps["category"];
  level: CourseDetailProps["level"];
  isLive?: boolean;
  liveDate?: string;
}

export const CourseHeader = ({
  title,
  description,
  image,
  category,
  level,
  isLive,
  liveDate,
}: CourseHeaderProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover object-center"
      />
      {isLive && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center">
          <span className="animate-pulse relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          EN VIVO
        </div>
      )}
      
      {liveDate && !isLive && (
        <div className="absolute top-4 right-4 bg-gray-800/70 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <span>{liveDate}</span>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className={`badge-category badge-category-${category}`}>
            {categoryLabel[category]}
          </span>
          <span className={`badge-level badge-level-${level}`}>
            {levelLabel[level]}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">{title}</h1>
        <p className="text-white/80 mt-2">{description}</p>
      </div>
    </div>
  );
};
