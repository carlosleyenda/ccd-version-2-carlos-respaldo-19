
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
import { Award, Copy, Diamond, Share2, UserPlus, Users, DollarSign } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface ReferralSectionProps {
  userReferralCode?: string;
  totalEarned?: number;
  referralsCount?: number;
}

interface RewardFormValues {
  rewardType: "diamonds" | "cash";
}

export const ReferralSection = ({
  userReferralCode = "EDUTECH2024",
  totalEarned = 0,
  referralsCount = 0,
}: ReferralSectionProps) => {
  const form = useForm<RewardFormValues>({
    defaultValues: {
      rewardType: "diamonds",
    },
  });
  
  const copyReferralLink = () => {
    const referralLink = `https://edutech.com/r/${userReferralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast.success("Enlace de referido copiado al portapapeles", {
      description: "Ahora puedes compartirlo con tus contactos",
      duration: 3000,
    });
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Únete a EduTech - La plataforma líder de educación profesional",
        text: "¡Únete a EduTech con mi código de referido y obtén 30 soles de descuento en tu primera compra!",
        url: `https://edutech.com/r/${userReferralCode}`,
      })
      .then(() => toast.success("¡Gracias por compartir!", {
        description: "Tu invitación ha sido enviada correctamente",
      }))
      .catch((error) => {
        console.error("Error sharing:", error);
        copyReferralLink();
      });
    } else {
      copyReferralLink();
    }
  };

  const onRewardChange = (values: RewardFormValues) => {
    toast.success(
      `Preferencia actualizada: ${values.rewardType === "diamonds" ? "Diamantes" : "Efectivo"}`, 
      {
        description: values.rewardType === "diamonds" 
          ? "Tus recompensas se acreditarán como diamantes para usar en la plataforma" 
          : "Tus recompensas se aplicarán como descuento en futuras renovaciones",
      }
    );
  };

  return (
    <Card className="border-blue-200 shadow-md">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 pb-3">
        <div className="flex items-center">
          <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
          <CardTitle className="text-lg text-blue-700 dark:text-blue-300">Programa de Referidos</CardTitle>
        </div>
        <CardDescription className="text-blue-600/80 dark:text-blue-300/80">
          Refiere amigos y gana S/ 30.00 por cada registro completado
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 space-y-2">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">Tu código único de referido:</p>
          <div className="flex gap-2">
            <Input
              value={userReferralCode}
              readOnly
              className="bg-white dark:bg-blue-900/30 border-blue-200 font-medium text-center"
              aria-label="Tu código de referido"
            />
            <Button 
              variant="outline" 
              size="icon"
              className="shrink-0 border-blue-200 hover:bg-blue-100 hover:text-blue-700 transition-colors"
              onClick={copyReferralLink}
              aria-label="Copiar código de referido"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium mb-2">¿Cómo funciona?</p>
          <ol className="text-sm space-y-3 list-decimal pl-5">
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-blue-700 dark:text-blue-400">Comparte tu código único</span>
              <p className="text-xs text-gray-500 mt-0.5">Envía tu código personal a amigos interesados en la plataforma</p>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-blue-700 dark:text-blue-400">Tus amigos se registran</span>
              <p className="text-xs text-gray-500 mt-0.5">Cuando completen su registro usando tu código</p>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-blue-700 dark:text-blue-400">Ambos reciben beneficios</span>
              <p className="text-xs text-gray-500 mt-0.5">Tú recibes S/ 30.00 y tu amigo obtiene descuento en su primera compra</p>
            </li>
          </ol>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <span className="text-sm font-medium">{referralsCount} referidos</span>
              <p className="text-xs text-gray-500">acumulados</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Total ganado</p>
            <p className="font-semibold text-lg text-blue-700">S/ {totalEarned}.00</p>
          </div>
        </div>

        <Separator className="my-1" />
        
        <div>
          <p className="text-sm font-medium mb-3">Elige cómo recibir tus recompensas:</p>
          <Form {...form}>
            <form onChange={form.handleSubmit(onRewardChange)} className="space-y-2">
              <FormField
                control={form.control}
                name="rewardType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-2"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem 
                              value="diamonds" 
                              id="diamonds"
                              className="sr-only peer" 
                            />
                          </FormControl>
                          <label 
                            htmlFor="diamonds"
                            className="flex flex-col items-center justify-center w-full p-3 border border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:bg-gray-50 transition-all"
                          >
                            <Diamond className="h-5 w-5 mb-1 text-blue-600 peer-checked:text-blue-700" />
                            <span className="text-sm font-medium">Diamantes</span>
                            <span className="text-xs text-gray-500">Para usar en la plataforma</span>
                          </label>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem 
                              value="cash" 
                              id="cash"
                              className="sr-only peer" 
                            />
                          </FormControl>
                          <label 
                            htmlFor="cash"
                            className="flex flex-col items-center justify-center w-full p-3 border border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:bg-gray-50 transition-all"
                          >
                            <DollarSign className="h-5 w-5 mb-1 text-green-600 peer-checked:text-green-700" />
                            <span className="text-sm font-medium">Efectivo</span>
                            <span className="text-xs text-gray-500">Para futuras renovaciones</span>
                          </label>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-md">
          <p className="text-xs text-amber-700 dark:text-amber-300">
            <strong className="font-medium">Nota importante:</strong> Las recompensas se activan cuando tu referido completa el registro y realiza su primera compra en la plataforma.
          </p>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4 pb-3 flex flex-col space-y-2">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" 
          onClick={shareReferralLink}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Invitar amigos
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReferralSection;
