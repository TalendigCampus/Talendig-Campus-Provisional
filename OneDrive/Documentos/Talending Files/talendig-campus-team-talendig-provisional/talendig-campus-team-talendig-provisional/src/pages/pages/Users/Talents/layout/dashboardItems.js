import {
  Home,
  AccountBox,
  AutoStories,
  BusinessCenter,
  List,
  Description,
  SwapCalls,
  PersonSearch,
} from "@mui/icons-material";

const pagesSection = [
  {
    href: "/Talents/home",
    icon: Home,
    title: "Inicio",
  },
  {
    href: "/Talents/perfil",
    icon: AccountBox,
    title: "Mi perfil",
  },
  {
    href: "/Talents/bootcamps",
    icon: AutoStories,
    title: "Bootcamps",
    children: [
      {
        href: "/Talents/bootcamps/my-bootcamps",
        title: "Mis bootcamps",
      },
      {
        href: "/Talents/bootcamps/other-bootcamps",
        title: "Otros bootcamps",
      },
    ],
  },
  {
    href: "/Talents/projects",
    icon: BusinessCenter,
    title: "Portafolio",
  },
  {
    href: "/Talents/curriculum",
    icon: Description,
    title: "Curriculum",
  },
  {
    href: "/Talents/roadmap",
    icon: SwapCalls,
    title: "Roadmap",
  },
  {
    href: "/Talents/recruiters",
    icon: PersonSearch,
    title: "Reclutadores",
  },
  {
    href: "/Talents/changelog",
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
