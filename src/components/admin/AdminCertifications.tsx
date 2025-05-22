
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  MoreVertical,
  FileCheck,
  FileClock,
  FileX,
  Award
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const AdminCertifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Datos de ejemplo para certificaciones
  const certifications = [
    {
      id: "CERT-1021",
      user: "Carlos Rodríguez",
      course: "Fundamentos de Ingeniería Civil",
      date: "15/04/2023",
      status: "issued",
      expires: "15/04/2025"
    },
    {
      id: "CERT-1022",
      user: "María López",
      course: "Seguridad en Operaciones Mineras",
      date: "22/04/2023",
      status: "issued",
      expires: "22/04/2024"
    },
    {
      id: "CERT-1023",
      user: "Juan Pérez",
      course: "Gestión de Proyectos Avanzada",
      date: "01/05/2023",
      status: "pending",
      expires: null
    },
    {
      id: "CERT-1024",
      user: "Ana García",
      course: "Cálculo Estructural",
      date: "10/03/2023",
      status: "issued",
      expires: "10/03/2025"
    },
    {
      id: "CERT-1025",
      user: "Roberto Méndez",
      course: "Legislación Ambiental en Minería",
      date: "02/02/2023",
      status: "rejected",
      expires: null
    }
  ];
  
  const getStatusBadge = (status) => {
    switch(status) {
      case "issued":
        return <Badge className="bg-green-500">Emitido</Badge>;
      case "pending":
        return <Badge className="bg-amber-500">Pendiente</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rechazado</Badge>;
      default:
        return <Badge className="bg-gray-500">-</Badge>;
    }
  };
  
  const getStatusIcon = (status) => {
    switch(status) {
      case "issued":
        return <FileCheck className="h-5 w-5 text-green-600" />;
      case "pending":
        return <FileClock className="h-5 w-5 text-amber-600" />;
      case "rejected":
        return <FileX className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Award className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-medium">Gestión de Certificaciones</h3>
        </div>
        <Button>
          Configurar Certificaciones
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg border p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm text-gray-500">Certificaciones Emitidas</h3>
            <FileCheck className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold mt-2">532</p>
          <p className="text-xs text-gray-500">48 emitidas este mes</p>
        </div>
        
        <div className="bg-white rounded-lg border p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm text-gray-500">Pendientes de Revisión</h3>
            <FileClock className="h-5 w-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold mt-2">28</p>
          <p className="text-xs text-gray-500">12 solicitadas este mes</p>
        </div>
        
        <div className="bg-white rounded-lg border p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm text-gray-500">Certificaciones Vencidas</h3>
            <FileX className="h-5 w-5 text-red-600" />
          </div>
          <p className="text-2xl font-bold mt-2">45</p>
          <p className="text-xs text-gray-500">15 vencen este mes</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Buscar certificación..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filtrar
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Expiración</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certifications.map((cert) => (
              <TableRow key={cert.id}>
                <TableCell className="font-medium">{cert.id}</TableCell>
                <TableCell>{cert.user}</TableCell>
                <TableCell>{cert.course}</TableCell>
                <TableCell>{cert.date}</TableCell>
                <TableCell>{getStatusBadge(cert.status)}</TableCell>
                <TableCell>{cert.expires || "-"}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        Ver certificación
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Descargar PDF
                      </DropdownMenuItem>
                      {cert.status === "pending" && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-green-600">
                            Aprobar y emitir
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Rechazar
                          </DropdownMenuItem>
                        </>
                      )}
                      {cert.status === "issued" && (
                        <DropdownMenuItem>
                          Renovar certificación
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Mostrando 5 de 605 certificaciones
        </p>
        <div className="space-x-2">
          <Button variant="outline" size="sm" disabled>
            Anterior
          </Button>
          <Button variant="outline" size="sm">
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminCertifications;
