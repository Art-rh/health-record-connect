
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavItems from "./sidebar/NavItems";
import UserProfile from "./sidebar/UserProfile";

const Sidebar = () => {
  const { state } = useSidebar();
  
  return (
    <TooltipProvider delayDuration={0}>
      <ShadcnSidebar className="border-r border-white/10 bg-clinic-primary text-white">
        <SidebarHeader className="flex items-center justify-between px-4 py-3 h-16">
          <div className="flex items-center gap-2 text-xl font-bold">
            {state === "expanded" ? "ClinicCRM" : "CRM"}
          </div>
          <SidebarTrigger className="text-white hover:bg-white/10" />
        </SidebarHeader>
        
        <SidebarContent>
          <NavItems />
        </SidebarContent>
        
        <SidebarFooter className="border-t border-white/10">
          <UserProfile />
        </SidebarFooter>
      </ShadcnSidebar>
    </TooltipProvider>
  );
};

export default Sidebar;
