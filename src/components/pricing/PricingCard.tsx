
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import { toast } from "sonner";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  originalPrice: string;
  price: string;
  features: PricingFeature[];
  variant: "basic" | "premium" | "professional";
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  originalPrice,
  price,
  features,
  variant,
  isPopular,
}) => {
  const getGradient = () => {
    switch (variant) {
      case "basic":
        return "bg-gradient-to-br from-blue-600 to-blue-400";
      case "premium":
        return "bg-gradient-to-br from-teal-500 to-cyan-400";
      case "professional":
        return "bg-gradient-to-br from-purple-600 to-purple-400";
    }
  };

  const handlePurchase = () => {
    toast.success(`Adquiriendo plan ${subtitle.toLowerCase()}`);
    // Aquí iría la lógica para procesar la compra
  };

  return (
    <div className={cn(
      "rounded-2xl p-6 flex flex-col h-full",
      getGradient(),
      "text-white shadow-xl relative"
    )}>
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <div className="bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-900" />
            MÁS RECOMENDADO
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-3xl font-bold mb-2">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="text-sm line-through opacity-75">S/{originalPrice}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-sm">S/</span>
          <span className="text-4xl font-bold">{price}</span>
          {variant !== "premium" ? (
            <span className="text-sm opacity-75">por curso</span>
          ) : (
            <span className="text-sm opacity-75">por año</span>
          )}
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <Button 
          variant={variant === "premium" ? "action" : variant === "professional" ? "join" : "default"}
          className="w-full"
          onClick={handlePurchase}
        >
          {variant === "premium" ? "Suscribirse" : "Comprar plan"}
        </Button>
        
        {variant === "basic" || variant === "professional" ? (
          <Button 
            variant="outline" 
            className="w-full border-white/30 hover:bg-white/10 text-white"
            onClick={() => toast.info(`Información adicional sobre el plan ${subtitle.toLowerCase()}`)}
          >
            Ver detalles
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="w-full border-white/30 hover:bg-white/10 text-white"
            onClick={() => toast.info("Comparativa de planes")}
          >
            Comparar planes
          </Button>
        )}
      </div>
    </div>
  );
}

export default PricingCard;
