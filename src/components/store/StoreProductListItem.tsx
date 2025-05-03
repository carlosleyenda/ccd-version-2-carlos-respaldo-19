
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, Eye, ShoppingBag, Heart, PackageCheck } from "lucide-react";

interface StoreProductListItemProps {
  product: any;
  onSelect: (product: any) => void;
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  onBuy: (product: any) => void;
  isInWishlist: boolean;
  userCoins: number;
}

const StoreProductListItem = ({
  product,
  onSelect,
  onAddToCart,
  onAddToWishlist,
  onBuy,
  isInWishlist,
  userCoins
}: StoreProductListItemProps) => {
  return (
    <Card 
      key={product.id} 
      className="overflow-hidden hover:shadow-md transition-shadow border-gray-200" 
      onClick={() => onSelect(product)}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/4 aspect-video sm:aspect-square overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.featured && (
              <Badge variant="default" className="bg-amber-100 text-amber-800 border-amber-200">
                Destacado
              </Badge>
            )}
            {product.isNew && (
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                Nuevo
              </Badge>
            )}
          </div>
        </div>
        
        <div className="sm:w-3/4 p-4 flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-lg">{product.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToWishlist(product);
                }}
              >
                <Heart 
                  className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`}
                />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {product.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
              {product.features.slice(0, 2).map((feature: string, i: number) => (
                <div key={i} className="text-xs text-gray-500 flex items-center">
                  <span className="mr-1">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-3 border-t">
            <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-md">
              <Gem className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-700">{product.price}</span>
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(product);
                }}
              >
                <Eye className="h-4 w-4 mr-1" />
                Ver detalles
              </Button>
              
              <Button 
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                disabled={product.price > userCoins || product.stock === 0}
              >
                <ShoppingBag className="h-4 w-4 mr-1" />
                Al carrito
              </Button>
              
              <Button 
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onBuy(product);
                }}
                disabled={product.price > userCoins || product.stock === 0}
              >
                <PackageCheck className="h-4 w-4 mr-1" />
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StoreProductListItem;
