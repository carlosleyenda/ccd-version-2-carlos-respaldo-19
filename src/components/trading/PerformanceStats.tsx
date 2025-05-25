
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Trophy, Target, BarChart3 } from "lucide-react";

export const PerformanceStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      title: "Estudiantes Activos",
      value: "10,247",
      description: "Traders entrenados exitosamente",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Ganancias Promedio",
      value: "$1,850",
      description: "Ingresos mensuales por estudiante",
      color: "text-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Tasa de Éxito",
      value: "94.7%",
      description: "Estudiantes con resultados positivos",
      color: "text-green-600"
    },
    {
      icon: Trophy,
      title: "Años de Experiencia",
      value: "8+",
      description: "Años perfeccionando nuestro método",
      color: "text-amber-600"
    },
    {
      icon: Target,
      title: "ROI Promedio",
      value: "247%",
      description: "Retorno de inversión anual",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Win Rate",
      value: "78.4%",
      description: "Operaciones ganadoras promedio",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resultados Verificables</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nuestros números hablan por sí solos. Más de 8 años de resultados consistentes y estudiantes exitosos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Auditado por Ernst & Young</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Nuestros resultados son verificados mensualmente por una firma de auditoría independiente. 
              Transparencia total en nuestras métricas de rendimiento.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="font-bold text-lg text-emerald-600">Última auditoría:</div>
                <div className="text-gray-500">Noviembre 2024</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-emerald-600">Próxima auditoría:</div>
                <div className="text-gray-500">Diciembre 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
