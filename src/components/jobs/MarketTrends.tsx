
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, BarChart3, PieChart, LineChart, Calendar, BookOpen, ArrowRight, Search } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as RechartsLineChart, Line, Legend, PieChart as RechartsPieChart, Pie, Cell, Label, Scatter, ScatterChart, ZAxis } from "recharts";
import { MarketTrend } from "./types";

interface MarketTrendsProps {
  trends: MarketTrend;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MarketTrends: React.FC<MarketTrendsProps> = ({ trends }) => {
  const [activeSkillsTab, setActiveSkillsTab] = useState<'growing' | 'declining' | 'demand'>('demand');
  const [activeTab, setActiveTab] = useState<'skills' | 'sectors' | 'locations' | 'roles'>('skills');
  const [timeRange, setTimeRange] = useState<'month' | 'quarter' | 'year'>('month');
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Tendencias del Mercado Laboral</CardTitle>
            <div className="flex items-center space-x-2">
              <Button 
                variant={timeRange === 'month' ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeRange('month')}
              >
                Mensual
              </Button>
              <Button 
                variant={timeRange === 'quarter' ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeRange('quarter')}
              >
                Trimestral
              </Button>
              <Button 
                variant={timeRange === 'year' ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeRange('year')}
              >
                Anual
              </Button>
            </div>
          </div>
          <CardDescription>
            Análisis actualizado de las tendencias laborales en el sector minero e ingeniería
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="skills" className="flex items-center gap-1">
                <Search className="h-4 w-4" />
                <span>Habilidades</span>
              </TabsTrigger>
              <TabsTrigger value="sectors" className="flex items-center gap-1">
                <PieChart className="h-4 w-4" />
                <span>Sectores</span>
              </TabsTrigger>
              <TabsTrigger value="locations" className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4" />
                <span>Ubicaciones</span>
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-1">
                <LineChart className="h-4 w-4" />
                <span>Roles</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="skills" className="space-y-6">
                <Tabs value={activeSkillsTab} onValueChange={(value) => setActiveSkillsTab(value as any)}>
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="demand" className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4" />
                      <span>Demanda</span>
                    </TabsTrigger>
                    <TabsTrigger value="growing" className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>En Crecimiento</span>
                    </TabsTrigger>
                    <TabsTrigger value="declining" className="flex items-center gap-1">
                      <TrendingDown className="h-4 w-4" />
                      <span>En Declive</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="pt-6">
                    <TabsContent value="demand">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Demanda de Habilidades en el Mercado</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={trends.skillsDemand}
                                margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis 
                                  dataKey="name" 
                                  angle={-45} 
                                  textAnchor="end" 
                                  height={70}
                                  interval={0}
                                  tick={{ fontSize: 12 }}
                                />
                                <YAxis />
                                <Tooltip formatter={(value, name) => [value, name === "demand" ? "Nivel de Demanda" : "Crecimiento (%)"]} />
                                <Legend />
                                <Bar dataKey="demand" fill="#8884d8" name="Nivel de Demanda" />
                                <Bar dataKey="growth" fill="#82ca9d" name="Crecimiento (%)" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="growing">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                            Habilidades en Mayor Crecimiento
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={trends.growingSkills.sort((a, b) => b.growth - a.growth)}
                                  layout="vertical"
                                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                  <XAxis type="number" domain={[0, 'dataMax']} />
                                  <YAxis 
                                    dataKey="name" 
                                    type="category" 
                                    interval={0}
                                    tick={{ fontSize: 12 }}
                                    width={80}
                                  />
                                  <Tooltip formatter={(value) => [`${value}%`, 'Crecimiento']} />
                                  <Bar dataKey="growth" fill="#82ca9d" name="Crecimiento (%)" radius={[0, 4, 4, 0]} />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                            
                            <div>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Habilidad</TableHead>
                                    <TableHead className="text-right">Crecimiento</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {trends.growingSkills.map((skill, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{skill.name}</TableCell>
                                      <TableCell className="text-right font-medium text-green-600">
                                        +{skill.growth}%
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="declining">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <TrendingDown className="mr-2 h-5 w-5 text-red-500" />
                            Habilidades en Decrecimiento
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={trends.decliningSkills.sort((a, b) => a.growth - b.growth)}
                                  layout="vertical"
                                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                  <XAxis type="number" domain={['dataMin', 0]} />
                                  <YAxis 
                                    dataKey="name" 
                                    type="category" 
                                    interval={0}
                                    tick={{ fontSize: 12 }}
                                    width={80}
                                  />
                                  <Tooltip formatter={(value) => [`${value}%`, 'Decrecimiento']} />
                                  <Bar dataKey="growth" fill="#ff8042" name="Decrecimiento (%)" radius={[4, 0, 0, 4]} />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                            
                            <div>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Habilidad</TableHead>
                                    <TableHead className="text-right">Decrecimiento</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {trends.decliningSkills.map((skill, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{skill.name}</TableCell>
                                      <TableCell className="text-right font-medium text-red-600">
                                        {skill.growth}%
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </div>
                </Tabs>
              </TabsContent>
              
              <TabsContent value="sectors" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Distribución de Empleos por Sector</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={trends.jobsBySector}
                              cx="50%"
                              cy="50%"
                              labelLine={true}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {trends.jobsBySector.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value, name, props) => [`${value}%`, props.payload.name]} />
                            <Legend />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Evolución Salarial por Sector</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart
                            data={trends.salaryTrend}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`S/ ${value.toLocaleString()}`, 'Salario Promedio']} />
                            <Legend />
                            <Line type="monotone" dataKey="engineering" stroke="#8884d8" name="Ingeniería" />
                            <Line type="monotone" dataKey="mining" stroke="#82ca9d" name="Minería" />
                            <Line type="monotone" dataKey="management" stroke="#ffc658" name="Gestión" />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="locations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Distribución de Empleos por Ubicación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={trends.locationStats}
                          margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="location" 
                            interval={0}
                            angle={-45}
                            textAnchor="end"
                            height={60}
                          />
                          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                          <Tooltip />
                          <Legend />
                          <Bar yAxisId="left" dataKey="jobs" fill="#8884d8" name="Número de trabajos" />
                          <Bar yAxisId="right" dataKey="percentChange" fill="#82ca9d" name="Cambio % (último año)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Ubicación</TableHead>
                            <TableHead className="text-center">Número de trabajos</TableHead>
                            <TableHead className="text-right">Variación anual</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {trends.locationStats.map((location, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{location.location}</TableCell>
                              <TableCell className="text-center">{location.jobs}</TableCell>
                              <TableCell className={`text-right font-medium ${
                                location.percentChange > 0 ? 'text-green-600' : 
                                location.percentChange < 0 ? 'text-red-600' : 'text-gray-600'
                              }`}>
                                {location.percentChange > 0 ? '+' : ''}{location.percentChange}%
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="roles" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Roles Más Demandados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                          margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="role" 
                            name="Rol" 
                            angle={-45} 
                            textAnchor="end" 
                            height={80} 
                            interval={0}
                            tick={{ fontSize: 12 }}
                          />
                          <YAxis dataKey="demand" name="Demanda" />
                          <ZAxis dataKey="salaryRange" name="Rango Salarial" />
                          <Tooltip 
                            cursor={{ strokeDasharray: '3 3' }}
                            formatter={(value, name, props) => {
                              if (name === 'Demanda') return [value, 'Nivel de Demanda'];
                              if (name === 'Rango Salarial') return [props.payload.salaryRange, 'Rango Salarial'];
                              return [value, name];
                            }}
                          />
                          <Legend />
                          <Scatter name="Roles" data={trends.topDemandRoles} fill="#8884d8" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Rol</TableHead>
                            <TableHead className="text-center">Nivel de Demanda</TableHead>
                            <TableHead className="text-right">Rango Salarial</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {trends.topDemandRoles.map((role, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{role.role}</TableCell>
                              <TableCell className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <div 
                                      key={i}
                                      className={`h-2 w-2 rounded-full ${
                                        i < role.demand / 20 ? 'bg-primary' : 'bg-gray-200'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell className="text-right">{role.salaryRange}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Cursos Recomendados según Tendencias del Mercado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trends.recommendedCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center">
                      <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                      Demanda: +{course.demandGrowth}%
                    </span>
                    <Button variant="ghost" size="sm" asChild className="flex items-center gap-1">
                      <a href={`/course/${course.id}`}>
                        Ver curso
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketTrends;
