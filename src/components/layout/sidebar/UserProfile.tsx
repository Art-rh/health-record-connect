
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const UserProfile = () => {
  const { state } = useSidebar();

  const handleLogout = () => {
    localStorage.removeItem("clinicCRM_token");
    localStorage.removeItem("clinicCRM_user");
    window.location.href = "/login";
  };

  return (
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
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className={cn(
                "text-white hover:bg-white/10",
                state === "expanded" ? "ml-auto" : ""
              )}
            >
              <LogOut size={18} />
            </Button>
          </TooltipTrigger>
          {state === "collapsed" && (
            <TooltipContent side="right" className="bg-gray-800 text-white border-none">
              Sair
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </div>
  );
};

export default UserProfile;
