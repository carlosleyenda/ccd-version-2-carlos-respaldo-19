
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AccountSettings = () => {
  const form = useForm({
    defaultValues: {
      language: "Español",
      timezone: "UTC-05:00 (América/Lima)",
      twoFactor: false,
      emailNotifications: true,
      marketingEmails: false,
    },
  });

  const onSubmit = (data: any) => {
    toast.success("Configuración de cuenta actualizada");
    console.log(data);
  };

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Preferencias generales</CardTitle>
          <CardDescription>
            Configura las preferencias básicas de tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Idioma</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Idioma preferido para la interfaz de la plataforma
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="timezone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zona horaria</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Zona horaria para programación de actividades
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="twoFactor"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Autenticación de dos factores
                      </FormLabel>
                      <FormDescription>
                        Aumenta la seguridad de tu cuenta con verificación adicional
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="emailNotifications"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Notificaciones por correo
                      </FormLabel>
                      <FormDescription>
                        Recibe actualizaciones sobre tus cursos y actividades
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="marketingEmails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Correos promocionales
                      </FormLabel>
                      <FormDescription>
                        Recibe ofertas, descuentos y novedades de la plataforma
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button type="submit">Guardar cambios</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="border-red-200">
        <CardHeader className="text-red-600">
          <CardTitle>Zona de peligro</CardTitle>
          <CardDescription className="text-red-500">
            Las acciones a continuación no se pueden deshacer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h4 className="font-medium">Eliminar todos los datos de progreso</h4>
              <p className="text-sm text-gray-500">
                Esta acción eliminará permanentemente todo tu avance en los cursos, pero mantendrá tu cuenta activa.
              </p>
              <div className="flex justify-start">
                <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                  Eliminar progreso
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <h4 className="font-medium">Eliminar cuenta</h4>
              <p className="text-sm text-gray-500">
                Esta acción eliminará permanentemente tu cuenta y todos los datos asociados. Esta acción no se puede deshacer.
              </p>
              <div className="flex justify-start">
                <Button variant="destructive">
                  Eliminar cuenta permanentemente
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
