
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  students: number;
  rating: number;
  price: number;
}

interface CoursesTableProps {
  courses: Course[];
  onEdit: (course: Course) => void;
  onDelete: (courseId: number) => void;
}

export const CoursesTable: React.FC<CoursesTableProps> = ({
  courses,
  onEdit,
  onDelete
}) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Nivel</TableHead>
            <TableHead>Estudiantes</TableHead>
            <TableHead>Calificación</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.category === 'Ingeniería' ? 'bg-blue-100 text-blue-700' :
                  course.category === 'Minería' ? 'bg-amber-100 text-amber-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {course.category}
                </span>
              </TableCell>
              <TableCell>{course.level}</TableCell>
              <TableCell>{course.students}</TableCell>
              <TableCell>{course.rating}/5</TableCell>
              <TableCell>S/ {course.price}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon" onClick={() => onEdit(course)}>
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-red-500"
                  onClick={() => onDelete(course.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
