import InstructorsHome from "./index";
import BootcampInstructors from "./index";
import BootcampInstructorsInfo from "./BootcampInfo";
import InstructorTarea from "./HomeWorkDetails";
import InstructorTalentProfile from "./Talent";
import InstructorTalentList from "./TalentList";
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
    // {
    //   path: "projects",
    //   element: <Projects />,
    // },
    {
      path: "changelog",
      element: <Changelog />,
    },
    {
      path: "talentos",
      element: <InstructorTalentProfile />,
      children: [
        {
          path: "list",
          element: <InstructorTalentList />,
        },
      ],
    },
    {
      path: "list",
      element: <InstructorTalentList />,
    },
  ],
};

export default instructorRoutes;
