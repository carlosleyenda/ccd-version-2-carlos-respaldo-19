
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Filter, ListFilter, Building } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { jobListings, marketTrends, companies } from "@/components/jobs/jobsData";
import JobListings from "@/components/jobs/JobListings";
import MarketTrends from "@/components/jobs/MarketTrends";
import MyApplications from "@/components/jobs/MyApplications";
import CompanyProfiles from "@/components/jobs/CompanyProfiles";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterExperience, setFilterExperience] = useState("all");
  const [filterSalary, setFilterSalary] = useState("all");
  const [filterRemote, setFilterRemote] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === "all" || job.category === filterCategory;
    const matchesLocation = filterLocation === "all" || job.location.includes(filterLocation);
    const matchesExperience = filterExperience === "all" || job.experienceLevel === filterExperience;
    const matchesSalary = filterSalary === "all" || 
                         (filterSalary === "below80k" && parseInt(job.salary.replace(/[^\d]/g, '')) < 80000) ||
                         (filterSalary === "80k-120k" && parseInt(job.salary.replace(/[^\d]/g, '')) >= 80000 && parseInt(job.salary.replace(/[^\d]/g, '')) <= 120000) ||
                         (filterSalary === "above120k" && parseInt(job.salary.replace(/[^\d]/g, '')) > 120000);
    const matchesRemote = !filterRemote || job.location.toLowerCase().includes("remoto");
    
    return matchesSearch && matchesCategory && matchesLocation && matchesExperience && matchesSalary && matchesRemote;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setFilterCategory("all");
    setFilterLocation("all");
    setFilterExperience("all");
    setFilterSalary("all");
    setFilterRemote(false);
    setCurrentPage(1);
  };

  return (
    <PageLayout title="Bolsa de Trabajo" subtitle="Encuentra oportunidades laborales alineadas con tu perfil y habilidades">
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input
              className="pl-10"
              placeholder="Buscar por título, empresa o palabra clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button onClick={resetFilters} variant="outline" className="whitespace-nowrap">
            Limpiar filtros
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Categoría</label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <SelectValue placeholder="Todas" />
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
              
              <div>
                <label className="text-sm font-medium mb-1 block">Ubicación</label>
                <Select value={filterLocation} onValueChange={setFilterLocation}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <SelectValue placeholder="Todas" />
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

              <div>
                <label className="text-sm font-medium mb-1 block">Experiencia</label>
                <Select value={filterExperience} onValueChange={setFilterExperience}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <ListFilter size={16} />
                      <SelectValue placeholder="Cualquiera" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Cualquier nivel</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="mid">Intermedio</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="lead">Líder</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Salario</label>
                <Select value={filterSalary} onValueChange={setFilterSalary}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Filter size={16} />
                      <SelectValue placeholder="Cualquiera" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Cualquier rango</SelectItem>
                    <SelectItem value="below80k">Menos de S/80,000</SelectItem>
                    <SelectItem value="80k-120k">S/80,000 - S/120,000</SelectItem>
                    <SelectItem value="above120k">Más de S/120,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Empresa</label>
                <Select>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Building size={16} />
                      <SelectValue placeholder="Cualquiera" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las empresas</SelectItem>
                    {companies.map(company => (
                      <SelectItem key={company.id} value={company.id}>{company.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remote" 
                    checked={filterRemote}
                    onCheckedChange={(checked) => setFilterRemote(checked === true)}
                  />
                  <label htmlFor="remote" className="text-sm font-medium">
                    Solo Remotas
                  </label>
                </div>
              </div>
            </div>
            
            {filteredJobs.length > 0 && (
              <div className="mt-4 flex items-center justify-between">
                <Badge variant="outline" className="px-2 py-1">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'resultado' : 'resultados'} encontrados
                </Badge>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="px-2 py-1 flex items-center gap-1">
                    <Briefcase size={14} />
                    {filterCategory === "all" ? "Todas las categorías" : 
                     filterCategory === "engineering" ? "Ingeniería" : 
                     filterCategory === "mining" ? "Minería" : 
                     filterCategory === "management" ? "Gestión" : 
                     filterCategory === "technical" ? "Técnico" : "Seguridad"}
                  </Badge>
                  {filterLocation !== "all" && (
                    <Badge variant="secondary" className="px-2 py-1 flex items-center gap-1">
                      <MapPin size={14} />
                      {filterLocation}
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="listings">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
          <TabsTrigger value="listings">Ofertas de Trabajo</TabsTrigger>
          <TabsTrigger value="applications">Mis Postulaciones</TabsTrigger>
          <TabsTrigger value="companies">Empresas</TabsTrigger>
          <TabsTrigger value="trends">Tendencias</TabsTrigger>
        </TabsList>
        
        <TabsContent value="listings">
          <JobListings jobs={currentJobs} />
          
          {filteredJobs.length > jobsPerPage && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
                  // Determine which page numbers to show
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = index + 1;
                  } else if (currentPage <= 3) {
                    pageNum = index + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + index;
                  } else {
                    pageNum = currentPage - 2 + index;
                  }
                  
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink 
                        isActive={pageNum === currentPage}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </TabsContent>
        
        <TabsContent value="applications">
          <MyApplications />
        </TabsContent>
        
        <TabsContent value="companies">
          <CompanyProfiles companies={companies} />
        </TabsContent>
        
        <TabsContent value="trends">
          <MarketTrends trends={marketTrends} />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default JobBoard;
