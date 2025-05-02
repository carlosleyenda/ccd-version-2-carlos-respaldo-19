
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Building, Clock, BookOpen, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { JobListing } from "./types";

interface JobListingsProps {
  jobs: JobListing[];
}

const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  const handleApply = () => {
    toast.success("Solicitud enviada con éxito");
  };

  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
        <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium">No se encontraron ofertas de trabajo</h3>
        <p className="mt-1 text-gray-500">Prueba con otros filtros o vuelve más tarde.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <Card key={job.id} className="h-full flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-xl">{job.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{job.company}</span>
                </div>
              </div>
              <Badge 
                variant={job.category === "engineering" ? "default" : 
                        job.category === "mining" ? "secondary" : 
                        "outline"}
              >
                {job.category === "engineering" ? "Ingeniería" : 
                 job.category === "mining" ? "Minería" : 
                 job.category === "management" ? "Gestión" : 
                 job.category === "technical" ? "Técnico" : "Seguridad"}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow">
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span>{job.location}</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span>{job.type}</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <BookOpen className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Habilidades requeridas:</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {job.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                {job.description}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="border-t pt-4 flex justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Publicado: {job.postedDate}</span>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={() => setSelectedJob(job)}>Ver Detalles</Button>
              </DialogTrigger>
              {selectedJob && (
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{selectedJob.title}</DialogTitle>
                    <DialogDescription>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="h-4 w-4" />
                        <span>{selectedJob.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{selectedJob.location}</span>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Descripción del puesto</h4>
                      <p className="text-gray-600">{selectedJob.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Responsabilidades</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedJob.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Requisitos</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedJob.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Habilidades requeridas</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.requiredSkills.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Beneficios</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedJob.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Cursos recomendados</h4>
                      <div className="space-y-2">
                        {selectedJob.recommendedCourses.map((course) => (
                          <Card key={course.id} className="p-3">
                            <div className="flex justify-between">
                              <div>
                                <h5 className="font-medium">{course.title}</h5>
                                <p className="text-sm text-muted-foreground">{course.description}</p>
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <a href={`/course/${course.id}`}>Ver Curso</a>
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <DialogFooter className="flex justify-between items-center gap-4">
                    <div className="text-sm">
                      <p className="font-medium">Salario: {selectedJob.salary}</p>
                      <p className="text-muted-foreground">Publicado: {selectedJob.postedDate}</p>
                    </div>
                    <Button onClick={handleApply}>Aplicar Ahora</Button>
                  </DialogFooter>
                </DialogContent>
              )}
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default JobListings;
