import React from "react";
import styled from "styled-components/macro";
import { IdDataTable } from "./IdDataTableList";
import DataGridPage from "../DataGridPage";

import {
  CardContent,
  IconButton,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Snackbar,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Button = styled(MuiButton)(spacing);

function SimpleSnackbar({
  eliminateDone,
  rows,
  indexDataeliminate,
  setNewRow,
  eliminateData,
  setEliminateDone,
}) {
  const confirmEliminateData = () => {
    setEliminateDone(false);
    rows.splice(indexDataeliminate, 0, eliminateData);
    setNewRow(rows);
    console.log(eliminateData);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setEliminateDone(false);
  };

  return (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={confirmEliminateData}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
}

export default SimpleSnackbar;
