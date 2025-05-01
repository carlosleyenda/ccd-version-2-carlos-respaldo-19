
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const NotificationSettings = () => {
  const form = useForm({
    defaultValues: {
      courseUpdates: true,
      newLessons: true,
      upcomingDeadlines: true,
      newCertificates: true,
      forumReplies: true,
      directMessages: true,
      newCourses: false,
      promotions: false,
      newsletter: false,
    },
  });

  const onSubmit = (data: any) => {
    toast.success("Preferencias de notificación actualizadas");
    console.log(data);
  };

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Notificaciones de plataforma</CardTitle>
          <CardDescription>Configura qué alertas quieres recibir dentro de la plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="courseUpdates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Actualizaciones de cursos
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Cambios en el contenido de los cursos a los que estás inscrito
                        </p>
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
                  name="newLessons"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Nuevas lecciones
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Notificaciones cuando se agreguen nuevas lecciones a tus cursos
                        </p>
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
                  name="upcomingDeadlines"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Fechas límite próximas
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Recordatorios de fechas límite de tareas y evaluaciones
                        </p>
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
                  name="newCertificates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Certificados disponibles
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Notificaciones cuando obtengas nuevos certificados
                        </p>
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
              </div>
              
              <CardTitle className="text-lg mt-6 mb-4">Notificaciones sociales</CardTitle>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="forumReplies"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Respuestas en foros
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Notificaciones cuando alguien responda a tus mensajes en foros
                        </p>
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
                  name="directMessages"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Mensajes directos
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Notificaciones cuando recibas mensajes privados
                        </p>
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
              </div>
              
              <CardTitle className="text-lg mt-6 mb-4">Notificaciones de marketing</CardTitle>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="newCourses"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Nuevos cursos
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Notificaciones cuando se lancen cursos de tu interés
                        </p>
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
                  name="promotions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Promociones y descuentos
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Recibe información sobre ofertas especiales
                        </p>
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
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Boletín mensual
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Resumen mensual de novedades y actualizaciones
                        </p>
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
              </div>
              
              <div className="flex justify-end mt-6">
                <Button type="submit">Guardar preferencias</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationSettings;
