import { createContext } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { PROFILES, URLPROFILE } from "../common/constants/data";
import useAuth from "../hooks/useAuth";
import { auth, lost404 } from "../routes";
import talentRoutes from "../pages/pages/Users/Talents/routes";
import adminRoutes from "../pages/pages/adminPages/routes";
import recruiterRoutes from "../pages/pages/Users/Recruiters/routes";
import instructorRoutes from "../pages/pages/Users/Instructors/routes";

const RouterContext = createContext(null);

function RouterProvider() {
  const navigate = useNavigate();
  const { user } = useAuth();
  let routes = [];
  if (user) {
    switch (user.profile) {
      case PROFILES.admin:
        routes = [lost404, adminRoutes];
        break;
      case PROFILES.talent:
        routes = [lost404, talentRoutes];
        break;
      case PROFILES.recruiter:
        routes = [lost404, recruiterRoutes];
        break;
      case PROFILES.instructor:
        routes = [lost404, instructorRoutes];
        break;
      default:
        break;
    }
  } else {
    if (!window.location.pathname.includes("/auth/login")) {
      navigate("/auth/login");
    }
    routes = [auth, lost404];
  }

  const content = useRoutes(routes);

  return (
    <RouterContext.Provider value={null}>{content}</RouterContext.Provider>
  );
}

export { RouterContext, RouterProvider };
