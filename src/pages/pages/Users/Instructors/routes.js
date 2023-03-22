import InstructorsHome from "./index";
import BootcampInstructors from "./index";
import BootcampInstructorsInfo from "./BootcampInfo";
import InstructorTarea from "./HomeWorkDetails";
import InstructorTalentProfile from "./Talent";
import InstructorTalentList from "./TalentList";
import InstructorTalentProjects from "./projects/ProjectsList";
import InstructorTalentPortfolio from "./Portafolio/BriefcaseList";
import InstructorProfile from "./profile/InstructorsProfile";
import InstructorTalentsProfile from "./profile/TalentsProfile";
import InstructorRoadmap from "./Roadmap";
import InstructorTalentProjectsFolder from "./projects/ProjectsFolderList";
import InstructorProjectFiles from "./projects/ProjectFolderFilesList";
import InstructorsFileDetails from "./projects/ProjectFileDetails";
import Changelog from "../../../docs/Changelog";
import DashboardLayout from "../../../../layouts/Dashboard";

const instructorRoutes = {
  path: "instructors",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      path: "home",
      element: <InstructorsHome />,
    },
    {
      path: "instructorBootcamps",
      element: <BootcampInstructors />,
    },
    {
      path: "bootcampInfo",
      element: <BootcampInstructorsInfo />,
    },
    {
      path: "tareas",
      element: <InstructorTarea />,
    },
    {
      path: "profile",
      element: <InstructorProfile />,
    },
    {
      path: "talents",
      children: [
        {
          path: "list",
          element: <InstructorTalentList />,
        },
        {
          path: "profile",
          element: <InstructorTalentsProfile />,
        },
      ],
    },
    {
      path: "projects",
      element: <InstructorTalentProjects />,
    },
    {
      path: "folder",
      element: <InstructorTalentProjectsFolder />,
    },
    {
      path: "portfolio",
      element: <InstructorTalentPortfolio />,
    },
    {
      path: "files",
      element: <InstructorProjectFiles />,
    },
    {
      path: "details",
      element: <InstructorsFileDetails />,
    },
    {
      path: "roadmap",
      element: <InstructorRoadmap />,
    },
    {
      path: "changelog",
      element: <Changelog />,
    },
  ],
};

export default instructorRoutes;
