
import { Calendar, Users, FileText, Settings } from "lucide-react";

export const navigationItems = [
  {
    name: "Agenda",
    href: "/agenda",
    icon: Calendar,
    allowed: ["admin", "medico", "secretaria"]
  },
  {
    name: "Pacientes",
    href: "/pacientes",
    icon: Users,
    allowed: ["admin", "medico", "secretaria"]
  },
  {
    name: "Prontuários",
    href: "/prontuarios",
    icon: FileText,
    allowed: ["admin", "medico"]
  },
  {
    name: "Configurações",
    href: "/configuracoes",
    icon: Settings,
    allowed: ["admin"]
  },
];

