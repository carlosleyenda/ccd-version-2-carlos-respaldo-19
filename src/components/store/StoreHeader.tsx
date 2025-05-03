
import React from "react";
import { Gem, ShoppingBag, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoreHeaderProps {
  userCoins: number;
}

const StoreHeader = ({ userCoins }: StoreHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center space-x-2">
        <ShoppingBag className="h-5 w-5" />
        <h2 className="text-xl font-bold">Tienda de Merchandising</h2>
      </div>
      <div className="flex items-center space-x-1 bg-primary/5 px-4 py-2 rounded-full">
        <Gem className="h-5 w-5 text-blue-500" />
        <span className="font-medium">{userCoins} monedas disponibles</span>
        <Button variant="outline" size="sm" className="ml-2">
          <CreditCard className="h-4 w-4 mr-1" />
          <span>Obtener más</span>
        </Button>
      </div>
    </div>
  );
};

export default StoreHeader;
