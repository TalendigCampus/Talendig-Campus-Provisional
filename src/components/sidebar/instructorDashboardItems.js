import {
  Home,
  AutoStories,
  BusinessCenter,
  List,
  Description,
  AccountBox,
} from "@mui/icons-material";

const pagesSection = [
  {
    href: "/instructors/home",
    icon: Home,
    title: "Inicio",
    id: "instructorHome",
  },
  {
    href: "/instructors/profile",
    icon: AccountBox,
    title: "Mi Perfil",
    id: "instructorPerfil",
  },
  {
    href: "/instructors/talents/list",
    icon: Description,
    title: "Lista de Talentos",
    id: "instructorTalentList",
  },
  {
    href: "/instructors/instructorBootcamps",
    title: "Mis bootcamps",
    icon: AutoStories,
    id: "instructorBootcamps",
  },
  {
    href: "/instructors/portfolio",
    icon: BusinessCenter,
    title: "Portafolio de Estudiantes",
    id: "instructorTalentPortfolio",
  },
  {
    href: "/Instructors/changelog",
    icon: List,
    title: "Changelog",
    badge: "v1.0.0",
    id: "instructorChangeLog",
  },
];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
];

export default navItems;
