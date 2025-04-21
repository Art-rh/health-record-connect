
import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

// Dados simulados para a agenda
const appointments = [
  {
    id: 1,
    patient: "Maria Silva",
    time: "08:00",
    duration: 30,
    type: "Consulta",
    status: "confirmado",
  },
  {
    id: 2,
    patient: "João Santos",
    time: "09:00",
    duration: 30,
    type: "Retorno",
    status: "confirmado",
  },
  {
    id: 3,
    patient: "Ana Oliveira",
    time: "10:00",
    duration: 45,
    type: "Procedimento",
    status: "aguardando",
  },
  {
    id: 4,
    patient: "Carlos Mendes",
    time: "11:00",
    duration: 30,
    type: "Consulta",
    status: "confirmado",
  },
  {
    id: 5,
    patient: "Pedro Alves",
    time: "13:00",
    duration: 30,
    type: "Consulta",
    status: "cancelado",
  },
  {
    id: 6,
    patient: "Lucia Ferreira",
    time: "14:00",
    duration: 60,
    type: "Procedimento",
    status: "aguardando",
  },
  {
    id: 7,
    patient: "Fernanda Lima",
    time: "15:30",
    duration: 30,
    type: "Retorno",
    status: "confirmado",
  },
];

// Dados simulados de médicos
const doctors = [
  { id: 1, name: "Dr. João Silva", specialty: "Cardiologia" },
  { id: 2, name: "Dra. Maria Oliveira", specialty: "Dermatologia" },
  { id: 3, name: "Dr. Carlos Santos", specialty: "Ortopedia" },
];

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState<string>("1");

  // Função para formatar a data
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Função para navegar entre os dias
  const changeDay = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Agenda</h1>
            <p className="text-muted-foreground">
              Gerencie consultas e procedimentos
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => setSelectedDate(new Date())}>
              Hoje
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => changeDay(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => changeDay(1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Médico</label>
                    <Select 
                      value={selectedDoctor}
                      onValueChange={setSelectedDoctor}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um médico" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id.toString()}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data</label>
                    <div className="border rounded-md p-2 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2 text-clinic-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">
                          {formatDate(selectedDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full bg-clinic-primary hover:bg-clinic-accent">
                      Nova Consulta
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-0">
                <div className="bg-clinic-primary text-white p-3">
                  <h2 className="font-medium">
                    {doctors.find(d => d.id.toString() === selectedDoctor)?.name} - {formatDate(selectedDate)}
                  </h2>
                </div>
                <div className="divide-y">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className={`p-3 hover:bg-gray-50 transition-colors ${
                        appointment.status === "cancelado" ? "opacity-60" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="ml-1 text-sm font-medium">{appointment.time}</span>
                          </div>
                          <div>
                            <p className="font-medium">{appointment.patient}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span 
                                className={`px-2 py-0.5 text-xs rounded-full ${
                                  appointment.type === "Consulta" 
                                    ? "bg-blue-100 text-blue-800" 
                                    : appointment.type === "Retorno"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {appointment.type}
                              </span>
                              <span 
                                className={`px-2 py-0.5 text-xs rounded-full ${
                                  appointment.status === "confirmado" 
                                    ? "bg-emerald-100 text-emerald-800" 
                                    : appointment.status === "aguardando"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button variant="ghost" size="sm">
                            Ver
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Agenda;
