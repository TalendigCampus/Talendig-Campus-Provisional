import {
  Home,
  AccountBox,
  AutoStories,
  Timeline,
  List,
  Favorite,
  History,
} from "@mui/icons-material";

const pagesSection = [
  {
    href: "home",
    icon: Home,
    title: "Inicio",
  },
  {
    href: "/recruiters/perfil",
    icon: AccountBox,
    title: "Mi perfil",
  },
  {
    href: "/recruiters/talentsList",
    icon: AutoStories,
    title: "Talentos",
    children: [
      {
        href: "/recruiters/talentsList/bestScore",
        title: "Puntuaciones más altas",
      },
      {
        href: "/recruiters/talentsList/recommended",
        title: "Recomendados por Instructor/a",
      },
      {
        href: "/recruiters/talentsList/highProjectsCount",
        title: "Con 10+ proyectos",
      },
    ],
  },
  {
    href: "/recruiters/process",
    icon: Timeline,
    title: "En proceso",
  },
  {
    href: "/recruiters/favorites",
    icon: Favorite,
    title: "Favoritos",
  },
  {
    href: "/recruiters/history",
    icon: History,
    title: "Historial",
  },
  {
    href: "/recruiters/changelog",
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
