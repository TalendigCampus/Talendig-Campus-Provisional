import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
} from "react-feather";
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
  //   {
  //     href: "/invoices",
  //     icon: CreditCard,
  //     title: "Invoices",
  //     children: [
  //       {
  //         href: "/invoices",
  //         title: "List",
  //       },
  //       {
  //         href: "/invoices/detail",
  //         title: "Detail",
  //       },
  //     ],
  //   },
  //   {
  //     href: "/tasks",
  //     icon: CheckSquare,
  //     title: "Tasks",
  //     badge: "17",
  //   },
  //   {
  //     href: "/calendar",
  //     icon: Calendar,
  //     title: "Calendar",
  //   },
  //   {
  //     href: "/auth",
  //     icon: Users,
  //     title: "Auth",
  //     children: [
  //       {
  //         href: "/auth/sign-in",
  //         title: "Sign In",
  //       },
  //       {
  //         href: "/auth/sign-up",
  //         title: "Sign Up",
  //       },
  //       {
  //         href: "/auth/reset-password",
  //         title: "Reset Password",
  //       },
  //       {
  //         href: "/auth/404",
  //         title: "404 Page",
  //       },
  //       {
  //         href: "/auth/500",
  //         title: "500 Page",
  //       },
  //     ],
  //   },
];

// const elementsSection = [
//   {
//     href: "/components",
//     icon: Grid,
//     title: "Components",
//     children: [
//       {
//         href: "/components/alerts",
//         title: "Alerts",
//       },
//       {
//         href: "/components/accordion",
//         title: "Accordion",
//       },
//       {
//         href: "/components/avatars",
//         title: "Avatars",
//       },
//       {
//         href: "/components/badges",
//         title: "Badges",
//       },
//       {
//         href: "/components/buttons",
//         title: "Buttons",
//       },
//       {
//         href: "/components/cards",
//         title: "Cards",
//       },
//       {
//         href: "/components/chips",
//         title: "Chips",
//       },
//       {
//         href: "/components/dialogs",
//         title: "Dialogs",
//       },
//       {
//         href: "/components/lists",
//         title: "Lists",
//       },
//       {
//         href: "/components/menus",
//         title: "Menus",
//       },
//       {
//         href: "/components/pagination",
//         title: "Pagination",
//       },
//       {
//         href: "/components/progress",
//         title: "Progress",
//       },
//       {
//         href: "/components/snackbars",
//         title: "Snackbars",
//       },
//       {
//         href: "/components/tooltips",
//         title: "Tooltips",
//       },
//     ],
//   },
//   {
//     href: "/charts",
//     icon: PieChart,
//     title: "Charts",
//   },
//   {
//     href: "/forms",
//     icon: CheckSquare,
//     title: "Forms",
//     children: [
//       {
//         href: "/forms/pickers",
//         title: "Pickers",
//       },
//       {
//         href: "/forms/selection-controls",
//         title: "Selection Controls",
//       },
//       {
//         href: "/forms/selects",
//         title: "Selects",
//       },
//       {
//         href: "/forms/text-fields",
//         title: "Text Fields",
//       },
//       {
//         href: "/forms/editors",
//         title: "Editors",
//       },
//       {
//         href: "/forms/formik",
//         title: "Formik",
//       },
//     ],
//   },
//   {
//     href: "/tables",
//     icon: List,
//     title: "Tables",
//     children: [
//       {
//         href: "/tables/simple-table",
//         title: "Simple Table",
//       },
//       {
//         href: "/tables/advanced-table",
//         title: "Advanced Table",
//       },
//       {
//         href: "/tables/data-grid",
//         title: "Data Grid",
//       },
//     ],
//   },
//   {
//     href: "/icons",
//     icon: Heart,
//     title: "Icons",
//     children: [
//       {
//         href: "/icons/material-icons",
//         title: "Material Icons",
//       },
//       {
//         href: "/icons/feather-icons",
//         title: "Feather Icons",
//       },
//     ],
//   },
//   {
//     href: "/maps",
//     icon: Map,
//     title: "Maps",
//     children: [
//       {
//         href: "/maps/google-maps",
//         title: "Google Maps",
//       },
//       {
//         href: "/maps/vector-maps",
//         title: "Vector Maps",
//       },
//     ],
//   },
// ];

// const docsSection = [
//   {
//     href: "/documentation/welcome",
//     icon: BookOpen,
//     title: "Documentation",
//   },
//   {
//     href: "/changelog",
//     icon: List,
//     title: "Changelog",
//     badge: "v3.1.0",
//   },
// ];

const navItems = [
  {
    title: "Secciones",
    pages: pagesSection,
  },
  // {
  //   title: "Elements",
  //   pages: elementsSection,
  // },
  // {
  //   title: "Material App",
  //   pages: docsSection,
  // },
];

export default navItems;
