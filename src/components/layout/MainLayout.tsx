
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in (mock)
  const isLoggedIn = localStorage.getItem("clinicCRM_token");
  
  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  // Add the handler for menu click
  const handleMenuClick = () => {
    // This function will be passed to TopBar
    // It can be used to toggle sidebar on mobile or perform other actions
    console.log("Menu clicked");
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <TopBar onMenuClick={handleMenuClick} />
          
          <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
            <div className="max-w-full mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
