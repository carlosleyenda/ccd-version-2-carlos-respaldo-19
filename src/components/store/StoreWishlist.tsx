
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription,
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Gem, ShoppingBag } from "lucide-react";

interface StoreWishlistProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  wishlistItems: any[];
  onRemove: (product: any) => void;
  onAddToCart: (product: any) => void;
  userCoins: number;
}

const StoreWishlist = ({ open, setOpen, wishlistItems, onRemove, onAddToCart, userCoins }: StoreWishlistProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Heart className="h-5 w-5 mr-2" />
            Mis favoritos ({wishlistItems.length})
          </DialogTitle>
          <DialogDescription>
            Productos guardados para más tarde
          </DialogDescription>
        </DialogHeader>
        
        {wishlistItems.length === 0 ? (
          <div className="py-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <h3 className="font-medium text-lg mb-1">Tu lista está vacía</h3>
            <p className="text-sm text-gray-500">
              Guarda productos para verlos aquí más tarde
            </p>
          </div>
        ) : (
          <ScrollArea className="max-h-[400px] pr-4">
            <div className="grid gap-3">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="relative h-14 w-14 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.title}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Gem className="h-3.5 w-3.5 text-blue-500 mr-1" />
                      <span>{item.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemove(item)}
                        className="h-7 px-2 text-xs"
                      >
                        <Heart className="h-3 w-3 mr-1 fill-current" />
                        Quitar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onAddToCart(item)}
                        className="h-7 px-2 text-xs"
                        disabled={item.price > userCoins}
                      >
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        Añadir al carrito
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StoreWishlist;
