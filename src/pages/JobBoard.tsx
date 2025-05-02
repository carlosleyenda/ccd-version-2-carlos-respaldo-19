
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Search, MapPin, Building, Clock, TrendingUp, TrendingDown, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jobListings, marketTrends } from "@/components/jobs/jobsData";
import JobListings from "@/components/jobs/JobListings";
import MarketTrends from "@/components/jobs/MarketTrends";

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === "all" || job.category === filterCategory;
    const matchesLocation = filterLocation === "all" || job.location.includes(filterLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <PageLayout title="Bolsa de Trabajo" subtitle="Encuentra oportunidades laborales alineadas con tu perfil y habilidades">
      <div className="mb-6 space-y-4">
        <div className="flex items-center relative">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Buscar por título, empresa o palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="w-full md:w-auto flex-1">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Filter size={16} />
                  <SelectValue placeholder="Categoría" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="engineering">Ingeniería</SelectItem>
                <SelectItem value="mining">Minería</SelectItem>
                <SelectItem value="management">Gestión</SelectItem>
                <SelectItem value="technical">Técnico</SelectItem>
                <SelectItem value="safety">Seguridad</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full md:w-auto flex-1">
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <SelectValue placeholder="Ubicación" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ubicaciones</SelectItem>
                <SelectItem value="Lima">Lima</SelectItem>
                <SelectItem value="Arequipa">Arequipa</SelectItem>
                <SelectItem value="Cusco">Cusco</SelectItem>
                <SelectItem value="Piura">Piura</SelectItem>
                <SelectItem value="Remoto">Remoto</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="listings">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
          <TabsTrigger value="listings">Ofertas de Trabajo</TabsTrigger>
          <TabsTrigger value="trends">Tendencias del Mercado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="listings">
          <JobListings jobs={filteredJobs} />
        </TabsContent>
        
        <TabsContent value="trends">
          <MarketTrends trends={marketTrends} />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default JobBoard;
