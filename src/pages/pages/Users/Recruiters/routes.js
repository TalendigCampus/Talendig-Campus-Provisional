import Changelog from "../../../docs/Changelog";
import DashboardLayout from "../../../../layouts/Dashboard";
import async from "../../../../components/Async";

const UserRecruiter = async(() => import("./Recruiters"));

const UserRecruiterProfile = async(() => import("./RecruitersProfile"));

const RecruiterTalentsList = async(() =>
  import("./TalentLists/RecruiterTalentsList")
);

const TalentProcessList = async(() =>
  import("./TalentProcess/TalentProcessList")
);

const TalentProfileDetails = async(() =>
  import("./TalentDetails/TalentsProfile")
);

const RecruiterTalentFavorite = async(() => import("./RecruiterFavorite"));

const RecruiterHistory = async(() =>
  import("./RecruiterHistory/RecruiterHistory")
);

const RecruiterHistoryList = async(() =>
  import("./RecruiterHistory/RecruiterHistoryList")
);

const RecruiterTalentBootcamp = async(() =>
  import("./TalentBoocamp/BootcampProfile")
);

const recruiterRoutes = {
  path: "recruiters",
  element: <DashboardLayout />,
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
};

export default recruiterRoutes;
