
import { Button } from "@/components/ui/button";
import { Redo } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  AlertDialog, 
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface RenewCertificateDialogProps {
  certificateTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRenew: () => void;
  isRenewing: boolean;
}

export const RenewCertificateDialog = ({
  certificateTitle,
  open,
  onOpenChange,
  onRenew,
  isRenewing,
}: RenewCertificateDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Renovar Certificado</AlertDialogTitle>
          <AlertDialogDescription>
            Está a punto de renovar el certificado <span className="font-medium">{certificateTitle}</span>. 
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
            onClick={onRenew}
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
  );
};
