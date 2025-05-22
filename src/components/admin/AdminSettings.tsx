
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AdminSettings = () => {
  const handleSave = () => {
    toast.success("Configuración guardada con éxito", {
      description: "Los cambios han sido aplicados correctamente",
    });
  };
  
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="appearance">Apariencia</TabsTrigger>
        <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        <TabsTrigger value="security">Seguridad</TabsTrigger>
        <TabsTrigger value="integrations">Integraciones</TabsTrigger>
      </TabsList>
      
      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle>Configuración General</CardTitle>
            <CardDescription>
              Gestione la configuración básica de la plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform-name">Nombre de la Plataforma</Label>
              <Input id="platform-name" defaultValue="EduTech" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform-description">Descripción</Label>
              <Textarea 
                id="platform-description" 
                defaultValue="Plataforma líder en educación profesional especializada en ingeniería, minería y gestión."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email de Contacto</Label>
              <Input id="contact-email" type="email" defaultValue="contacto@edutech.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Zona Horaria</Label>
              <Select defaultValue="america_lima">
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Seleccionar zona horaria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america_lima">América/Lima (GMT-5)</SelectItem>
                  <SelectItem value="america_bogota">América/Bogotá (GMT-5)</SelectItem>
                  <SelectItem value="america_santiago">América/Santiago (GMT-4)</SelectItem>
                  <SelectItem value="america_mexico">América/México (GMT-6)</SelectItem>
                  <SelectItem value="europe_madrid">Europe/Madrid (GMT+1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="maintenance-mode">Modo de Mantenimiento</Label>
                <p className="text-sm text-gray-500">
                  Activa el modo de mantenimiento para mostrar una página temporal
                </p>
              </div>
              <Switch id="maintenance-mode" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="appearance">
        <Card>
          <CardHeader>
            <CardTitle>Apariencia</CardTitle>
            <CardDescription>
              Personalice la apariencia y el tema de la plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Tema Principal</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md p-2 flex items-center justify-center bg-white text-black hover:border-blue-500 cursor-pointer">
                  <span>Claro</span>
                </div>
                <div className="border rounded-md p-2 flex items-center justify-center bg-gray-900 text-white hover:border-blue-500 cursor-pointer">
                  <span>Oscuro</span>
                </div>
                <div className="border rounded-md p-2 flex items-center justify-center bg-gradient-to-r from-white to-gray-900 text-gray-800 hover:border-blue-500 cursor-pointer">
                  <span>Sistema</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="primary-color">Color Principal</Label>
              <div className="grid grid-cols-6 gap-2">
                <div className="h-10 rounded-md bg-blue-500 hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 cursor-pointer transition-all" />
                <div className="h-10 rounded-md bg-purple-500 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 cursor-pointer transition-all" />
                <div className="h-10 rounded-md bg-green-500 hover:ring-2 hover:ring-offset-2 hover:ring-green-500 cursor-pointer transition-all" />
                <div className="h-10 rounded-md bg-amber-500 hover:ring-2 hover:ring-offset-2 hover:ring-amber-500 cursor-pointer transition-all" />
                <div className="h-10 rounded-md bg-red-500 hover:ring-2 hover:ring-offset-2 hover:ring-red-500 cursor-pointer transition-all" />
                <div className="h-10 rounded-md bg-indigo-500 hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500 cursor-pointer transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="logo-upload">Logo (SVG, PNG o JPG)</Label>
              <Input id="logo-upload" type="file" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="favicon-upload">Favicon</Label>
              <Input id="favicon-upload" type="file" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="custom-css">CSS Personalizado</Label>
                <p className="text-sm text-gray-500">
                  Habilitar editor de CSS personalizado
                </p>
              </div>
              <Switch id="custom-css" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>
              Configure las notificaciones de la plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Notificaciones por Email</h3>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Nuevos Registros</Label>
                  <p className="text-sm text-gray-500">Notificar cuando un usuario nuevo se registra</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Nuevas Compras</Label>
                  <p className="text-sm text-gray-500">Notificar cuando se realiza una nueva compra</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Solicitudes de Retiros</Label>
                  <p className="text-sm text-gray-500">Notificar cuando se solicita un retiro de comisiones</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Nuevas Reseñas</Label>
                  <p className="text-sm text-gray-500">Notificar cuando un usuario deja una reseña</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <Label htmlFor="email-from">Email Remitente</Label>
              <Input id="email-from" defaultValue="notificaciones@edutech.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email-template">Plantilla de Email</Label>
              <Select defaultValue="default">
                <SelectTrigger id="email-template">
                  <SelectValue placeholder="Seleccionar plantilla" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Plantilla Predeterminada</SelectItem>
                  <SelectItem value="minimalist">Minimalista</SelectItem>
                  <SelectItem value="corporate">Corporativa</SelectItem>
                  <SelectItem value="modern">Moderna</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Seguridad</CardTitle>
            <CardDescription>
              Configure los ajustes de seguridad de la plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Autenticación de Dos Factores</Label>
                <p className="text-sm text-gray-500">Requerir 2FA para todos los administradores</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Límite de Intentos de Inicio de Sesión</Label>
                <p className="text-sm text-gray-500">Bloquear cuenta después de múltiples intentos fallidos</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Tiempo de Expiración de Sesión</Label>
              <Select defaultValue="60">
                <SelectTrigger id="session-timeout">
                  <SelectValue placeholder="Seleccionar tiempo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 minutos</SelectItem>
                  <SelectItem value="60">1 hora</SelectItem>
                  <SelectItem value="120">2 horas</SelectItem>
                  <SelectItem value="480">8 horas</SelectItem>
                  <SelectItem value="1440">24 horas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Historial de Acceso</Label>
                <p className="text-sm text-gray-500">Registrar historial de acceso de usuarios</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Política de Contraseñas Seguras</Label>
                <p className="text-sm text-gray-500">Requerir contraseñas fuertes (números, mayúsculas, símbolos)</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="integrations">
        <Card>
          <CardHeader>
            <CardTitle>Integraciones</CardTitle>
            <CardDescription>
              Conecte servicios externos a la plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border rounded-md p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-blue-500 flex items-center justify-center text-white font-bold mr-3">P</div>
                  <div>
                    <h3 className="font-medium">Pasarela de Pagos</h3>
                    <p className="text-sm text-gray-500">Configura tu pasarela de pagos preferida</p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="payment-api-key">API Key</Label>
                  <Input id="payment-api-key" type="password" placeholder="••••••••••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-secret">API Secret</Label>
                  <Input id="payment-secret" type="password" placeholder="••••••••••••••••" />
                </div>
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-green-500 flex items-center justify-center text-white font-bold mr-3">E</div>
                  <div>
                    <h3 className="font-medium">Email Marketing</h3>
                    <p className="text-sm text-gray-500">Integración con servicios de email marketing</p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="email-api-key">API Key</Label>
                  <Input id="email-api-key" placeholder="Ingrese su API key" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-list-id">ID de Lista</Label>
                  <Input id="email-list-id" placeholder="ID de lista predeterminada" />
                </div>
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-indigo-500 flex items-center justify-center text-white font-bold mr-3">A</div>
                  <div>
                    <h3 className="font-medium">Analítica Web</h3>
                    <p className="text-sm text-gray-500">Integración con servicios de analítica</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="analytics-id">ID de Seguimiento</Label>
                  <Input id="analytics-id" defaultValue="UA-123456789-1" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Seguimiento Avanzado</Label>
                    <p className="text-sm text-gray-500">Habilitar características avanzadas de seguimiento</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSave}>Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AdminSettings;
