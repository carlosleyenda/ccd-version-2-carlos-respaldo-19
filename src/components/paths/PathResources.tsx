
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, ExternalLink, Search, BookOpen, Video, File } from "lucide-react";
import { toast } from "sonner";

interface PathResourcesProps {
  pathId: string;
}

const PathResources: React.FC<PathResourcesProps> = ({ pathId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleDownload = (resourceName: string) => {
    toast.success(`Descargando: ${resourceName}`);
  };
  
  const resources = {
    documents: [
      { 
        id: "doc1", 
        title: "Guía completa de la ruta de aprendizaje", 
        type: "PDF", 
        size: "2.4 MB",
        date: "15/04/2025"
      },
      { 
        id: "doc2", 
        title: "Manual técnico de procedimientos", 
        type: "PDF", 
        size: "5.1 MB",
        date: "10/04/2025"
      },
      { 
        id: "doc3", 
        title: "Casos de estudio y mejores prácticas", 
        type: "DOC", 
        size: "1.8 MB",
        date: "05/04/2025"
      },
      { 
        id: "doc4", 
        title: "Plantillas para evaluación de proyectos", 
        type: "XLS", 
        size: "0.7 MB",
        date: "01/04/2025"
      },
    ],
    tools: [
      { 
        id: "tool1", 
        title: "Simulador de procesos mineros", 
        description: "Herramienta para simular y analizar diferentes escenarios operativos", 
      },
      { 
        id: "tool2", 
        title: "Calculadora de optimización de recursos", 
        description: "Calcula la distribución óptima de recursos en proyectos mineros", 
      },
      { 
        id: "tool3", 
        title: "Software de diseño minero (versión demo)", 
        description: "Versión limitada del software profesional para prácticas", 
      },
    ],
    references: [
      { 
        id: "ref1", 
        title: "Normativa internacional sobre seguridad minera", 
        url: "#",
      },
      { 
        id: "ref2", 
        title: "Biblioteca digital especializada", 
        url: "#",
      },
      { 
        id: "ref3", 
        title: "Revista Minería Sostenible - Acceso especial", 
        url: "#",
      },
      { 
        id: "ref4", 
        title: "Base de datos de investigación metalúrgica", 
        url: "#",
      },
    ]
  };
  
  const filteredResources = {
    documents: resources.documents.filter(doc => 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    tools: resources.tools.filter(tool => 
      tool.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    references: resources.references.filter(ref => 
      ref.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center relative">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <Input
          className="pl-10"
          placeholder="Buscar recursos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="documents">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">
            <FileText size={16} className="mr-2" />
            Documentos
          </TabsTrigger>
          <TabsTrigger value="tools">
            <BookOpen size={16} className="mr-2" />
            Herramientas
          </TabsTrigger>
          <TabsTrigger value="references">
            <ExternalLink size={16} className="mr-2" />
            Referencias
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="documents" className="mt-6">
          {filteredResources.documents.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No se encontraron documentos</p>
          ) : (
            <div className="space-y-4">
              {filteredResources.documents.map((doc) => (
                <Card key={doc.id}>
                  <CardHeader className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {doc.type === "PDF" ? (
                          <FileText size={20} className="mr-3 text-red-500" />
                        ) : doc.type === "DOC" ? (
                          <File size={20} className="mr-3 text-blue-500" />
                        ) : (
                          <File size={20} className="mr-3 text-green-500" />
                        )}
                        <div>
                          <CardTitle className="text-base">{doc.title}</CardTitle>
                          <p className="text-xs text-gray-500 mt-1">
                            {doc.type} · {doc.size} · Actualizado: {doc.date}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDownload(doc.title)}
                      >
                        <Download size={18} />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="tools" className="mt-6">
          {filteredResources.tools.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No se encontraron herramientas</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredResources.tools.map((tool) => (
                <Card key={tool.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {tool.description}
                    </p>
                    <Button variant="outline" size="sm">
                      Acceder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="references" className="mt-6">
          {filteredResources.references.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No se encontraron referencias</p>
          ) : (
            <div className="space-y-4">
              {filteredResources.references.map((ref) => (
                <Card key={ref.id}>
                  <CardContent className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                      <ExternalLink size={18} className="mr-3 text-blue-500" />
                      <div>
                        <p className="font-medium">{ref.title}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      asChild
                    >
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">
                        Visitar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PathResources;
