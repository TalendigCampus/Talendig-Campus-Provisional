import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal } from "react-feather";
import { Button as MuiButton, Menu, MenuItem } from "@mui/material";
import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";
import { spacing } from "@mui/system";

const Button = styled(MuiButton)(spacing);

const SmallButton = styled(Button)`
  padding: 4px;
  min-width: 0;

  svg {
    width: 0.9em;
    height: 0.9em;
  }
`;

function Actions() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
      <SmallButton size="small" mr={2}>
        <LoopIcon />
      </SmallButton>
      <SmallButton size="small" mr={2}>
        <FilterListIcon />
      </SmallButton>
      <Button
        variant="contained"
        color="secondary"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        mr={5}
      >
        <MoreHorizontal />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() =>
            handleClose("/admin/dashboard/users/instructors/list_instructors")
          }
        >
          Lista
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/admin/dashboard/users/instructors")}
        >
          Estadisticas
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Actions;