
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Agenda from "./pages/Agenda";
import Pacientes from "./pages/Pacientes";
import Prontuario from "./pages/Prontuario";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => {
  // Check if user is logged in (mock)
  const isLoggedIn = localStorage.getItem("clinicCRM_token");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route 
              path="/" 
              element={
                isLoggedIn ? (
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            <Route 
              path="/agenda" 
              element={
                isLoggedIn ? (
                  <MainLayout>
                    <Agenda />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            <Route 
              path="/pacientes" 
              element={
                isLoggedIn ? (
                  <MainLayout>
                    <Pacientes />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            <Route 
              path="/prontuarios/:id" 
              element={
                isLoggedIn ? (
                  <MainLayout>
                    <Prontuario />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
