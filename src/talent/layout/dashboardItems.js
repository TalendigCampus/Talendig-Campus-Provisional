import {
  Home,
  AccountBox,
  AutoStories,
  BusinessCenter,
  List,
} from "@mui/icons-material";

const pagesSection = [
  {
    href: "/",
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
    title: "Portafolios",
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
