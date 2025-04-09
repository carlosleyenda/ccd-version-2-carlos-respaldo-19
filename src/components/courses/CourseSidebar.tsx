
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
  const totalLessons = modules.reduce(
    (count, module) => count + module.lessons.length,
    0
  );

  return (
    <div className="border rounded-lg p-6 space-y-6 sticky top-24">
      {progress > 0 ? (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso del curso</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
          <Button variant="view" className="w-full mt-3 group">
            <Play className="h-4 w-4 mr-1 group-hover:animate-pulse" />
            <span>Continuar aprendiendo</span>
          </Button>
        </div>
      ) : isLive ? (
        <Button variant="join" className="w-full group">
          <PlayCircle className="h-4 w-4 mr-1 group-hover:animate-pulse" />
          <span>Unirme al curso en vivo</span>
        </Button>
      ) : (
        <Button variant="enroll" className="w-full group">
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
            <Download className="h-4 w-4 mr-3 text-gray-500" />
            <span>Recursos descargables</span>
          </li>
          <li className="flex items-center text-sm">
            <Award className="h-4 w-4 mr-3 text-gray-500" />
            <span>Certificado de finalización</span>
          </li>
          <li className="flex items-center text-sm">
            <MessageSquare className="h-4 w-4 mr-3 text-gray-500" />
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
        <div className="flex items-center">
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
