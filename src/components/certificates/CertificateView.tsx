
import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Certificate } from "./types";
import { CertificateHeader } from "./CertificateHeader";
import { CertificateInformation } from "./CertificateInformation";
import { CertificatePreview } from "./CertificatePreview";
import { AccreditationBanner } from "./AccreditationBanner";
import { RenewCertificateDialog } from "./dialogs/RenewCertificateDialog";
import { PhysicalCertificateDialog } from "./dialogs/PhysicalCertificateDialog";

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
  
  const handleRequestPhysical = (shippingOption: string, cost: number) => {
    setIsRequestingPhysical(true);
    // Simulate API call
    setTimeout(() => {
      setIsRequestingPhysical(false);
      setShowPhysicalDialog(false);
      toast.success(`Solicitud de certificado físico confirmada. Envío: ${shippingOption} - Costo: S/ ${cost}. Recibirás un correo con los detalles de pago y envío.`);
    }, 1500);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <CertificateHeader 
            image={certificate.image}
            title={certificate.title}
            course={certificate.course}
            type={certificate.type}
          />

          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Detalles del Certificado</h2>
              <p className="text-sm text-gray-600">
                Información completa del certificado obtenido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CertificateInformation 
                certificate={certificate}
                onRenew={() => setShowRenewDialog(true)}
                onRequestPhysical={() => setShowPhysicalDialog(true)}
              />

              <div className="space-y-4">
                <CertificatePreview 
                  title={certificate.title}
                  issueDate={certificate.issueDate}
                  onDownload={handleDownload}
                  onShare={handleShare}
                />

                <AccreditationBanner 
                  certificate={certificate}
                  onRequestAccreditation={onRequestAccreditation}
                  onClose={() => onOpenChange(false)}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <RenewCertificateDialog 
        certificateTitle={certificate.title}
        open={showRenewDialog}
        onOpenChange={setShowRenewDialog}
        onRenew={handleRenew}
        isRenewing={isRenewing}
      />
      
      <PhysicalCertificateDialog
        organization={certificate.accredited?.organization}
        open={showPhysicalDialog}
        onOpenChange={setShowPhysicalDialog}
        onRequestPhysical={handleRequestPhysical}
        isRequestingPhysical={isRequestingPhysical}
      />
    </>
  );
};
