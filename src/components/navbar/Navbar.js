import * as React from "react";
import styled, { withTheme } from "styled-components/macro";
import { darken } from "polished";
import { Search as SearchIcon } from "react-feather";
import { useTranslation } from "react-i18next";

import Tour from "../../pages/pages/Tour/PagesTour";
import useTour from "../../pages/pages/Tour/useTour";
import {
  ADMIN_TOUR_STEPS,
  RECRUITER_TOUR_STEPS,
  TALENT_TOUR_STEPS,
  INSTRUCTOR_TOUR_STEPS,
  INSTITUTION_TOUR_STEPS,
  PROFILES,
} from "../../common/constants/data";

import { useDispatch } from "react-redux";
import { setShowTour, setIsMobile } from "../../redux/slices/tourSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useAuth from "../../hooks/useAuth";

import {
  Grid,
  Hidden,
  InputBase,
  AppBar as MuiAppBar,
  Button as MuiButton,
  IconButton as MuiIconButton,
  Toolbar,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Fullscreen,
  FullscreenExit,
  DirectionsCar,
} from "@mui/icons-material";

import { spacing } from "@mui/system";

import NavbarNotificationsDropdown from "./NavbarNotificationsDropdown";
import NavbarMessagesDropdown from "./NavbarMessagesDropdown";
import NavbarLanguagesDropdown from "./NavbarLanguagesDropdown";
import NavbarUserDropdown from "./NavbarUserDropdown";

const Button = styled(MuiButton)(spacing);

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Search = styled.div`
  border-radius: 2px;
  background-color: ${(props) => props.theme.header.background};
  display: none;
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${(props) => darken(0.05, props.theme.header.background)};
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    display: block;
  }
`;

const SearchIconWrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Input = styled(InputBase)`
  color: inherit;
  width: 100%;

  > input {
    color: ${(props) => props.theme.header.search.color};
    padding-top: ${(props) => props.theme.spacing(2.5)};
    padding-right: ${(props) => props.theme.spacing(2.5)};
    padding-bottom: ${(props) => props.theme.spacing(2.5)};
    padding-left: ${(props) => props.theme.spacing(12)};
    width: 160px;
  }
`;

const getTourSteps = (profile) => {
  let steps = [];
  switch (profile) {
    case PROFILES.admin:
      steps = ADMIN_TOUR_STEPS;
      break;
    case PROFILES.talent:
      steps = TALENT_TOUR_STEPS;
      break;
    case PROFILES.instructor:
      steps = INSTRUCTOR_TOUR_STEPS;
      break;
    case PROFILES.recruiter:
      steps = RECRUITER_TOUR_STEPS;
      break;
    case PROFILES.institution:
      steps = INSTITUTION_TOUR_STEPS;
      break;
    default:
      break;
  }

  return steps;
};

const Navbar = ({ onDrawerToggle }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { user } = useAuth();

  const isMobileMode = useMediaQuery(theme.breakpoints.down("md"));
  const [enableFullScreen, setEnableFullScreen] = React.useState(false);

  const [openShowTour, setOpenShowTour] = useTour({
    localStorageKey: `${user.profile}Tour`,
  });

  const launchFullScreen = (element) => {
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  };

  const cancelFullScreen = () => {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  };

  enableFullScreen
    ? launchFullScreen(document.documentElement)
    : cancelFullScreen();

  const showTour = () => {
    (isMobileMode &&
      dispatch(setIsMobile({ isMobile: true })) &&
      setTimeout(() => dispatch(setShowTour()), 230)) ||
      dispatch(setShowTour());
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            {/* <Grid item>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <Input placeholder={t("Search")} />
              </Search>
            </Grid> */}
            <Grid item xs />
            <Grid item>
              {/* <NavbarMessagesDropdown />
              <NavbarNotificationsDropdown /> */}
              <Button
                mr={2}
                variant="contained"
                color="primary"
                onClick={showTour}
              >
                Tour
                <DirectionsCar />
              </Button>

              <IconButton
                aria-haspopup="true"
                onClick={() =>
                  setEnableFullScreen((currentState) => !currentState)
                }
                color="inherit"
                size="large"
              >
                {enableFullScreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
              <NavbarLanguagesDropdown />
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Tour
        userSteps={getTourSteps(user.profile)}
        showTour={openShowTour}
        setShowTour={setOpenShowTour}
      />
    </React.Fragment>
  );
};

export default withTheme(Navbar);
