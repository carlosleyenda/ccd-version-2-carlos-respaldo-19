
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PricingCard from "@/components/pricing/PricingCard";

const Pricing = () => {
  const plans = [
    {
      title: "Plan",
      subtitle: "BÁSICO",
      originalPrice: "1399.99",
      price: "699.99",
      variant: "basic" as const,
      features: [
        { text: "1 Curso en vivo" },
        { text: "1 Curso asincrónico" },
        { text: "2 Certificados de CCD" },
      ],
    },
    {
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
      ],
    },
    {
      title: "Plan",
      subtitle: "PROFESIONAL",
      originalPrice: "1999.99",
      price: "999.99",
      variant: "professional" as const,
      features: [
        { text: "2 Cursos en vivo" },
        { text: "2 Cursos asincrónicos" },
        { text: "4 Certificados PMI" },
      ],
    },
  ];

  return (
    <PageLayout 
      title="Planes de Suscripción" 
      subtitle="Elige el plan que mejor se adapte a tus necesidades"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Pricing;
