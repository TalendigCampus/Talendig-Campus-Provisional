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
import InvoiceDetails from "./pages/pages/TemplatePages/InvoiceDetails";
import InvoiceList from "./pages/pages/TemplatePages/InvoiceList";
import TalentList from "./pages/pages/adminPages/AdminTalent/TalentList";
import TalentDetails from "./pages/pages/adminPages/AdminTalent/TalentsProfile";
import Orders from "./pages/pages/TemplatePages/Orders";
import AdminRecruiters from "./pages/pages/adminPages/AdminRecruiters/Recruiters";
import AdminRecruitersList from "./pages/pages/adminPages/AdminRecruiters/RecruitersList";
import AdminRecruitersProfile from "./pages/pages/adminPages/AdminRecruiters/RecruitersProfile";
import ProjectsIndex from "./pages/pages/adminPages/AdminProyects/index";
import ProjectsList from "./pages/pages/adminPages/AdminProyects/ProjectsList";
import ProjectsFolderList from "./pages/pages/adminPages/AdminProyects/ProjectsFolderList";
import ProjectsFileList from "./pages/pages/adminPages/AdminProyects/ProjectFolderFilesList";
import ProjectFileDetails from "./pages/pages//adminPages/AdminProyects/ProjectFileDetails";
import ListaInstructores from "./pages/pages/adminPages/AdminInstructors/List_Instructors";
import BootcampsStatistics from "./pages/pages/Bootcamps/index";
import BootcampsList from "./pages/pages/Bootcamps/BootcampList";

import Projects from "./pages/pages/TemplatePages/Projects";
import Chat from "./pages/pages/adminPages/AdminInstitutions/Chat";
import DataGridPage from "./pages/pages/adminPages/AdminInstitutions/DataGridPage";
import EditProfile from "./pages/pages/adminPages/AdminInstitutions/EditProfile";
import InfoProfile from "./pages/pages/adminPages/AdminInstitutions/InfoProfile";

import RecruiterLayout from "./pages/pages/Users/Recruiters/layout/structureLayout";

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
import Instructores from "./pages/pages/adminPages/AdminInstructors/Instructores";
import BootcampProfile from "./pages/pages/Bootcamps/BootcampProfile";
import Curriculum from "./pages/pages/adminPages/AdminTalent/Curriculum";
import Index from "./pages/pages/Portafolio/Index";
import BriefcaseList from "./pages/pages/Portafolio/BriefcaseList";

import ViewInstructors from "./pages/pages/adminPages/AdminInstructors/InstructorsList/View_Instructors";
import Roadmap from "./pages/pages/adminPages/AdminTalent/Roadmap";

//Talent Users pages
import TalentHome from "./pages/pages/Users/Talents/home/index";
import TalentBootcampInfo from "./pages/pages/Users/Talents/BootcampInfo/BootcampsDetails";
import TalentHomeWorkDetails from "./pages/pages/Users/Talents/HomeWorks/HomeWorkDetails";
import TalentProjectDetails from "./pages/pages/Users/Talents/projects/ProjectDetails";
import TalentLayout from "./pages/pages/Users/Talents/layout/structureLayout";
import TalentProfile from "./pages/pages/Users/Talents/profile/TalentsProfile";
import TalentCurriculum from "./pages/pages/Users/Talents/profile/Curriculum";
import TalentRoadmap from "./pages/pages/Users/Talents/profile/Roadmap";
import TalentProjectsList from "./pages/pages/Users/Talents/briefcase/ProjectsList";
import TalentProjectsFolderList from "./pages/pages/Users/Talents/briefcase/ProjectsFolderList";
import TalentProjectsFileList from "./pages/pages/Users/Talents/briefcase/ProjectFolderFilesList";
import TalentProjectFileDetails from "./pages/pages/Users/Talents/briefcase/ProjectFileDetails";
import TalentRecruiters from "./pages/pages/Users/Talents/recruiters/RecruitersList";
import TalentRecruiterProfile from "./pages/pages/Users/Talents/recruiters/Profile";
import TalentBootcamps from "./pages/pages/Users/Talents/bootcamps/Bootcamps";
import TalentBootcampsTalents from "./pages/pages/Users/Talents/BootcampInfo/TalentList";
import TalentBootcampTalentProfile from "./pages/pages/Users/Talents/BootcampInfo/Profile";
import TalentBootcampInstructorProfile from "./pages/pages/Users/Talents/instructor/Profile";

// User sign
import UserLogin from "./pages/pages/Login/SignIn";

// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));

// Recruiter Users pages
const UserRecruiter = async(() =>
  import("./pages/pages/Users/Recruiters/Recruiters")
);

const UserRecruiterProfile = async(() =>
  import("./pages/pages/Users/Recruiters/RecruitersProfile")
);

const RecruiterTalentsList = async(() =>
  import("./pages/pages/Users/Recruiters/TalentLists/RecruiterTalentsList")
);

const TalentProcessList = async(() =>
  import("./pages/pages/Users/Recruiters/TalentProcess/TalentProcessList")
);

const TalentProfileDetails = async(() =>
  import("./pages/pages/Users/Recruiters/TalentDetails/TalentsProfile")
);

const RecruiterTalentFavorite = async(() =>
  import("./pages/pages/Users/Recruiters/RecruiterFavorite")
);

const RecruiterHistory = async(() =>
  import("./pages/pages/Users/Recruiters/RecruiterHistory/RecruiterHistory")
);

const RecruiterHistoryList = async(() =>
  import("./pages/pages/Users/Recruiters/RecruiterHistory/RecruiterHistoryList")
);

const RecruiterTalentBootcamp = async(() =>
  import("./pages/pages/Users/Recruiters/TalentBoocamp/BootcampProfile")
);

// Form components
const Pickers = async(() => import("./pages/forms/Pickers"));
const Editors = async(() => import("./pages/forms/Editors"));
const Formik = async(() => import("./pages/forms/Formik"));

// Icon components
const FeatherIcons = async(() => import("./pages/icons/FeatherIcons"));
const Profile = async(() =>
  import("./pages/pages/adminPages/AdminTalent/Talent")
);
const Tasks = async(() => import("./pages/pages/TemplatePages/Tasks"));
const Calendar = async(() => import("./pages/pages/TemplatePages/Calendar"));

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
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <UserLogin />,
      },
      // {
      //   path: "sign-up",
      //   element: <SignUp />,
      // },
      // {
      //   path: "reset-password",
      //   element: <ResetPassword />,
      // },
      // {
      //   path: "404",
      //   element: <Page404 />,
      // },
      // {
      //   path: "500",
      //   element: <Page500 />,
      // },
    ],
  },
  {
    path: "talent",
    element: <TalentLayout />,
    children: [
      {
        element: <TalentHome />,
        index: true,
        path: "home",
      },
      {
        path: "bootcamp-info",
        element: <TalentBootcampInfo />,
      },
      {
        path: "HomeWorkDetails",
        element: <TalentHomeWorkDetails />,
      },
      {
        path: "ProjectDetails",
        element: <TalentProjectDetails />,
      },
      {
        path: "perfil",
        children: [
          {
            index: true,
            element: <TalentProfile />,
          },
        ],
      },
      {
        path: "curriculum",
        element: <TalentCurriculum />,
      },
      {
        path: "roadmap",
        element: <TalentRoadmap />,
      },
      {
        path: "bootcamps",
        children: [
          {
            path: "my-bootcamps",
            children: [
              {
                index: true,
                element: (
                  <TalentBootcamps
                    name={"Mis Bootcamps"}
                    getBootcamp={(bootcamps, talentId) => {
                      return bootcamps.filter((bootcamp) =>
                        bootcamp.talents.includes(talentId)
                      );
                    }}
                  />
                ),
              },
              {
                path: "talents",
                children: [
                  {
                    index: true,
                    element: <TalentBootcampsTalents />,
                  },
                  {
                    path: "profile",
                    element: <TalentBootcampTalentProfile />,
                  },
                ],
              },
              {
                path: "instructor",
                element: <TalentBootcampInstructorProfile />,
              },
            ],
          },
          {
            path: "other-bootcamps",
            children: [
              {
                index: true,
                element: (
                  <TalentBootcamps
                    name={"Bootcamps disponibles"}
                    getBootcamp={(bootcamps, talentId) => {
                      return bootcamps.filter(
                        (bootcamp) => !bootcamp.talents.includes(talentId)
                      );
                    }}
                  />
                ),
              },
              {
                path: "instructor",
                element: <TalentBootcampInstructorProfile />,
              },
            ],
          },
        ],
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <TalentProjectsList />,
          },
          {
            path: "list/folder/details",
            element: <TalentProjectsFolderList />,
          },
          {
            path: "list/folder/files",
            element: <TalentProjectsFileList />,
          },
          {
            path: "list/folder/files/details",
            element: <TalentProjectFileDetails />,
          },
        ],
      },
      {
        path: "recruiters",
        children: [
          {
            index: true,
            element: <TalentRecruiters />,
          },
          {
            path: "profile",
            element: <TalentRecruiterProfile />,
          },
        ],
      },
      {
        path: "changelog",
        element: <Changelog />,
      },
    ],
  },
  {
    path: "recruiters",
    element: <RecruiterLayout />,
    children: [
      {
        path: "home",
        element: <UserRecruiter />,
        index: true,
      },
      {
        path: "perfil",
        element: <UserRecruiterProfile />,
      },
      {
        path: "talentInfo",
        element: <TalentProfileDetails />,
      },
      {
        path: "talentBootcamp",
        element: <RecruiterTalentBootcamp />,
      },
      {
        path: "talentsList",
        children: [
          {
            path: ":typeOfRating",
            element: <RecruiterTalentsList />,
          },
        ],
      },
      {
        path: "process",
        element: <TalentProcessList />,
      },
      {
        path: "favorites",
        element: <RecruiterTalentFavorite />,
      },
      {
        path: "history",
        children: [
          {
            index: true,
            element: <RecruiterHistory />,
          },
          {
            path: ":typeOfList",
            element: <RecruiterHistoryList />,
          },
        ],
      },
      {
        path: "changelog",
        element: <Changelog />,
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
                    element: <AdminRecruiters />,
                  },
                  {
                    path: "list",
                    element: <AdminRecruitersList />,
                  },
                  {
                    path: "recruiters-profile",
                    element: <AdminRecruitersProfile />,
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
