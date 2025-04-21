
import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Edit, Calendar, UploadCloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock patient data
const patientDetails = {
  id: 7,
  name: "Alice Henriques",
  age: 29,
  document: "258.369.147-07",
  phone: "(11) 92583-6914",
  email: "alice.henriques@email.com",
  health_insurance: "NotreDame",
  insurance_number: "UNIMED 123",
  address: "Rua das Flores, 123, Jardim Botânico, São Paulo - SP",
  birthdate: "15/08/1994",
  gender: "Feminino",
  blood_type: "A+",
  conditions: ["Diabetes", "Botox", "Dipirona"],
  interests: ["Laser CO2"],
  observations: [
    {
      text: "Paciente mais sensível a dor! Agendar procedimentos com tempo extra",
      date: "08/11/2022",
      time: "16:37",
      doctor: "Marina Dias"
    }
  ],
  private_notes: [
    {
      text: "Paciente diabética",
      date: "08/11/2022",
      time: "16:36",
      doctor: "Marina Dias"
    }
  ],
  future_appointments: [
    {
      type: "Consulta",
      doctor: "Marina Dias",
      date: "19/11/2022",
      time: "15:00"
    },
    {
      type: "Procedimento",
      doctor: "Marina Dias",
      date: "19/11/2022",
      time: "16:00"
    }
  ],
  history: {
    consultations: 31,
    exams: 2,
    vaccines: 0,
    surgeries: 2,
    procedures: 47,
    cancellations: 0
  },
  records: [
    {
      id: 1,
      type: "Consulta",
      date: "10/02/2024",
      doctor: "Dr. Marina Dias",
      specialty: "Dermatologia",
      summary: "Consulta de rotina para avaliação da pele. Queixa de ressecamento e irritação na região facial.",
      diagnosis: "Dermatite seborreica leve",
      prescription: "Loção hidratante facial 2x ao dia, Corticoide tópico de baixa potência 1x ao dia por 7 dias.",
      recommendations: "Retorno em 15 dias para avaliação. Evitar exposição solar sem proteção."
    },
    {
      id: 2,
      type: "Exame",
      date: "15/02/2024",
      name: "Hemograma Completo",
      results: "Resultados dentro da normalidade. Glicemia em jejum: 112 mg/dL (ligeiramente elevada).",
      lab: "Laboratório Central",
      fileUrl: "#"
    },
    {
      id: 3,
      type: "Procedimento",
      date: "25/02/2024",
      doctor: "Dr. Marina Dias",
      specialty: "Dermatologia",
      name: "Aplicação de Botox",
      region: "Região frontal e periorbicular",
      notes: "Aplicadas 20 unidades. Paciente tolerou bem o procedimento sem intercorrências.",
      recommendations: "Evitar massagear a área por 24h. Retorno em 15 dias para avaliação."
    }
  ],
  files: [
    {
      id: 1,
      name: "Resultados_Exames_Fev2024.pdf",
      type: "PDF",
      size: "2.4 MB",
      date: "15/02/2024",
      category: "Exames Laboratoriais"
    },
    {
      id: 2,
      name: "Termo_Consentimento_Botox.pdf",
      type: "PDF",
      size: "1.2 MB",
      date: "25/02/2024",
      category: "Documentos"
    },
    {
      id: 3,
      name: "Foto_Antes_Procedimento.jpg",
      type: "Imagem",
      size: "3.8 MB",
      date: "25/02/2024",
      category: "Imagens"
    },
    {
      id: 4,
      name: "Receita_Medicamentos.pdf",
      type: "PDF",
      size: "0.9 MB",
      date: "10/02/2024",
      category: "Prescrições"
    }
  ]
};

const Prontuario = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("informacoes");

  // In a real application, we would fetch patient data based on the ID
  const patient = patientDetails;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{patient.name}</h1>
              <Button size="sm" variant="ghost" className="gap-1">
                <Edit className="w-4 h-4" /> Editar
              </Button>
            </div>
            <p className="text-muted-foreground">Prontuário do paciente</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
            <Button className="bg-clinic-primary hover:bg-clinic-accent">
              Nova Consulta
            </Button>
          </div>
        </div>

        {/* Patient Health Condition Tags */}
        <div className="flex flex-wrap gap-1">
          {patient.conditions.map((condition, index) => (
            <Tag key={index} color={index === 0 ? "blue" : index === 1 ? "green" : "red"}>
              {condition}
            </Tag>
          ))}
          {patient.interests.map((interest, index) => (
            <Tag key={`interest-${index}`} color="purple">
              INTERESSE: {interest}
            </Tag>
          ))}
        </div>

        {/* Main Patient Info Card */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-clinic-primary text-white text-xl">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{patient.name}</h2>
                    <p className="text-muted-foreground">{patient.age} anos</p>
                    <p className="text-sm text-clinic-primary font-medium">{patient.phone}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Convênio</p>
                    <p className="font-medium">{patient.insurance_number}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Data de nascimento</p>
                      <p className="font-medium">{patient.birthdate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tipo sanguíneo</p>
                      <p className="font-medium">{patient.blood_type}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Endereço</p>
                    <p className="font-medium">{patient.address}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-medium">{patient.email}</p>
                  </div>
                </div>

                {/* Future appointments */}
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Futuros agendamentos:</h3>
                  <div className="space-y-2">
                    {patient.future_appointments.map((appointment, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-clinic-primary mt-0.5" />
                        <div className="text-sm">
                          <span className="font-medium">{appointment.type} com {appointment.doctor}</span>
                          <div>dia {appointment.date} às {appointment.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs 
              defaultValue="informacoes" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-7 mb-4">
                <TabsTrigger value="informacoes">Informações Pessoais</TabsTrigger>
                <TabsTrigger value="prescricoes">Prescrições</TabsTrigger>
                <TabsTrigger value="acompanhamento">Acompanhamento</TabsTrigger>
                <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
                <TabsTrigger value="orcamentos">Orçamentos</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="arquivos">Arquivos</TabsTrigger>
              </TabsList>

              {/* Informações Pessoais Tab */}
              <TabsContent value="informacoes">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    {/* Observations */}
                    <div>
                      <h3 className="font-semibold mb-2">Observações:</h3>
                      {patient.observations.map((obs, idx) => (
                        <div key={idx} className="text-sm">
                          <p>- {obs.text}</p>
                          <p className="text-xs text-muted-foreground">
                            por {obs.doctor} às {obs.date} {obs.time}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Private notes */}
                    <div>
                      <h3 className="font-semibold mb-2">Observações privadas:</h3>
                      {patient.private_notes.map((note, idx) => (
                        <div key={idx} className="text-sm">
                          <p>- {note.text}</p>
                          <p className="text-xs text-muted-foreground">
                            por {note.doctor} às {note.date} {note.time}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Patient History */}
                    <div className="pt-4">
                      <div className="grid grid-cols-6 gap-4 text-center">
                        <div>
                          <p className="text-xl font-bold text-clinic-primary">{patient.history.consultations}</p>
                          <p className="text-sm text-muted-foreground">Consultas</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-clinic-primary">{patient.history.exams}</p>
                          <p className="text-sm text-muted-foreground">Exames</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-clinic-primary">{patient.history.vaccines}</p>
                          <p className="text-sm text-muted-foreground">Vacinas</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-clinic-primary">{patient.history.surgeries}</p>
                          <p className="text-sm text-muted-foreground">Cirurgias</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-clinic-primary">{patient.history.procedures}</p>
                          <p className="text-sm text-muted-foreground">Procedimentos</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-clinic-primary">{patient.history.cancellations}</p>
                          <p className="text-sm text-muted-foreground">Cancelados</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-6 gap-2">
                      <Button size="sm" variant="outline" className="flex gap-1">
                        <span>Nova consulta</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex gap-1">
                        <span>Novo Exame</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex gap-1">
                        <span>Nova Vacinação</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex gap-1">
                        <span>Nova Cirurgia</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex gap-1">
                        <span>Voltar ao Procedimento</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex gap-1">
                        <span>Ver mais</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Prescrições Tab */}
              <TabsContent value="prescricoes">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Histórico de Prescrições</h3>
                    <div className="space-y-4">
                      {patient.records
                        .filter(record => record.type === "Consulta" && record.prescription)
                        .map(record => (
                          <div key={record.id} className="border p-4 rounded-md">
                            <div className="flex justify-between mb-2">
                              <div className="font-medium">{record.date} - {record.doctor}</div>
                              <Badge variant="outline">{record.specialty}</Badge>
                            </div>
                            <p className="text-sm mb-2"><span className="font-medium">Diagnóstico:</span> {record.diagnosis}</p>
                            <p className="text-sm"><span className="font-medium">Prescrição:</span> {record.prescription}</p>
                          </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Acompanhamento Tab */}
              <TabsContent value="acompanhamento">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Histórico de Atendimentos</h3>
                    <div className="space-y-4">
                      {patient.records.map(record => (
                        <div key={record.id} className="border p-4 rounded-md">
                          <div className="flex justify-between mb-2">
                            <div className="font-medium">{record.date} - {record.type}</div>
                            <Badge variant={record.type === "Consulta" ? "default" : record.type === "Exame" ? "outline" : "secondary"}>
                              {record.type === "Consulta" ? record.specialty : 
                               record.type === "Exame" ? record.name : record.name}
                            </Badge>
                          </div>
                          
                          {record.type === "Consulta" && (
                            <>
                              <p className="text-sm mb-2">{record.summary}</p>
                              <p className="text-sm"><span className="font-medium">Diagnóstico:</span> {record.diagnosis}</p>
                            </>
                          )}
                          
                          {record.type === "Exame" && (
                            <>
                              <p className="text-sm mb-2"><span className="font-medium">Laboratório:</span> {record.lab}</p>
                              <p className="text-sm">{record.results}</p>
                              <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                                Ver arquivo
                              </Button>
                            </>
                          )}
                          
                          {record.type === "Procedimento" && (
                            <>
                              <p className="text-sm mb-2"><span className="font-medium">Região:</span> {record.region}</p>
                              <p className="text-sm">{record.notes}</p>
                              <p className="text-sm mt-2"><span className="font-medium">Recomendações:</span> {record.recommendations}</p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Financeiro Tab */}
              <TabsContent value="financeiro">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Histórico Financeiro</h3>
                    <p className="text-muted-foreground">Histórico de pagamentos, faturas e pendências financeiras</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orçamentos Tab */}
              <TabsContent value="orcamentos">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Orçamentos</h3>
                    <p className="text-muted-foreground">Orçamentos aprovados e pendentes</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Marketing Tab */}
              <TabsContent value="marketing">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Marketing</h3>
                    <p className="text-muted-foreground">Preferências de comunicação e campanhas</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Arquivos Tab */}
              <TabsContent value="arquivos">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Documentos e Arquivos</h3>
                      <Button size="sm">
                        <UploadCloud className="w-4 h-4 mr-2" /> Enviar arquivo
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {patient.files.map(file => (
                        <div key={file.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {file.category} • {file.size} • {file.date}
                              </p>
                            </div>
                          </div>
                          <div>
                            <Button variant="ghost" size="sm">Baixar</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Prontuario;
