
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificatesEmptyStateProps {
  onViewAll: () => void;
}

export const CertificatesEmptyState = ({ onViewAll }: CertificatesEmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <Award className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium mb-2">No hay certificados disponibles</h3>
      <p className="text-gray-500 mb-6">
        No tienes certificados en esta categoría actualmente.
      </p>
      <Button onClick={onViewAll}>
        Ver todos los certificados
      </Button>
    </div>
  );
};
