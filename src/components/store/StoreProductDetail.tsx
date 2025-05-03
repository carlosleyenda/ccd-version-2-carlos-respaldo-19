
import React from "react";
import { Heart, Gem, ShoppingBag } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StoreProductDetailProps {
  selectedProduct: any;
  onClose: () => void;
  wishlistItems: any[];
  handleAddToWishlist: (product: any) => void;
  handleAddToCart: (product: any) => void;
  handleBuy: (product: any) => void;
  userCoins: number;
}

const StoreProductDetail = ({
  selectedProduct,
  onClose,
  wishlistItems,
  handleAddToWishlist,
  handleAddToCart,
  handleBuy,
  userCoins
}: StoreProductDetailProps) => {
  if (!selectedProduct) return null;
  
  return (
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
            onClose();
          }}
          disabled={selectedProduct.price > userCoins || selectedProduct.stock === 0}
          className="w-full sm:w-auto"
        >
          Comprar ahora
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default StoreProductDetail;
