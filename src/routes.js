import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import DocLayout from "./layouts/Doc";
import PresentationLayout from "./layouts/Presentation";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";

// Components
import Accordion from "./pages/components/Accordion";
import Alerts from "./pages/components/Alerts";
import Avatars from "./pages/components/Avatars";
import Badges from "./pages/components/Badges";
import Buttons from "./pages/components/Buttons";
import Cards from "./pages/components/Cards";
import Chips from "./pages/components/Chips";
import Dialogs from "./pages/components/Dialogs";
import Lists from "./pages/components/Lists";
import Menus from "./pages/components/Menus";
import Pagination from "./pages/components/Pagination";
import Progress from "./pages/components/Progress";
import Snackbars from "./pages/components/Snackbars";
import Tooltips from "./pages/components/Tooltips";

// Form components
import SelectionCtrls from "./pages/forms/SelectionControls";
import Selects from "./pages/forms/Selects";
import TextFields from "./pages/forms/TextFields";

// Icon components
import MaterialIcons from "./pages/icons/MaterialIcons";

// Page components
import Blank from "./pages/pages/Blank";
import InvoiceDetails from "./pages/pages/InvoiceDetails";
import InvoiceList from "./pages/pages/InvoiceList";
import TalentList from "./pages/pages/talent/TalentList";
import TalentDetails from "./pages/pages/talent/TalentsProfile";
import Orders from "./pages/pages/Orders";
import Recruiters from "./pages/pages/AdminRecruiters/Recruiters";
import RecruitersList from "./pages/pages/AdminRecruiters/RecruitersList";
import RecruitersProfile from "./pages/pages/AdminRecruiters/RecruitersProfile";
import ProjectsIndex from "./pages/pages/AdminProyects/index";
import ProjectsList from "./pages/pages/AdminProyects/ProjectsList";
import ProjectsFolderList from "./pages/pages/AdminProyects/ProjectsFolderList";
import ProjectsFileList from "./pages/pages/AdminProyects/ProjectFolderFilesList";
import ProjectFileDetails from "./pages/pages/AdminProyects/ProjectFileDetails";
import Settings from "./pages/pages/Settings";
import ListaInstructores from "./pages/AdminInstructors/List_Instructors";
import Lista_Instructores from "./pages/AdminInstructors/List_Instructors";
import BootcampsStatistics from "./pages/Bootcamps/index";
import BootcampsList from "./pages/Bootcamps/BootcampList";

import Projects from "./pages/pages/Projects";
import Chat from "./pages/componetsIntitucio/Chat";
import DataGridPage from "./pages/componetsIntitucio/DataGridPage";
import EditProfile from "./pages/componetsIntitucio/EditProfile";
import InfoProfile from "./pages/componetsIntitucio/InfoProfile";

// Table components
import SimpleTable from "./pages/tables/SimpleTable";
import AdvancedTable from "./pages/tables/AdvancedTable";

// Documentation
import Welcome from "./pages/docs/Welcome";
import GettingStarted from "./pages/docs/GettingStarted";
import Routing from "./pages/docs/Routing";
import Auth0 from "./pages/docs/auth/Auth0";
import Cognito from "./pages/docs/auth/Cognito";
import Firebase from "./pages/docs/auth/Firebase";
import JWT from "./pages/docs/auth/JWT";
import Guards from "./pages/docs/Guards";
import EnvironmentVariables from "./pages/docs/EnvironmentVariables";
import Deployment from "./pages/docs/Deployment";
import Theming from "./pages/docs/Theming";
import APICalls from "./pages/docs/APICalls";
import Redux from "./pages/docs/Redux";
import Internationalization from "./pages/docs/Internationalization";
import ESLintAndPrettier from "./pages/docs/ESLintAndPrettier";
import MigratingToNextJS from "./pages/docs/MigratingToNextJS";
import Support from "./pages/docs/Support";
import Changelog from "./pages/docs/Changelog";

// Landing
import Landing from "./pages/presentation/Landing";

// Protected routes
import ProtectedPage from "./pages/protected/ProtectedPage";
import Instructores from "./pages/AdminInstructors/Instructores";
import BootcampProfile from "./pages/Bootcamps/BootcampProfile";
import BootcampInstructors from "./pages/Instructors/Bootcamps";
import Curriculum from "./pages/pages/talent/Curriculum";
import Index from "./pages/pages/Portafolio/Index";
import BriefcaseList from "./pages/pages/Portafolio/BriefcaseList";

import EditInstructors from "./pages/AdminInstructors/Edit_Instructors";
import ViewInstructors from "./pages/AdminInstructors/InstructorsList/View_Instructors";
import Roadmap from "./pages/pages/talent/Roadmap";

// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));
const Analytics = async(() => import("./pages/dashboards/Analytics"));
const SaaS = async(() => import("./pages/dashboards/SaaS"));

// Form components
const Pickers = async(() => import("./pages/forms/Pickers"));
const Editors = async(() => import("./pages/forms/Editors"));
const Formik = async(() => import("./pages/forms/Formik"));

// Icon components
const FeatherIcons = async(() => import("./pages/icons/FeatherIcons"));
const Profile = async(() => import("./pages/pages/talent/Talent"));
const Tasks = async(() => import("./pages/pages/Tasks"));
const Calendar = async(() => import("./pages/pages/Calendar"));

// Table components
const DataGrid = async(() => import("./pages/tables/DataGrid"));

// Chart components
const Chartjs = async(() => import("./pages/charts/Chartjs"));

// Maps components
const GoogleMaps = async(() => import("./pages/maps/GoogleMaps"));
const VectorMaps = async(() => import("./pages/maps/VectorMaps"));

const routes = [
  {
    path: "/",
    element: <PresentationLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
    ],
  },
  {
    path: "admin",
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "home",
            element: <Default />,
          },
          {
            path: "bootcamps",
            children: [
              {
                index: true,
                element: <BootcampsStatistics />,
              },
              {
                path: "list",
                element: <BootcampsList />,
              },
              {
                path: "bootcamp-profile",
                element: <BootcampProfile />,
              },
            ],
          },
          {
            path: "Users",
            children: [
              {
                path: "talents",
                children: [
                  {
                    index: true,
                    element: <Profile />,
                  },
                  {
                    path: "list",
                    element: <TalentList />,
                  },
                  {
                    path: "info",
                    element: <TalentDetails />,
                  },
                  {
                    path: "curriculum",
                    element: <Curriculum />,
                  },
                  {
                    path: "roadmap",
                    element: <Roadmap />,
                  },
                ],
              },
              {
                path: "instructors",
                children: [
                  {
                    index: true,
                    element: <Instructores />,
                  },
                  {
                    path: "list_instructors",
                    element: <ListaInstructores />,
                  },
                  {
                    path: "view_instructors",
                    element: <ViewInstructors />,
                  },
                ],
              },
              {
                path: "recruiters",
                children: [
                  {
                    index: true,
                    element: <Recruiters />,
                  },
                  {
                    path: "list",
                    element: <RecruitersList />,
                  },
                  {
                    path: "recruiters-profile",
                    element: <RecruitersProfile />,
                  },
                ],
              },
              {
                path: "institutions",
                children: [
                  {
                    index: true,
                    element: <Chat />,
                  },
                  {
                    path: "list",
                    element: <DataGridPage />,
                  },
                  {
                    path: "profile",
                    element: <EditProfile />,
                  },
                  {
                    path: "info",
                    element: <InfoProfile />,
                  },
                ],
              },
              {
                path: "projects",
                children: [
                  {
                    index: true,
                    element: <ProjectsIndex />,
                  },
                  {
                    path: "list",
                    element: <ProjectsList />,
                  },
                  {
                    path: "list/folder/details",
                    element: <ProjectsFolderList />,
                  },
                  {
                    path: "list/folder/files",
                    element: <ProjectsFileList />,
                  },
                  {
                    path: "list/folder/files/details",
                    element: <ProjectFileDetails />,
                  },
                ],
              },
              {
                path: "changelog",
                element: <Changelog />,
              },
              {
                path: "instructorBootcamps",
                element: <BootcampInstructors />,
              },
              {
                path: "briefcase",
                children: [
                  {
                    index: true,
                    element: <Index />,
                  },
                  {
                    path: "list",
                    element: <BriefcaseList />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "projects",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Projects />,
      },
    ],
  },
  {
    path: "invoices",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <InvoiceList />,
      },
      {
        path: "detail",
        element: <InvoiceDetails />,
      },
    ],
  },
  {
    path: "orders",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Orders />,
      },
    ],
  },
  {
    path: "tasks",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "calendar",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "components",
    element: <DashboardLayout />,
    children: [
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "avatars",
        element: <Avatars />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "chips",
        element: <Chips />,
      },
      {
        path: "dialogs",
        element: <Dialogs />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "menus",
        element: <Menus />,
      },
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "snackbars",
        element: <Snackbars />,
      },
      {
        path: "tooltips",
        element: <Tooltips />,
      },
    ],
  },
  {
    path: "forms",
    element: <DashboardLayout />,
    children: [
      {
        path: "pickers",
        element: <Pickers />,
      },
      {
        path: "selection-controls",
        element: <SelectionCtrls />,
      },
      {
        path: "selects",
        element: <Selects />,
      },
      {
        path: "text-fields",
        element: <TextFields />,
      },
      {
        path: "editors",
        element: <Editors />,
      },
      {
        path: "formik",
        element: <Formik />,
      },
    ],
  },
  {
    path: "tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "simple-table",
        element: <SimpleTable />,
      },
      {
        path: "advanced-table",
        element: <AdvancedTable />,
      },
      {
        path: "data-grid",
        element: <DataGrid />,
      },
    ],
  },
  {
    path: "icons",
    element: <DashboardLayout />,
    children: [
      {
        path: "material-icons",
        element: <MaterialIcons />,
      },
      {
        path: "feather-icons",
        element: <FeatherIcons />,
      },
    ],
  },
  {
    path: "charts",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Chartjs />,
      },
    ],
  },
  {
    path: "maps",
    element: <DashboardLayout />,
    children: [
      {
        path: "google-maps",
        element: <GoogleMaps />,
      },
      {
        path: "vector-maps",
        element: <VectorMaps />,
      },
    ],
  },
  {
    path: "documentation",
    element: <DocLayout />,
    children: [
      {
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "getting-started",
        element: <GettingStarted />,
      },
      {
        path: "routing",
        element: <Routing />,
      },
      {
        path: "auth/auth0",
        element: <Auth0 />,
      },
      {
        path: "auth/cognito",
        element: <Cognito />,
      },
      {
        path: "auth/firebase",
        element: <Firebase />,
      },
      {
        path: "auth/jwt",
        element: <JWT />,
      },
      {
        path: "guards",
        element: <Guards />,
      },
      {
        path: "environment-variables",
        element: <EnvironmentVariables />,
      },
      {
        path: "deployment",
        element: <Deployment />,
      },
      {
        path: "theming",
        element: <Theming />,
      },
      {
        path: "api-calls",
        element: <APICalls />,
      },
      {
        path: "redux",
        element: <Redux />,
      },
      {
        path: "internationalization",
        element: <Internationalization />,
      },
      {
        path: "eslint-and-prettier",
        element: <ESLintAndPrettier />,
      },
      {
        path: "migrating-to-next-js",
        element: <MigratingToNextJS />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
  {
    path: "changelog",
    element: <DocLayout />,
    children: [
      {
        path: "",
        element: <Changelog />,
      },
    ],
  },
  {
    path: "private",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
