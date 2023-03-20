import { Layout, List, Sliders } from "react-feather";
import { NORMALICONS } from "../../common/constants/data";

const pagesSection = [
  {
    href: "home",
    icon: Sliders,
    title: "Panel",
    id: "adminHome",
  },
  {
    href: "/users",
    icon: Layout,
    title: "Usuarios",
    id: "adminUsers",
    children: [
      {
        href: "/admin/dashboard/users/talents",
        title: "Talentos",
        id: "adminTalents",
      },
      {
        href: "/admin/dashboard/users/instructors",
        title: "Instructores",
        id: "adminInstructors",
      },
      {
        href: "/admin/dashboard/users/recruiters",
        title: "Reclutadores",
        id: "adminRecruiters",
      },
      {
        href: "/admin/dashboard/users/institutions",
        title: "Instituciones",
        id: "adminInstitutions",
      },
    ],
  },
  {
    href: "/admin/dashboard/bootcamps",
    icon: NORMALICONS.bootcamp,
    title: "Bootcamps",
    id: "adminBootcamps",
  },
  {
    href: "/admin/dashboard/users/projects",
    icon: NORMALICONS.project,
    title: "Proyectos",
    id: "adminProjects",
  },
  {
    href: "/admin/dashboard/users/briefcase",
    icon: NORMALICONS.portfolio,
    title: "Portafolios",
    id: "adminPortfolios",
  },
  {
    href: "/admin/dashboard/users/changelog",
    icon: List,
    title: "Changelog",
    badge: "v1.0.0",
    id: "adminChangelog",
  },
];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
];

export default navItems;
