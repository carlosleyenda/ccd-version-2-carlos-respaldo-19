
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PackageCheck, BadgeCheck, Truck, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
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
  onRequestPhysical: (shippingOption: string, cost: number) => void;
  isRequestingPhysical: boolean;
}

export const PhysicalCertificateDialog = ({
  organization,
  open,
  onOpenChange,
  onRequestPhysical,
  isRequestingPhysical,
}: PhysicalCertificateDialogProps) => {
  const [selectedShipping, setSelectedShipping] = useState<string>("");
  
  const shippingOptions = [
    { id: "lima", name: "Lima Metropolitana", cost: 8, days: "2-3 días hábiles" },
    { id: "provincial", name: "Provincias", cost: 15, days: "5-7 días hábiles" },
    { id: "express", name: "Envío Express Nacional", cost: 25, days: "1-2 días hábiles" },
    { id: "international", name: "Envío Internacional", cost: 30, days: "10-15 días hábiles" },
  ];

  const selectedOption = shippingOptions.find(opt => opt.id === selectedShipping);

  const handleConfirm = () => {
    if (selectedOption) {
      onRequestPhysical(selectedOption.name, selectedOption.cost);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Solicitar Certificado Físico</AlertDialogTitle>
          <AlertDialogDescription>
            Solicite una versión física de su certificado acreditado que será enviada a su dirección postal.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="space-y-6 my-4">
          <div className="bg-green-50 p-3 rounded border border-green-200 text-sm text-green-800">
            <p className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" />
              <span>
                El certificado físico incluye sellos oficiales de {organization} y 
                firmas autorizadas en papel de alta calidad.
              </span>
            </p>
          </div>

          <div>
            <Label htmlFor="shipping">Seleccione el tipo de envío</Label>
            <Select value={selectedShipping} onValueChange={setSelectedShipping}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Seleccionar opción de envío" />
              </SelectTrigger>
              <SelectContent>
                {shippingOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{option.name}</span>
                      <span className="ml-4 font-semibold">S/ {option.cost}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedOption && (
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-blue-900">Resumen del envío</h4>
                    <span className="text-2xl font-bold text-blue-900">S/ {selectedOption.cost}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-blue-800">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedOption.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-800">
                      <Truck className="h-4 w-4" />
                      <span>{selectedOption.days}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-blue-700 bg-blue-100 p-2 rounded">
                    <strong>Nota:</strong> El costo incluye empaque especial, seguro y rastreo.
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium mb-3">Información importante</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Se enviará a la dirección registrada en su perfil.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Recibirá un código de seguimiento por correo electrónico.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>El pago se procesará al confirmar la solicitud.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <Button 
            variant="default"
            onClick={handleConfirm}
            disabled={isRequestingPhysical || !selectedShipping}
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
                Confirmar solicitud {selectedOption && `(S/ ${selectedOption.cost})`}
              </>
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
