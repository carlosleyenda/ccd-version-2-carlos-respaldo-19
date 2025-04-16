
import { useState } from "react";
import { 
  Users, 
  MessageSquare, 
  Search, 
  Filter, 
  ChevronRight, 
  User, 
  Clock, 
  Eye, 
  ArrowUpRight,
  PlusCircle,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Thread {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  lastActivity: string;
  replies: number;
  views: number;
  category: string;
  tags: string[];
  isPinned?: boolean;
  isLocked?: boolean;
  isResolved?: boolean;
  courseId?: string;
  courseName?: string;
}

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  threads: number;
}

const formSchema = z.object({
  title: z.string().min(5, {
    message: "El título debe tener al menos 5 caracteres.",
  }),
  content: z.string().min(20, {
    message: "El contenido debe tener al menos 20 caracteres.",
  }),
  category: z.string({
    required_error: "Por favor selecciona una categoría.",
  }),
  tags: z.string().optional(),
  relatedCourse: z.string().optional(),
});

export const ForumsList = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  
  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
    },
  });

  // Mock forum categories data - in a real app, this would come from an API
  const categories: ForumCategory[] = [
    {
      id: "cat-1",
      name: "Discusiones Técnicas",
      description: "Debates sobre temas técnicos de minería e ingeniería",
      threads: 86
    },
    {
      id: "cat-2",
      name: "Seguridad Minera",
      description: "Discusiones sobre protocolos y prácticas de seguridad",
      threads: 54
    },
    {
      id: "cat-3",
      name: "Preguntas sobre Cursos",
      description: "Consultas específicas sobre el contenido de los cursos",
      threads: 112
    },
    {
      id: "cat-4",
      name: "Networking",
      description: "Conecta con otros profesionales del sector",
      threads: 37
    },
    {
      id: "cat-5",
      name: "Ofertas Laborales",
      description: "Oportunidades y discusiones sobre el mercado laboral",
      threads: 29
    },
  ];

  // Mock threads data - in a real app, this would come from an API
  const threads: Thread[] = [
    {
      id: "thread-1",
      title: "Mejores prácticas para ventilación en minería profunda",
      content: "Estoy buscando implementar un sistema de ventilación más eficiente para una mina que supera los 1000 metros de profundidad. ¿Qué recomendaciones tienen sobre equipos y diseño?",
      author: {
        name: "Juan Pérez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
      },
      createdAt: "2024-04-10T14:30:00Z",
      lastActivity: "2024-04-15T09:15:00Z",
      replies: 24,
      views: 342,
      category: "Discusiones Técnicas",
      tags: ["ventilación", "minería profunda", "seguridad"],
      isPinned: true,
      courseId: "course-1",
      courseName: "Técnicas Avanzadas de Minería Subterránea"
    },
    {
      id: "thread-2",
      title: "Duda sobre el módulo de excavación del curso avanzado",
      content: "En la lección 3 del módulo 2, se menciona una técnica para cámaras y pilares que no comprendo completamente. ¿Alguien podría explicar con más detalle?",
      author: {
        name: "María González",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
      },
      createdAt: "2024-04-12T10:45:00Z",
      lastActivity: "2024-04-14T16:20:00Z",
      replies: 8,
      views: 126,
      category: "Preguntas sobre Cursos",
      tags: ["técnicas de excavación", "curso avanzado"],
      courseId: "course-1",
      courseName: "Técnicas Avanzadas de Minería Subterránea"
    },
    {
      id: "thread-3",
      title: "Nuevas regulaciones ambientales 2024 y su impacto",
      content: "Con las nuevas regulaciones que entrarán en vigor el próximo mes, ¿cómo estamos planificando adaptarnos? Especialmente me preocupa el tema de tratamiento de aguas.",
      author: {
        name: "Carlos Rodríguez",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80"
      },
      createdAt: "2024-04-08T08:15:00Z",
      lastActivity: "2024-04-15T11:30:00Z",
      replies: 31,
      views: 289,
      category: "Discusiones Técnicas",
      tags: ["regulaciones", "medio ambiente", "normativa"]
    },
    {
      id: "thread-4",
      title: "Oportunidad laboral: Ingeniero de Ventilación Senior",
      content: "Nuestra compañía está buscando un ingeniero con experiencia en sistemas de ventilación para operaciones de gran escala. Contrato indefinido con paquete competitivo.",
      author: {
        name: "Ana Martínez",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
      },
      createdAt: "2024-04-11T15:20:00Z",
      lastActivity: "2024-04-14T09:45:00Z",
      replies: 12,
      views: 203,
      category: "Ofertas Laborales",
      tags: ["empleo", "ventilación", "ingeniería"],
      isPinned: true
    },
    {
      id: "thread-5",
      title: "Protocolos de emergencia en caso de derrumbe",
      content: "Me gustaría discutir los mejores protocolos actuales para manejar situaciones de derrumbe en túneles. ¿Qué procedimientos estándar están utilizando?",
      author: {
        name: "Felipe Torres",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=80"
      },
      createdAt: "2024-04-09T11:10:00Z",
      lastActivity: "2024-04-13T14:05:00Z",
      replies: 18,
      views: 175,
      category: "Seguridad Minera",
      tags: ["seguridad", "emergencias", "protocolos"],
      isResolved: true
    }
  ];

  // Filter threads based on active tab, search query, and selected category
  let filteredThreads = threads;
  
  if (activeTab === "pinned") {
    filteredThreads = filteredThreads.filter(thread => thread.isPinned);
  } else if (activeTab === "courses") {
    filteredThreads = filteredThreads.filter(thread => thread.courseId);
  } else if (activeTab === "my-threads") {
    // Assuming current user is "Juan Pérez" for demo purposes
    filteredThreads = filteredThreads.filter(thread => thread.author.name === "Juan Pérez");
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredThreads = filteredThreads.filter(thread => 
      thread.title.toLowerCase().includes(query) || 
      thread.content.toLowerCase().includes(query) ||
      thread.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  if (selectedCategory) {
    filteredThreads = filteredThreads.filter(thread => thread.category === selectedCategory);
  }

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  const handleThreadClick = (thread: Thread) => {
    setSelectedThread(thread);
  };

  const handleCreateThread = (values: z.infer<typeof formSchema>) => {
    toast.success("Tu tema ha sido creado exitosamente");
    console.log(values);
    setCreateDialogOpen(false);
    form.reset();
    // In a real app, this would send the data to an API
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Foros de Discusión</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Conecta con la comunidad y discute temas relevantes
          </p>
        </div>
        
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mt-4 md:mt-0">
              <PlusCircle className="h-4 w-4 mr-2" />
              Crear nuevo tema
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Crear nuevo tema de discusión</DialogTitle>
              <DialogDescription>
                Completa el formulario para crear un nuevo tema en los foros.
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreateThread)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Escribe un título descriptivo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contenido</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe tu pregunta o tema de discusión" 
                          className="h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoría</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona categoría" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.name}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Etiquetas</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ej: seguridad, ventilación" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Separadas por comas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="relatedCourse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Curso relacionado (opcional)</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un curso si es relevante" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="course-1">Técnicas Avanzadas de Minería Subterránea</SelectItem>
                          <SelectItem value="course-2">Seguridad y Prevención en Minería</SelectItem>
                          <SelectItem value="course-3">Impacto Ambiental en Minería</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <DialogFooter>
                  <Button type="submit">Publicar tema</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar - Categories */}
        <div className="w-full md:w-64 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categorías</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    className={`w-full justify-start pl-4 ${selectedCategory === category.name ? 'bg-primary/10' : ''}`}
                    onClick={() => handleCategorySelect(category.name)}
                  >
                    <span className="truncate">{category.name}</span>
                    <Badge variant="outline" className="ml-auto">
                      {category.threads}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Temas totales:</span>
                <span className="font-medium">318</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Mensajes:</span>
                <span className="font-medium">1,254</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Miembros:</span>
                <span className="font-medium">875</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Último mensaje:</span>
                <span className="font-medium">Hoy, 12:34</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar en los foros..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="pinned">Destacados</TabsTrigger>
              <TabsTrigger value="courses">De cursos</TabsTrigger>
              <TabsTrigger value="my-threads">Mis temas</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab}>
              {filteredThreads.length > 0 ? (
                <div className="space-y-4">
                  {filteredThreads.map((thread) => (
                    <Card 
                      key={thread.id} 
                      className={`hover:shadow-md transition-shadow ${thread.isPinned ? 'border-l-4 border-l-primary' : ''}`}
                      onClick={() => handleThreadClick(thread)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="hidden sm:block">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img
                                src={thread.author.avatar}
                                alt={thread.author.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center mb-1 flex-wrap gap-2">
                              {thread.isPinned && (
                                <Badge variant="default" className="mr-1">
                                  Destacado
                                </Badge>
                              )}
                              {thread.isLocked && (
                                <Badge variant="outline" className="bg-gray-100 text-gray-800 mr-1">
                                  Cerrado
                                </Badge>
                              )}
                              {thread.isResolved && (
                                <Badge variant="outline" className="bg-green-100 text-green-800 mr-1">
                                  Resuelto
                                </Badge>
                              )}
                              <Badge variant="outline">
                                {thread.category}
                              </Badge>
                            </div>
                            
                            <h3 className="font-medium mb-1 flex items-center">
                              {thread.title}
                              {thread.courseId && (
                                <Badge variant="outline" className="ml-2 text-xs">
                                  <BookOpen className="h-3 w-3 mr-1" />
                                  Curso
                                </Badge>
                              )}
                            </h3>
                            
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                              {thread.content}
                            </p>
                            
                            <div className="flex flex-wrap gap-1 mb-2">
                              {thread.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs bg-gray-50">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-4 gap-y-1">
                              <span className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                {thread.author.name}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {new Date(thread.lastActivity).toLocaleDateString()}
                              </span>
                              <span className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                {thread.replies} respuestas
                              </span>
                              <span className="flex items-center">
                                <Eye className="h-3 w-3 mr-1" />
                                {thread.views} vistas
                              </span>
                            </div>
                          </div>
                          
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No se encontraron temas</h3>
                  <p className="text-gray-500 mb-6">
                    {searchQuery 
                      ? "No hay resultados para tu búsqueda. Intenta con otros términos."
                      : "No hay temas disponibles en esta categoría."}
                  </p>
                  <Button onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    setActiveTab("all");
                  }}>
                    Ver todos los temas
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Thread Detail Dialog */}
          {selectedThread && (
            <Dialog 
              open={!!selectedThread} 
              onOpenChange={(open) => !open && setSelectedThread(null)}
            >
              <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedThread.isPinned && (
                      <Badge variant="default" className="mr-1">
                        Destacado
                      </Badge>
                    )}
                    {selectedThread.isLocked && (
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 mr-1">
                        Cerrado
                      </Badge>
                    )}
                    {selectedThread.isResolved && (
                      <Badge variant="outline" className="bg-green-100 text-green-800 mr-1">
                        Resuelto
                      </Badge>
                    )}
                    <Badge variant="outline">
                      {selectedThread.category}
                    </Badge>
                  </div>
                  <DialogTitle className="text-xl">{selectedThread.title}</DialogTitle>
                  <DialogDescription>
                    {selectedThread.courseId && (
                      <div className="mt-1">
                        <Badge variant="outline" className="flex items-center w-fit">
                          <BookOpen className="h-3 w-3 mr-1" />
                          Relacionado con: {selectedThread.courseName}
                        </Badge>
                      </div>
                    )}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Original post */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={selectedThread.author.avatar}
                          alt={selectedThread.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-medium">{selectedThread.author.name}</h4>
                          <p className="text-xs text-gray-500">
                            Publicado el {new Date(selectedThread.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Autor original
                        </Badge>
                      </div>
                      <div className="mt-3 text-sm">
                        <p className="whitespace-pre-line">{selectedThread.content}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-4">
                        {selectedThread.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-gray-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Replies */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Respuestas ({selectedThread.replies})</h3>
                      <Select defaultValue="newest">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Ordenar por" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Más recientes</SelectItem>
                          <SelectItem value="oldest">Más antiguos</SelectItem>
                          <SelectItem value="votes">Más votados</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Mock replies - in a real app, these would come from an API */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                            alt="María González"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h4 className="font-medium">María González</h4>
                            <p className="text-xs text-gray-500">
                              Hace 3 días
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 text-sm">
                          <p>
                            En mi experiencia, para minas de esa profundidad los sistemas de ventilación deben ser diseñados con redundancia. Te recomiendo revisar los sistemas VentSim que han dado buenos resultados en nuestra operación.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80"
                            alt="Carlos Rodríguez"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h4 className="font-medium">Carlos Rodríguez</h4>
                            <p className="text-xs text-gray-500">
                              Hace 2 días
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                            Instructor
                          </Badge>
                        </div>
                        <div className="mt-3 text-sm">
                          <p>
                            Excelente tema. En el curso abordamos esto en detalle en el módulo 4. Además de lo que menciona María, considera que a esa profundidad la temperatura es un factor crítico. Los sistemas de refrigeración deben integrarse con la ventilación.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center py-3">
                      <Button variant="outline" onClick={() => toast.info("Mostrando más respuestas...")}>
                        Cargar más respuestas
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Reply form */}
                  <div>
                    <h3 className="font-medium mb-2">Tu respuesta</h3>
                    <Textarea 
                      placeholder="Escribe tu respuesta aquí..." 
                      className="min-h-[120px] mb-3"
                    />
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedThread(null)}
                      >
                        Cancelar
                      </Button>
                      <Button 
                        onClick={() => {
                          toast.success("Tu respuesta ha sido publicada");
                          setSelectedThread(null);
                        }}
                      >
                        Publicar respuesta
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};
