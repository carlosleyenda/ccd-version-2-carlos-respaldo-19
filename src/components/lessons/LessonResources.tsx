
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Book, Download, Video, FileImage } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const LessonResources = () => {
  const handleDownload = (resourceName: string) => {
    toast.success(`Descargando recurso: ${resourceName}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Recursos de la lección</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <FileText className="h-4 w-4 mr-2 text-primary" /> 
              Guía de conceptos básicos
            </CardTitle>
            <CardDescription>PDF - 2.3 MB</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm">Material esencial para comprender los conceptos fundamentales</p>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1"
                onClick={() => handleDownload("Guía de conceptos básicos")}
              >
                <Download className="h-3 w-3" />
                <span>Descargar</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <Book className="h-4 w-4 mr-2 text-primary" /> 
              Glosario técnico
            </CardTitle>
            <CardDescription>PDF - 1.1 MB</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm">Terminología especializada para minería subterránea</p>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1"
                onClick={() => handleDownload("Glosario técnico")}
              >
                <Download className="h-3 w-3" />
                <span>Descargar</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <FileImage className="h-4 w-4 mr-2 text-primary" /> 
              Diagramas explicativos
            </CardTitle>
            <CardDescription>ZIP - 5.4 MB</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm">Conjunto de diagramas técnicos ilustrativos</p>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1"
                onClick={() => handleDownload("Diagramas explicativos")}
              >
                <Download className="h-3 w-3" />
                <span>Descargar</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <Video className="h-4 w-4 mr-2 text-primary" /> 
              Video complementario
            </CardTitle>
            <CardDescription>MP4 - 128 MB</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm">Video adicional con ejemplos prácticos</p>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1"
                onClick={() => handleDownload("Video complementario")}
              >
                <Download className="h-3 w-3" />
                <span>Descargar</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Bibliografía recomendada</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            Hartman, H.L. y Mutmansky, J.M. (2002). <em>Introductory Mining Engineering</em>, 2nd Edition. Wiley.
          </li>
          <li>
            Brady, B.H.G. y Brown, E.T. (2005). <em>Rock Mechanics for Underground Mining</em>, 3rd Edition. Springer.
          </li>
          <li>
            McPherson, M.J. (2009). <em>Subsurface Ventilation Engineering</em>, 2nd Edition. Mine Ventilation Services.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LessonResources;
