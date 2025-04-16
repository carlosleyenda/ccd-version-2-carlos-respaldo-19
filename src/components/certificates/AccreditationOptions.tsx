
import { useState } from "react";
import { BadgeCheck, CreditCard, FileCheck, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

type AccreditationFormValues = {
  paymentMethod: "card" | "transfer";
};

export type AccreditationOption = {
  id: string;
  name: string;
  organization: string;
  description: string;
  cost: number;
  currency: string;
  icon: JSX.Element;
};

interface AccreditationOptionsProps {
  certificateId: string;
  certificateTitle: string;
}

export const AccreditationOptions = ({ certificateId, certificateTitle }: AccreditationOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<AccreditationOption | null>(null);
  const [open, setOpen] = useState(false);
  const [successfulAccreditation, setSuccessfulAccreditation] = useState<AccreditationOption | null>(null);
  
  const form = useForm<AccreditationFormValues>({
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const accreditationOptions: AccreditationOption[] = [
    {
      id: "cip",
      name: "CIP Acreditación",
      organization: "Colegio de Ingenieros del Perú",
      description: "Certifica tus conocimientos a nivel nacional con el respaldo del Colegio de Ingenieros del Perú.",
      cost: 130,
      currency: "PEN",
      icon: <BadgeCheck className="h-10 w-10 text-engineering-600" />,
    },
    {
      id: "pmi",
      name: "PMI Acreditación",
      organization: "Project Management Institute",
      description: "Obtén una certificación reconocida internacionalmente por el Project Management Institute.",
      cost: 300,
      currency: "PEN",
      icon: <FileCheck className="h-10 w-10 text-management-600" />,
    },
  ];

  const handleSelectOption = (option: AccreditationOption) => {
    setSelectedOption(option);
    setOpen(true);
  };

  const handleSubmit = form.handleSubmit((data) => {
    toast.success(`Solicitud de acreditación enviada con éxito. Método de pago: ${data.paymentMethod === "card" ? "Tarjeta" : "Transferencia"}`);
    setOpen(false);
    // In a real app, we would send this to the backend and then update the UI after a successful response
    setSuccessfulAccreditation(selectedOption);
  });

  if (successfulAccreditation) {
    return (
      <div className="py-4">
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-3 text-lg font-medium text-green-800">¡Acreditación en proceso!</h3>
          <p className="mt-2 text-sm text-green-700">
            Tu solicitud de acreditación con {successfulAccreditation.organization} ha sido enviada correctamente. 
            Recibirás más información sobre el proceso por correo electrónico.
          </p>
          <div className="mt-4">
            <div className="rounded-md bg-white p-4 shadow-sm border">
              <div className="flex">
                {successfulAccreditation.icon}
                <div className="ml-3 text-left">
                  <h4 className="text-sm font-medium text-gray-900">{successfulAccreditation.name}</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Certificado: {certificateTitle}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Costo: {successfulAccreditation.cost.toLocaleString("es-PE")} {successfulAccreditation.currency}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button 
              onClick={() => setSuccessfulAccreditation(null)} 
              variant="outline"
            >
              Solicitar otra acreditación
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Opciones de Acreditación</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accreditationOptions.map((option) => (
          <Card key={option.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{option.name}</CardTitle>
                  <CardDescription>{option.organization}</CardDescription>
                </div>
                {option.icon}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {option.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-lg">
                    {option.cost.toLocaleString("es-PE")} {option.currency}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSelectOption(option)} 
                className="w-full" 
                variant="default"
              >
                Solicitar Acreditación
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Solicitar Acreditación</DialogTitle>
            <DialogDescription>
              Completa los detalles para solicitar la acreditación de tu certificado con {selectedOption?.organization}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="rounded-md bg-amber-50 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-amber-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800">Información importante</h3>
                  <div className="mt-2 text-sm text-amber-700">
                    <p>
                      Esta acreditación aplicará al certificado: <span className="font-medium">{certificateTitle}</span>. 
                      El costo es de {selectedOption?.cost.toLocaleString("es-PE")} {selectedOption?.currency}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Método de pago</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Tarjeta de crédito/débito</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="transfer" id="transfer" />
                            <Label htmlFor="transfer">Transferencia bancaria</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormDescription>
                        Se te proporcionarán los detalles de pago después de enviar esta solicitud.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <DialogFooter>
                  <Button type="submit" className="w-full">Continuar con el pago</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
