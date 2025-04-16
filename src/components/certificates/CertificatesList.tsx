
import { useState } from "react";
import { Award, Download, Calendar, ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

type Certificate = {
  id: string;
  title: string;
  issueDate: string;
  expiryDate?: string;
  course: string;
  instructor: string;
  type: "completed" | "in-progress" | "expired";
  image: string;
};

export const CertificatesList = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Mock certificates data - in a real app, this would come from an API
  const certificates: Certificate[] = [
    {
      id: "cert-1",
      title: "Diploma en Minería Subterránea",
      issueDate: "2024-02-15",
      course: "Técnicas Avanzadas de Minería Subterránea",
      instructor: "Dr. Carlos Rodríguez",
      type: "completed",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cert-2",
      title: "Certificado de Seguridad en Excavaciones",
      issueDate: "2023-11-10",
      expiryDate: "2025-11-10",
      course: "Seguridad y Prevención en Minería",
      instructor: "Ing. María Sánchez",
      type: "completed",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cert-3",
      title: "Gestión Ambiental Minera",
      issueDate: "2024-04-01",
      course: "Impacto Ambiental en Minería",
      instructor: "Dra. Ana Martínez",
      type: "in-progress",
      image: "https://images.unsplash.com/photo-1557434440-30fd8ae3d22e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cert-4",
      title: "Técnico en Topografía Minera",
      issueDate: "2022-09-15",
      expiryDate: "2024-03-15",
      course: "Topografía Avanzada para Minería",
      instructor: "Ing. Felipe Torres",
      type: "expired",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const filteredCertificates = activeTab === "all" 
    ? certificates 
    : certificates.filter(cert => cert.type === activeTab);

  const handleDownload = (id: string) => {
    toast.success("Descargando certificado...");
    // In a real app, this would trigger a download
  };

  const handleShare = (id: string) => {
    toast.success("Certificado compartido exitosamente");
    // In a real app, this would open a share dialog
  };

  const handleVerify = (id: string) => {
    toast.info("Verificando autenticidad del certificado...");
    // In a real app, this would verify the certificate
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mis Certificaciones</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Administra y descarga tus certificados y diplomas obtenidos
          </p>
        </div>
        <Button 
          className="mt-4 md:mt-0"
          onClick={() => toast.info("Las opciones de validación se abrirán en una nueva ventana")}
        >
          Validar certificados externos
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="completed">Completados</TabsTrigger>
          <TabsTrigger value="in-progress">En progreso</TabsTrigger>
          <TabsTrigger value="expired">Expirados</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab}>
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertificates.map((certificate) => (
                <Card key={certificate.id} className="group overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      {certificate.type === "completed" && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                          Completado
                        </span>
                      )}
                      {certificate.type === "in-progress" && (
                        <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                          En progreso
                        </span>
                      )}
                      {certificate.type === "expired" && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                          Expirado
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{certificate.title}</CardTitle>
                    <CardDescription>{certificate.course}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Instructor: {certificate.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Emitido: {new Date(certificate.issueDate).toLocaleDateString()}</span>
                      </div>
                      {certificate.expiryDate && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Expira: {new Date(certificate.expiryDate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between gap-2 flex-wrap">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDownload(certificate.id)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-xs">Descargar</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleVerify(certificate.id)}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-xs">Verificar</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No hay certificados disponibles</h3>
              <p className="text-gray-500 mb-6">
                No tienes certificados en esta categoría actualmente.
              </p>
              <Button onClick={() => setActiveTab("all")}>
                Ver todos los certificados
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
