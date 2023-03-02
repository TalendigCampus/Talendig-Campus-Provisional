import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PROJECT_UPDATE_TYPE } from "../../../common/constants/data";
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
  currentProject,
  showUndo,
  setShowUndo,
  addProject,
  updateType,
  currentFolder,
  currentFile,
} from "../../../redux/slices/projectsSlice";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Button = styled(MuiButton)(spacing);

function SimpleSnackbar() {
  const currentSelectedProject = useSelector(currentProject);
  const currentSelectedFolder = useSelector(currentFolder);
  const currentSelectedFile = useSelector(currentFile);
  const type = useSelector(updateType);
  const showUndoSnackbar = useSelector(showUndo);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (type === PROJECT_UPDATE_TYPE.project) {
      dispatch(addProject({ project: currentSelectedProject, type }));
    } else if (type === PROJECT_UPDATE_TYPE.folder) {
      dispatch(addProject({ projectFolder: currentSelectedFolder, type }));
    } else if (type === PROJECT_UPDATE_TYPE.file) {
      dispatch(addProject({ folderFile: currentSelectedFile, type }));
    }

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
