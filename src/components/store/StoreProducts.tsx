
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, Eye, ShoppingBag, Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    return (
      <div className="text-center py-16">
        <div className="mx-auto h-24 w-24 text-gray-400 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
          <ShoppingBag className="h-12 w-12" />
        </div>
        <h3 className="mt-4 text-lg font-medium">No se encontraron productos</h3>
        <p className="mt-1 text-gray-500">Intenta cambiar los filtros o el término de búsqueda.</p>
      </div>
    );
  }

  // Grid view
  if (viewType === "grid" || !viewType) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="h-full flex flex-col hover:shadow-md transition-shadow">
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {product.featured && (
                <div className="absolute top-2 right-2">
                  <Badge variant="default" className="bg-amber-100 text-amber-800 border-amber-200">
                    Destacado
                  </Badge>
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                    Nuevo
                  </Badge>
                </div>
              )}
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
                  className={`h-4 w-4 ${wishlistItems.some(item => item.id === product.id) ? 'fill-red-500 text-red-500' : ''}`}
                />
              </Button>
            </div>
            
            <CardHeader className="pb-2">
              <h3 className="font-medium truncate">{product.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {product.description}
              </p>
            </CardHeader>
            
            <CardFooter className="mt-auto pt-2 flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <Gem className="h-4 w-4 text-blue-500" />
                <span className="font-medium">{product.price}</span>
              </div>
              <div className="flex gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => onSelect(product)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ver detalles</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={() => onAddToCart(product)}
                        disabled={product.price > userCoins}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Añadir al carrito</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <Button 
                  size="sm"
                  onClick={() => onBuy(product)}
                  disabled={product.price > userCoins}
                >
                  Comprar
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  // List view (alternative view)
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/4 aspect-video sm:aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <div className="absolute top-2 right-2">
                  <Badge variant="default" className="bg-amber-100 text-amber-800 border-amber-200">
                    Destacado
                  </Badge>
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                    Nuevo
                  </Badge>
                </div>
              )}
            </div>
            
            <div className="sm:w-3/4 p-4 flex flex-col">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg">{product.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onAddToWishlist(product)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${wishlistItems.some(item => item.id === product.id) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.description}
                </p>
                <div className="mt-2">
                  {product.features.slice(0, 2).map((feature: string, i: number) => (
                    <div key={i} className="text-xs text-gray-500 flex items-center">
                      <span className="mr-1">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <div className="flex items-center space-x-1">
                  <Gem className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold text-lg">{product.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onSelect(product)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Ver detalles
                  </Button>
                  
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={() => onAddToCart(product)}
                    disabled={product.price > userCoins}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Al carrito
                  </Button>
                  
                  <Button 
                    size="sm"
                    onClick={() => onBuy(product)}
                    disabled={product.price > userCoins}
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StoreProducts;
