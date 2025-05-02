
import React, { useState } from "react";
import { Bot, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { toast } from "sonner";

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! Soy tu asistente virtual de CCD. ¿En qué puedo ayudarte hoy?"
    }
  ]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: "user", content: inputValue }];
    setMessages(newMessages);
    setInputValue("");
    
    // Simulate AI response
    setTimeout(() => {
      let response;
      const query = inputValue.toLowerCase();
      
      if (query.includes("examen") || query.includes("evaluación")) {
        response = "Tu próximo examen es sobre Seguridad Minera el 15 de mayo. Tienes 3 evaluaciones pendientes en tus cursos activos.";
      } else if (query.includes("evento") || query.includes("clase")) {
        response = "Tienes una clase en vivo de Procesos de Extracción hoy a las 18:00. El próximo evento es el Simposio de Ingeniería el 20 de mayo.";
      } else if (query.includes("racha") || query.includes("logro")) {
        response = "¡Llevas una racha de 7 días! Has completado 3 logros este mes y estás a punto de desbloquear la insignia 'Explorador Avanzado'.";
      } else if (query.includes("sugerencia")) {
        response = "Basado en tu actividad reciente, te sugiero completar el curso de 'Métodos Innovadores de Extracción', ya que mejoraría tu perfil profesional.";
      } else if (query.includes("precio") || query.includes("costo")) {
        response = "El plan Premium tiene un costo de $49.99/mes. Actualmente hay una oferta de 20% de descuento en planes anuales.";
      } else if (query.includes("ruta") || query.includes("carrera")) {
        response = "Estás siguiendo la ruta de 'Especialista en Minería'. Tienes un 45% de progreso. Te faltan 4 cursos para completarla.";
      } else if (query.includes("trabajo") || query.includes("empleo")) {
        response = "Hay 12 ofertas de trabajo que coinciden con tu perfil. Las habilidades más solicitadas son Gestión de Proyectos y Análisis de Datos Mineros.";
      } else {
        response = "Puedo ayudarte con información sobre tus cursos, exámenes, eventos, logros, sugerencias personalizadas, precios y rutas de aprendizaje. ¿Qué te gustaría saber?";
      }
      
      setMessages([...newMessages, { role: "assistant", content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && !isMinimized ? (
        <Card className="w-80 md:w-96 shadow-lg border-primary/10">
          <CardHeader className="bg-primary/5 p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base flex items-center">
                <Bot className="mr-2 h-5 w-5" />
                Asistente CCD
              </CardTitle>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleMinimize}
                  className="h-7 w-7"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleOpen}
                  className="h-7 w-7"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <ScrollArea className="h-72">
            <CardContent className="p-4 pt-6">
              <div className="space-y-4">
                {messages.map((message, i) => (
                  <div 
                    key={i} 
                    className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                  >
                    <div 
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.role === "assistant" 
                          ? "bg-muted" 
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </ScrollArea>
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Escribe tu pregunta..."
                value={inputValue}
                onChange={handleInputChange}
                className="flex-1"
              />
              <Button type="submit" size="sm">Enviar</Button>
            </form>
          </CardFooter>
        </Card>
      ) : isOpen && isMinimized ? (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 flex items-center gap-2 border border-border">
          <Bot className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Asistente CCD</span>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMinimize}
              className="h-6 w-6"
            >
              <Maximize2 className="h-3 w-3" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleOpen}
              className="h-6 w-6"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          onClick={toggleOpen} 
          size="lg" 
          className="rounded-full h-14 w-14 shadow-lg"
          variant="default"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default AiAssistant;
