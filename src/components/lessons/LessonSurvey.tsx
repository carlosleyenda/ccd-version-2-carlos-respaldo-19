
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const LessonSurvey = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Encuesta enviada con éxito! Gracias por tus comentarios.");
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-primary">¡Gracias por tus comentarios!</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tus respuestas nos ayudarán a mejorar la calidad de nuestros cursos.
          </p>
          <Button 
            variant="outline"
            onClick={() => setSubmitted(false)}
          >
            Enviar otra respuesta
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Encuesta de satisfacción - Lección 1.1</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Tu opinión es importante para nosotros. Por favor, tómate un momento para evaluar esta lección.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Calidad del contenido</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="content-clarity">1. ¿Qué tan clara fue la presentación del contenido?</Label>
                  <RadioGroup id="content-clarity" defaultValue="4" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="clarity-1" />
                      <Label htmlFor="clarity-1">Poco claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="clarity-2" />
                      <Label htmlFor="clarity-2">Algo claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="clarity-3" />
                      <Label htmlFor="clarity-3">Moderadamente claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="clarity-4" />
                      <Label htmlFor="clarity-4">Muy claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="clarity-5" />
                      <Label htmlFor="clarity-5">Extremadamente claro</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="content-relevance">2. ¿Qué tan relevante fue el contenido para tus objetivos profesionales?</Label>
                  <RadioGroup id="content-relevance" defaultValue="5" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="relevance-1" />
                      <Label htmlFor="relevance-1">Para nada relevante</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="relevance-2" />
                      <Label htmlFor="relevance-2">Poco relevante</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="relevance-3" />
                      <Label htmlFor="relevance-3">Moderadamente relevante</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="relevance-4" />
                      <Label htmlFor="relevance-4">Muy relevante</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="relevance-5" />
                      <Label htmlFor="relevance-5">Extremadamente relevante</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Calidad de la presentación</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="video-quality">3. ¿Cómo evaluarías la calidad del video?</Label>
                  <RadioGroup id="video-quality" defaultValue="4" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="vq-1" />
                      <Label htmlFor="vq-1">Deficiente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="vq-2" />
                      <Label htmlFor="vq-2">Regular</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="vq-3" />
                      <Label htmlFor="vq-3">Buena</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="vq-4" />
                      <Label htmlFor="vq-4">Muy buena</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="vq-5" />
                      <Label htmlFor="vq-5">Excelente</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="instructor-clarity">4. ¿Qué tan claro fue el instructor al explicar los conceptos?</Label>
                  <RadioGroup id="instructor-clarity" defaultValue="5" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="ic-1" />
                      <Label htmlFor="ic-1">Poco claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="ic-2" />
                      <Label htmlFor="ic-2">Algo claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="ic-3" />
                      <Label htmlFor="ic-3">Moderadamente claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="ic-4" />
                      <Label htmlFor="ic-4">Muy claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="ic-5" />
                      <Label htmlFor="ic-5">Extremadamente claro</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="feedback">5. ¿Tienes algún comentario adicional o sugerencia para mejorar esta lección?</Label>
              <Textarea 
                id="feedback" 
                placeholder="Escribe tus comentarios aquí..." 
                className="min-h-[120px]"
              />
            </div>
            
            <Button type="submit" className="w-full">Enviar encuesta</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonSurvey;
