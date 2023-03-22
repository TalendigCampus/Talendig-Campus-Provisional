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
    id: "recruiterHome",
  },
  {
    href: "/recruiters/perfil",
    icon: AccountBox,
    title: "Mi perfil",
    id: "recruiterPerfil",
  },
  {
    href: "/recruiters/talentsList",
    icon: AutoStories,
    title: "Talentos",
    id: "recruiterTalentList",
    children: [
      {
        href: "/recruiters/talentsList/bestScore",
        title: "Puntuaciones más altas",
        id: "recruiterBestScore",
      },
      {
        href: "/recruiters/talentsList/recommended",
        title: "Recomendados por Instructor/a",
        id: "recruiterRecommended",
      },
      {
        href: "/recruiters/talentsList/highProjectsCount",
        title: "Con 10+ proyectos",
        id: "recruiterHighProjectCount",
      },
    ],
  },
  {
    href: "/recruiters/process",
    icon: Timeline,
    title: "En proceso",
    id: "recruiterProcess",
  },
  {
    href: "/recruiters/favorites",
    icon: Favorite,
    title: "Favoritos",
    id: "recruiterFavorite",
  },
  {
    href: "/recruiters/history",
    icon: History,
    title: "Historial",
    id: "recruiterHistory",
  },
  {
    href: "/recruiters/changelog",
    icon: List,
    title: "Changelog",
    badge: "v1.0.0",
    id: "recruiterChangeLog",
  },
];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
];

export default navItems;
