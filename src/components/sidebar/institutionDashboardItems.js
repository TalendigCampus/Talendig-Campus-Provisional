import { Home, Person, School, Work } from "@mui/icons-material";
import { Calendar, Layout, List } from "react-feather";

const pagesSection = [
  {
    href: "/institution/home",
    icon: Home,
    title: "Inicio",
    id: "institutionHome",
  },
  {
    icon: Layout,
    title: "Bootcamps",
    id: "institutionBootcampsList",
    children: [
      {
        href: "/institution/bootcamps",
        title: "Bootcamps",
        id: "institutionBootcampDetails",
      },
      {
        href: "/institution/bootcamps/my-bootcamps",
        title: "Mis bootcamps",
        id: "institutionMyBootcamps",
      },
    ],
  },
  {
    icon: Work,
    title: "Reclutar",
    id: "institutionRecruitmentOptions",
    children: [
      {
        href: "/institution/recruit/instructors",
        title: "Instuctores",
        id: "institutionRecruitInstructors",
      },
      {
        href: "/institution/recruit/talents",
        title: "Talentos",
        id: "institutionRecruitTalents",
      },
    ],
  },
  {
    icon: Person,
    href: "/institution/profile",
    title: "Perfil",
    id: "institutionPerfil",
  },
  {
    icon: School,
    href: "/institution/students",
    title: "Talentos de la institucion",
    id: "institutionTalents",
  },
  {
    icon: Calendar,
    href: "/institution/events",
    title: "Eventos",
    id: "institutionEvents",
  },
  {
    icon: List,
    href: "/institution/changelog",
    title: "Changelog",
    badge: "v1.0.0",
    id: "institutionChangelog",
  },
];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
];

export default navItems;
