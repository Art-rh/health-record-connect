
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-clinic-primary to-clinic-accent p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">ClinicCRM</h1>
        <p className="text-white/80">
          Sistema de Gerenciamento para Clínicas Médicas
        </p>
      </div>
      <LoginForm />
      <div className="mt-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} ClinicCRM. Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Login;
