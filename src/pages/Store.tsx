
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, ShoppingBag, Search, Filter, CreditCard, Bell, Heart } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import StoreProducts from "@/components/store/StoreProducts";
import { storeCategories, storeProducts } from "@/components/store/storeData";
import StoreSummary from "@/components/store/StoreSummary";
import StoreCart from "@/components/store/StoreCart";
import { Separator } from "@/components/ui/separator";
import StoreWishlist from "@/components/store/StoreWishlist";

const Store = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("popular");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [activeView, setActiveView] = useState("grid");
  
  const [userData, setUserData] = useState({
    coins: 560,
    name: "Carlos Mendoza",
    level: "Profesional",
    recentPurchases: 3
  });

  // Handle product interaction functions
  const handleAddToCart = (product: any) => {
    // Check if already in cart
    if (cartItems.some(item => item.id === product.id)) {
      toast.info("Ya tienes este producto en el carrito");
      return;
    }
    
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    toast.success(`${product.title} agregado al carrito`);
  };
  
  const handleAddToWishlist = (product: any) => {
    if (wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
      toast.info(`${product.title} eliminado de favoritos`);
    } else {
      setWishlistItems([...wishlistItems, product]);
      toast.success(`${product.title} agregado a favoritos`);
    }
  };

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
  
  const handleBuyFromCart = () => {
    const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    if (userData.coins >= totalCost) {
      setUserData({
        ...userData,
        coins: userData.coins - totalCost
      });
      toast.success("¡Compra realizada con éxito!");
      setCartItems([]);
      setShowCart(false);
    } else {
      toast.error("No tienes suficientes monedas para completar la compra");
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast.info("Producto eliminado del carrito");
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="md:col-span-3">
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
            <div className="w-full md:w-64 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                className="pl-10"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
            
            <div className="flex items-center ml-auto space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowWishlist(true)}
                className="relative"
              >
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                    {wishlistItems.length}
                  </span>
                )}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowCart(true)}
                className="relative"
              >
                <ShoppingBag size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid grid-cols-4 mb-8">
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
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
                viewType={activeView}
                userCoins={userData.coins}
              />
            </TabsContent>
            
            <TabsContent value="clothing">
              <StoreProducts 
                products={sortedProducts.filter(p => p.category === "clothing")} 
                onSelect={setSelectedProduct} 
                onBuy={handleBuy}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
                viewType={activeView}
                userCoins={userData.coins}
              />
            </TabsContent>
            
            <TabsContent value="accessories">
              <StoreProducts 
                products={sortedProducts.filter(p => p.category === "accessories")} 
                onSelect={setSelectedProduct} 
                onBuy={handleBuy}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
                viewType={activeView}
                userCoins={userData.coins}
              />
            </TabsContent>
            
            <TabsContent value="digital">
              <StoreProducts 
                products={sortedProducts.filter(p => p.category === "digital")} 
                onSelect={setSelectedProduct} 
                onBuy={handleBuy}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
                viewType={activeView}
                userCoins={userData.coins}
              />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="hidden md:block">
          <StoreSummary userData={userData} />
          
          <Card className="mt-6">
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Ofertas especiales</h3>
              {storeProducts
                .filter(p => p.featured)
                .slice(0, 2)
                .map(product => (
                  <div 
                    key={product.id} 
                    className="flex items-center space-x-2 mb-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.title}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Gem className="h-3 w-3 text-blue-500 mr-1" />
                        <span>{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
              <Separator className="my-3" />
              <h3 className="font-medium mb-3">Novedades</h3>
              {storeProducts
                .filter(p => p.isNew)
                .slice(0, 2)
                .map(product => (
                  <div 
                    key={product.id} 
                    className="flex items-center space-x-2 mb-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.title}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Gem className="h-3 w-3 text-blue-500 mr-1" />
                        <span>{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </CardContent>
          </Card>
        </div>
      </div>
      
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
            
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button 
                variant="outline" 
                onClick={() => {
                  handleAddToWishlist(selectedProduct);
                }}
                className="w-full sm:w-auto"
              >
                <Heart size={16} className="mr-2" />
                {wishlistItems.some(item => item.id === selectedProduct.id) 
                  ? "Quitar de favoritos" 
                  : "Agregar a favoritos"}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                }}
                className="w-full sm:w-auto"
              >
                <ShoppingBag size={16} className="mr-2" />
                Agregar al carrito
              </Button>
              
              <Button 
                onClick={() => {
                  handleBuy(selectedProduct);
                  setSelectedProduct(null);
                }}
                disabled={selectedProduct.price > userData.coins || selectedProduct.stock === 0}
                className="w-full sm:w-auto"
              >
                Comprar ahora
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
      
      {/* Cart Dialog */}
      <StoreCart
        open={showCart}
        setOpen={setShowCart}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onBuy={handleBuyFromCart}
        userCoins={userData.coins}
      />
      
      {/* Wishlist Dialog */}
      <StoreWishlist
        open={showWishlist}
        setOpen={setShowWishlist}
        wishlistItems={wishlistItems}
        onRemove={handleAddToWishlist}
        onAddToCart={handleAddToCart}
        userCoins={userData.coins}
      />
    </PageLayout>
  );
};

export default Store;
