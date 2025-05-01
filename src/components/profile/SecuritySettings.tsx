
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SecuritySettings = () => {
  const passwordForm = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const sessionsData = [
    { device: "Chrome en Windows 10", location: "Lima, Perú", lastActive: "Ahora", current: true },
    { device: "Firefox en macOS", location: "Arequipa, Perú", lastActive: "Hace 2 días", current: false },
    { device: "Safari en iPhone", location: "Lima, Perú", lastActive: "Hace 5 días", current: false },
  ];

  const handlePasswordChange = (data: any) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    
    toast.success("Contraseña actualizada correctamente");
    passwordForm.reset();
  };

  const handleEndSession = (index: number) => {
    toast.success("Sesión terminada correctamente");
  };

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Cambiar contraseña</CardTitle>
          <CardDescription>
            Actualiza tu contraseña para mantener segura tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(handlePasswordChange)} className="space-y-4">
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña actual</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nueva contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      La contraseña debe tener al menos 8 caracteres, incluir letras mayúsculas, minúsculas y números
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <FormField
                control={passwordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar nueva contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button type="submit">Actualizar contraseña</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Sesiones activas</CardTitle>
          <CardDescription>
            Dispositivos donde has iniciado sesión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {sessionsData.map((session, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{session.device}</span>
                    {session.current && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                        Actual
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Ubicación: {session.location}</p>
                    <p>Activo: {session.lastActive}</p>
                  </div>
                </div>
                {!session.current && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEndSession(index)}
                  >
                    Cerrar sesión
                  </Button>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              Cerrar todas las otras sesiones
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
