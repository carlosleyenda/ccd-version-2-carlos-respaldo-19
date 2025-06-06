import { 
  Clock, 
  FileText, 
  Download, 
  Award, 
  MessageSquare, 
  Users, 
  Calendar, 
  BookOpen, 
  Play, 
  PlayCircle,
  BookmarkCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CourseDetailProps, levelLabel } from "./types";
import { CourseModule } from "./types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface CourseSidebarProps {
  instructor: CourseDetailProps["instructor"];
  duration: string;
  enrolled: number;
  lastUpdated: string;
  language: string;
  level: CourseDetailProps["level"];
  progress?: number;
  isLive?: boolean;
  modules: CourseModule[];
}

export const CourseSidebar = ({
  instructor,
  duration,
  enrolled,
  lastUpdated,
  language,
  level,
  progress = 0,
  isLive = false,
  modules,
}: CourseSidebarProps) => {
  const navigate = useNavigate();
  const totalLessons = modules.reduce(
    (count, module) => count + module.lessons.length,
    0
  );

  const handleContinueLearning = () => {
    toast.success("Continuando con tu aprendizaje");
    // En una aplicación real, esto llevaría a la última lección vista
    navigate("/course/lesson/last-viewed");
  };

  const handleJoinLiveCourse = () => {
    toast.success("Uniéndote al curso en vivo");
    // En una aplicación real, esto abriría la transmisión en vivo
    window.open("/live-classroom", "_blank");
  };

  const handleEnrollCourse = () => {
    // Comprobar si el usuario tiene una suscripción activa
    // En una aplicación real, esto se verificaría con el estado de autenticación
    const hasActiveSubscription = false; // Simulamos que no tiene suscripción
    
    if (hasActiveSubscription) {
      toast.success("¡Inscripción exitosa!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      toast.info("Se requiere suscripción para inscribirse en este curso");
      navigate("/pricing"); // Redirigir a la página de precios
    }
  };

  const handleViewInstructorProfile = () => {
    toast.info(`Viendo perfil de ${instructor.name}`);
    // En una aplicación real, esto navegaría al perfil del instructor
    navigate(`/instructor/${instructor.name.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="border rounded-lg p-6 space-y-6 sticky top-24">
      {progress > 0 ? (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso del curso</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
          <Button 
            variant="view" 
            className="w-full mt-3 group"
            onClick={handleContinueLearning}
          >
            <Play className="h-4 w-4 mr-1 group-hover:animate-pulse" />
            <span>Continuar aprendiendo</span>
          </Button>
        </div>
      ) : isLive ? (
        <Button 
          variant="join" 
          className="w-full group"
          onClick={handleJoinLiveCourse}
        >
          <PlayCircle className="h-4 w-4 mr-1 group-hover:animate-pulse" />
          <span>Unirme al curso en vivo</span>
        </Button>
      ) : (
        <Button 
          variant="enroll" 
          className="w-full group"
          onClick={handleEnrollCourse}
        >
          <BookmarkCheck className="h-4 w-4 mr-1 group-hover:animate-pulse" />
          <span>Inscribirme al curso</span>
        </Button>
      )}
      
      <Separator />
      
      <div className="space-y-4">
        <h4 className="font-medium">Este curso incluye:</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-3 text-gray-500" />
            <span>{duration} de contenido</span>
          </li>
          <li className="flex items-center text-sm">
            <FileText className="h-4 w-4 mr-3 text-gray-500" />
            <span>{totalLessons} lecciones</span>
          </li>
          <li className="flex items-center text-sm">
            <Download 
              className="h-4 w-4 mr-3 text-gray-500 cursor-pointer hover:text-primary" 
              onClick={() => toast.info("Descargando recursos del curso...")}
            />
            <span>Recursos descargables</span>
          </li>
          <li className="flex items-center text-sm">
            <Award className="h-4 w-4 mr-3 text-gray-500" />
            <span>Certificado de finalización</span>
          </li>
          <li className="flex items-center text-sm">
            <MessageSquare 
              className="h-4 w-4 mr-3 text-gray-500 cursor-pointer hover:text-primary" 
              onClick={() => toast.info("Abriendo foro de discusión...")}
            />
            <span>Foro de discusión</span>
          </li>
        </ul>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h4 className="font-medium">Detalles del curso</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>{enrolled} estudiantes</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>Actualizado {lastUpdated}</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-gray-500" />
            <span>{levelLabel[level]}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
            <span>{language}</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-3">
        <h4 className="font-medium">Instructor</h4>
        <div 
          className="flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
          onClick={handleViewInstructorProfile}
        >
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-12 h-12 rounded-full mr-3 object-cover"
          />
          <div>
            <h5 className="font-medium">{instructor.name}</h5>
            <p className="text-sm text-gray-500">{instructor.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
