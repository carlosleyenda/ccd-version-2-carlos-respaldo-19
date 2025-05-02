
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, BookOpen, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PlanSuccessProps {
  plan: any;
  open: boolean;
  onClose: () => void;
}

const PlanSuccess: React.FC<PlanSuccessProps> = ({ plan, open, onClose }) => {
  const navigate = useNavigate();

  if (!plan) return null;

  const getColor = () => {
    switch (plan.variant) {
      case "basic":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "premium":
        return "text-teal-600 bg-teal-50 border-teal-200";
      case "professional":
        return "text-purple-600 bg-purple-50 border-purple-200";
      default:
        return "text-green-600 bg-green-50 border-green-200";
    }
  };
  
  const getButtonColor = () => {
    switch (plan.variant) {
      case "basic":
        return "bg-blue-600 hover:bg-blue-700";
      case "premium":
        return "bg-teal-600 hover:bg-teal-700";
      case "professional":
        return "bg-purple-600 hover:bg-purple-700";
      default:
        return "";
    }
  };

  const renderNextStepsItem = (icon: React.ReactNode, title: string, description: string) => (
    <div className="flex gap-3">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto text-center">
            <div className={`${getColor()} h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <DialogTitle className="text-2xl mb-2">¡Compra completada!</DialogTitle>
            <p className="text-gray-600">
              Tu suscripción al plan <span className="font-bold">{plan.subtitle}</span> ha sido activada correctamente.
            </p>
          </div>
        </DialogHeader>

        <div className="my-6 space-y-4">
          <h3 className="font-medium text-lg">Próximos pasos</h3>
          
          <div className="space-y-6">
            {renderNextStepsItem(
              <Calendar className="h-6 w-6 text-blue-600" />,
              "Explora tu calendario",
              "Revisa los próximos cursos y eventos disponibles para tu plan."
            )}
            
            {renderNextStepsItem(
              <BookOpen className="h-6 w-6 text-green-600" />,
              "Accede a tus cursos",
              "Comienza a aprender con los cursos incluidos en tu plan."
            )}
            
            {renderNextStepsItem(
              <FileCheck className="h-6 w-6 text-amber-600" />,
              "Obtén certificaciones",
              "Completa cursos para recibir certificados profesionales."
            )}
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Volver a planes
          </Button>
          
          <Button 
            onClick={() => navigate("/dashboard")}
            className={`w-full sm:w-auto ${getButtonColor()}`}
          >
            Ir al dashboard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PlanSuccess;
