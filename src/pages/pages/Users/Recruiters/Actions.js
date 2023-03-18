import React, { useState } from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Menu, MenuItem } from "@mui/material";
import { spacing } from "@mui/system";
import { MoreHorizontal } from "react-feather";
import { useNavigate } from "react-router-dom";

const Button = styled(MuiButton)(spacing);

function Actions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
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
            handlePageChange("/admin/dashboard/users/recruiters/list")
          }
        >
          Lista
        </MenuItem>
        <MenuItem
          onClick={() => handlePageChange("/admin/dashboard/users/recruiters")}
        >
          Estadisticas
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Actions;
