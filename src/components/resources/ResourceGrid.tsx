
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Video, 
  BookOpen, 
  FileSpreadsheet, 
  Monitor, 
  Download, 
  ExternalLink, 
  Star, 
  Clock,
  Calendar,
  BookmarkPlus,
  BookmarkCheck
} from "lucide-react";
import { toast } from "sonner";
import { Resource } from "./types";

interface ResourceGridProps {
  resources: Resource[];
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ resources }) => {
  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'document': return <FileText size={18} />;
      case 'video': return <Video size={18} />;
      case 'tutorial': return <BookOpen size={18} />;
      case 'template': return <FileSpreadsheet size={18} />;
      case 'software': return <Monitor size={18} />;
      case 'article': return <FileText size={18} />;
      default: return <FileText size={18} />;
    }
  };
  
  const getCategoryColor = (category: Resource['category']) => {
    switch (category) {
      case 'engineering': return 'engineering';
      case 'mining': return 'mining';
      case 'management': return 'management';
      case 'safety': return 'amber';
      case 'environment': return 'green';
      case 'general': return 'blue';
      default: return 'gray';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }).format(date);
  };
  
  const handleDownload = (resource: Resource) => {
    toast.success(`Descargando: ${resource.title}`);
  };
  
  const handleView = (resource: Resource) => {
    toast.info(`Abriendo: ${resource.title}`);
    if (resource.url) {
      window.open(resource.url, '_blank');
    }
  };
  
  const toggleFavorite = (resource: Resource) => {
    toast.success(resource.isFavorite ? 
      `Se eliminó "${resource.title}" de favoritos` : 
      `Se agregó "${resource.title}" a favoritos`
    );
  };
  
  if (resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <FileText size={48} className="mb-4 opacity-50" />
        <p>No se encontraron recursos que coincidan con tu búsqueda</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-40 bg-gray-100">
            <img 
              src={resource.thumbnail} 
              alt={resource.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              {resource.featured && (
                <Badge className="bg-amber-100 text-amber-800">
                  <Star size={12} className="mr-1" />
                  Destacado
                </Badge>
              )}
              <Badge className={`bg-${getCategoryColor(resource.category)}-100 text-${getCategoryColor(resource.category)}-800`}>
                {resource.category === 'engineering' ? 'Ingeniería' :
                 resource.category === 'mining' ? 'Minería' :
                 resource.category === 'management' ? 'Gestión' :
                 resource.category === 'safety' ? 'Seguridad' :
                 resource.category === 'environment' ? 'Medio Ambiente' : 'General'}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
              <div className="flex items-center">
                {getTypeIcon(resource.type)}
                <span className="ml-2 capitalize">
                  {resource.type === 'document' ? 'Documento' :
                   resource.type === 'video' ? 'Video' :
                   resource.type === 'tutorial' ? 'Tutorial' :
                   resource.type === 'template' ? 'Plantilla' :
                   resource.type === 'software' ? 'Software' : 'Artículo'}
                </span>
                {resource.fileType && (
                  <span className="ml-auto font-mono text-xs bg-gray-800 px-2 py-1 rounded">
                    {resource.fileType}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <CardContent className="pt-4">
            <h3 className="font-medium text-lg mb-2 line-clamp-2">
              {resource.title}
            </h3>
            
            {resource.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {resource.description}
              </p>
            )}
            
            <div className="flex flex-col space-y-1 text-sm text-gray-500">
              {resource.author && (
                <div className="flex items-center">
                  <span className="font-medium mr-1">Autor:</span>
                  <span>{resource.author}</span>
                </div>
              )}
              
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>Publicado: {formatDate(resource.createdAt)}</span>
              </div>
              
              {resource.updatedAt !== resource.createdAt && (
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>Actualizado: {formatDate(resource.updatedAt)}</span>
                </div>
              )}
              
              {resource.downloadCount !== undefined && (
                <div className="flex items-center">
                  <Download size={14} className="mr-1" />
                  <span>{resource.downloadCount} descargas</span>
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between pt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleFavorite(resource)}
              className={resource.isFavorite ? "text-amber-500" : ""}
            >
              {resource.isFavorite ? (
                <BookmarkCheck size={16} className="mr-1" />
              ) : (
                <BookmarkPlus size={16} className="mr-1" />
              )}
              {resource.isFavorite ? "Guardado" : "Guardar"}
            </Button>
            
            <Button
              variant={resource.type === 'video' || resource.type === 'software' ? "default" : "success"}
              size="sm"
              onClick={() => resource.type === 'video' || resource.type === 'software' || resource.url ? 
                handleView(resource) : handleDownload(resource)}
            >
              {resource.type === 'video' || resource.type === 'software' || resource.url ? (
                <>
                  <ExternalLink size={16} className="mr-1" />
                  Ver
                </>
              ) : (
                <>
                  <Download size={16} className="mr-1" />
                  Descargar {resource.fileSize && `(${resource.fileSize})`}
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ResourceGrid;
