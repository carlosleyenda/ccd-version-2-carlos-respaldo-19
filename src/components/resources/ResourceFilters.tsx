
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, BookOpen, FileSpreadsheet, Monitor, FileText as FileArticle, RefreshCcw } from "lucide-react";
import { ResourceType, ResourceCategory } from "./types";

interface ResourceFiltersProps {
  selectedTypes: ResourceType[];
  selectedCategories: ResourceCategory[];
  onTypeChange: (type: ResourceType) => void;
  onCategoryChange: (category: ResourceCategory) => void;
  onReset: () => void;
}

const ResourceFilters: React.FC<ResourceFiltersProps> = ({
  selectedTypes,
  selectedCategories,
  onTypeChange,
  onCategoryChange,
  onReset
}) => {
  const resourceTypes: {type: ResourceType, label: string, icon: React.ReactNode}[] = [
    { type: 'document', label: 'Documentos', icon: <FileText size={16} /> },
    { type: 'video', label: 'Videos', icon: <Video size={16} /> },
    { type: 'tutorial', label: 'Tutoriales', icon: <BookOpen size={16} /> },
    { type: 'template', label: 'Plantillas', icon: <FileSpreadsheet size={16} /> },
    { type: 'software', label: 'Software', icon: <Monitor size={16} /> },
    { type: 'article', label: 'Artículos', icon: <FileArticle size={16} /> },
  ];
  
  const resourceCategories: {category: ResourceCategory, label: string, color: string}[] = [
    { category: 'engineering', label: 'Ingeniería', color: 'engineering' },
    { category: 'mining', label: 'Minería', color: 'mining' },
    { category: 'management', label: 'Gestión', color: 'management' },
    { category: 'safety', label: 'Seguridad', color: 'amber' },
    { category: 'environment', label: 'Medio Ambiente', color: 'green' },
    { category: 'general', label: 'General', color: 'blue' },
  ];
  
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="font-medium mb-3">Tipo de recurso</h3>
            <div className="flex flex-wrap gap-2">
              {resourceTypes.map(({ type, label, icon }) => (
                <Badge
                  key={type}
                  variant={selectedTypes.includes(type) ? "default" : "outline"}
                  className="cursor-pointer px-3 py-1"
                  onClick={() => onTypeChange(type)}
                >
                  {icon}
                  <span className="ml-1">{label}</span>
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Categoría</h3>
            <div className="flex flex-wrap gap-2">
              {resourceCategories.map(({ category, label, color }) => (
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1 ${
                    selectedCategories.includes(category) ? 
                    `bg-${color}-600 hover:bg-${color}-700` : 
                    `hover:bg-${color}-100 hover:text-${color}-800`
                  }`}
                  onClick={() => onCategoryChange(category)}
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>
          
          {(selectedTypes.length > 0 || selectedCategories.length > 0) && (
            <div className="flex justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onReset}
                className="flex items-center"
              >
                <RefreshCcw size={14} className="mr-1" />
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceFilters;
