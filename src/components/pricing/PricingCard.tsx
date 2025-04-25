
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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

  return (
    <div className={cn(
      "rounded-2xl p-6 flex flex-col h-full",
      getGradient(),
      "text-white shadow-xl"
    )}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-3xl font-bold mb-2">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="text-sm line-through opacity-75">S/{originalPrice}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-sm">S/</span>
          <span className="text-4xl font-bold">{price}</span>
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

      <Button 
        variant={variant === "premium" ? "action" : variant === "professional" ? "join" : "default"}
        className="w-full"
      >
        Adquirir plan
      </Button>
    </div>
  );
}

export default PricingCard;
