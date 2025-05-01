
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PathsList from "@/components/paths/PathsList";
import { learningPaths } from "@/components/paths/pathsData";

const LearningPaths = () => {
  return (
    <PageLayout 
      title="Rutas de Aprendizaje" 
      subtitle="Sigue una hoja de ruta estructurada para alcanzar tus objetivos profesionales"
    >
      <Tabs defaultValue="engineering" className="w-full">
        <TabsList className="w-full max-w-xl mx-auto grid grid-cols-3 mb-8">
          <TabsTrigger value="engineering">Ingeniería</TabsTrigger>
          <TabsTrigger value="mining">Minería</TabsTrigger>
          <TabsTrigger value="management">Gestión</TabsTrigger>
        </TabsList>
        
        <TabsContent value="engineering">
          <PathsList paths={learningPaths.filter(path => path.category === "engineering")} />
        </TabsContent>
        
        <TabsContent value="mining">
          <PathsList paths={learningPaths.filter(path => path.category === "mining")} />
        </TabsContent>
        
        <TabsContent value="management">
          <PathsList paths={learningPaths.filter(path => path.category === "management")} />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default LearningPaths;
