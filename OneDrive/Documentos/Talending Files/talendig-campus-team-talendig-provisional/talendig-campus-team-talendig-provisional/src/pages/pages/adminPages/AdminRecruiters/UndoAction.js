import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Fade,
  Grid,
  IconButton,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";

import { useSelector, useDispatch } from "react-redux";
import {
  addRecruiter,
  currentRecruiter,
  setShowUndo,
  showUndo,
} from "../../../../redux/slices/recruiterSlice";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Button = styled(MuiButton)(spacing);

function SimpleSnackbar() {
  const recruiterToDeleted = useSelector(currentRecruiter);
  const showUndoSnackbar = useSelector(showUndo);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addRecruiter({ recruiter: recruiterToDeleted }));
    handleClose();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setShowUndo({ status: false }));
  };

  return (
    <Paper mt={3}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={showUndoSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Deshacer acción"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClick}>
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
        }
      />
    </Paper>
  );
}

function Snackbars() {
  return (
    <React.Fragment>
      <Helmet title="Snackbars" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SimpleSnackbar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Snackbars;
