
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { Download, Calendar, TrendingUp, Users, FileText, BookOpen, Award, DollarSign } from "lucide-react";

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [period, setPeriod] = useState("month");

  // Dummy data for charts
  const enrollmentData = [
    { name: 'Ene', usuarios: 65 },
    { name: 'Feb', usuarios: 78 },
    { name: 'Mar', usuarios: 92 },
    { name: 'Abr', usuarios: 105 },
    { name: 'May', usuarios: 120 },
    { name: 'Jun', usuarios: 145 },
    { name: 'Jul', usuarios: 162 },
  ];

  const courseCompletionData = [
    { name: 'Ene', completado: 28, abandonado: 12 },
    { name: 'Feb', completado: 32, abandonado: 10 },
    { name: 'Mar', completado: 45, abandonado: 8 },
    { name: 'Abr', completado: 50, abandonado: 15 },
    { name: 'May', completado: 55, abandonado: 12 },
    { name: 'Jun', completado: 60, abandonado: 10 },
    { name: 'Jul', completado: 70, abandonado: 9 },
  ];

  const revenueData = [
    { name: 'Ene', ingresos: 8200 },
    { name: 'Feb', ingresos: 9400 },
    { name: 'Mar', ingresos: 11500 },
    { name: 'Abr', ingresos: 12800 },
    { name: 'May', ingresos: 13900 },
    { name: 'Jun', ingresos: 15200 },
    { name: 'Jul', ingresos: 17500 },
  ];

  const courseDistributionData = [
    { name: 'Minería', value: 35 },
    { name: 'Ingeniería', value: 25 },
    { name: 'Gestión', value: 20 },
    { name: 'Seguridad', value: 15 },
    { name: 'Otros', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const stats = [
    { title: "Total Estudiantes", value: "1,245", trend: "+12%", icon: <Users className="h-8 w-8 text-blue-500" /> },
    { title: "Cursos Activos", value: "87", trend: "+5", icon: <BookOpen className="h-8 w-8 text-green-500" /> },
    { title: "Certificaciones", value: "536", trend: "+18%", icon: <Award className="h-8 w-8 text-amber-500" /> },
    { title: "Ingresos", value: "$42,500", trend: "+7%", icon: <DollarSign className="h-8 w-8 text-purple-500" /> },
  ];

  const popularCourses = [
    { name: "Introducción a la Minería", students: 245, completion: 78, satisfaction: 4.8 },
    { name: "Seguridad en Excavaciones", students: 120, completion: 82, satisfaction: 4.9 },
    { name: "Gestión de Proyectos Mineros", students: 89, completion: 75, satisfaction: 4.7 },
    { name: "Certificación en Control de Calidad", students: 65, completion: 65, satisfaction: 4.5 },
    { name: "Técnicas Avanzadas de Excavación", students: 60, completion: 70, satisfaction: 4.6 },
  ];

  const handlePeriodChange = (value) => {
    setPeriod(value);
    // In a real application, this would trigger a data reload for the new period
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reportes y Analíticas</h2>
        <div className="flex gap-3">
          <Select value={period} onValueChange={handlePeriodChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mes</SelectItem>
              <SelectItem value="quarter">Este Trimestre</SelectItem>
              <SelectItem value="year">Este Año</SelectItem>
              <SelectItem value="custom">Personalizado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Vista General</TabsTrigger>
          <TabsTrigger value="students">Estudiantes</TabsTrigger>
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="finances">Finanzas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Matrículas Mensuales</CardTitle>
                <CardDescription>Nuevos estudiantes matriculados</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={enrollmentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="usuarios" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Finalización de Cursos</CardTitle>
                <CardDescription>Tasas de finalización vs abandono</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={courseCompletionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="completado" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="abandonado" stroke="#ef4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución de Cursos</CardTitle>
                <CardDescription>Por categoría</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={courseDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {courseDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingresos Mensuales</CardTitle>
                <CardDescription>En USD</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Ingresos']} />
                    <Bar dataKey="ingresos" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Cursos Más Populares</CardTitle>
              <CardDescription>Basado en número de estudiantes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-medium">Curso</th>
                      <th className="text-center p-2 font-medium">Estudiantes</th>
                      <th className="text-center p-2 font-medium">Tasa de Finalización</th>
                      <th className="text-center p-2 font-medium">Satisfacción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularCourses.map((course, index) => (
                      <tr key={index} className={index !== popularCourses.length - 1 ? "border-b" : ""}>
                        <td className="p-2">{course.name}</td>
                        <td className="text-center p-2">{course.students}</td>
                        <td className="text-center p-2">{course.completion}%</td>
                        <td className="text-center p-2">{course.satisfaction}/5.0</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="mt-6">
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Demografía de Estudiantes</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Los datos demográficos de los estudiantes se mostrarán aquí.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Retención de Estudiantes</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Los datos de retención de estudiantes se mostrarán aquí.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Rendimiento del Curso</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Las métricas de rendimiento del curso se mostrarán aquí.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tasas de Finalización</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Las tasas de finalización del curso se mostrarán aquí.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="finances" className="mt-6">
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ingresos por Categoría</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Los datos de ingresos por categoría se mostrarán aquí.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Facturación Mensual</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Los datos de facturación mensual se mostrarán aquí.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminReports;
