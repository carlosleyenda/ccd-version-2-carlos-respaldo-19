
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Gem } from "lucide-react";
import { toast } from "sonner";
import { storeProducts } from "@/components/store/storeData";
import StoreSummary from "@/components/store/StoreSummary";
import StoreCart from "@/components/store/StoreCart";
import StoreWishlist from "@/components/store/StoreWishlist";
import StoreHeader from "@/components/store/StoreHeader";
import StoreSearchAndFilters from "@/components/store/StoreSearchAndFilters";
import StoreCartActions from "@/components/store/StoreCartActions";
import StoreTabsContent from "@/components/store/StoreTabsContent";
import StoreProductDetail from "@/components/store/StoreProductDetail";

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
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  
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

  const closeProductDetail = () => setSelectedProduct(null);

  return (
    <PageLayout title="Tienda" subtitle="Adquiere productos exclusivos con tus monedas de recompensa">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="md:col-span-3">
          <StoreHeader userCoins={userData.coins} />
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StoreSearchAndFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
            
            <StoreCartActions
              cartItemsCount={cartItems.length}
              wishlistItemsCount={wishlistItems.length}
              setShowCart={setShowCart}
              setShowWishlist={setShowWishlist}
            />
          </div>
          
          <StoreTabsContent
            sortedProducts={sortedProducts}
            setSelectedProduct={setSelectedProduct}
            handleBuy={handleBuy}
            handleAddToCart={handleAddToCart}
            handleAddToWishlist={handleAddToWishlist}
            wishlistItems={wishlistItems}
            activeView={activeView}
            userCoins={userData.coins}
          />
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
      
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && closeProductDetail()}>
        <DialogTrigger asChild>
          <div className="hidden">Trigger</div>
        </DialogTrigger>
        
        <StoreProductDetail 
          selectedProduct={selectedProduct}
          onClose={closeProductDetail}
          wishlistItems={wishlistItems}
          handleAddToWishlist={handleAddToWishlist}
          handleAddToCart={handleAddToCart}
          handleBuy={handleBuy}
          userCoins={userData.coins}
        />
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
