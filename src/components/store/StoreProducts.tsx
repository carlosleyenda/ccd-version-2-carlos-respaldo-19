
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, Eye } from "lucide-react";

interface StoreProductsProps {
  products: any[];
  onSelect: (product: any) => void;
  onBuy: (product: any) => void;
}

const StoreProducts: React.FC<StoreProductsProps> = ({ products, onSelect, onBuy }) => {
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
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onSelect(product)}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button 
                size="sm"
                onClick={() => onBuy(product)}
              >
                Comprar
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

// Add missing imports
import { ShoppingBag } from "lucide-react";

export default StoreProducts;
