
import { useState, useMemo } from "react";

interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  students: number;
  rating: number;
  price: number;
}

export const useCourses = () => {
  const [courses] = useState<Course[]>([
    // Ingeniería
    { id: 1, title: "Residencia y Supervisión de Obras Públicas y Privadas", category: "Ingeniería", level: "Avanzado", students: 245, rating: 4.8, price: 299 },
    { id: 2, title: "BIM Revit Arquitectura", category: "Ingeniería", level: "Intermedio", students: 189, rating: 4.7, price: 199 },
    { id: 3, title: "Topografía y Diseño de Carreteras con Civil 3D", category: "Ingeniería", level: "Avanzado", students: 156, rating: 4.9, price: 349 },
    
    // Minería
    { id: 6, title: "Perforación y Voladura en Minería Subterránea", category: "Minería", level: "Avanzado", students: 98, rating: 4.9, price: 399 },
    { id: 7, title: "SSOMA Aplicado al Sector Minero", category: "Minería", level: "Intermedio", students: 234, rating: 4.7, price: 199 },
    
    // Gestión Pública
    { id: 11, title: "Contrataciones del Estado Ley N° 32069", category: "Gestión Pública", level: "Avanzado", students: 312, rating: 4.8, price: 249 },
    { id: 12, title: "Sistema Invierte.PE", category: "Gestión Pública", level: "Intermedio", students: 278, rating: 4.7, price: 199 },
  ]);

  const [filterCategory, setFilterCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    return courses.filter(course => 
      filterCategory === "all" || course.category === filterCategory
    );
  }, [courses, filterCategory]);

  return {
    courses,
    filteredCourses,
    filterCategory,
    setFilterCategory,
  };
};
