
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const NotificationSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuración de Notificaciones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium mb-4">Alertas de Trading</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="price-alerts">Alertas de precio</Label>
              <Switch id="price-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="market-news">Noticias del mercado</Label>
              <Switch id="market-news" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="trading-signals">Señales de trading</Label>
              <Switch id="trading-signals" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="volatility-alerts">Alertas de volatilidad</Label>
              <Switch id="volatility-alerts" defaultChecked />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">Notificaciones de Cursos</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="course-updates">Actualizaciones de cursos</Label>
              <Switch id="course-updates" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="new-courses">Nuevos cursos disponibles</Label>
              <Switch id="new-courses" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="live-sessions">Sesiones en vivo</Label>
              <Switch id="live-sessions" defaultChecked />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">Comunicaciones</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Notificaciones por email</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Notificaciones push</Label>
              <Switch id="push-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">Notificaciones SMS</Label>
              <Switch id="sms-notifications" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
