
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, FileText, AlertCircle, CheckCircle2, Clock, XCircle, CalendarClock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { JobApplication } from "./types";

// Sample data
const applications: JobApplication[] = [
  {
    id: "app-1",
    jobId: "job-1",
    jobTitle: "Ingeniero de Minas Senior",
    company: "Minera Perú Copper",
    appliedDate: "05/01/2025",
    status: "interview",
    nextStep: "Entrevista técnica programada para 10/05/2025",
    notes: "Preparar presentación sobre proyectos anteriores."
  },
  {
    id: "app-2",
    jobId: "job-2",
    jobTitle: "Analista de Seguridad Minera",
    company: "MineSafe Solutions",
    appliedDate: "28/04/2025",
    status: "review",
    nextStep: "En revisión por RRHH"
  },
  {
    id: "app-3",
    jobId: "job-3",
    jobTitle: "Geólogo de Exploración",
    company: "Global Mining Corp",
    appliedDate: "15/04/2025",
    status: "rejected",
    notes: "Gracias por su interés, pero buscamos candidatos con más experiencia en yacimientos de oro."
  },
  {
    id: "app-4",
    jobId: "job-4",
    jobTitle: "Supervisor de Operaciones",
    company: "Andina Mining",
    appliedDate: "20/04/2025",
    status: "pending"
  },
  {
    id: "app-5",
    jobId: "job-5",
    jobTitle: "Ingeniero Metalúrgico",
    company: "ProcessMet Technologies",
    appliedDate: "01/04/2025",
    status: "offer",
    nextStep: "Oferta enviada - Pendiente de respuesta"
  }
];

const statusColors: Record<string, string> = {
  pending: "bg-gray-200",
  review: "bg-blue-200",
  interview: "bg-yellow-200",
  offer: "bg-green-200",
  rejected: "bg-red-200"
};

const statusLabels: Record<string, { label: string, icon: React.ReactNode }> = {
  pending: { label: "Pendiente", icon: <Clock className="h-4 w-4" /> },
  review: { label: "En revisión", icon: <FileText className="h-4 w-4" /> },
  interview: { label: "Entrevista", icon: <CalendarClock className="h-4 w-4" /> },
  offer: { label: "Oferta", icon: <CheckCircle2 className="h-4 w-4" /> },
  rejected: { label: "Rechazado", icon: <XCircle className="h-4 w-4" /> }
};

const getStatusProgress = (status: string): number => {
  const statusValues: Record<string, number> = {
    pending: 20,
    review: 40,
    interview: 60,
    offer: 80,
    rejected: 100
  };
  return statusValues[status] || 0;
};

const MyApplications: React.FC = () => {
  const [selectedApplication, setSelectedApplication] = React.useState<JobApplication | null>(null);
  const [notes, setNotes] = React.useState("");

  const handleUpdateNotes = () => {
    toast.success("Notas actualizadas correctamente");
    setSelectedApplication(null);
  };

  if (applications.length === 0) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium">No tienes postulaciones activas</h3>
            <p className="mt-1 text-gray-500">Comienza aplicando a las ofertas de trabajo disponibles.</p>
            <Button className="mt-4" asChild>
              <a href="#listings">Ver Ofertas</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Resumen de Postulaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["pending", "review", "interview", "offer", "rejected"].map((status) => {
              const count = applications.filter(app => app.status === status).length;
              const { label, icon } = statusLabels[status];
              return (
                <Card key={status} className="p-3 text-center">
                  <div className="flex flex-col items-center">
                    <div className={`p-2 rounded-full mb-2 ${statusColors[status].replace('bg-', 'bg-opacity-20 bg-')}`}>
                      {React.cloneElement(icon as React.ReactElement, { 
                        className: `h-5 w-5 ${statusColors[status].replace('bg-', 'text-').replace('-200', '-700')}` 
                      })}
                    </div>
                    <div className="font-medium">{count}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Mis Postulaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Puesto</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Progreso</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.jobTitle}</TableCell>
                  <TableCell>{application.company}</TableCell>
                  <TableCell>{application.appliedDate}</TableCell>
                  <TableCell>
                    <Badge 
                      className={statusColors[application.status].replace('bg-', 'bg-opacity-20 bg-')} 
                      variant="outline"
                    >
                      {React.cloneElement(statusLabels[application.status].icon as React.ReactElement, { 
                        className: 'mr-1 h-3 w-3 inline' 
                      })}
                      {statusLabels[application.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="w-full">
                      <Progress 
                        value={getStatusProgress(application.status)} 
                        className={`h-2 ${
                          application.status === 'rejected' ? 'bg-red-100' : 'bg-blue-100'
                        }`}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => setSelectedApplication(application)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedApplication && (
        <Dialog open={!!selectedApplication} onOpenChange={(open) => !open && setSelectedApplication(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedApplication.jobTitle}</DialogTitle>
              <DialogDescription>{selectedApplication.company}</DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-1">Fecha de aplicación</div>
                  <div>{selectedApplication.appliedDate}</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Estado</div>
                  <Badge 
                    className={statusColors[selectedApplication.status].replace('bg-', 'bg-opacity-20 bg-')} 
                    variant="outline"
                  >
                    {statusLabels[selectedApplication.status].label}
                  </Badge>
                </div>
              </div>
              
              {selectedApplication.nextStep && (
                <div>
                  <div className="text-sm font-medium mb-1">Próximo paso</div>
                  <div className="text-sm">{selectedApplication.nextStep}</div>
                </div>
              )}
              
              <div>
                <div className="text-sm font-medium mb-1">Progreso</div>
                <div className="space-y-2">
                  <Progress 
                    value={getStatusProgress(selectedApplication.status)} 
                    className={`h-2 ${
                      selectedApplication.status === 'rejected' ? 'bg-red-100' : 'bg-blue-100'
                    }`}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Aplicación</span>
                    <span>Revisión</span>
                    <span>Entrevista</span>
                    <span>Oferta</span>
                    <span>Finalizado</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-1">Mis notas</div>
                <Textarea 
                  value={selectedApplication.notes || notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Agrega notas sobre esta aplicación..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedApplication(null)}>Cerrar</Button>
              <Button onClick={handleUpdateNotes}>Guardar Notas</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default MyApplications;
