
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Edit, Trash2, Filter, Download, ArrowUpDown, Package, ShoppingBag } from "lucide-react";
import { storeProducts } from "@/components/store/storeData";

const AdminStore = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [newProductModal, setNewProductModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  // Sample categories
  const categories = ["Premium", "Digital", "Course", "Book", "Bundle"];

  // Sample stats data
  const statsData = [
    { title: "Total Productos", value: storeProducts.length, icon: <Package className="h-4 w-4 text-blue-500" /> },
    { title: "Ventas Este Mes", value: "214", icon: <ShoppingBag className="h-4 w-4 text-green-500" /> },
    { title: "Ingresos", value: "10,432", icon: <ShoppingBag className="h-4 w-4 text-amber-500" /> },
    { title: "Valoración Media", value: "4.7", icon: <ShoppingBag className="h-4 w-4 text-purple-500" /> },
  ];

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setEditProductModal(true);
  };

  const handleDeleteProduct = (productId) => {
    // Here you would implement the delete functionality
    console.log("Delete product with ID:", productId);
  };

  const filteredProducts = storeProducts.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let comparison = 0;
    if (sortBy === "title") {
      comparison = a.title.localeCompare(b.title);
    } else if (sortBy === "price") {
      comparison = a.price - b.price;
    } else if (sortBy === "date") {
      comparison = new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    } else if (sortBy === "popularity") {
      comparison = b.popularity - a.popularity;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Tienda</h2>
        <Button onClick={() => setNewProductModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Producto
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="categories">Categorías</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="promotions">Promociones</TabsTrigger>
          </TabsList>
          <div className="flex gap-3 items-center">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="pl-8 w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <TabsContent value="products" className="mt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead className="w-[300px]">
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("title")}>
                      Producto
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("price")}>
                      Precio
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("date")}>
                      Fecha
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="h-10 w-10 rounded-md mr-3 object-cover" 
                          />
                          <span className="truncate max-w-[230px]">{product.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <Badge variant={product.isNew ? "default" : "secondary"}>
                          {product.isNew ? "Nuevo" : "Activo"}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(product.addedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6">
                      No hay productos que coincidan con la búsqueda
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="mt-4">
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Categorías de Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <span>{category}</span>
                      <div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Nueva Categoría
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Etiquetas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Premium</Badge>
                  <Badge>Oferta</Badge>
                  <Badge>Destacado</Badge>
                  <Badge>Virtual</Badge>
                  <Badge>Certificado</Badge>
                  <Badge>Edición Limitada</Badge>
                  <Badge>Popular</Badge>
                </div>
                <Button className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Etiqueta
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="mt-4">
          <div className="border rounded-md p-6 text-center">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-xl font-medium mb-2">Módulo de Pedidos</h3>
            <p className="text-gray-500 mb-4">
              Gestione los pedidos de usuarios y procese las transacciones de la tienda.
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Configurar Módulo de Pedidos
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="promotions" className="mt-4">
          <div className="border rounded-md p-6 text-center">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-xl font-medium mb-2">Promociones y Descuentos</h3>
            <p className="text-gray-500 mb-4">
              Cree y gestione promociones, códigos de descuento y ofertas especiales.
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Crear Nueva Promoción
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Product Modal - could be new or edit */}
      <Dialog open={newProductModal || editProductModal} onOpenChange={(open) => {
        if (!open) {
          setNewProductModal(false);
          setEditProductModal(false);
        }
      }}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>{editProductModal ? "Editar Producto" : "Nuevo Producto"}</DialogTitle>
            <DialogDescription>
              {editProductModal 
                ? "Actualice la información del producto en el sistema."
                : "Complete los detalles para añadir un nuevo producto a la tienda."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="title">Título del Producto</Label>
                <Input 
                  id="title" 
                  placeholder="Nombre del producto" 
                  defaultValue={selectedProduct?.title || ""} 
                />
              </div>
              
              <div>
                <Label htmlFor="category">Categoría</Label>
                <Select defaultValue={selectedProduct?.category || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category, index) => (
                      <SelectItem key={index} value={category.toLowerCase()}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="price">Precio (Monedas)</Label>
                <Input 
                  id="price" 
                  type="number" 
                  placeholder="100" 
                  defaultValue={selectedProduct?.price || ""} 
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descripción detallada del producto" 
                  rows={3}
                  defaultValue={selectedProduct?.description || ""} 
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="image">URL de la Imagen</Label>
                <Input 
                  id="image" 
                  placeholder="https://ejemplo.com/imagen.png" 
                  defaultValue={selectedProduct?.image || ""} 
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  className="rounded"
                  defaultChecked={selectedProduct?.featured || false}
                />
                <Label htmlFor="featured" className="cursor-pointer">¿Destacar producto?</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isNew"
                  className="rounded"
                  defaultChecked={selectedProduct?.isNew || false}
                />
                <Label htmlFor="isNew" className="cursor-pointer">¿Marcar como nuevo?</Label>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setNewProductModal(false);
              setEditProductModal(false);
            }}>
              Cancelar
            </Button>
            <Button type="submit">
              {editProductModal ? "Actualizar Producto" : "Crear Producto"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminStore;
