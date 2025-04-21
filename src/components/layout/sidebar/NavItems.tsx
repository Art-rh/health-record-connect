
import { Link, useLocation } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/config/navigation";

const NavItems = () => {
  const location = useLocation();
  const { state } = useSidebar();
  const user = JSON.parse(localStorage.getItem("clinicCRM_user") || '{"role": "admin"}');

  return (
    <SidebarMenu>
      {navigationItems
        .filter((item) => item.allowed.includes(user.role))
        .map((item) => {
          const isActive = location.pathname.startsWith(item.href);
          return (
            <SidebarMenuItem key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className={cn(
                      "w-full",
                      isActive
                        ? "bg-white/20 text-white hover:bg-white/20"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Link to={item.href} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      {state === "expanded" && <span>{item.name}</span>}
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                {state === "collapsed" && (
                  <TooltipContent side="right">
                    {item.name}
                  </TooltipContent>
                )}
              </Tooltip>
            </SidebarMenuItem>
          );
        })}
    </SidebarMenu>
  );
};

export default NavItems;

