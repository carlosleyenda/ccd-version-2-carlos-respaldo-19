
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Building, MapPin, Globe, Users, Briefcase, Search, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Company } from "./types";

interface CompanyProfilesProps {
  companies: Company[];
}

const CompanyProfiles: React.FC<CompanyProfilesProps> = ({ companies: allCompanies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [filterIndustry, setFilterIndustry] = useState<string>("all");
  
  const filteredCompanies = allCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === "all" || company.industry === filterIndustry;
    
    return matchesSearch && matchesIndustry;
  });
  
  // Get unique industries
  const industries = Array.from(new Set(allCompanies.map(c => c.industry)));

  if (allCompanies.length === 0) {
    return (
      <div className="text-center py-16">
        <Building className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium">No hay empresas registradas</h3>
        <p className="mt-1 text-gray-500">Las empresas aparecerán aquí pronto.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Buscar por nombre de empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant={filterIndustry === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterIndustry("all")}
          >
            Todas
          </Button>
          {industries.map(industry => (
            <Button
              key={industry}
              variant={filterIndustry === industry ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterIndustry(industry)}
            >
              {industry}
            </Button>
          ))}
        </div>
      </div>

      {filteredCompanies.length === 0 ? (
        <div className="text-center py-10">
          <Search className="mx-auto h-10 w-10 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium">No se encontraron resultados</h3>
          <p className="mt-1 text-gray-500">Intenta con otra búsqueda o filtro.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="overflow-hidden flex flex-col h-full hover:border-primary transition-colors">
              <CardHeader className="bg-muted/40 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-xl">{company.name}</h3>
                  <Badge variant="outline">{company.industry}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow py-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{company.location}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{company.employeeCount} empleados</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Briefcase className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{company.openPositions} vacantes abiertas</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                    {company.description}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4">
                <div className="flex items-center justify-between w-full">
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Sitio web
                    <ArrowUpRight className="h-3 w-3 ml-0.5" />
                  </a>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedCompany(company)}>
                        Ver Perfil
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {selectedCompany && (
        <Dialog open={!!selectedCompany} onOpenChange={(open) => !open && setSelectedCompany(null)}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedCompany.name}</DialogTitle>
              <DialogDescription className="flex items-center gap-2">
                <Badge variant="outline">{selectedCompany.industry}</Badge>
                <span className="text-sm">•</span>
                <span className="text-sm flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {selectedCompany.location}
                </span>
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="about" className="mt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">Acerca de</TabsTrigger>
                <TabsTrigger value="jobs">Vacantes ({selectedCompany.openPositions})</TabsTrigger>
                <TabsTrigger value="benefits">Beneficios</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4 mt-4">
                <div>
                  <h4 className="font-medium mb-2">Descripción</h4>
                  <p className="text-sm">{selectedCompany.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Información</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedCompany.employeeCount} empleados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>Fundada en {selectedCompany.founded}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={selectedCompany.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline flex items-center"
                        >
                          {selectedCompany.website.replace(/^https?:\/\//, '')}
                          <ArrowUpRight className="h-3 w-3 ml-0.5" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Especialidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCompany.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="jobs" className="space-y-4 mt-4">
                {selectedCompany.openPositions > 0 ? (
                  <div className="space-y-3">
                    {/* Simulated job listings for the company */}
                    {[...Array(Math.min(selectedCompany.openPositions, 5))].map((_, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium">Puesto {index + 1} en {selectedCompany.name}</h5>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{selectedCompany.location}</span>
                            </div>
                          </div>
                          <Button size="sm" asChild>
                            <a href="/job-board">Ver Detalle</a>
                          </Button>
                        </div>
                      </Card>
                    ))}

                    {selectedCompany.openPositions > 5 && (
                      <div className="text-center mt-2">
                        <Button variant="link">
                          Ver todas las vacantes ({selectedCompany.openPositions})
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Briefcase className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-gray-500">No hay vacantes disponibles en este momento.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-4 mt-4">
                <div>
                  <h4 className="font-medium mb-2">Beneficios para empleados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCompany.benefits.map((benefit, index) => (
                      <Card key={index} className="p-3">
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            {benefit}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

// Add the Check icon missing from the imports
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CompanyProfiles;
