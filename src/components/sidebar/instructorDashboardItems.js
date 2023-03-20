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
  },
  {
    href: "/instructors/profile",
    icon: AccountBox,
    title: "Mi Perfil",
  },
  {
    href: "/instructors/talents/list",
    icon: Description,
    title: "Lista de Talentos",
  },
  {
    href: "/instructors/instructorBootcamps",
    title: "Mis bootcamps",
    icon: AutoStories,
  },
  {
    href: "/instructors/portfolio",
    icon: BusinessCenter,
    title: "Portafolio de Estudiantes",
  },
  {
    href: "/Instructors/changelog",
    icon: List,
    title: "Changelog",
    badge: "v1.0.0",
  },
];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
];

export default navItems;
