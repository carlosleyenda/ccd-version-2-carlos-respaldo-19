
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Course {
  id?: number;
  title?: string;
  category?: string;
  level?: string;
  price?: number;
}

interface CourseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course | null;
  onSave: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  open,
  onOpenChange,
  course,
  onSave
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    onSave(course || {});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{course ? "Editar Curso" : "Nuevo Curso"}</DialogTitle>
          <DialogDescription>
            {course 
              ? "Modifica los detalles del curso existente" 
              : "Completa los detalles para crear un nuevo curso"}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Título</Label>
              <Input 
                id="title" 
                defaultValue={course?.title || ""} 
                placeholder="Ej: Residencia de Obras Públicas"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Categoría</Label>
              <Select defaultValue={course?.category || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ingeniería">Ingeniería</SelectItem>
                  <SelectItem value="Minería">Minería</SelectItem>
                  <SelectItem value="Gestión Pública">Gestión Pública</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="level">Nivel</Label>
              <Select defaultValue={course?.level || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Principiante">Principiante</SelectItem>
                  <SelectItem value="Intermedio">Intermedio</SelectItem>
                  <SelectItem value="Avanzado">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="price">Precio (S/)</Label>
              <Input 
                id="price" 
                type="number" 
                defaultValue={course?.price || ""}
                placeholder="Ej: 299"
                required
              />
            </div>
            
            <div className="col-span-2 grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                placeholder="Descripción detallada del curso" 
                rows={4}
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              {course ? "Guardar Cambios" : "Crear Curso"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
