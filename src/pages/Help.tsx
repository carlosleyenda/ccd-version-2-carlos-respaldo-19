
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Mail, Phone, Search } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "¿Cómo puedo empezar a hacer trading?",
      answer: "Te recomendamos comenzar con nuestro curso 'Forex desde Cero' que cubre todos los fundamentos básicos del trading. También incluye una cuenta demo para practicar sin riesgo."
    },
    {
      question: "¿Cuánto dinero necesito para empezar?",
      answer: "Puedes comenzar con tan solo $100-500 USD. Sin embargo, recomendamos tener al menos $1000 para una gestión de riesgo adecuada y mejores oportunidades de crecimiento."
    },
    {
      question: "¿Los cursos incluyen certificación?",
      answer: "Sí, todos nuestros cursos incluyen certificación reconocida en la industria. Al completar el curso exitosamente, recibirás un certificado digital y físico."
    },
    {
      question: "¿Hay soporte en tiempo real?",
      answer: "Ofrecemos soporte 24/7 durante horarios de mercado. Nuestros mentores están disponibles para resolver dudas y proporcionar orientación personalizada."
    },
    {
      question: "¿Qué garantías ofrecen?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si no estás completamente satisfecho, te devolvemos el 100% de tu dinero sin preguntas."
    }
  ];

  return (
    <PageLayout 
      title="Centro de Ayuda" 
      subtitle="Encuentra respuestas a tus preguntas o contacta con nuestro equipo de soporte"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Buscar en la base de conocimientos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input 
                placeholder="¿Qué necesitas ayuda?" 
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Preguntas Frecuentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contacto Directo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat en vivo
              </Button>
              
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>soporte@tradingacademypro.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enviar ticket de soporte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Asunto" />
              <Textarea 
                placeholder="Describe tu problema o pregunta..." 
                rows={4}
              />
              <Button className="w-full">
                Enviar ticket
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horarios de atención</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado - Domingo:</span>
                  <span>8:00 - 20:00</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  * Horarios durante mercados activos
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Help;
