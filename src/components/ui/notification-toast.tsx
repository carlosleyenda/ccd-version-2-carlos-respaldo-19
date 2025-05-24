
import React from "react";
import { toast } from "sonner";
import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

interface NotificationToastProps {
  type: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

export const showNotification = ({ type, title, message }: NotificationToastProps) => {
  const Icon = icons[type];
  
  toast[type](title, {
    description: message,
    icon: <Icon className="h-4 w-4" />,
  });
};
