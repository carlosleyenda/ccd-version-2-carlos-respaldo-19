
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";

const ProfileInfo: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              variant="outline"
              className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full p-0"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Juan Pérez</h3>
            <p className="text-sm text-gray-600">Trader Profesional</p>
            <p className="text-sm text-gray-500">Miembro desde Enero 2023</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" defaultValue="Juan" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" defaultValue="Pérez" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="juan.perez@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" defaultValue="+52 55 1234 5678" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Biografía</Label>
          <Textarea
            id="bio"
            placeholder="Cuéntanos sobre tu experiencia en trading..."
            defaultValue="Trader con 5 años de experiencia en mercados de Forex y criptomonedas. Especializado en análisis técnico y estrategias de swing trading."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experiencia en Trading</Label>
          <Input id="experience" defaultValue="5 años" />
        </div>

        <Button className="w-full md:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Guardar Cambios
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
