
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Clock, RefreshCw } from "lucide-react";

export const GuaranteeSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-12 w-12 text-emerald-600" />
              <h2 className="text-4xl font-bold">Garantía Blindada</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Estamos tan seguros de nuestro método que te ofrecemos una garantía total
            </p>
          </div>

          <Card className="border-2 border-emerald-200 dark:border-emerald-800 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">
                    30 Días de Garantía Total
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Si en los primeros 30 días no estás completamente satisfecho con nuestro programa, 
                    te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Reembolso completo garantizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Proceso simple de 24 horas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Sin preguntas incómodas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Conservas todo el material descargado</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-center">Además te garantizamos:</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-semibold">Soporte 24/7</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Respuesta garantizada en menos de 2 horas
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <RefreshCw className="h-5 w-5 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-semibold">Actualizaciones de por vida</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Acceso a todas las mejoras futuras sin costo adicional
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-semibold">Certificación incluida</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Certificado profesional reconocido en la industria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg mb-4">
                  <strong>¿Por qué ofrecemos esta garantía?</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Porque sabemos que nuestro método funciona. Más del 95% de nuestros estudiantes 
                  logran resultados positivos en sus primeros 60 días.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Comenzar con Garantía Total
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
