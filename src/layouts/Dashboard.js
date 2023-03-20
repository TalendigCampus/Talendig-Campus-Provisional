import React from "react";
import styled from "styled-components/macro";
import { Outlet } from "react-router-dom";

import { CssBaseline, Paper as MuiPaper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { spacing } from "@mui/system";

import GlobalStyle from "../components/GlobalStyle";
import Navbar from "../components/navbar/Navbar";
import adminDashboardItems from "../components/sidebar/adminDashboardItems";
import recruiterDashboardItems from "../components/sidebar/recruiterDashboardItems";
import talentDashboardItems from "../components/sidebar/talentDashboardItems";
import instructorDashboardItems from "../components/sidebar/instructorDashboardItems";
import institutionDashboardItems from "../components/sidebar/institutionDashboardItems";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/Footer";
import Settings from "../components/Settings";
import useAuth from "../hooks/useAuth";
import { PROFILES } from "../common/constants/data";

import { useDispatch, useSelector } from "react-redux";
import { isMobile, setIsMobile } from "../redux/slices/tourSlice";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();
  const mobileOpen = useSelector(isMobile);

  const { user } = useAuth();

  let sidebarItems;

  switch (user.profile) {
    case PROFILES.admin:
      sidebarItems = adminDashboardItems;
      break;
    case PROFILES.talent:
      sidebarItems = talentDashboardItems;
      break;
    case PROFILES.instructor:
      sidebarItems = instructorDashboardItems;
      break;
    case PROFILES.recruiter:
      sidebarItems = recruiterDashboardItems;
      break;
    case PROFILES.institution:
      sidebarItems = institutionDashboardItems;
      break;
    default:
      break;
  }

  const handleDrawerToggle = () => {
    dispatch(setIsMobile({ isMobile: !mobileOpen }));
  };

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Drawer>
        {isLgUp ? (
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            items={sidebarItems}
          />
        ) : (
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            items={sidebarItems}
          />
        )}
      </Drawer>
      <AppContent>
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <MainContent p={isLgUp ? 12 : 5}>
          {children}
          <Outlet />
        </MainContent>
        <Footer />
      </AppContent>
      <Settings />
    </Root>
  );
};

export default Dashboard;
