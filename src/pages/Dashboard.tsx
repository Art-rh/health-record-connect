
import { Calendar, FileText, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral do sistema e atividades recentes
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Consultas Hoje
              </CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 comparado com ontem
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Total de Pacientes
              </CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">
                +180 nos últimos 30 dias
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Prontuários Atualizados
              </CardTitle>
              <FileText className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">
                Nos últimos 7 dias
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Consultas Recentes</CardTitle>
              <CardDescription>
                Últimas consultas realizadas no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Maria Silva</p>
                    <p className="text-sm text-muted-foreground">Cardiologia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Hoje, 13:00</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">João Santos</p>
                    <p className="text-sm text-muted-foreground">Ortopedia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Hoje, 10:30</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Ana Oliveira</p>
                    <p className="text-sm text-muted-foreground">Dermatologia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Ontem, 15:45</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Carlos Mendes</p>
                    <p className="text-sm text-muted-foreground">Clínico Geral</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Ontem, 09:15</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>
                Últimas ações realizadas no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-clinic-tag-green"></div>
                  <div>
                    <p className="text-sm font-medium">Prontuário atualizado</p>
                    <p className="text-sm text-muted-foreground">Dr. Silva atualizou o prontuário de Maria Oliveira</p>
                    <p className="text-xs text-muted-foreground">Há 35 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-clinic-tag-blue"></div>
                  <div>
                    <p className="text-sm font-medium">Nova consulta agendada</p>
                    <p className="text-sm text-muted-foreground">João Mendes para amanhã às 14:30</p>
                    <p className="text-xs text-muted-foreground">Há 2 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-clinic-tag-orange"></div>
                  <div>
                    <p className="text-sm font-medium">Exame anexado</p>
                    <p className="text-sm text-muted-foreground">Hemograma completo para Ana Souza</p>
                    <p className="text-xs text-muted-foreground">Há 4 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-clinic-tag-red"></div>
                  <div>
                    <p className="text-sm font-medium">Consulta cancelada</p>
                    <p className="text-sm text-muted-foreground">Pedro Santos cancelou para hoje às 16:00</p>
                    <p className="text-xs text-muted-foreground">Há 5 horas</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
