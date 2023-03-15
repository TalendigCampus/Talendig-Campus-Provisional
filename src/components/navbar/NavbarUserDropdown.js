import * as React from "react";
import styled from "styled-components/macro";
import { Power } from "react-feather";
import { useNavigate } from "react-router-dom";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { PROFILES } from "../../common/constants/data";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [profileRoute, setProfileRoute] = React.useState("");
  const [showProfileOption, setShowProfileOption] = React.useState(true);
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  React.useEffect(() => {
    if (user) {
      switch (user.profile) {
        case PROFILES.admin:
          setShowProfileOption(false);
          break;
        case PROFILES.talent:
          setProfileRoute("/talent/perfil");
          break;
        case PROFILES.recruiter:
          setProfileRoute("/recruiters/perfil");
          break;
        default:
          break;
      }
    }
  }, [user]);

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    navigate(profileRoute);
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth/login");
  };

  return (
    <React.Fragment>
      <Tooltip title="Cuenta">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {showProfileOption ? (
          <MenuItem onClick={closeMenu}>Perfil</MenuItem>
        ) : null}
        <MenuItem onClick={handleSignOut}>Cerrar sesión</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserDropdown;
