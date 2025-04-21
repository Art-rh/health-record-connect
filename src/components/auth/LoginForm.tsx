
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de login - em uma implementação real, isso seria uma chamada a uma API
    setTimeout(() => {
      // Dados de usuário simulados para demonstração
      if (email === "medico@cliniccrm.com" && password === "123456") {
        localStorage.setItem("clinicCRM_token", "token-simulado");
        localStorage.setItem("clinicCRM_user", JSON.stringify({
          name: "Dr. João Silva",
          email: "medico@cliniccrm.com",
          role: "medico"
        }));
        
        navigate("/agenda");
      } else if (email === "secretaria@cliniccrm.com" && password === "123456") {
        localStorage.setItem("clinicCRM_token", "token-simulado");
        localStorage.setItem("clinicCRM_user", JSON.stringify({
          name: "Maria Oliveira",
          email: "secretaria@cliniccrm.com",
          role: "secretaria"
        }));
        
        navigate("/agenda");
      } else if (email === "admin@cliniccrm.com" && password === "123456") {
        localStorage.setItem("clinicCRM_token", "token-simulado");
        localStorage.setItem("clinicCRM_user", JSON.stringify({
          name: "Admin",
          email: "admin@cliniccrm.com",
          role: "admin"
        }));
        
        navigate("/agenda");
      } else {
        toast({
          variant: "destructive",
          title: "Erro de autenticação",
          description: "E-mail ou senha incorretos. Tente novamente.",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-clinic-primary flex items-center justify-center">
            <Lock className="text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center font-bold">Login</CardTitle>
        <CardDescription className="text-center">
          Entre com suas credenciais para acessar o sistema
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Button variant="link" className="text-xs p-0 h-auto">
                Esqueceu a senha?
              </Button>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-clinic-primary hover:bg-clinic-accent"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
