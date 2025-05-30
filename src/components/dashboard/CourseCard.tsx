
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Clock, Users, Star, PlayCircle, BookmarkPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: "forex" | "crypto" | "stocks" | "management";
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  enrolled: number;
  rating: number;
  image: string;
  progress?: number;
  isLive?: boolean;
  liveDate?: string;
  featured?: boolean;
  showContinueButton?: boolean;
}

const CourseCard = ({
  id,
  title,
  description,
  instructor,
  category,
  level,
  duration,
  enrolled,
  rating,
  image,
  progress = 0,
  isLive = false,
  liveDate,
  featured = false,
  showContinueButton = false,
}: CourseCardProps) => {
  const navigate = useNavigate();
  
  // Fallback image in case the provided image is broken
  const fallbackImage = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80";
  
  // Get appropriate category-related image if needed
  const getCategoryFallbackImage = () => {
    switch (category) {
      case "forex":
        return "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80";
      case "crypto":
        return "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80";
      case "stocks":
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
      case "management":
        return "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80";
      default:
        return fallbackImage;
    }
  };
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = getCategoryFallbackImage();
  };
  
  const categoryLabel = {
    forex: "Forex",
    crypto: "Criptomonedas",
    stocks: "Acciones",
    management: "Gestión",
  };

  const levelLabel = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
  };

  const handleJoinNow = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Uniéndote al curso en vivo: ${title}`);
    navigate(`/course/${id}/live`);
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info(`Vista previa del curso: ${title}`);
    navigate(`/course/${id}/preview`);
  };

  const handleContinueCourse = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Continuando curso: ${title}`);
    navigate(`/course/lesson/${id}`);
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover-card-effect h-full flex flex-col group",
      featured ? "border-primary/30 dark:border-primary/40 shadow-md" : "",
      isLive ? "ring-1 ring-red-500" : ""
    )}>
      <div className="relative overflow-hidden">
        <img
          src={image || getCategoryFallbackImage()}
          alt={title}
          className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-all duration-500"
          onError={handleImageError}
        />
        {isLive && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <span className="animate-pulse relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            EN VIVO
          </div>
        )}
        
        {liveDate && !isLive && (
          <div className="absolute top-3 right-3 bg-gray-800/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
            <Clock className="h-3 w-3 mr-1 inline-block" />
            {liveDate}
          </div>
        )}
        
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className={`badge-category badge-category-${category}`}>
            {categoryLabel[category]}
          </span>
          <span className={`badge-level badge-level-${level}`}>
            {levelLabel[level]}
          </span>
        </div>
        
        {/* Overlay with quick action button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          {isLive ? (
            <Button 
              variant="join" 
              size="sm" 
              className="transform scale-90 group-hover:scale-100 transition-transform"
              onClick={handleJoinNow}
            >
              <PlayCircle className="h-4 w-4 mr-1" />
              Unirme ahora
            </Button>
          ) : (
            <Button 
              variant="view" 
              size="sm" 
              className="transform scale-90 group-hover:scale-100 transition-transform"
              onClick={handlePreview}
            >
              <PlayCircle className="h-4 w-4 mr-1" />
              Vista previa
            </Button>
          )}
        </div>
      </div>
      
      <CardContent className="flex-grow pt-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            {featured && (
              <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-medium px-2 py-0.5 rounded-full">
                Destacado
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
          <p className="text-sm font-medium">Instructor: {instructor}</p>
          
          {progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Progreso</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1" />
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{enrolled}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-amber-400 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <Link
          to={`/course/${id}`}
          className="group"
          onClick={(e) => {
            e.preventDefault();
            if (showContinueButton || progress > 0) {
              handleContinueCourse(e);
            } else {
              // Si no está inscrito, redirigir a la vista previa en lugar del curso completo
              handlePreview(e);
            }
          }}
        >
          <Button 
            variant={isLive ? "join" : (showContinueButton || progress > 0) ? "success" : "view"}
            size="sm" 
            className="flex items-center gap-1 transform group-hover:translate-x-0.5 transition-transform"
          >
            <span>{isLive ? "Unirme" : (showContinueButton || progress > 0) ? "Continuar" : "Ver curso"}</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:animate-pulse" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
