import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Menu, MenuItem } from "@mui/material";
import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
  ArrowDropDown,
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

function Actions({ btnName, path }) {
  // const navigate = useNavigate();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // // const handleClick = (event) => {
  // //   setAnchorEl(event.currentTarget);
  // // };

  // const handleClose = (pathToGo) => {
  //   setAnchorEl(null);
  //   navigate(pathToGo);
  // };

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
    // <React.Fragment>
    //   {/* <SmallButton size="small" mr={2}>
    //     <LoopIcon />
    //   </SmallButton>
    //   <SmallButton size="small" mr={2}>
    //     <FilterListIcon />
    //   </SmallButton> */}
    //   <Button
    //     variant="contained"
    //     color="secondary"
    //     aria-owns={anchorEl ? "simple-menu" : undefined}
    //     aria-haspopup="true"
    //     onClick={() => handleClose(path)}
    //   >
    //     {btnName}
    //   </Button>
    //   {/* <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <MenuItem
    //       onClick={() => handleClose("/admin/dashboard/bootcamps/list")}
    //     >
    //       Lista{" "}
    //     </MenuItem>{" "}
    //     <MenuItem onClick={() => handleClose("/admin/dashboard/bootcamps/")}>
    //       Estadisticas{" "}
    //     </MenuItem>
    //   </Menu> */}
    // </React.Fragment>

    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        mr={5}
      >
        Mas opciones <ArrowDropDown />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleChange("/institution/students/internship-form")}
        >
          Solicitar pasantia
        </MenuItem>
        <MenuItem
          onClick={() => handleChange("/institution/students/view-requests")}
        >
          Ver solicitudes de pasantia
        </MenuItem>
        <MenuItem onClick={() => handleChange("/institution/students")}>
          Talentos de la institucion
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Actions;
