
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, Key, Smartphone, AlertTriangle } from "lucide-react";

const SecuritySettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="h-5 w-5 mr-2" />
            Cambiar Contraseña
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Contraseña actual</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">Nueva contraseña</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Cambiar Contraseña</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Smartphone className="h-5 w-5 mr-2" />
            Autenticación de Dos Factores
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Activar 2FA</Label>
              <p className="text-sm text-gray-600">
                Añade una capa extra de seguridad a tu cuenta
              </p>
            </div>
            <Switch />
          </div>
          <Button variant="outline">Configurar Aplicación de Autenticación</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Configuración de Seguridad
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-alerts">Alertas de inicio de sesión</Label>
            <Switch id="login-alerts" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="device-tracking">Seguimiento de dispositivos</Label>
            <Switch id="device-tracking" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="api-access">Acceso API habilitado</Label>
            <Switch id="api-access" />
          </div>
          <Button variant="outline">Ver Dispositivos Activos</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-red-600">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Zona de Peligro
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Eliminar cuenta</h4>
            <p className="text-sm text-gray-600 mb-4">
              Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten cuidado.
            </p>
            <Button variant="destructive">Eliminar mi cuenta</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
