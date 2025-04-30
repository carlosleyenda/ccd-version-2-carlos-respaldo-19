
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  to: string;
  badge: string | null;
}

interface MenuGroup {
  label: string;
  items: MenuItem[];
}

interface SidebarMenuProps {
  menuGroups: MenuGroup[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menuGroups }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex-1 overflow-y-auto px-3 py-2">
      {menuGroups.map((group, index) => (
        <div key={index} className="mb-6">
          <h2 className="mb-2 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
            {group.label}
          </h2>
          <ul className="space-y-1">
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex}>
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
                  <span className="ml-3 flex-1">{item.text}</span>
                  {item.badge && (
                    <Badge variant="outline" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
