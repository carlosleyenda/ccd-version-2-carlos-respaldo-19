
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import ResourceFilters from "@/components/resources/ResourceFilters";
import ResourceGrid from "@/components/resources/ResourceGrid";
import { allResources } from "@/components/resources/resourcesData";
import { ResourceType, ResourceCategory } from "@/components/resources/types";

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<ResourceCategory[]>([]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleTypeFilter = (type: ResourceType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  
  const handleCategoryFilter = (category: ResourceCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedCategories([]);
  };
  
  // Apply filters
  const filteredResources = allResources.filter(resource => {
    // Search filter
    const matchesSearch = searchTerm === "" || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Type filter
    const matchesType = selectedTypes.length === 0 || 
      selectedTypes.includes(resource.type);
    
    // Category filter
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(resource.category);
    
    return matchesSearch && matchesType && matchesCategory;
  });
  
  return (
    <PageLayout 
      title="Biblioteca de Recursos" 
      subtitle="Explora documentos, herramientas y materiales de aprendizaje complementarios"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Buscar recursos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Button 
          variant="outline" 
          className="flex items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} className="mr-2" />
          Filtros
          {(selectedTypes.length > 0 || selectedCategories.length > 0) && (
            <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {selectedTypes.length + selectedCategories.length}
            </span>
          )}
        </Button>
      </div>
      
      {showFilters && (
        <ResourceFilters 
          selectedTypes={selectedTypes} 
          selectedCategories={selectedCategories} 
          onTypeChange={handleTypeFilter}
          onCategoryChange={handleCategoryFilter}
          onReset={resetFilters}
        />
      )}
      
      <div className="mt-6">
        <ResourceGrid resources={filteredResources} />
      </div>
    </PageLayout>
  );
};

export default ResourceLibrary;
