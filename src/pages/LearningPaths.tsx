
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PathsList from "@/components/paths/PathsList";
import { learningPaths } from "@/components/paths/pathsData";

const LearningPaths = () => {
  return (
    <PageLayout 
      title="Rutas de Aprendizaje en Trading" 
      subtitle="Sigue una hoja de ruta estructurada para alcanzar tus objetivos como trader profesional"
    >
      <Tabs defaultValue="forex" className="w-full">
        <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-8">
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="stocks">Acciones</TabsTrigger>
          <TabsTrigger value="algorithmic">Algorítmico</TabsTrigger>
        </TabsList>
        
        <TabsContent value="forex">
          <PathsList paths={learningPaths.filter(path => path.category === "forex")} />
        </TabsContent>
        
        <TabsContent value="crypto">
          <PathsList paths={learningPaths.filter(path => path.category === "crypto")} />
        </TabsContent>
        
        <TabsContent value="stocks">
          <PathsList paths={learningPaths.filter(path => path.category === "stocks")} />
        </TabsContent>
        
        <TabsContent value="algorithmic">
          <PathsList paths={learningPaths.filter(path => path.category === "algorithmic")} />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default LearningPaths;
