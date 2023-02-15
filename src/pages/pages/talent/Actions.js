import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Menu, MenuItem } from "@mui/material";
import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";
import { spacing } from "@mui/system";
import { MoreHorizontal } from "react-feather";

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
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pathToGo) => {
    setAnchorEl(null);
    navigate(pathToGo, { replace: true });
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
          onClick={() => handleClose("/admin/dashboard/users/talents/list")}
        >
          Lista{" "}
        </MenuItem>{" "}
        <MenuItem onClick={() => handleClose("/admin/dashboard/users/talents")}>
          Estadisticas{" "}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Actions;
