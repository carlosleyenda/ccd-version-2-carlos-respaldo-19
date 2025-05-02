
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Gem, User, ShoppingBag } from "lucide-react";

interface StoreSummaryProps {
  userData: {
    coins: number;
    name: string;
    level: string;
    recentPurchases: number;
  };
}

const StoreSummary = ({ userData }: StoreSummaryProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{userData.name}</h3>
            <p className="text-sm text-gray-500">{userData.level}</p>
          </div>
        </div>
        
        <Separator className="my-3" />
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Monedas disponibles</span>
              <span className="text-sm text-blue-600 font-semibold">{userData.coins}</span>
            </div>
            <div className="flex items-center">
              <Gem className="h-4 w-4 text-blue-500 mr-2" />
              <Progress value={userData.coins / 20} className="h-1.5" />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Último mes</span>
              <span className="text-sm text-gray-500">+120 monedas</span>
            </div>
            <div className="flex items-center">
              <Gem className="h-4 w-4 text-gray-400 mr-2" />
              <Progress value={60} className="h-1.5 bg-gray-100" />
            </div>
          </div>
          
          <div className="pt-2">
            <h4 className="text-sm font-medium mb-2">Historial de actividad</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-gray-500" />
                  <span>Compras recientes</span>
                </div>
                <span>{userData.recentPurchases}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gem className="h-4 w-4 text-gray-500" />
                  <span>Monedas gastadas</span>
                </div>
                <span>850</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gem className="h-4 w-4 text-gray-500" />
                  <span>Monedas ganadas</span>
                </div>
                <span>1410</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreSummary;
