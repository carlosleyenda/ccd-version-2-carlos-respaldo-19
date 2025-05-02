
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search, Filter, Award, Clock, CalendarDays } from "lucide-react";
import AssessmentList from "@/components/assessment/AssessmentList";
import { allAssessments } from "@/components/assessment/assessmentData";
import AssessmentFilters from "@/components/assessment/AssessmentFilters";
import AssessmentStats from "@/components/assessment/AssessmentStats";
import { Assessment, AssessmentCategory, AssessmentLevel } from "@/components/assessment/types";
import { Separator } from "@/components/ui/separator";

const AssessmentCenter = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<AssessmentCategory | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<AssessmentLevel | "all">("all");
  const [showCompleted, setShowCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState("practice");
  
  // Mock user stats
  const userStats = {
    totalAssessments: 18,
    completedAssessments: 7,
    averageScore: 82,
    totalCertifications: 2,
    lastCompletedDate: "2025-04-28"
  };
  
  // Filter assessments based on all criteria
  const filterAssessments = () => {
    return allAssessments.filter(assessment => {
      // Filter by search term
      const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by type (tab)
      const matchesType = assessment.type === activeTab;
      
      // Filter by category
      const matchesCategory = selectedCategory === "all" || assessment.category === selectedCategory;
      
      // Filter by level
      const matchesLevel = selectedLevel === "all" || assessment.level === selectedLevel;
      
      // Filter by completion status if needed
      const matchesCompletion = !showCompleted || (assessment.progress === 100);
      
      return matchesSearch && matchesType && matchesCategory && matchesLevel && matchesCompletion;
    });
  };
  
  const filteredAssessments = filterAssessments();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <PageLayout 
      title="Centro de Evaluación" 
      subtitle="Pon a prueba tus conocimientos y habilidades con evaluaciones profesionales"
    >
      <div className="mb-8">
        <AssessmentStats stats={userStats} />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
        <div className="w-full md:w-3/4">
          <div className="flex items-center relative mb-4">
            <Search className="absolute left-3 text-gray-400" size={18} />
            <Input
              className="pl-10"
              placeholder="Buscar evaluaciones por título, categoría o nivel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              variant="outline" 
              className="ml-2 whitespace-nowrap"
              onClick={() => setSearchTerm("")}
            >
              Limpiar
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="practice">Prácticas</TabsTrigger>
              <TabsTrigger value="certification">Certificaciones</TabsTrigger>
              <TabsTrigger value="skill-check">Habilidades</TabsTrigger>
            </TabsList>
            
            <TabsContent value="practice">
              <AssessmentList 
                assessments={filteredAssessments}
                emptyMessage="No se encontraron evaluaciones prácticas"
              />
            </TabsContent>
            
            <TabsContent value="certification">
              <AssessmentList 
                assessments={filteredAssessments}
                emptyMessage="No se encontraron certificaciones disponibles"
              />
            </TabsContent>
            
            <TabsContent value="skill-check">
              <AssessmentList 
                assessments={filteredAssessments}
                emptyMessage="No se encontraron pruebas de habilidades"
              />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="w-full md:w-1/4 bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4 space-y-4">
          <AssessmentFilters 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
          />
          
          <Separator />
          
          <div className="space-y-3">
            <h3 className="font-medium">Próximas evaluaciones</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-2 rounded-md">
                <CalendarDays size={16} className="mt-1 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Certificación Profesional</p>
                  <p className="text-xs text-gray-500">10 de mayo, 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-2 rounded-md">
                <CalendarDays size={16} className="mt-1 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Evaluación Técnica</p>
                  <p className="text-xs text-gray-500">15 de mayo, 2025</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full text-sm" 
              onClick={() => navigate("/schedule")}
            >
              Ver calendario completo
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AssessmentCenter;
