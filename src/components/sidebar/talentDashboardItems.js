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
    href: "/talent/home",
    icon: Home,
    title: "Inicio",
    id: "talentHome",
  },
  {
    href: "/talent/perfil",
    icon: AccountBox,
    title: "Mi perfil",
    id: "talentPerfil",
  },
  {
    href: "/talent/bootcamps",
    icon: AutoStories,
    title: "Bootcamps",
    id: "talentBootcamps",
    children: [
      {
        href: "/talent/bootcamps/my-bootcamps",
        title: "Mis bootcamps",
        id: "talentCurrentBootcamp",
      },
      {
        href: "/talent/bootcamps/other-bootcamps",
        title: "Otros bootcamps",
        id: "talentOtherBootcamps",
      },
    ],
  },
  {
    href: "/talent/projects",
    icon: BusinessCenter,
    title: "Portafolio",
    id: "talentProjects",
  },
  {
    href: "/talent/curriculum",
    icon: Description,
    title: "Curriculum",
    id: "talentCurriculum",
  },
  {
    href: "/talent/roadmap",
    icon: SwapCalls,
    title: "Roadmap",
    id: "talentRoadmap",
  },
  {
    href: "/talent/recruiters",
    icon: PersonSearch,
    title: "Reclutadores",
    id: "talentRecruiters",
  },
  {
    href: "/talent/changelog",
    icon: List,
    title: "Changelog",
    badge: "v1.0.0",
    id: "talentChangelog",
  },
];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
];

export default navItems;
