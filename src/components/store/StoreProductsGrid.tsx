
import React from "react";
import StoreProductCard from "./StoreProductCard";

interface StoreProductsGridProps {
  products: any[];
  onSelect: (product: any) => void;
  onBuy: (product: any) => void;
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  wishlistItems: any[];
  userCoins: number;
}

const StoreProductsGrid = ({
  products,
  onSelect,
  onBuy,
  onAddToCart,
  onAddToWishlist,
  wishlistItems,
  userCoins
}: StoreProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <StoreProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
          onBuy={onBuy}
          isInWishlist={wishlistItems.some(item => item.id === product.id)}
          userCoins={userCoins}
        />
      ))}
    </div>
  );
};

export default StoreProductsGrid;
