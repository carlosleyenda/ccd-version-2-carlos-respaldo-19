
import { useState } from "react";
import { Award, Download, Calendar, ExternalLink, BadgeCheck } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Certificate } from "./types";

interface CertificateCardProps {
  certificate: Certificate;
  onViewDetails: (certificate: Certificate) => void;
  onRequestAccreditation: (certificate: Certificate) => void;
}

export const CertificateCard = ({ 
  certificate, 
  onViewDetails, 
  onRequestAccreditation 
}: CertificateCardProps) => {
  
  const handleDownload = (id: string) => {
    toast.success("Descargando certificado...");
    // In a real app, this would trigger a download
  };

  const handleVerify = (id: string) => {
    toast.info("Verificando autenticidad del certificado...");
    // In a real app, this would verify the certificate
  };

  return (
    <Card key={certificate.id} className="group overflow-hidden transition-all hover:shadow-md">
      <div 
        className="relative h-48 overflow-hidden cursor-pointer" 
        onClick={() => onViewDetails(certificate)}
      >
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
      
      <CardFooter className="flex flex-wrap gap-2">
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
        {certificate.type === "completed" && (
          <Button 
            variant="default" 
            size="sm" 
            className="w-full mt-2"
            onClick={() => onRequestAccreditation(certificate)}
          >
            <BadgeCheck className="h-4 w-4 mr-1" />
            <span className="text-xs">Solicitar Acreditación</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
