import { Layout, List, Sliders } from "react-feather";
import { NORMALICONS } from "../../common/constants/data";

const pagesSection = [
  {
    href: "home",
    icon: Sliders,
    title: "Panel",
  },
  {
    href: "/users",
    icon: Layout,
    title: "Usuarios",
    children: [
      {
        href: "/admin/dashboard/users/talents",
        title: "Talentos",
      },
      {
        href: "/admin/dashboard/users/instructors",
        title: "Instructores",
      },
      {
        href: "/admin/dashboard/users/recruiters",
        title: "Reclutadores",
      },
      {
        href: "/admin/dashboard/users/institutions",
        title: "Instituciones",
      },
    ],
  },
  {
    href: "/admin/dashboard/bootcamps",
    icon: NORMALICONS.bootcamp,
    title: "Bootcamps",
  },
  {
    href: "/admin/dashboard/users/projects",
    icon: NORMALICONS.project,
    title: "Proyectos",
  },
  {
    href: "/admin/dashboard/users/briefcase",
    icon: NORMALICONS.portfolio,
    title: "Portafolios",
  },
  {
    href: "/admin/dashboard/users/changelog",
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
