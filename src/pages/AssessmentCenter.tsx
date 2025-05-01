
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { FileText, Search } from "lucide-react";
import AssessmentList from "@/components/assessment/AssessmentList";
import { allAssessments } from "@/components/assessment/assessmentData";

const AssessmentCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAssessments = {
    practice: allAssessments.filter(assessment => 
      assessment.type === "practice" && 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    certification: allAssessments.filter(assessment => 
      assessment.type === "certification" && 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    skillCheck: allAssessments.filter(assessment => 
      assessment.type === "skill-check" && 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };
  
  return (
    <PageLayout 
      title="Centro de Evaluación" 
      subtitle="Pon a prueba tus conocimientos y habilidades con evaluaciones profesionales"
    >
      <div className="flex items-center relative mb-6">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <Input
          className="pl-10"
          placeholder="Buscar evaluaciones por título, categoría o nivel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="practice">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
          <TabsTrigger value="practice">Prácticas</TabsTrigger>
          <TabsTrigger value="certification">Certificaciones</TabsTrigger>
          <TabsTrigger value="skill-check">Habilidades</TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice">
          <AssessmentList 
            assessments={filteredAssessments.practice}
            emptyMessage="No se encontraron evaluaciones prácticas"
          />
        </TabsContent>
        
        <TabsContent value="certification">
          <AssessmentList 
            assessments={filteredAssessments.certification}
            emptyMessage="No se encontraron certificaciones disponibles"
          />
        </TabsContent>
        
        <TabsContent value="skill-check">
          <AssessmentList 
            assessments={filteredAssessments.skillCheck}
            emptyMessage="No se encontraron pruebas de habilidades"
          />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default AssessmentCenter;
