
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  User,
  Lock,
  LogOut
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("clinicCRM_user") || '{"role": "admin"}');
  
  const navigation = [
    {
      name: "Agenda",
      href: "/agenda",
      icon: Calendar,
      allowed: ["admin", "medico", "secretaria"]
    },
    {
      name: "Pacientes",
      href: "/pacientes",
      icon: Users,
      allowed: ["admin", "medico", "secretaria"]
    },
    {
      name: "Prontuários",
      href: "/prontuarios",
      icon: FileText,
      allowed: ["admin", "medico"]
    },
    {
      name: "Configurações",
      href: "/configuracoes",
      icon: Settings,
      allowed: ["admin"]
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("clinicCRM_token");
    localStorage.removeItem("clinicCRM_user");
    window.location.href = "/login";
  };

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col bg-clinic-primary text-white transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {open ? (
          <h1 className="text-xl font-bold">ClinicCRM</h1>
        ) : (
          <h1 className="text-xl font-bold">CRM</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="text-white hover:bg-clinic-accent/20"
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>
      
      <div className="flex-1 py-4 overflow-auto">
        <nav className="px-2 space-y-1">
          {navigation
            .filter((item) => item.allowed.includes(user.role))
            .map((item) => {
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all",
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon
                    className={cn("flex-shrink-0 w-6 h-6", open ? "mr-3" : "")}
                  />
                  {open && <span>{item.name}</span>}
                </Link>
              );
            })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-white/10">
        <div className={cn(
          "flex items-center",
          open ? "justify-between" : "justify-center"
        )}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <User size={18} />
            </div>
            {open && (
              <div className="ml-3">
                <p className="text-sm font-medium">Dr. João Silva</p>
                <p className="text-xs text-white/70">Médico</p>
              </div>
            )}
          </div>
          
          {open && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="text-white hover:bg-white/10"
            >
              <LogOut size={18} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
