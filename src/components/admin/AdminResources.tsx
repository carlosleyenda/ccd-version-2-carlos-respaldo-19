
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
import { 
  Plus, Search, Edit, Trash2, Filter, Download, ArrowUpDown, 
  FileText, BookOpen, Video, FileArchive, BarChart
} from "lucide-react";
import { allResources } from "@/components/resources/resourcesData";
import { Resource, ResourceType, ResourceCategory } from "@/components/resources/types";

const AdminResources = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [newResourceModal, setNewResourceModal] = useState(false);
  const [editResourceModal, setEditResourceModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Stats data
  const statsData = [
    { 
      title: "Total Recursos", 
      value: allResources.length, 
      icon: <FileText className="h-4 w-4 text-blue-500" /> 
    },
    { 
      title: "Documentos", 
      value: allResources.filter(r => r.type === "document").length, 
      icon: <FileText className="h-4 w-4 text-amber-500" /> 
    },
    { 
      title: "Videos", 
      value: allResources.filter(r => r.type === "video").length, 
      icon: <Video className="h-4 w-4 text-red-500" /> 
    },
    { 
      title: "Descargas", 
      value: allResources.reduce((sum, r) => sum + (r.downloadCount || 0), 0), 
      icon: <FileArchive className="h-4 w-4 text-green-500" /> 
    },
  ];

  const handleEditResource = (resource: Resource) => {
    setSelectedResource(resource);
    setEditResourceModal(true);
  };

  const handleDeleteResource = (resourceId: string) => {
    console.log("Delete resource with ID:", resourceId);
  };

  const filteredResources = allResources.filter(resource => {
    // Filter by search term
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by tab
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "documents") return resource.type === "document" && matchesSearch;
    if (activeTab === "videos") return resource.type === "video" && matchesSearch;
    if (activeTab === "tutorials") return resource.type === "tutorial" && matchesSearch;
    if (activeTab === "templates") return resource.type === "template" && matchesSearch;
    if (activeTab === "featured") return resource.featured && matchesSearch;
    
    return matchesSearch;
  });

  const getResourceTypeIcon = (type: ResourceType) => {
    switch (type) {
      case "document": return <FileText className="h-4 w-4 text-blue-500" />;
      case "video": return <Video className="h-4 w-4 text-red-500" />;
      case "tutorial": return <BookOpen className="h-4 w-4 text-amber-500" />;
      case "template": return <FileText className="h-4 w-4 text-green-500" />;
      case "software": return <FileArchive className="h-4 w-4 text-purple-500" />;
      case "article": return <FileText className="h-4 w-4 text-gray-500" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Recursos</h2>
        <Button onClick={() => setNewResourceModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Recurso
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
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="tutorials">Tutoriales</TabsTrigger>
            <TabsTrigger value="templates">Plantillas</TabsTrigger>
            <TabsTrigger value="featured">Destacados</TabsTrigger>
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
                placeholder="Buscar recursos..."
                className="pl-8 w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <TabsContent value={activeTab} className="mt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Recurso</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Descargas</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <TableRow key={resource.id}>
                      <TableCell>
                        <div className="flex items-center">
                          <img 
                            src={resource.thumbnail} 
                            alt={resource.title}
                            className="h-10 w-10 rounded-md mr-3 object-cover" 
                          />
                          <div>
                            <div className="font-medium">{resource.title}</div>
                            {resource.author && <div className="text-xs text-muted-foreground">Por: {resource.author}</div>}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getResourceTypeIcon(resource.type)}
                          <span className="capitalize">{resource.type}</span>
                        </div>
                      </TableCell>
                      <TableCell className="capitalize">{resource.category}</TableCell>
                      <TableCell>{new Date(resource.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>{resource.downloadCount || 0}</TableCell>
                      <TableCell>
                        <Badge variant={resource.featured ? "default" : "secondary"}>
                          {resource.featured ? "Destacado" : "Normal"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleEditResource(resource)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteResource(resource.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6">
                      No hay recursos que coincidan con la búsqueda
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Resource Modal */}
      <Dialog open={newResourceModal || editResourceModal} onOpenChange={(open) => {
        if (!open) {
          setNewResourceModal(false);
          setEditResourceModal(false);
          setSelectedResource(null);
        }
      }}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>{editResourceModal ? "Editar Recurso" : "Nuevo Recurso"}</DialogTitle>
            <DialogDescription>
              {editResourceModal 
                ? "Actualice la información del recurso en el sistema."
                : "Complete los detalles para añadir un nuevo recurso educativo."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="title">Título del Recurso</Label>
                <Input 
                  id="title" 
                  placeholder="Título descriptivo" 
                  defaultValue={selectedResource?.title || ""} 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Tipo de Recurso</Label>
                  <Select defaultValue={selectedResource?.type || "document"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="document">Documento</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                      <SelectItem value="template">Plantilla</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="article">Artículo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Select defaultValue={selectedResource?.category || "general"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Ingeniería</SelectItem>
                      <SelectItem value="mining">Minería</SelectItem>
                      <SelectItem value="management">Gestión</SelectItem>
                      <SelectItem value="safety">Seguridad</SelectItem>
                      <SelectItem value="environment">Medio Ambiente</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descripción detallada del recurso" 
                  rows={3}
                  defaultValue={selectedResource?.description || ""} 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="thumbnail">URL de la Miniatura</Label>
                  <Input 
                    id="thumbnail" 
                    placeholder="https://ejemplo.com/imagen.png" 
                    defaultValue={selectedResource?.thumbnail || ""} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="url">URL del Recurso</Label>
                  <Input 
                    id="url" 
                    placeholder="https://ejemplo.com/recurso.pdf" 
                    defaultValue={selectedResource?.url || ""} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fileType">Tipo de Archivo</Label>
                  <Input 
                    id="fileType" 
                    placeholder="PDF, MP4, DOCX, etc." 
                    defaultValue={selectedResource?.fileType || ""} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="fileSize">Tamaño del Archivo</Label>
                  <Input 
                    id="fileSize" 
                    placeholder="2.5 MB" 
                    defaultValue={selectedResource?.fileSize || ""} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Autor</Label>
                  <Input 
                    id="author" 
                    placeholder="Nombre del autor" 
                    defaultValue={selectedResource?.author || ""} 
                  />
                </div>
                
                <div className="flex items-center mt-8 space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    className="rounded"
                    defaultChecked={selectedResource?.featured || false}
                  />
                  <Label htmlFor="featured" className="cursor-pointer">¿Destacar recurso?</Label>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setNewResourceModal(false);
              setEditResourceModal(false);
            }}>
              Cancelar
            </Button>
            <Button type="submit">
              {editResourceModal ? "Actualizar Recurso" : "Crear Recurso"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminResources;
