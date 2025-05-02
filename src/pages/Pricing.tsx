
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PricingCard from "@/components/pricing/PricingCard";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import PlanCheckout from "@/components/pricing/PlanCheckout";
import PlanDetails from "@/components/pricing/PlanDetails";
import PlanSuccess from "@/components/pricing/PlanSuccess";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const plans = [
    {
      id: "basic",
      title: "Plan",
      subtitle: "BÁSICO",
      originalPrice: "1399.99",
      price: "699.99",
      variant: "basic" as const,
      features: [
        { text: "1 Curso en vivo" },
        { text: "1 Curso asincrónico" },
        { text: "2 Certificados de CCD" },
        { text: "Acceso a foros básicos" },
        { text: "Soporte por email" },
      ],
      additionalFeatures: [
        "Acceso a materiales descargables",
        "Participación en 1 evento mensual",
        "Evaluaciones básicas"
      ]
    },
    {
      id: "premium",
      title: "Plan",
      subtitle: "PREMIUM",
      originalPrice: "2999.99",
      price: "1499.99",
      variant: "premium" as const,
      isPopular: true,
      features: [
        { text: "1 Año de acceso total" },
        { text: "Más de 100 cursos" },
        { text: "Certificados ilimitados" },
        { text: "Acceso a comunidad exclusiva" },
        { text: "Soporte prioritario" },
      ],
      additionalFeatures: [
        "Acceso ilimitado a recursos premium",
        "Participación en todos los eventos",
        "Mentorías mensuales",
        "Evaluaciones avanzadas con feedback personalizado",
        "Descuentos en programas especiales"
      ]
    },
    {
      id: "professional",
      title: "Plan",
      subtitle: "PROFESIONAL",
      originalPrice: "1999.99",
      price: "999.99",
      variant: "professional" as const,
      features: [
        { text: "2 Cursos en vivo" },
        { text: "2 Cursos asincrónicos" },
        { text: "4 Certificados PMI" },
        { text: "Acceso a foros profesionales" },
        { text: "Soporte telefónico" },
      ],
      additionalFeatures: [
        "Materiales exclusivos para profesionales",
        "Participación en 2 eventos mensuales",
        "1 sesión de mentoría",
        "Evaluaciones profesionales con feedback",
        "Insignias de reconocimiento"
      ]
    },
  ];

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
    setShowDetails(true);
  };

  const handleClosePlanDetails = () => {
    setShowDetails(false);
    setSelectedPlan(null);
  };

  const handleProceedToCheckout = () => {
    setShowDetails(false);
    setShowCheckout(true);
  };

  const handleCompletePurchase = () => {
    setShowCheckout(false);
    setPurchaseCompleted(true);
    setShowSuccess(true);
    toast.success(`¡Tu suscripción al plan ${selectedPlan?.subtitle.toLowerCase()} ha sido activada!`);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setSelectedPlan(null);
  };

  return (
    <PageLayout 
      title="Planes de Suscripción" 
      subtitle="Elige el plan que mejor se adapte a tus necesidades"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <PricingCard 
            key={index} 
            {...plan}
            onPurchase={() => handleSelectPlan(plan)}
            onViewDetails={() => handleSelectPlan(plan)}
            isPurchased={purchaseCompleted && selectedPlan?.id === plan.id}
          />
        ))}
      </div>

      {/* Plan Details Dialog */}
      <PlanDetails 
        plan={selectedPlan} 
        open={showDetails} 
        onClose={handleClosePlanDetails} 
        onProceedToCheckout={handleProceedToCheckout} 
      />

      {/* Checkout Dialog */}
      <PlanCheckout 
        plan={selectedPlan} 
        open={showCheckout} 
        onClose={() => setShowCheckout(false)}
        onCompletePurchase={handleCompletePurchase}
      />

      {/* Success Dialog */}
      <PlanSuccess 
        plan={selectedPlan} 
        open={showSuccess} 
        onClose={handleCloseSuccess} 
      />
    </PageLayout>
  );
};

export default Pricing;
