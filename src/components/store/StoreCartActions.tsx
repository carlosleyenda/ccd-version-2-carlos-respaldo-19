
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

interface StoreCartActionsProps {
  cartItemsCount: number;
  wishlistItemsCount: number;
  setShowCart: (show: boolean) => void;
  setShowWishlist: (show: boolean) => void;
}

const StoreCartActions = ({
  cartItemsCount,
  wishlistItemsCount,
  setShowCart,
  setShowWishlist
}: StoreCartActionsProps) => {
  return (
    <div className="flex items-center ml-auto space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setShowWishlist(true)}
        className="relative"
      >
        <Heart size={20} />
        {wishlistItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
            {wishlistItemsCount}
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
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
            {cartItemsCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default StoreCartActions;
