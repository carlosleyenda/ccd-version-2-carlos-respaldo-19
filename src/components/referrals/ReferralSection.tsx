
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, Copy, Users } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

interface ReferralSectionProps {
  userReferralCode?: string;
  totalEarned?: number;
  referralsCount?: number;
}

export const ReferralSection = ({
  userReferralCode = "EDUTECH2024",
  totalEarned = 0,
  referralsCount = 0,
}: ReferralSectionProps) => {
  const [rewardOption, setRewardOption] = useState<"diamonds" | "cash">("diamonds");
  
  const copyReferralLink = () => {
    const referralLink = `https://edutech.com/r/${userReferralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast.success("Enlace de referido copiado al portapapeles");
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Únete a EduTech",
        text: "¡Únete a EduTech con mi código de referido y obtén 30 soles de descuento!",
        url: `https://edutech.com/r/${userReferralCode}`,
      })
      .then(() => toast.success("¡Gracias por compartir!"))
      .catch((error) => console.error("Error sharing:", error));
    } else {
      copyReferralLink();
    }
  };

  return (
    <Card className="border-blue-200">
      <CardHeader className="bg-blue-50 dark:bg-blue-900/30 pb-2">
        <div className="flex items-center">
          <UserPlus className="h-5 w-5 text-blue-600 mr-2" />
          <CardTitle className="text-lg text-blue-700 dark:text-blue-300">Programa de Referidos</CardTitle>
        </div>
        <CardDescription className="text-blue-600/80 dark:text-blue-300/80">
          Refiere amigos y gana 30 soles por cada uno
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3 space-y-2">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Tu código de referido:</p>
          <div className="flex gap-2">
            <Input
              value={userReferralCode}
              readOnly
              className="bg-white dark:bg-blue-900/30 border-blue-200"
            />
            <Button 
              variant="outline" 
              size="icon"
              className="shrink-0 border-blue-200 hover:bg-blue-100 hover:text-blue-700"
              onClick={copyReferralLink}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">¿Cómo funciona?</p>
          <ol className="text-sm space-y-2 list-decimal pl-5">
            <li>Comparte tu código único con amigos</li>
            <li>Cuando se registren usando tu código, recibirás 30 soles</li>
            <li>Acumula recompensas sin límite</li>
          </ol>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{referralsCount} referidos</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Total ganado</p>
            <p className="font-semibold text-blue-700">S/ {totalEarned}.00</p>
          </div>
        </div>

        <Separator />
        
        <div>
          <p className="text-sm font-medium mb-3">Selecciona tu recompensa:</p>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant={rewardOption === "diamonds" ? "default" : "outline"}
              size="sm"
              className={rewardOption === "diamonds" ? "bg-blue-600" : ""}
              onClick={() => setRewardOption("diamonds")}
            >
              Diamantes
            </Button>
            <Button 
              variant={rewardOption === "cash" ? "default" : "outline"}
              size="sm"
              className={rewardOption === "cash" ? "bg-blue-600" : ""}
              onClick={() => setRewardOption("cash")}
            >
              Efectivo
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {rewardOption === "diamonds" 
              ? "Los diamantes se pueden usar para comprar cursos y recursos." 
              : "El efectivo se aplicará a tus próximas renovaciones."}
          </p>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4 pb-3 flex flex-col space-y-2">
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={shareReferralLink}>
          <UserPlus className="h-4 w-4 mr-2" />
          Invitar amigos
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReferralSection;
