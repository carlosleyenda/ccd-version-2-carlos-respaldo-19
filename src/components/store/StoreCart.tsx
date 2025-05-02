
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, Gem, Info, ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface StoreCartProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  cartItems: any[];
  onRemove: (productId: string) => void;
  onBuy: () => void;
  userCoins: number;
}

const StoreCart = ({ open, setOpen, cartItems, onRemove, onBuy, userCoins }: StoreCartProps) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);
  const hasEnoughCoins = userCoins >= totalCost;
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Carrito de compras ({cartItems.length})
          </DialogTitle>
          <DialogDescription>
            Revisa los productos que deseas comprar
          </DialogDescription>
        </DialogHeader>
        
        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <ShoppingBag className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <h3 className="font-medium text-lg mb-1">Tu carrito está vacío</h3>
            <p className="text-sm text-gray-500">
              Agrega productos desde la tienda para verlos aquí
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="max-h-[300px] pr-4">
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
                    <div className="relative h-12 w-12 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.title}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Gem className="h-3.5 w-3.5 text-blue-500 mr-1" />
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(item.id)}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <Separator className="my-4" />
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Subtotal</span>
                <div className="flex items-center">
                  <Gem className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="font-medium">{totalCost}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <div className="flex items-center">
                  <Gem className="h-4 w-4 text-blue-500 mr-1" />
                  <span>{totalCost}</span>
                </div>
              </div>
            </div>
            
            {!hasEnoughCoins && (
              <Alert variant="destructive" className="bg-red-50 text-red-800 border-red-200">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  No tienes suficientes monedas para completar esta compra.
                </AlertDescription>
              </Alert>
            )}
            
            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Seguir comprando
              </Button>
              <Button
                onClick={onBuy}
                disabled={cartItems.length === 0 || !hasEnoughCoins}
              >
                Comprar ahora
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StoreCart;
