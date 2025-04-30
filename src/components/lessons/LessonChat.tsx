
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SendHorizontal, PenLine } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: string;
  senderType: 'student' | 'instructor';
  avatar: string;
  timestamp: Date;
}

const LessonChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bienvenidos a la discusión sobre Conceptos Fundamentales de Minería Subterránea. Pueden compartir sus preguntas o comentarios en este espacio.',
      sender: 'Dr. Carlos Rodríguez',
      senderType: 'instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      timestamp: new Date(Date.now() - 86400000)
    },
    {
      id: '2',
      text: 'Hola profesor, ¿podría explicar un poco más sobre los sistemas de ventilación modernos y cómo se diferencian de los tradicionales?',
      sender: 'María González',
      senderType: 'student',
      avatar: '',
      timestamp: new Date(Date.now() - 43200000)
    },
    {
      id: '3',
      text: 'Excelente pregunta María. Los sistemas de ventilación modernos incorporan sensores y automatización que permiten ajustar dinámicamente el flujo de aire según las necesidades específicas de cada área de trabajo. A diferencia de los sistemas tradicionales que operaban con caudales fijos, los modernos utilizan algoritmos predictivos para optimizar la energía y maximizar la seguridad.',
      sender: 'Dr. Carlos Rodríguez',
      senderType: 'instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      timestamp: new Date(Date.now() - 32400000)
    },
    {
      id: '4',
      text: 'Gracias por la explicación profesor. Me gustaría saber si cubriremos este tema con mayor profundidad en módulos posteriores.',
      sender: 'María González',
      senderType: 'student',
      avatar: '',
      timestamp: new Date(Date.now() - 21600000)
    },
  ]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'Estudiante',
      senderType: 'student',
      avatar: '',
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simular respuesta del instructor (en una aplicación real, esto no estaría aquí)
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Gracias por tu participación. Continuaremos esta discusión en nuestra próxima clase.',
        sender: 'Dr. Carlos Rodríguez',
        senderType: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 3000);
  };
  
  const formatTime = (date: Date) => {
    const today = new Date();
    const isToday = date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear();
    
    if (isToday) {
      return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
    
    return date.toLocaleDateString([], {day: '2-digit', month: '2-digit'}) + ' ' +
           date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-md overflow-hidden">
      <div className="p-4 border-b bg-muted/30">
        <h2 className="text-lg font-semibold">Foro de discusión</h2>
        <p className="text-sm text-muted-foreground">
          Comparte tus preguntas y comentarios con el instructor y otros estudiantes
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className="flex gap-3 group">
            <Avatar className="h-8 w-8">
              {msg.avatar ? (
                <AvatarImage src={msg.avatar} alt={msg.sender} />
              ) : (
                <AvatarFallback>{msg.sender.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-medium text-sm ${msg.senderType === 'instructor' ? 'text-primary' : ''}`}>
                  {msg.sender}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
              
              <div className="mt-1 text-sm">
                {msg.text}
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
            >
              <PenLine className="h-4 w-4" />
              <span className="sr-only">Responder</span>
            </Button>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Escribe un mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button size="icon" onClick={handleSendMessage}>
            <SendHorizontal className="h-4 w-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonChat;
