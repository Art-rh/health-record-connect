
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirecionar para login ou dashboard, dependendo do estado de autenticação
    const isLoggedIn = localStorage.getItem("clinicCRM_token");
    navigate(isLoggedIn ? '/agenda' : '/login');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-clinic-primary">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">ClinicCRM</h1>
        <p className="text-xl">Carregando...</p>
      </div>
    </div>
  );
};

export default Index;
