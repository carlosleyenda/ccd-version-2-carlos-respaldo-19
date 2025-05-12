
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
import { Award, Copy, Diamond, Share2, UserPlus, Users, DollarSign, Wallet } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ReferralSectionProps {
  userReferralCode?: string;
  totalEarned?: number;
  referralsCount?: number;
  directReferralsCount?: number;
  secondLevelCount?: number;
  thirdLevelCount?: number;
  withdrawableBalance?: number;
}

interface RewardFormValues {
  rewardType: "diamonds" | "cash";
}

interface WithdrawFormValues {
  amount: number;
  method: "bank" | "wallet";
}

export const ReferralSection = ({
  userReferralCode = "EDUTECH2024",
  totalEarned = 0,
  referralsCount = 0,
  directReferralsCount = 2,
  secondLevelCount = 3,
  thirdLevelCount = 5,
  withdrawableBalance = 60,
}: ReferralSectionProps) => {
  const form = useForm<RewardFormValues>({
    defaultValues: {
      rewardType: "diamonds",
    },
  });

  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(withdrawableBalance);
  const [withdrawMethod, setWithdrawMethod] = useState<"bank" | "wallet">("bank");
  
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

  const handleWithdrawRequest = () => {
    if (withdrawAmount <= 0 || withdrawAmount > withdrawableBalance) {
      toast.error("Monto inválido", {
        description: "Por favor ingresa un monto válido para retirar"
      });
      return;
    }

    toast.success("Solicitud de retiro enviada", {
      description: `Tu retiro de S/ ${withdrawAmount}.00 será procesado en los próximos días hábiles.`
    });
    setIsWithdrawDialogOpen(false);
  };

  return (
    <>
      <Card className="border-blue-200 shadow-md">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 pb-3">
          <div className="flex items-center">
            <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <CardTitle className="text-lg text-blue-700 dark:text-blue-300">Programa de Referidos</CardTitle>
          </div>
          <CardDescription className="text-blue-600/80 dark:text-blue-300/80">
            Sistema multinivel hasta 3 generaciones de comisiones
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
            <p className="text-sm font-medium mb-2">Sistema de comisiones multinivel</p>
            <ul className="text-sm space-y-3 list-none pl-0">
              <li className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="font-medium">Referidos directos</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">{directReferralsCount} personas</span>
                  <span className="font-medium text-green-600">S/ 30.00 c/u</span>
                </div>
              </li>
              <li className="flex items-center justify-between p-2 bg-blue-50/70 dark:bg-blue-900/10 rounded-md">
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="font-medium">2da generación</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">{secondLevelCount} personas</span>
                  <span className="font-medium text-green-600">S/ 6.00 c/u</span>
                </div>
              </li>
              <li className="flex items-center justify-between p-2 bg-blue-50/50 dark:bg-blue-900/5 rounded-md">
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="font-medium">3ra generación</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">{thirdLevelCount} personas</span>
                  <span className="font-medium text-green-600">S/ 1.00 c/u</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <span className="text-sm font-medium">{referralsCount} referidos</span>
                <p className="text-xs text-gray-500">en total</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end">
                <p className="text-xs text-gray-500 mr-1">Total ganado</p>
                <Wallet className="h-4 w-4 text-green-600" />
              </div>
              <p className="font-semibold text-lg text-blue-700">S/ {totalEarned}.00</p>
              <p className="text-xs text-green-600">
                S/ {withdrawableBalance}.00 disponible para retiro
              </p>
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

          <Button 
            onClick={() => setIsWithdrawDialogOpen(true)}
            className="w-full bg-green-600 hover:bg-green-700 transition-colors" 
            disabled={withdrawableBalance <= 0}
          >
            <Wallet className="h-4 w-4 mr-2" />
            Solicitar retiro (S/ {withdrawableBalance}.00)
          </Button>

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

      <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar Retiro</DialogTitle>
            <DialogDescription>
              Completa los datos para solicitar el retiro de tus ganancias. El proceso puede demorar hasta 3 días hábiles.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Método de retiro</label>
              <RadioGroup 
                value={withdrawMethod} 
                onValueChange={(value: "bank" | "wallet") => setWithdrawMethod(value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <label htmlFor="bank" className="text-sm font-medium">Cuenta bancaria</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <label htmlFor="wallet" className="text-sm font-medium">Billetera digital</label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Monto a retirar</label>
              <div className="flex items-center">
                <span className="bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md">S/</span>
                <Input 
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))}
                  min={1}
                  max={withdrawableBalance}
                  className="rounded-l-none"
                />
              </div>
              <p className="text-xs text-gray-500">Monto máximo: S/ {withdrawableBalance}.00</p>
            </div>

            {withdrawMethod === "bank" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Datos bancarios</label>
                <Input placeholder="Número de cuenta" className="mb-2" />
                <Input placeholder="Nombre del banco" />
              </div>
            )}

            {withdrawMethod === "wallet" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Billetera digital</label>
                <Input placeholder="Número de teléfono / Correo" />
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsWithdrawDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleWithdrawRequest} className="bg-green-600 hover:bg-green-700">
              Solicitar Retiro
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReferralSection;
