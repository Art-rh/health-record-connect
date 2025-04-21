
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

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
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          className="ml-auto text-white hover:bg-white/10"
        >
          <LogOut size={18} />
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;

