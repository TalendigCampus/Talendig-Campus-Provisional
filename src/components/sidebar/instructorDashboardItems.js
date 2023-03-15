import {
  Home,
  AutoStories,
  BusinessCenter,
  List,
  Description,
  PersonSearch,
} from "@mui/icons-material";

const pagesSection = [
  {
    href: "/instructors/home",
    icon: Home,
    title: "Inicio",
  },
  {
    href: "/instructors/talentos",
    icon: PersonSearch,
    title: "Talentos",
  },
  {
    href: "/instructors/list",
    icon: Description,
    title: "Lista de Talentos",
  },
  {
    href: "/instructors/instructorBootcamps",
    title: "Mis bootcamps",
    icon: AutoStories,
  },
  {
    href: "/instructors/projects",
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
