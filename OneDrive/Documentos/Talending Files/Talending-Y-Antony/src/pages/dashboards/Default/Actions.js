import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Menu, MenuItem } from "@mui/material";
import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";
import { spacing } from "@mui/system";
import { DATEKEYS } from "../../../common/constants/data";
import { getSpanishDate } from "../../../utils/date";

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const date = getSpanishDate(DATEKEYS.large);

  return (
    <React.Fragment>
      <Button
        sx={{ "&:hover": { cursor: "auto" } }}
        variant="contained"
        color="secondary"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Hoy: {date}
      </Button>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Hoy</MenuItem>
        <MenuItem onClick={handleClose}>Ayer</MenuItem>
        <MenuItem onClick={handleClose}>Hace 7 días</MenuItem>
        <MenuItem onClick={handleClose}>Hace 30 días</MenuItem>
        <MenuItem onClick={handleClose}>Este mes</MenuItem>
        <MenuItem onClick={handleClose}>El mes pasado</MenuItem>
      </Menu> */}
    </React.Fragment>
  );
}

export default Actions;
