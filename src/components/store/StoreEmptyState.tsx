
import React from "react";
import { Store } from "lucide-react";

const StoreEmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="mx-auto h-24 w-24 text-gray-400 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
        <Store className="h-12 w-12" />
      </div>
      <h3 className="mt-4 text-lg font-medium">No se encontraron productos</h3>
      <p className="mt-1 text-gray-500">Intenta cambiar los filtros o el término de búsqueda.</p>
    </div>
  );
};

export default StoreEmptyState;
