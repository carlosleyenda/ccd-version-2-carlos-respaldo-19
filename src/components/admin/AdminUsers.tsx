
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, MoreVertical, Filter, UserPlus, 
  Mail, AlertTriangle, Ban, CheckCircle 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Datos de ejemplo para usuarios
  const users = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@example.com",
      role: "student",
      status: "active",
      courses: 4,
      registerDate: "15/03/2023"
    },
    {
      id: 2,
      name: "María López",
      email: "maria.lopez@example.com",
      role: "instructor",
      status: "active",
      courses: 12,
      registerDate: "02/08/2022"
    },
    {
      id: 3,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      role: "student",
      status: "inactive",
      courses: 1,
      registerDate: "18/11/2023"
    },
    {
      id: 4,
      name: "Ana García",
      email: "ana.garcia@example.com",
      role: "admin",
      status: "active",
      courses: 0,
      registerDate: "24/01/2022"
    },
    {
      id: 5,
      name: "Roberto Méndez",
      email: "roberto.mendez@example.com",
      role: "student",
      status: "suspended",
      courses: 7,
      registerDate: "05/07/2023"
    }
  ];
  
  const getRoleBadge = (role) => {
    switch(role) {
      case "admin":
        return <Badge className="bg-red-500">Administrador</Badge>;
      case "instructor":
        return <Badge className="bg-purple-500">Instructor</Badge>;
      default:
        return <Badge className="bg-blue-500">Estudiante</Badge>;
    }
  };
  
  const getStatusBadge = (status) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-500">Activo</Badge>;
      case "inactive":
        return <Badge className="bg-gray-500">Inactivo</Badge>;
      case "suspended":
        return <Badge className="bg-amber-500">Suspendido</Badge>;
      default:
        return <Badge className="bg-gray-500">-</Badge>;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Buscar usuario..."
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
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-1" />
            Nuevo Usuario
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Cursos</TableHead>
              <TableHead>Registro</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{user.courses}</TableCell>
                <TableCell>{user.registerDate}</TableCell>
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
                        Ver perfil
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Editar usuario
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Enviar correo
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {user.status === "active" ? (
                        <DropdownMenuItem className="text-amber-600">
                          <Ban className="h-4 w-4 mr-2" />
                          Suspender
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Activar
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Eliminar
                      </DropdownMenuItem>
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
          Mostrando 5 de 845 usuarios
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

export default AdminUsers;
