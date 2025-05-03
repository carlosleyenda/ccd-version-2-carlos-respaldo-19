
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { Certificate } from "./types";

interface AccreditationBannerProps {
  certificate: Certificate;
  onRequestAccreditation: (certificate: Certificate) => void;
  onClose: () => void;
}

export const AccreditationBanner = ({ certificate, onRequestAccreditation, onClose }: AccreditationBannerProps) => {
  if (certificate.type !== "completed" || certificate.accredited) {
    return null;
  }
  
  return (
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
          onClose();
          setTimeout(() => onRequestAccreditation(certificate), 100);
        }}
      >
        <BadgeCheck className="h-4 w-4 mr-2" />
        Solicitar Acreditación
      </Button>
    </div>
  );
};
