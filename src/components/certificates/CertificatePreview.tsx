
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

interface CertificatePreviewProps {
  title: string;
  issueDate: string;
  onDownload: () => void;
  onShare: () => void;
}

export const CertificatePreview = ({
  title,
  issueDate,
  onDownload,
  onShare,
}: CertificatePreviewProps) => {
  return (
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
              <p className="text-lg font-bold mt-1">{title}</p>
              <p className="text-xs mt-3">
                Fecha de emisión: {new Date(issueDate).toLocaleDateString()}
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
            onClick={onDownload}
          >
            <Download className="h-4 w-4 mr-1" />
            <span className="text-xs">Descargar</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={onShare}
          >
            <Share2 className="h-4 w-4 mr-1" />
            <span className="text-xs">Compartir</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
