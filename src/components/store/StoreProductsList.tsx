
import React from "react";
import StoreProductListItem from "./StoreProductListItem";

interface StoreProductsListProps {
  products: any[];
  onSelect: (product: any) => void;
  onBuy: (product: any) => void;
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  wishlistItems: any[];
  userCoins: number;
}

const StoreProductsList = ({
  products,
  onSelect,
  onBuy,
  onAddToCart,
  onAddToWishlist,
  wishlistItems,
  userCoins
}: StoreProductsListProps) => {
  return (
    <div className="flex flex-col space-y-4">
      {products.map((product) => (
        <StoreProductListItem
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

export default StoreProductsList;
