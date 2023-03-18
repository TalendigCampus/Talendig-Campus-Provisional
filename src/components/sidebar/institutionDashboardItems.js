import { Home, Person, School, Work } from "@mui/icons-material";
import { Calendar, Layout, List } from "react-feather";

const pagesSection = [
  {
    href: "/institution/home",
    icon: Home,
    title: "Inicio",
  },
  {
    icon: Layout,
    title: "Bootcamps",
    children: [
      {
        href: "/institution/bootcamps",
        title: "Bootcamps",
      },
      {
        href: "/institution/bootcamps/my-bootcamps",
        title: "Mis bootcamps",
      },
    ],
  },
  {
    icon: Work,
    title: "Reclutar",
    children: [
      {
        href: "/institution/recruit/instructors",
        title: "Instuctores",
      },
      {
        href: "/institution/recruit/talents",
        title: "Talentos",
      },
    ],
  },
  {
    icon: Person,
    href: "/institution/profile",
    title: "Perfil",
  },
  {
    icon: School,
    href: "/institution/students",
    title: "Talentos de la institucion",
  },
  {
    icon: Calendar,
    href: "/institution/events",
    title: "Eventos",
  },
  {
    icon: List,
    href: "/institution/changelog",
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
