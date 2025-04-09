
import { useState } from "react";
import { BookOpen, Play, FileText, CheckCircle2, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { CourseModule } from "./types";

interface CourseModulesProps {
  modules: CourseModule[];
}

export const CourseModules = ({ modules }: CourseModulesProps) => {
  const [expandedModules, setExpandedModules] = useState<string[]>([modules[0]?.id]);

  const toggleModule = (moduleId: string) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter((id) => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
  };

  const totalLessons = modules.reduce(
    (count, module) => count + module.lessons.length,
    0
  );

  const completedLessons = modules.reduce(
    (count, module) =>
      count +
      module.lessons.filter((lesson) => lesson.completed).length,
    0
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Módulos del curso</h3>
        <div className="text-sm">
          {completedLessons} de {totalLessons} lecciones completadas
        </div>
      </div>
      
      <Progress value={(completedLessons / totalLessons) * 100} className="h-1" />
      
      <div className="space-y-4 mt-4">
        {modules.map((module) => (
          <div key={module.id} className="border rounded-md overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 bg-secondary/50 dark:bg-secondary/30 hover:bg-secondary/70 dark:hover:bg-secondary/50 transition-colors"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <h4 className="font-medium">{module.title}</h4>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">
                  {module.duration}
                </span>
                <svg
                  className={`h-5 w-5 transition-transform ${
                    expandedModules.includes(module.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            
            {expandedModules.includes(module.id) && (
              <div className="p-4">
                <ul className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className={`flex items-center justify-between p-2 rounded-md ${
                        lesson.completed
                          ? "bg-green-50 dark:bg-green-900/10"
                          : lesson.locked
                          ? "bg-gray-50 dark:bg-gray-800/50"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800/30"
                      }`}
                    >
                      <div className="flex items-center">
                        {lesson.type === "video" && <Play className="h-4 w-4 mr-3" />}
                        {lesson.type === "quiz" && <FileText className="h-4 w-4 mr-3" />}
                        {lesson.type === "reading" && <BookOpen className="h-4 w-4 mr-3" />}
                        
                        <span className={lesson.locked ? "text-gray-400" : ""}>
                          {lesson.title}
                        </span>
                        
                        {lesson.type === "quiz" && (
                          <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                            Quiz
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">
                          {lesson.duration}
                        </span>
                        {lesson.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : lesson.locked ? (
                          <Lock className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Play className="h-4 w-4 text-primary" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
