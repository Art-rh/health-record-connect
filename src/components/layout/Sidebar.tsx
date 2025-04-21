
import { Link, useLocation } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  FileText, 
  Settings,
  User,
  LogOut
} from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  const { state } = useSidebar();
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
    <>
      <ShadcnSidebar className="bg-clinic-primary text-white">
        <SidebarHeader className="flex items-center justify-between px-4 py-3 h-16">
          <div className="flex items-center gap-2 text-xl font-bold">
            {state === "expanded" ? "ClinicCRM" : "CRM"}
          </div>
          <SidebarTrigger className="text-white hover:bg-clinic-accent/20" />
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarMenu>
            {navigation
              .filter((item) => item.allowed.includes(user.role))
              .map((item) => {
                const isActive = location.pathname.startsWith(item.href);
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={state === "collapsed" ? item.name : undefined}
                      className={cn(
                        "w-full",
                        isActive
                          ? "bg-white/20 text-white hover:bg-white/20"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <Link to={item.href} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter className="border-t border-white/10">
          <div className="px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <User size={18} />
              </div>
              {state === "expanded" && (
                <div>
                  <p className="text-sm font-medium">Dr. João Silva</p>
                  <p className="text-xs text-white/70">Médico</p>
                </div>
              )}
              {state === "expanded" && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  className="ml-auto text-white hover:bg-white/10"
                >
                  <LogOut size={18} />
                </Button>
              )}
            </div>
          </div>
        </SidebarFooter>
      </ShadcnSidebar>
    </>
  );
};

export default Sidebar;
