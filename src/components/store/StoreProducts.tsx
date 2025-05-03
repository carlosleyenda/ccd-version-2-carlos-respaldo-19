
import React from "react";
import StoreEmptyState from "./StoreEmptyState";
import StoreProductsGrid from "./StoreProductsGrid";
import StoreProductsList from "./StoreProductsList";

interface StoreProductsProps {
  products: any[];
  onSelect: (product: any) => void;
  onBuy: (product: any) => void;
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  wishlistItems: any[];
  viewType: "grid" | "list";
  userCoins: number;
}

const StoreProducts: React.FC<StoreProductsProps> = ({ 
  products, 
  onSelect, 
  onBuy, 
  onAddToCart,
  onAddToWishlist,
  wishlistItems,
  viewType,
  userCoins
}) => {
  if (products.length === 0) {
    return <StoreEmptyState />;
  }

  if (viewType === "grid" || !viewType) {
    return (
      <StoreProductsGrid
        products={products}
        onSelect={onSelect}
        onBuy={onBuy}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
        wishlistItems={wishlistItems}
        userCoins={userCoins}
      />
    );
  }

  // List view
  return (
    <StoreProductsList
      products={products}
      onSelect={onSelect}
      onBuy={onBuy}
      onAddToCart={onAddToCart}
      onAddToWishlist={onAddToWishlist}
      wishlistItems={wishlistItems}
      userCoins={userCoins}
    />
  );
};

export default StoreProducts;
