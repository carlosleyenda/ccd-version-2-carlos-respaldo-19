
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, Eye, ShoppingBag, Heart, PackageCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface StoreProductCardProps {
  product: any;
  onSelect: (product: any) => void;
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  onBuy: (product: any) => void;
  isInWishlist: boolean;
  userCoins: number;
}

const StoreProductCard = ({ 
  product, 
  onSelect, 
  onAddToCart, 
  onAddToWishlist, 
  onBuy,
  isInWishlist,
  userCoins 
}: StoreProductCardProps) => {
  return (
    <Card 
      key={product.id} 
      className="h-full flex flex-col hover:shadow-md transition-shadow border-gray-200 overflow-hidden"
      onClick={() => onSelect(product)}
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 right-0 flex flex-wrap gap-1 p-2">
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
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
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
      
      <CardHeader className="pb-2 pt-4">
        <h3 className="font-medium text-base leading-tight">{product.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-normal">
          {product.description}
        </p>
      </CardHeader>
      
      <CardFooter className="mt-auto pt-2 pb-4 flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-md">
            <Gem className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-700">{product.price}</span>
          </div>
          {product.stock <= 10 && product.stock > 0 && (
            <span className="text-xs text-amber-600 px-2 py-1 bg-amber-50 rounded-md">
              Pocas unidades
            </span>
          )}
          {product.stock === 0 && (
            <span className="text-xs text-red-600 px-2 py-1 bg-red-50 rounded-md">
              Agotado
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-3 w-full gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(product);
                  }}
                  className="w-full px-1"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="text-xs truncate">Ver</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ver detalles</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            disabled={product.price > userCoins || product.stock === 0}
            className="w-full px-1"
            variant="outline"
          >
            <ShoppingBag className="h-4 w-4 mr-1" />
            <span className="text-xs truncate">Carrito</span>
          </Button>
          
          <Button 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onBuy(product);
            }}
            disabled={product.price > userCoins || product.stock === 0}
            className="w-full px-1"
          >
            <PackageCheck className="h-4 w-4 mr-1" />
            <span className="text-xs truncate">Comprar</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StoreProductCard;
