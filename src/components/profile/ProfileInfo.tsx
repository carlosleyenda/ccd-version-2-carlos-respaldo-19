
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const ProfileInfo = () => {
  const defaultValues = {
    name: "Juan Pérez",
    email: "jperez@ejemplo.com",
    position: "Ingeniero Civil",
    company: "Minera XYZ",
    location: "Lima, Perú",
    bio: "Ingeniero con 5 años de experiencia en proyectos mineros y certificaciones en gestión de proyectos.",
  };

  const form = useForm({
    defaultValues,
  });

  const onSubmit = (data: typeof defaultValues) => {
    toast.success("Perfil actualizado correctamente");
    console.log(data);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">Cambiar foto</Button>
        </div>
        
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input {...field} readOnly />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ubicación</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biografía</FormLabel>
                    <FormControl>
                      <textarea 
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                        {...field}
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
        </div>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Certificaciones y logros</h3>
          <ul className="space-y-3">
            {[
              { name: "Gestión Avanzada de Proyectos Mineros", date: "Abr 2024" },
              { name: "Seguridad en Operaciones de Excavación", date: "Sep 2023" },
              { name: "Curso Especializado en Metalurgia", date: "Ene 2023" }
            ].map((cert, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
                <Button variant="ghost" size="sm">Ver</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileInfo;
