
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AdminCoursesHeaderProps {
  onCreateCourse: () => void;
}

export const AdminCoursesHeader: React.FC<AdminCoursesHeaderProps> = ({ 
  onCreateCourse 
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Gestión de Cursos</h2>
      <Button onClick={onCreateCourse}>
        <Plus className="h-4 w-4 mr-2" />
        Nuevo Curso
      </Button>
    </div>
  );
};
