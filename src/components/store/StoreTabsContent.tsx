
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import StoreProducts from "./StoreProducts";

interface StoreTabsContentProps {
  sortedProducts: any[];
  setSelectedProduct: (product: any) => void;
  handleBuy: (product: any) => void;
  handleAddToCart: (product: any) => void;
  handleAddToWishlist: (product: any) => void;
  wishlistItems: any[];
  activeView: "grid" | "list";
  userCoins: number;
}

const StoreTabsContent = ({
  sortedProducts,
  setSelectedProduct,
  handleBuy,
  handleAddToCart,
  handleAddToWishlist,
  wishlistItems,
  activeView,
  userCoins
}: StoreTabsContentProps) => {
  return (
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
          userCoins={userCoins}
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
          userCoins={userCoins}
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
          userCoins={userCoins}
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
          userCoins={userCoins}
        />
      </TabsContent>
    </Tabs>
  );
};

export default StoreTabsContent;
