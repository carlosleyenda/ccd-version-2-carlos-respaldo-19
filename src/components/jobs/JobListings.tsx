
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Building, Clock, BookOpen, Calendar, User, FileText, Star, ArrowRight, Bookmark } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { JobListing } from "./types";

interface JobListingsProps {
  jobs: JobListing[];
}

const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [coverLetter, setCoverLetter] = useState("");

  const handleApply = () => {
    toast.success("Solicitud enviada con éxito");
  };
  
  const toggleSaveJob = (jobId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
      toast.info("Oferta eliminada de guardados");
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast.success("Oferta guardada para después");
    }
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
        <Card key={job.id} className="h-full flex flex-col overflow-hidden group hover:border-primary transition-colors">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-xl">{job.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{job.company}</span>
                </div>
              </div>
              <div className="flex gap-2">
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
                <Badge variant="outline">{job.experienceLevel}</Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow pb-4">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.location}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{job.type}</span>
                </div>

                {job.applicationDeadline && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Hasta: {job.applicationDeadline}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-start space-x-2">
                <BookOpen className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium mb-1">Habilidades requeridas:</div>
                  <div className="flex flex-wrap gap-1">
                    {job.requiredSkills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/5 text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.requiredSkills.length > 3 && (
                      <Badge variant="outline" className="bg-primary/5 text-xs">
                        +{job.requiredSkills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                {job.description}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="border-t pt-4 flex justify-between items-center bg-muted/20">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Publicado: {job.postedDate}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                size="icon" 
                variant="ghost"
                className="h-8 w-8" 
                onClick={(e) => toggleSaveJob(job.id, e)}
              >
                <Bookmark 
                  className="h-4 w-4" 
                  fill={savedJobs.includes(job.id) ? "currentColor" : "none"} 
                />
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" size="sm" onClick={() => setSelectedJob(job)}>
                    Ver Detalles
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </CardFooter>
        </Card>
      ))}

      {selectedJob && (
        <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl flex items-center justify-between">
                <span>{selectedJob.title}</span>
                <Badge variant="outline">{selectedJob.salary}</Badge>
              </DialogTitle>
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
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <Card className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <User className="h-6 w-6 mb-1 text-primary" />
                    <div className="text-sm font-medium">{selectedJob.experienceLevel}</div>
                    <div className="text-xs text-muted-foreground">Nivel</div>
                  </div>
                </Card>
                <Card className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <Clock className="h-6 w-6 mb-1 text-primary" />
                    <div className="text-sm font-medium">{selectedJob.type}</div>
                    <div className="text-xs text-muted-foreground">Tipo</div>
                  </div>
                </Card>
                <Card className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <Calendar className="h-6 w-6 mb-1 text-primary" />
                    <div className="text-sm font-medium">{selectedJob.applicationDeadline || "Continuo"}</div>
                    <div className="text-xs text-muted-foreground">Fecha límite</div>
                  </div>
                </Card>
              </div>
            
              <div>
                <h4 className="font-medium text-lg mb-2">Descripción del puesto</h4>
                <p className="text-gray-600 whitespace-pre-line">{selectedJob.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">Responsabilidades</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-2">Requisitos</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Habilidades requeridas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.requiredSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Beneficios</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedJob.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {selectedJob.applicationProcess && (
                <div>
                  <h4 className="font-medium text-lg mb-2">Proceso de selección</h4>
                  <Card className="p-4">
                    <div className="space-y-4">
                      <h5 className="font-medium">Proceso de aplicación</h5>
                      <p className="text-sm">{selectedJob.applicationProcess}</p>
                      
                      {selectedJob.interviewProcess && (
                        <>
                          <h5 className="font-medium">Proceso de entrevista</h5>
                          <p className="text-sm">{selectedJob.interviewProcess}</p>
                        </>
                      )}
                    </div>
                  </Card>
                </div>
              )}

              <div>
                <h4 className="font-medium text-lg mb-2">Cursos recomendados</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedJob.recommendedCourses.map((course) => (
                    <Card key={course.id} className="p-3 hover:border-primary transition-colors">
                      <div className="flex justify-between">
                        <div>
                          <h5 className="font-medium">{course.title}</h5>
                          <p className="text-xs text-muted-foreground line-clamp-2">{course.description}</p>
                        </div>
                        <Button variant="ghost" size="icon" asChild className="ml-2 shrink-0">
                          <a href={`/course/${course.id}`}>
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Aplicar ahora</h4>
                <div className="space-y-3">
                  <Textarea 
                    placeholder="Incluye una breve carta de presentación (opcional)"
                    className="min-h-[120px]"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex justify-between items-center gap-4 pt-4">
              <div className="text-sm">
                <p className="font-medium">Salario: {selectedJob.salary}</p>
                {selectedJob.contactEmail && (
                  <p className="text-muted-foreground text-xs mt-1">Contacto: {selectedJob.contactEmail}</p>
                )}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  onClick={() => toggleSaveJob(selectedJob.id, { stopPropagation: () => {} } as React.MouseEvent)}
                >
                  <Bookmark className="mr-2 h-4 w-4" fill={savedJobs.includes(selectedJob.id) ? "currentColor" : "none"} />
                  {savedJobs.includes(selectedJob.id) ? "Guardado" : "Guardar"}
                </Button>
                <Button onClick={handleApply}>Enviar Solicitud</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default JobListings;
