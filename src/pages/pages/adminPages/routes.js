import Changelog from "../../docs/Changelog";
import DashboardLayout from "../../../layouts/Dashboard";
import TalentList from "./AdminTalent/TalentList";
import TalentDetails from "./AdminTalent/TalentsProfile";
import AdminRecruiters from "./AdminRecruiters/Recruiters";
import AdminRecruitersList from "./AdminRecruiters/RecruitersList";
import AdminRecruitersProfile from "./AdminRecruiters/RecruitersProfile";
import ProjectsIndex from "./AdminProyects/index";
import ProjectsList from "./AdminProyects/ProjectsList";
import ProjectsFolderList from "./AdminProyects/ProjectsFolderList";
import ProjectsFileList from "./AdminProyects/ProjectFolderFilesList";
import ProjectFileDetails from "./AdminProyects/ProjectFileDetails";
import ListaInstructores from "./AdminInstructors/List_Instructors";
import BootcampsStatistics from "../Bootcamps/index";
import BootcampsList from "../Bootcamps/BootcampList";
import Chat from "./AdminInstitutions/Chat";
import DataGridPage from "./AdminInstitutions/DataGridPage";
import EditProfile from "./AdminInstitutions/EditProfile";
import InfoProfile from "./AdminInstitutions/InfoProfile";
import Instructores from "./AdminInstructors/Instructores";
import BootcampProfile from "../Bootcamps/BootcampProfile";
import Curriculum from "./AdminTalent/Curriculum";
import Index from "../Portafolio/Index";
import BriefcaseList from "../Portafolio/BriefcaseList";
import ViewInstructors from "./AdminInstructors/InstructorsList/View_Instructors";
import Roadmap from "./AdminTalent/Roadmap";
import Default from "../../dashboards/Default";
import Profile from "./AdminTalent/Talent";

const recruiterRoutes = {
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
};

export default recruiterRoutes;
