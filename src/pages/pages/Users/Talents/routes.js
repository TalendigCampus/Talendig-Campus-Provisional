import TalentHome from "./home/index";
import TalentBootcampInfo from "./BootcampInfo/BootcampsDetails";
import TalentHomeWorkDetails from "./HomeWorks/HomeWorkDetails";
import TalentProjectDetails from "./projects/ProjectDetails";
import TalentProfile from "./profile/TalentsProfile";
import TalentCurriculum from "./profile/Curriculum";
import TalentRoadmap from "./profile/Roadmap";
import TalentProjectsList from "./briefcase/ProjectsList";
import TalentProjectsFolderList from "./briefcase/ProjectsFolderList";
import TalentProjectsFileList from "./briefcase/ProjectFolderFilesList";
import TalentProjectFileDetails from "./briefcase/ProjectFileDetails";
import TalentRecruiters from "./recruiters/RecruitersList";
import TalentRecruiterProfile from "./recruiters/Profile";
import TalentBootcamps from "./bootcamps/Bootcamps";
import TalentBootcampsTalents from "./BootcampInfo/TalentList";
import TalentBootcampTalentProfile from "./BootcampInfo/Profile";
import TalentBootcampInstructorProfile from "./instructor/Profile";
import Changelog from "../../../docs/Changelog";
import DashboardLayout from "../../../../layouts/Dashboard";

const talentRoutes = {
  path: "talent",
  element: <DashboardLayout />,
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
};

export default talentRoutes;
