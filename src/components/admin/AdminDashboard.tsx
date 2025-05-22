
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, Users, BookOpen, Award, 
  UserPlus, DollarSign, CalendarDays 
} from "lucide-react";

const AdminDashboard = () => {
  // Datos de ejemplo para el dashboard
  const stats = [
    {
      title: "Usuarios Activos",
      value: "2,845",
      change: "+12.5%",
      timeframe: "desde el mes pasado",
      icon: <Users className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Ingresos Totales",
      value: "S/ 58,320",
      change: "+8.2%",
      timeframe: "desde el mes pasado",
      icon: <DollarSign className="h-5 w-5 text-green-600" />
    },
    {
      title: "Cursos Activos",
      value: "124",
      change: "+4",
      timeframe: "nuevos este mes",
      icon: <BookOpen className="h-5 w-5 text-amber-600" />
    },
    {
      title: "Certificaciones",
      value: "532",
      change: "+48",
      timeframe: "este mes",
      icon: <Award className="h-5 w-5 text-purple-600" />
    },
    {
      title: "Nuevos Registros",
      value: "387",
      change: "+22.4%",
      timeframe: "desde el mes pasado",
      icon: <UserPlus className="h-5 w-5 text-indigo-600" />
    },
    {
      title: "Sesiones Programadas",
      value: "68",
      change: "próximos 7 días",
      timeframe: "",
      icon: <CalendarDays className="h-5 w-5 text-orange-600" />
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Estadísticas Generales</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">
                {stat.change} {stat.timeframe}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Rendimiento Mensual</CardTitle>
            <CardDescription>
              Comparativa de ingresos y nuevos usuarios
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <BarChart3 className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p>Gráfico de rendimiento mensual</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Actividad Reciente</CardTitle>
            <CardDescription>
              Últimas 10 acciones en la plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className="flex items-center gap-3 pb-2 border-b last:border-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium">
                    {['P', 'M', 'J', 'S', 'L'][i]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {[
                        'Pedro R. compró el curso de Ingeniería Civil',
                        'María T. completó la certificación de Seguridad Minera',
                        'Juan B. solicitó retiro de comisiones (S/ 120)',
                        'Sandra L. registró 3 nuevos referidos',
                        'Luis C. publicó nuevo curso de Gestión Ambiental'
                      ][i]}
                    </p>
                    <p className="text-xs text-gray-500">
                      hace {[12, 45, 2, 5, 18][i]} {['minutos', 'minutos', 'horas', 'horas', 'minutos'][i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
