
import { useState } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { AccreditationOptions } from "./AccreditationOptions";
import { CertificateCard } from "./CertificateCard";
import { CertificateView } from "./CertificateView";
import { Certificate } from "./types";

export const CertificatesList = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [showAccreditation, setShowAccreditation] = useState(false);
  const [showCertificateView, setShowCertificateView] = useState(false);
  
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
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
      accredited: {
        organization: "CIP",
        accreditationDate: "2023-12-05",
        verificationId: "CIP-2023-1235"
      }
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

  const handleViewDetails = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setShowCertificateView(true);
  };

  const handleOpenAccreditation = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setShowAccreditation(true);
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
                <CertificateCard 
                  key={certificate.id}
                  certificate={certificate}
                  onViewDetails={handleViewDetails}
                  onRequestAccreditation={handleOpenAccreditation}
                />
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

      {/* Certificate detail view */}
      <CertificateView 
        certificate={selectedCertificate}
        open={showCertificateView}
        onOpenChange={setShowCertificateView}
        onRequestAccreditation={handleOpenAccreditation}
      />

      {/* Accreditation Dialog */}
      <Dialog open={showAccreditation} onOpenChange={setShowAccreditation}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Solicitar Acreditación Profesional</DialogTitle>
            <DialogDescription>
              Elija una organización para acreditar su certificado y obtener reconocimiento profesional.
            </DialogDescription>
          </DialogHeader>
          {selectedCertificate && (
            <AccreditationOptions 
              certificateId={selectedCertificate.id}
              certificateTitle={selectedCertificate.title}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
