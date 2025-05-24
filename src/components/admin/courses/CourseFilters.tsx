
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseFiltersProps {
  filterCategory: string;
  onFilterChange: (category: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  filterCategory,
  onFilterChange
}) => {
  return (
    <div className="flex gap-4">
      <Select value={filterCategory} onValueChange={onFilterChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Filtrar por categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas las categorías</SelectItem>
          <SelectItem value="Ingeniería">Ingeniería</SelectItem>
          <SelectItem value="Minería">Minería</SelectItem>
          <SelectItem value="Gestión Pública">Gestión Pública</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
