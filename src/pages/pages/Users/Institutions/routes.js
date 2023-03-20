import Changelog from "../../../docs/Changelog";
import DashboardLayout from "../../../../layouts/Dashboard";
import BootcampsInstitutions from "./Bootcamps/BootcampsInstitutions";
import BootcampsDetails from "./Bootcamps/BootcampsDetails";
import InstitutionsHome from "./Home";
import InstructorsInstitutions from "./Reclutar/InstructorsInstitutions";
import EventsInstitutions from "./Events/EventsInstitutions";
import MyBootcamp from "./Bootcamps/MyBootcamp/MyBootcamp";
import TalentListIndex from "./Reclutar/TalentListIndex";
import InstructorInformation from "./Reclutar/InstructorInformation";
import TalentInformation from "./Reclutar/TalentInformation";
import SelectionOfTalents from "./Reclutar/SelectionOfTalents";
import StudentsInstitutions from "./StudentsInstitution/StudentsInstitutions";
import StudentsDetails from "./StudentsInstitution/StudentsDetails";
import StudentsList from "./StudentsInstitution/StudentsList";
import ProfileInstitution from "./Profile/ProfileInstitution";
import InternshipForm from "./StudentsInstitution/Internship/InternshipForm";
import ViewRequests from "./StudentsInstitution/Internship/ViewRequests";
import SelectionOfInstructors from "./Reclutar/SelectionOfInstructors";
import InternshipDetails from "./StudentsInstitution/Internship/InternshipDetails";

const institutionRoutes = {
  path: "institution",
  element: <DashboardLayout />,
  children: [
    {
      path: "home",
      element: <InstitutionsHome />,
    },
    {
      path: "bootcamps",
      children: [
        {
          index: true,
          element: <BootcampsInstitutions />,
        },
        {
          path: "details",
          element: <BootcampsDetails />,
        },
        {
          path: "my-bootcamps",
          children: [
            {
              index: true,
              element: <MyBootcamp />,
            },
            {
              path: "details",
              element: <StudentsInstitutions />,
            },
          ],
        },
      ],
    },
    {
      path: "recruit",
      children: [
        {
          index: true,
        },
        {
          path: "instructors",
          children: [
            {
              index: true,
              element: <InstructorsInstitutions />,
            },
            {
              path: "view_instructors",
              element: <InstructorInformation />,
            },
            {
              path: "view_instructors_process",
              element: <SelectionOfInstructors />,
            },
          ],
        },
        {
          path: "talents",
          children: [
            {
              index: true,
              element: <TalentListIndex />,
            },
            {
              path: "view_talent",
              element: <TalentInformation />,
            },
            {
              path: "view_talent_process",
              element: <SelectionOfTalents />,
            },
          ],
        },
      ],
    },
    {
      path: "profile",
      element: <ProfileInstitution />,
    },
    {
      path: "students",
      children: [
        {
          index: true,
          element: <StudentsList />,
        },
        {
          path: "details",
          element: <StudentsDetails />,
        },
        {
          path: "internship-form",
          element: <InternshipForm />,
        },
        {
          path: "view-requests",
          element: <ViewRequests />,
        },
        {
          path: "view-requests-details",
          element: <InternshipDetails />,
        },
      ],
    },
    {
      path: "events",
      element: <EventsInstitutions />,
    },
    {
      path: "changelog",
      element: <Changelog />,
    },
  ],
};

export default institutionRoutes;
