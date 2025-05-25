
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const AccountSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Cuenta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input id="username" defaultValue="trader_juan" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timezone">Zona horaria</Label>
            <Select defaultValue="america/mexico">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="america/mexico">América/México</SelectItem>
                <SelectItem value="america/new_york">América/Nueva York</SelectItem>
                <SelectItem value="europe/london">Europa/Londres</SelectItem>
                <SelectItem value="asia/tokyo">Asia/Tokio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Moneda preferida</Label>
            <Select defaultValue="usd">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD - Dólar Americano</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="mxn">MXN - Peso Mexicano</SelectItem>
                <SelectItem value="btc">BTC - Bitcoin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-verification" className="cursor-pointer">
              Verificación de email en dos pasos
            </Label>
            <Switch id="email-verification" />
          </div>

          <Button>Actualizar Configuración</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferencias de Trading</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="risk-level">Nivel de riesgo</Label>
            <Select defaultValue="moderate">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conservative">Conservador</SelectItem>
                <SelectItem value="moderate">Moderado</SelectItem>
                <SelectItem value="aggressive">Agresivo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="trading-style">Estilo de trading</Label>
            <Select defaultValue="swing">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="scalping">Scalping</SelectItem>
                <SelectItem value="day">Day Trading</SelectItem>
                <SelectItem value="swing">Swing Trading</SelectItem>
                <SelectItem value="position">Position Trading</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
