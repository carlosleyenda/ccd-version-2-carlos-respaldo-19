
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    toast.success(`Tema cambiado a ${newTheme === "light" ? "claro" : "oscuro"}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast.info(`Buscando: ${searchTerm}`);
      // En una aplicación real, esto redirigiría a resultados de búsqueda
      setSearchTerm("");
    }
  };

  const handleNotificationClick = (notification: string) => {
    toast.info(`Notificación: ${notification}`);
    // En una aplicación real, esto podría marcar la notificación como leída
  };

  const handleProfileAction = (action: string) => {
    switch (action) {
      case "profile":
        navigate("/profile");
        toast.info("Navegando al perfil");
        break;
      case "settings":
        navigate("/settings");
        toast.info("Navegando a configuración");
        break;
      case "logout":
        // En una aplicación real, esto ejecutaría la lógica de cierre de sesión
        toast.success("Cerrando sesión...");
        setTimeout(() => navigate("/"), 1000);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar} 
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex-shrink-0 flex items-center ml-2 lg:ml-0">
              <span className="text-management-700 dark:text-management-300 font-bold text-xl">C</span>
              <span className="text-engineering-700 dark:text-engineering-300 font-bold text-xl">C</span>
              <span className="text-mining-700 dark:text-mining-300 font-bold text-xl">D</span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-center px-2 lg:px-0">
            <div className="max-w-lg w-full">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary text-sm"
                  placeholder="Buscar cursos, certificaciones..."
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="text-gray-500 dark:text-gray-300"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-gray-500 dark:text-gray-300">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="px-4 py-2 font-medium border-b">Notificaciones</div>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => handleNotificationClick("Nuevo curso disponible")}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">Nuevo curso disponible</span>
                    <span className="text-sm text-gray-500">Seguridad Minera Avanzada</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => handleNotificationClick("Clase en vivo hoy")}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">Clase en vivo hoy</span>
                    <span className="text-sm text-gray-500">Procesos de Extracción - 18:00</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-300">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => handleProfileAction("profile")}
                >
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => handleProfileAction("settings")}
                >
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => handleProfileAction("logout")}
                >
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
