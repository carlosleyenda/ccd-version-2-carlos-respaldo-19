
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, ShoppingBag, Search, Filter, CreditCard } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import StoreProducts from "@/components/store/StoreProducts";
import { storeCategories, storeProducts } from "@/components/store/storeData";

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("popular");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [userData, setUserData] = useState({
    coins: 560
  });

  const handleBuy = (product: any) => {
    if (userData.coins >= product.price) {
      setUserData({
        ...userData,
        coins: userData.coins - product.price
      });
      toast.success(`¡Has comprado ${product.title}!`);
    } else {
      toast.error("No tienes suficientes monedas");
    }
  };

  const filteredProducts = storeProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-low") {
      return a.price - b.price;
    } else if (sortOrder === "price-high") {
      return b.price - a.price;
    } else if (sortOrder === "newest") {
      return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    } else {
      // Default: popular
      return b.popularity - a.popularity;
    }
  });

  return (
    <PageLayout title="Tienda" subtitle="Adquiere productos exclusivos con tus monedas de recompensa">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="text-xl font-bold">Tienda de Merchandising</h2>
        </div>
        <div className="flex items-center space-x-1 bg-primary/5 px-4 py-2 rounded-full">
          <Gem className="h-5 w-5 text-blue-500" />
          <span className="font-medium">{userData.coins} monedas disponibles</span>
          <Button variant="outline" size="sm" className="ml-2">
            <CreditCard className="h-4 w-4 mr-1" />
            <span>Obtener más</span>
          </Button>
        </div>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="w-full md:w-64">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              className="pl-10"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="w-full md:w-auto flex-1 md:flex-none">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <SelectValue placeholder="Categoría" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {storeCategories.map((category) => (
                <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:w-auto flex-1 md:flex-none">
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Más populares</SelectItem>
              <SelectItem value="newest">Más recientes</SelectItem>
              <SelectItem value="price-low">Precio: bajo a alto</SelectItem>
              <SelectItem value="price-high">Precio: alto a bajo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="clothing">Ropa</TabsTrigger>
          <TabsTrigger value="accessories">Accesorios</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <StoreProducts 
            products={sortedProducts} 
            onSelect={setSelectedProduct} 
            onBuy={handleBuy}
          />
        </TabsContent>
        
        <TabsContent value="clothing">
          <StoreProducts 
            products={sortedProducts.filter(p => p.category === "clothing")} 
            onSelect={setSelectedProduct} 
            onBuy={handleBuy}
          />
        </TabsContent>
        
        <TabsContent value="accessories">
          <StoreProducts 
            products={sortedProducts.filter(p => p.category === "accessories")} 
            onSelect={setSelectedProduct} 
            onBuy={handleBuy}
          />
        </TabsContent>
        
        <TabsContent value="digital">
          <StoreProducts 
            products={sortedProducts.filter(p => p.category === "digital")} 
            onSelect={setSelectedProduct} 
            onBuy={handleBuy}
          />
        </TabsContent>
      </Tabs>
      
      <Dialog>
        <DialogTrigger asChild>
          <div className="hidden">Trigger</div>
        </DialogTrigger>
        {selectedProduct && (
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProduct.title}</DialogTitle>
              <DialogDescription>Detalles del producto</DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl">{selectedProduct.title}</h3>
                  <div className="flex items-center mt-1 space-x-2">
                    <Badge variant={selectedProduct.featured ? "default" : "outline"} className={selectedProduct.featured ? "bg-amber-100 text-amber-800 border-amber-200" : ""}>
                      {selectedProduct.featured ? "Destacado" : selectedProduct.category === "clothing" ? "Ropa" : selectedProduct.category === "accessories" ? "Accesorio" : "Digital"}
                    </Badge>
                    {selectedProduct.isNew && (
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        Nuevo
                      </Badge>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  {selectedProduct.description}
                </p>
                
                <div className="pt-2">
                  <h4 className="font-medium mb-2">Características</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProduct.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-1">
                    <Gem className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-lg">{selectedProduct.price}</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {selectedProduct.stock > 10 ? (
                      <span className="text-green-600">En stock</span>
                    ) : selectedProduct.stock > 0 ? (
                      <span className="text-amber-600">Pocas unidades</span>
                    ) : (
                      <span className="text-red-600">Agotado</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                Cerrar
              </Button>
              <Button 
                onClick={() => {
                  handleBuy(selectedProduct);
                  setSelectedProduct(null);
                }}
                disabled={selectedProduct.price > userData.coins || selectedProduct.stock === 0}
              >
                Comprar ahora
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </PageLayout>
  );
};

export default Store;
