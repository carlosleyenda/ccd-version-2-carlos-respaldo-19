
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
import { useCertificates } from "./hooks/useCertificates";
import { CertificatesEmptyState } from "./CertificatesEmptyState";

export const CertificatesList = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [showAccreditation, setShowAccreditation] = useState(false);
  const [showCertificateView, setShowCertificateView] = useState(false);
  
  const { certificates, filteredCertificates } = useCertificates(activeTab);

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
            <CertificatesEmptyState onViewAll={() => setActiveTab("all")} />
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
