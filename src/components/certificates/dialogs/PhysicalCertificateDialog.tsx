
import { Button } from "@/components/ui/button";
import { PackageCheck, BadgeCheck } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface PhysicalCertificateDialogProps {
  organization?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestPhysical: () => void;
  isRequestingPhysical: boolean;
}

export const PhysicalCertificateDialog = ({
  organization,
  open,
  onOpenChange,
  onRequestPhysical,
  isRequestingPhysical,
}: PhysicalCertificateDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
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
                El certificado físico incluye sellos oficiales de {organization} y 
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
            onClick={onRequestPhysical}
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
  );
};
