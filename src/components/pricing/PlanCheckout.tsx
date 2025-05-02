
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Check, ArrowLeft, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PlanCheckoutProps {
  plan: any;
  open: boolean;
  onClose: () => void;
  onCompletePurchase: () => void;
}

const PlanCheckout: React.FC<PlanCheckoutProps> = ({ plan, open, onClose, onCompletePurchase }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: "",
    paymentMethod: "credit"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!plan) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, paymentMethod: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.cardName.trim()) {
      newErrors.cardName = "El nombre es requerido";
    }
    
    if (!formState.cardNumber.trim()) {
      newErrors.cardNumber = "El número de tarjeta es requerido";
    } else if (!/^\d{16}$/.test(formState.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = "Ingresa un número de tarjeta válido";
    }
    
    if (!formState.expiryDate.trim()) {
      newErrors.expiryDate = "La fecha de expiración es requerida";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formState.expiryDate)) {
      newErrors.expiryDate = "Formato inválido (MM/YY)";
    }
    
    if (!formState.cvv.trim()) {
      newErrors.cvv = "El código de seguridad es requerido";
    } else if (!/^\d{3,4}$/.test(formState.cvv)) {
      newErrors.cvv = "Ingresa un CVV válido";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate payment process
    setTimeout(() => {
      setIsSubmitting(false);
      onCompletePurchase();
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Checkout - Plan {plan.subtitle}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Información de pago</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="paymentMethod">Método de pago</Label>
                  <Select value={formState.paymentMethod} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un método de pago" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit">Tarjeta de crédito</SelectItem>
                      <SelectItem value="debit">Tarjeta de débito</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formState.cardName}
                    onChange={handleChange}
                    className={errors.cardName ? "border-red-500" : ""}
                  />
                  {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                </div>
                
                <div>
                  <Label htmlFor="cardNumber">Número de tarjeta</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formState.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className={errors.cardNumber ? "border-red-500" : ""}
                  />
                  {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiración (MM/YY)</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formState.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className={errors.expiryDate ? "border-red-500" : ""}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="cvv">Código de seguridad</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formState.cvv}
                      onChange={handleChange}
                      placeholder="CVV"
                      className={errors.cvv ? "border-red-500" : ""}
                    />
                    {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email para confirmación</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resumen del pedido</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex justify-between items-center font-medium">
                  <span>Plan {plan.subtitle}</span>
                  <span>S/{plan.price}</span>
                </div>
                
                <div className="text-sm text-gray-500 mt-1">
                  {plan.variant === "premium" ? "Suscripción anual" : "Pago único por curso"}
                </div>
                
                <Separator className="my-3" />
                
                <div className="text-sm space-y-2">
                  {plan.features.slice(0, 3).map((feature: any, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span>S/{plan.price}</span>
                </div>
                
                <div className="flex justify-between items-center mt-1">
                  <span>Impuestos</span>
                  <span>S/0.00</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between items-center font-bold">
                  <span>Total</span>
                  <span className="text-xl">S/{plan.price}</span>
                </div>
              </div>
              
              <Alert variant="default" className="mt-4 bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-700">
                  Tu plan se activará inmediatamente después de completar el pago.
                </AlertDescription>
              </Alert>
            </div>
          </div>
          
          <DialogFooter className="flex-col space-y-2 sm:space-y-0 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            
            <Button 
              type="submit"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Completar compra
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PlanCheckout;
