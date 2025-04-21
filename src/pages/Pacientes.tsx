
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tag } from "@/components/ui/tag";
import { Search, MoreHorizontal, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Mock data for patients
const patientData = [
  {
    id: 1,
    name: "Maria Silva",
    age: 45,
    document: "123.456.789-01",
    phone: "(11) 98765-4321",
    email: "maria.silva@email.com",
    health_insurance: "Unimed",
    tags: ["Diabetes", "Hipertensão"],
    lastVisit: "22/03/2024",
  },
  {
    id: 2,
    name: "João Santos",
    age: 35,
    document: "987.654.321-02",
    phone: "(11) 91234-5678",
    email: "joao.santos@email.com",
    health_insurance: "Amil",
    tags: ["Asma"],
    lastVisit: "15/03/2024",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    age: 28,
    document: "456.789.123-03",
    phone: "(11) 94567-8912",
    email: "ana.oliveira@email.com",
    health_insurance: "SulAmérica",
    tags: ["Alergia"],
    lastVisit: "10/03/2024",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    age: 52,
    document: "789.123.456-04",
    phone: "(11) 97890-1234",
    email: "carlos.mendes@email.com",
    health_insurance: "Bradesco Saúde",
    tags: ["Diabetes", "Cardiopatia"],
    lastVisit: "05/03/2024",
  },
  {
    id: 5,
    name: "Lucia Ferreira",
    age: 42,
    document: "321.654.987-05",
    phone: "(11) 93216-5498",
    email: "lucia.ferreira@email.com",
    health_insurance: "Porto Seguro",
    tags: ["Hipertensão"],
    lastVisit: "01/03/2024",
  },
  {
    id: 6,
    name: "Pedro Alves",
    age: 31,
    document: "654.987.321-06",
    phone: "(11) 96549-8732",
    email: "pedro.alves@email.com",
    health_insurance: "Unimed",
    tags: [],
    lastVisit: "25/02/2024",
  },
  {
    id: 7,
    name: "Alice Henriques",
    age: 29,
    document: "258.369.147-07",
    phone: "(11) 92583-6914",
    email: "alice.henriques@email.com",
    health_insurance: "NotreDame",
    tags: ["Diabetes", "Botox"],
    lastVisit: "20/02/2024",
  },
];

const Pacientes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredPatients = patientData.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>
            <p className="text-muted-foreground">
              Gerencie todos os pacientes da clínica
            </p>
          </div>
          <Button className="bg-clinic-primary hover:bg-clinic-accent">
            <Plus className="mr-2 h-4 w-4" /> Novo Paciente
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar pacientes..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">Filtros</Button>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead className="hidden md:table-cell">Convênio</TableHead>
                <TableHead className="hidden lg:table-cell">Telefone</TableHead>
                <TableHead className="hidden lg:table-cell">Condições</TableHead>
                <TableHead className="hidden md:table-cell">Última Visita</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {patient.age} anos
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {patient.health_insurance}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {patient.phone}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {patient.tags.length > 0 ? (
                        patient.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-muted-foreground text-sm">Nenhuma</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {patient.lastVisit}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/prontuarios/${patient.id}`)}
                      >
                        Prontuário
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => navigate(`/pacientes/${patient.id}`)}>
                            Ver detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => navigate(`/agenda?paciente=${patient.id}`)}>
                            Agendar consulta
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => navigate(`/prontuarios/${patient.id}`)}>
                            Ver prontuário
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pacientes;
