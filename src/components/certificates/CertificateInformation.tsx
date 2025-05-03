
import { Award, Calendar, FileCheck, BadgeCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";
import { PackageCheck } from "lucide-react";
import { Certificate } from "./types";

interface CertificateInformationProps {
  certificate: Certificate;
  onRenew: () => void;
  onRequestPhysical: () => void;
}

export const CertificateInformation = ({ certificate, onRenew, onRequestPhysical }: CertificateInformationProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Información General</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-3 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Instructor</p>
              <p>{certificate.instructor}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Fecha de emisión</p>
              <p>{new Date(certificate.issueDate).toLocaleDateString()}</p>
            </div>
          </div>
          {certificate.expiryDate && (
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Fecha de expiración</p>
                <p>{new Date(certificate.expiryDate).toLocaleDateString()}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-2">Detalles del Certificado</h3>
        <p className="text-sm text-gray-600 mb-4">
          Este certificado verifica que ha completado satisfactoriamente el curso 
          y ha demostrado dominio en todos los temas tratados durante el programa.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md border">
          <div className="flex items-center mb-2">
            <FileCheck className="h-5 w-5 mr-2 text-green-600" />
            <p className="font-medium">Verificación del Certificado</p>
          </div>
          <p className="text-sm text-gray-600">
            ID: {certificate.id}<br />
            Puede verificar la autenticidad de este certificado usando el ID único.
          </p>
        </div>
      </div>
      
      {certificate.type === "expired" && (
        <div className="bg-red-50 p-4 rounded-md border border-red-200">
          <h3 className="flex items-center text-red-800 font-medium mb-2">
            <Redo className="h-5 w-5 mr-2 text-red-600" />
            Certificado Expirado
          </h3>
          <p className="text-sm text-red-700 mb-3">
            Este certificado ha expirado. Puede renovarlo para mantener su validez
            por un período adicional de 12 meses.
          </p>
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={onRenew}
          >
            <Redo className="h-4 w-4 mr-2" />
            Renovar por S/99.00
          </Button>
        </div>
      )}
      
      {certificate.accredited && (
        <div className="bg-green-50 p-4 rounded-md border border-green-200">
          <h3 className="flex items-center text-green-800 font-medium mb-2">
            <BadgeCheck className="h-5 w-5 mr-2 text-green-600 fill-green-200" />
            Certificado Acreditado
          </h3>
          <p className="text-sm text-green-700 mb-1">
            Este certificado está acreditado por <strong>{certificate.accredited.organization}</strong>
          </p>
          <p className="text-sm text-green-700">
            ID de verificación: {certificate.accredited.verificationId}
          </p>
          <div className="mt-3">
            <Button 
              variant="outline"
              className="w-full border-green-200 bg-green-100 hover:bg-green-200 text-green-800"
              onClick={onRequestPhysical}
            >
              <PackageCheck className="h-4 w-4 mr-2" />
              Solicitar certificado físico
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
