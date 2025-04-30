
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const Store = () => {
  const userData = {
    coins: 560
  };

  const handleBuy = (productName: string, price: number) => {
    if (userData.coins >= price) {
      toast.success(`¡Has comprado ${productName}!`);
    } else {
      toast.error("No tienes suficientes monedas");
    }
  };

  return (
    <PageLayout title="Tienda" subtitle="Adquiere productos exclusivos con tus monedas de recompensa">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="text-xl font-bold">Tienda de Merchandising</h2>
        </div>
        <div className="flex items-center space-x-1">
          <Gem className="h-5 w-5 text-blue-500" />
          <span className="font-medium">{userData.coins} monedas disponibles</span>
        </div>
      </div>
      
      <Tabs defaultValue="clothing" className="w-full mb-8">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="clothing">Ropa</TabsTrigger>
          <TabsTrigger value="accessories">Accesorios</TabsTrigger>
          <TabsTrigger value="stationery">Papelería</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
        </TabsList>
        
        <TabsContent value="clothing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Clothing items */}
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Sudadera"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Sudadera Premium</h3>
                  <Badge variant="outline">Popular</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Sudadera con logo institucional bordado en alta calidad</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">650</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Sudadera Premium", 650)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Polo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">Polo Técnico</h3>
                  <Badge variant="outline">Nuevo</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Polo deportivo con tecnología de secado rápido</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">450</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Polo Técnico", 450)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Gorra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Gorra Institucional</h3>
                <p className="text-sm text-muted-foreground mb-3">Gorra ajustable con logo bordado</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">300</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Gorra Institucional", 300)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="accessories" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Accessories */}
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618354691438-25bc04aa15ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Mochila"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Mochila Técnica</h3>
                <p className="text-sm text-muted-foreground mb-3">Mochila resistente para equipos</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">800</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Mochila Técnica", 800)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Taza"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Taza Temática</h3>
                <p className="text-sm text-muted-foreground mb-3">Taza de cerámica de alta calidad</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">200</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Taza Temática", 200)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612444530582-fc66183b16f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Llavero"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Llavero Metálico</h3>
                <p className="text-sm text-muted-foreground mb-3">Llavero metálico con diseño exclusivo</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">150</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Llavero Metálico", 150)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="stationery">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stationery */}
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Set de Escritorio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Set de Escritorio</h3>
                <p className="text-sm text-muted-foreground mb-3">Kit completo de papelería</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">450</span>
                  </div>
                  <Button size="sm" onClick={() => handleBuy("Set de Escritorio", 450)}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="digital">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Digital Items */}
            <Card className="overflow-hidden">
              <div className="h-64 overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <Gem className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Paquete de 500 Monedas</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Monedas Premium</h3>
                <p className="text-sm text-muted-foreground mb-3">Obtén 500 monedas para usar en la plataforma</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">$9.99 USD</span>
                  </div>
                  <Button size="sm" onClick={() => toast.success("Redirigiendo a pasarela de pago...")}>
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Store;
