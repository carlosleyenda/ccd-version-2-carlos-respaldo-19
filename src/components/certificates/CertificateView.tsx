
import { Award, Calendar, FileCheck, Download, BadgeCheck, Share2, ExternalLink, Redo, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Certificate } from "./types";
import { useState } from "react";
import { AlertDialogContent, AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog";

interface CertificateViewProps {
  certificate: Certificate | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestAccreditation: (certificate: Certificate) => void;
}

export const CertificateView = ({ 
  certificate, 
  open, 
  onOpenChange,
  onRequestAccreditation
}: CertificateViewProps) => {
  const [showRenewDialog, setShowRenewDialog] = useState(false);
  const [showPhysicalDialog, setShowPhysicalDialog] = useState(false);
  const [isRenewing, setIsRenewing] = useState(false);
  const [isRequestingPhysical, setIsRequestingPhysical] = useState(false);
  
  if (!certificate) return null;

  const handleDownload = () => {
    toast.success("Descargando certificado...");
    // In a real app, this would trigger a download
  };

  const handleShare = () => {
    toast.success("Certificado compartido exitosamente");
    // In a real app, this would open a share dialog
  };
  
  const handleVerify = () => {
    toast.info("Verificando autenticidad del certificado...");
    // In a real app, this would verify the certificate
  };
  
  const handleRenew = () => {
    setIsRenewing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRenewing(false);
      setShowRenewDialog(false);
      toast.success("¡Certificado renovado exitosamente!");
      onOpenChange(false);
    }, 1500);
  };
  
  const handleRequestPhysical = () => {
    setIsRequestingPhysical(true);
    // Simulate API call
    setTimeout(() => {
      setIsRequestingPhysical(false);
      setShowPhysicalDialog(false);
      toast.success("Solicitud de certificado físico enviada. Recibirás un correo con los detalles de envío.");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="mb-2">
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
            <h2 className="text-2xl md:text-3xl font-bold">{certificate.title}</h2>
            <p className="text-sm md:text-base opacity-90">{certificate.course}</p>
          </div>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle>Detalles del Certificado</DialogTitle>
            <DialogDescription>
              Información completa del certificado obtenido.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    onClick={() => setShowRenewDialog(true)}
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
                      onClick={() => setShowPhysicalDialog(true)}
                    >
                      <PackageCheck className="h-4 w-4 mr-2" />
                      Solicitar certificado físico
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden bg-gray-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Vista Previa del Certificado</h3>
                  <div className="aspect-[1.414/1] bg-white rounded-md border overflow-hidden">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="absolute inset-0 pointer-events-none">
                        <img 
                          src="/placeholder.svg" 
                          className="w-full h-full object-cover opacity-5" 
                          alt="Background pattern" 
                        />
                      </div>
                      <div className="relative z-10 mb-8">
                        <Award className="h-16 w-16 mx-auto text-orange-500 mb-4" />
                        <h2 className="text-xl font-serif font-bold">Certificado de Excelencia</h2>
                        <p className="text-sm text-gray-600 mt-1">Se otorga a</p>
                        <p className="text-lg font-medium mt-1">Carlos Gómez</p>
                      </div>
                      <div className="relative z-10 mb-8">
                        <p className="text-sm max-w-md">
                          Por haber completado satisfactoriamente el curso de:
                        </p>
                        <p className="text-lg font-bold mt-1">{certificate.title}</p>
                        <p className="text-xs mt-3">
                          Fecha de emisión: {new Date(certificate.issueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-12">
                        <div className="text-center">
                          <div className="h-px w-32 bg-gray-300 mb-2"></div>
                          <p className="text-xs">Instructor</p>
                        </div>
                        <div className="text-center">
                          <div className="h-px w-32 bg-gray-300 mb-2"></div>
                          <p className="text-xs">Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-100 border-t">
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-xs">Descargar</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      <span className="text-xs">Compartir</span>
                    </Button>
                  </div>
                </div>
              </div>

              {certificate.type === "completed" && !certificate.accredited && (
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <h3 className="flex items-center text-amber-800 font-medium mb-2">
                    <BadgeCheck className="h-5 w-5 mr-2 text-amber-600" />
                    Acreditación Profesional
                  </h3>
                  <p className="text-sm text-amber-700 mb-3">
                    Puede solicitar una acreditación oficial para este certificado a través 
                    de organizaciones profesionales reconocidas como CIP o PMI.
                  </p>
                  <Button 
                    variant="default" 
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={() => {
                      onOpenChange(false); 
                      setTimeout(() => onRequestAccreditation(certificate), 100);
                    }}
                  >
                    <BadgeCheck className="h-4 w-4 mr-2" />
                    Solicitar Acreditación
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
      
      {/* Renovar Certificado Dialog */}
      <AlertDialog open={showRenewDialog} onOpenChange={setShowRenewDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Renovar Certificado</AlertDialogTitle>
            <AlertDialogDescription>
              Está a punto de renovar el certificado <span className="font-medium">{certificate?.title}</span>. 
              La renovación extenderá la validez por 12 meses adicionales por un costo de S/99.00.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="bg-gray-50 p-4 rounded-lg border my-4">
            <h4 className="font-medium mb-2">Resumen de pago</h4>
            <div className="flex justify-between items-center">
              <span>Renovación de certificado</span>
              <span>S/99.00</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
              <span>Vigencia</span>
              <span>12 meses</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between items-center font-bold">
              <span>Total</span>
              <span>S/99.00</span>
            </div>
          </div>
          
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button 
              variant="default"
              onClick={handleRenew}
              disabled={isRenewing}
            >
              {isRenewing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                <>
                  <Redo className="h-4 w-4 mr-2" />
                  Confirmar renovación
                </>
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Solicitar Certificado Físico Dialog */}
      <AlertDialog open={showPhysicalDialog} onOpenChange={setShowPhysicalDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Solicitar Certificado Físico</AlertDialogTitle>
            <AlertDialogDescription>
              Solicite una versión física de su certificado acreditado que será enviada a su dirección postal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="space-y-4 my-4">
            <div className="bg-green-50 p-3 rounded border border-green-200 text-sm text-green-800">
              <p className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" />
                <span>
                  El certificado físico incluye sellos oficiales de {certificate?.accredited?.organization} y 
                  firmas autorizadas en papel de alta calidad.
                </span>
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium mb-3">Información importante</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>El tiempo estimado de entrega es de 10-15 días hábiles.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Se enviará a la dirección registrada en su perfil.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Recibirá un código de seguimiento por correo electrónico.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button 
              variant="default"
              onClick={handleRequestPhysical}
              disabled={isRequestingPhysical}
            >
              {isRequestingPhysical ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                <>
                  <PackageCheck className="h-4 w-4 mr-2" />
                  Confirmar solicitud
                </>
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  );
};
