
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell } from "recharts";
import { MarketTrend } from "./types";

interface MarketTrendsProps {
  trends: MarketTrend;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MarketTrends: React.FC<MarketTrendsProps> = ({ trends }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tendencias del Mercado Laboral</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">Demanda por Habilidades</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={trends.skillsDemand}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="demand" fill="#8884d8" name="Nivel de Demanda" />
                  <Bar dataKey="growth" fill="#82ca9d" name="Crecimiento (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-4">Empleos por Sector</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
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
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Evolución Salarial</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={trends.salaryTrend}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="engineering" stroke="#8884d8" name="Ingeniería" />
                    <Line type="monotone" dataKey="mining" stroke="#82ca9d" name="Minería" />
                    <Line type="monotone" dataKey="management" stroke="#ffc658" name="Gestión" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Habilidades en Crecimiento vs. Decrecimiento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                    <CardTitle className="text-base">En Crecimiento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {trends.growingSkills.map((skill, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="font-medium text-green-500">+{skill.growth}%</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <TrendingDown className="mr-2 h-5 w-5 text-red-500" />
                    <CardTitle className="text-base">En Decrecimiento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {trends.decliningSkills.map((skill, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="font-medium text-red-500">{skill.growth}%</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cursos Recomendados según Tendencias</CardTitle>
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
                    <div className="text-right">
                      <a href={`/course/${course.id}`} className="text-sm text-primary hover:underline">Ver curso</a>
                    </div>
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
