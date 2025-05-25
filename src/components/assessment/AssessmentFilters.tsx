import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AssessmentCategory, AssessmentLevel } from "./types";

interface AssessmentFiltersProps {
  selectedCategory: AssessmentCategory | "all";
  setSelectedCategory: (category: AssessmentCategory | "all") => void;
  selectedLevel: AssessmentLevel | "all";
  setSelectedLevel: (level: AssessmentLevel | "all") => void;
  showCompleted: boolean;
  setShowCompleted: (value: boolean) => void;
}

const AssessmentFilters: React.FC<AssessmentFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  showCompleted,
  setShowCompleted
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Filtros</h3>
      
      <div className="space-y-2">
        <Label htmlFor="category">Categoría</Label>
        <Select 
          value={selectedCategory} 
          onValueChange={(value: AssessmentCategory | "all") => setSelectedCategory(value)}
        >
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="Todas las categorías" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="forex">Forex</SelectItem>
            <SelectItem value="crypto">Criptomonedas</SelectItem>
            <SelectItem value="stocks">Acciones</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="level">Nivel</Label>
        <Select 
          value={selectedLevel} 
          onValueChange={(value: AssessmentLevel | "all") => setSelectedLevel(value)}
        >
          <SelectTrigger id="level" className="w-full">
            <SelectValue placeholder="Todos los niveles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los niveles</SelectItem>
            <SelectItem value="Principiante">Principiante</SelectItem>
            <SelectItem value="Intermedio">Intermedio</SelectItem>
            <SelectItem value="Avanzado">Avanzado</SelectItem>
            <SelectItem value="Profesional">Profesional</SelectItem>
            <SelectItem value="Especialista">Especialista</SelectItem>
            <SelectItem value="Experto">Experto</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center justify-between space-x-2 pt-2">
        <Label htmlFor="show-completed" className="cursor-pointer">
          Mostrar completadas
        </Label>
        <Switch
          id="show-completed"
          checked={showCompleted}
          onCheckedChange={setShowCompleted}
        />
      </div>
    </div>
  );
};

export default AssessmentFilters;
