
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PlanDetailsProps {
  plan: any;
  open: boolean;
  onClose: () => void;
  onProceedToCheckout: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, open, onClose, onProceedToCheckout }) => {
  if (!plan) return null;

  const getBgColor = () => {
    switch (plan.variant) {
      case "basic":
        return "bg-blue-50 border-blue-200";
      case "premium":
        return "bg-teal-50 border-teal-200";
      case "professional":
        return "bg-purple-50 border-purple-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getTextColor = () => {
    switch (plan.variant) {
      case "basic":
        return "text-blue-700";
      case "premium":
        return "text-teal-700";
      case "professional":
        return "text-purple-700";
      default:
        return "text-gray-700";
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
        return "bg-blue-600 hover:bg-blue-700";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Plan {plan.subtitle}</DialogTitle>
          <DialogDescription>
            Detalles completos del plan y características incluidas
          </DialogDescription>
        </DialogHeader>

        <div className={`${getBgColor()} p-4 rounded-lg border mt-4`}>
          <h3 className={`${getTextColor()} font-semibold text-lg`}>Características principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {plan.features.map((feature: any, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Check className={`h-5 w-5 ${getTextColor()}`} />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Características adicionales</h3>
          <ul className="space-y-2">
            {plan.additionalFeatures?.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border mt-4">
          <h3 className="font-semibold text-lg mb-3">Resumen de precios</h3>
          
          <div className="flex justify-between items-center">
            <span>Precio regular</span>
            <span className="line-through text-gray-500">S/{plan.originalPrice}</span>
          </div>
          
          <div className="flex justify-between items-center mt-1">
            <span>Descuento</span>
            <span className="text-green-600">-S/{(parseFloat(plan.originalPrice) - parseFloat(plan.price)).toFixed(2)}</span>
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex justify-between items-center font-bold">
            <span>Precio final</span>
            <span className="text-xl">S/{plan.price}</span>
          </div>
          
          {plan.variant !== "premium" && (
            <p className="text-sm text-gray-500 mt-1">Pago único por curso</p>
          )}
          {plan.variant === "premium" && (
            <p className="text-sm text-gray-500 mt-1">Suscripción anual (facturación única)</p>
          )}
        </div>

        <DialogFooter className="flex-col space-y-2 sm:space-y-0 mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Cancelar
          </Button>
          <Button 
            onClick={onProceedToCheckout}
            className={`w-full sm:w-auto ${getButtonColor()}`}
          >
            Continuar a pago
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PlanDetails;
