
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface FooterItem {
  icon: React.ReactNode;
  text: string;
  to: string;
}

interface SidebarFooterProps {
  footerItems: FooterItem[];
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ footerItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleUpgradePlan = () => {
    navigate("/pricing");
    toast.info("Explorando planes de trading premium disponibles");
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 pt-2 px-3">
      <ul className="space-y-1">
        {footerItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className={cn(
                "flex w-full items-center px-3 py-2 text-sm rounded-md",
                currentPath === item.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.icon}
              <span className="ml-3">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="p-4">
        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
          <h3 className="text-sm font-medium text-blue-900 dark:text-blue-200">
            Plan Actual: Trader Básico
          </h3>
          <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">
            Actualiza a Pro Trader para acceso completo
          </p>
          <button 
            className="mt-2 w-full rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
            onClick={handleUpgradePlan}
          >
            Actualizar a Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
