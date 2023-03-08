import {
  Home,
  AccountBox,
  AutoStories,
  BusinessCenter,
  List,
  Description,
  SwapCalls,
} from "@mui/icons-material";

const pagesSection = [
  {
    href: "/talent/home",
    icon: Home,
    title: "Inicio",
  },
  {
    href: "/talent/perfil",
    icon: AccountBox,
    title: "Mi perfil",
  },
  {
    href: "/talent/bootcamps",
    icon: AutoStories,
    title: "Bootcamps",
    children: [
      {
        href: "/talent/bootcamps/my-bootcamps",
        title: "Mis bootcamps",
      },
      {
        href: "/talent/bootcamps/other-bootcamps",
        title: "Otros bootcamps",
      },
    ],
  },
  {
    href: "/talent/briefcase",
    icon: BusinessCenter,
    title: "Portafolio",
  },
  {
    href: "/talent/curriculum",
    icon: Description,
    title: "Curriculum",
  },
  {
    href: "/talent/roadmap",
    icon: SwapCalls,
    title: "Roadmap",
  },
  {
    href: "/talent/changelog",
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
