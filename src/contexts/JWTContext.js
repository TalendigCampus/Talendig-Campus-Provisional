import { createContext, useEffect, useReducer } from "react";

import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";
import { ADMIN, PROFILES } from "../common/constants/data";
import UserInfo from "../pages/pages/Login/users.json";
import talentInfo from "../pages/pages/adminPages/AdminTalent/info.json";
import recruiterInfo from "../pages/pages/adminPages/AdminRecruiters/RecruiterInfo.json";
import instructorInfo from "../pages/pages/adminPages/AdminInstructors/InstructorsList/InstructorsInfo.json";

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "SIGN_IN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "SIGN_UP":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axios.get("/api/auth/my-account");
          const { user } = response.data;

          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email, password) => {
    // const response = await axios.post("/api/auth/sign-in", {
    //   email,
    //   password,
    // });
    // const { accessToken, user } = response.data;

    // setSession(accessToken);
    const userInfo = UserInfo.find(
      (user) => user.email === email && user.password === password
    );

    if (userInfo) {
      let name = "";
      let image = "";
      let userData;

      switch (userInfo.perfil) {
        case PROFILES.talent:
          const talent = talentInfo.find(
            (talent) => talent.talentEmail === email
          );

          name = talent.talentName + " " + talent.talentLastName;
          image = talent.photoUrl;
          userData = talent;
          break;
        case PROFILES.recruiter:
          const recruiter = recruiterInfo.find(
            (recruiter) => recruiter.email === email
          );

          name = recruiter.firstName + " " + recruiter.lastName;
          image = recruiter.photoUrl;
          userData = recruiter;
          break;
        case PROFILES.instructor:
          const instructor = instructorInfo.find(
            (instructor) => instructor.email === email
          );

          name = instructor.firstName + " " + instructor.lastName;
          image = instructor.photoUrl;
          userData = instructor;
          break;
        case PROFILES.institution:
          // dispatch(
          //   setCurrentInstitution({ recruiterId: user.recruiterId })
          // );
          break;
        case PROFILES.admin:
          const admin = ADMIN;

          name = admin.firstName + " " + admin.lastName;
          image = admin.image;
          userData = admin;
          break;
        default:
          break;
      }

      const user = {
        name,
        image,
        profile: userInfo.perfil,
      };

      dispatch({
        type: SIGN_IN,
        payload: {
          user,
        },
      });
      return {
        ...userData,
        perfil: userInfo.perfil,
      };
    } else {
      return false;
    }
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (email, password, firstName, lastName) => {
    const response = await axios.post("/api/auth/sign-up", {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: SIGN_UP,
      payload: {
        user,
      },
    });
  };

  const resetPassword = (email) => console.log(email);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        signIn,
        signOut,
        signUp,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
