import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Avatar,
  Button,
  Box,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Person as PersonIcon,
  TramRounded,
} from "@mui/icons-material";
import { spacing } from "@mui/system";

import { useSelector, useDispatch } from "react-redux";

import {
  showUpdate,
  setShowUpdate,
  currentProject,
  updateProject,
  updateType,
  currentFolderId,
} from "../../../redux/slices/projectsSlice";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

function AlertDialog() {
  //const recruiterToDelete = useSelector(currentRecruiter);
  const [userInput, setUserInput] = React.useState("");
  const showUpdateModal = useSelector(showUpdate);
  const type = useSelector(updateType);
  const selectedProject = useSelector(currentProject);
  const folderId = useSelector(currentFolderId);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowUpdate({ status: false }));
    //setEditProjectsModal(false);
  };

  const handleAction = () => {
    // dispatch(deleteRecruiter({ recruiterId: recruiterToDelete.id }));
    if (type === "proyecto") {
      dispatch(
        updateProject({
          projectId: selectedProject.projectId,
          projectName: userInput,
          type,
        })
      );
    } else if (type === "carpeta") {
      dispatch(
        updateProject({
          folderName: userInput,
          folderId,
          type,
        })
      );
    }
    handleClose();
    //dispatch(setShowUndo({ status: true }));
  };

  return (
    <Dialog
      open={showUpdateModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {` Desea Actualizar el nombre ${
          selectedProject?.type === "proyecto"
            ? "del Proyecto"
            : "de la Carpeta"
        }?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            id="standard-basic"
            label={`Nombre ${
              selectedProject?.type === "proyecto"
                ? "del Proyecto"
                : "de la Carpeta"
            }`}
            variant="standard"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAction} color="primary" autoFocus>
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Dialogs() {
  return (
    <React.Fragment>
      <Helmet title="Dialogs" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AlertDialog />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dialogs;
