import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  PROJECT_UPDATE_TYPE,
  PROJECT_DELETE_TYPE,
  DIALOG_UPDATE_TYPE,
} from "../../../../../common/constants/data";
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
  currentFolder,
  currentFile,
  deleteProject,
  setShowUndo,
  setUpdateType,
} from "../../../../../redux/slices/projectsSlice";

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
  const selectedFolder = useSelector(currentFolder);
  const selectedFile = useSelector(currentFile);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowUpdate({ status: false }));
  };

  const handleAction = () => {
    if (type === PROJECT_UPDATE_TYPE.project) {
      dispatch(
        updateProject({
          projectId: selectedProject.projectId,
          projectName: userInput,
          type,
        })
      );
    } else if (type === PROJECT_UPDATE_TYPE.folder) {
      dispatch(
        updateProject({
          folderName: userInput,
          folderId: selectedFolder.folderId,
          type,
        })
      );
    } else if (type === PROJECT_DELETE_TYPE.project) {
      dispatch(
        deleteProject({
          projectId: selectedProject.projectId,
          type: PROJECT_DELETE_TYPE.project,
        })
      );
      dispatch(setUpdateType({ type: PROJECT_UPDATE_TYPE.project }));
      showUndoAction();
    } else if (type === PROJECT_DELETE_TYPE.folder) {
      dispatch(
        deleteProject({
          folderId: selectedFolder.folderId,
          type: PROJECT_DELETE_TYPE.folder,
        })
      );
      dispatch(setUpdateType({ type: PROJECT_UPDATE_TYPE.folder }));
      showUndoAction();
    } else if (type === PROJECT_DELETE_TYPE.file) {
      dispatch(
        deleteProject({
          fileId: selectedFile.fileId,
          type: PROJECT_DELETE_TYPE.file,
        })
      );
      dispatch(setUpdateType({ type: PROJECT_UPDATE_TYPE.file }));
      showUndoAction();
    }

    handleClose();
  };

  const showUndoAction = () => {
    dispatch(setShowUndo({ status: true }));
  };

  return (
    <Dialog
      open={showUpdateModal.value}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {` Desea ${
          showUpdateModal.type === DIALOG_UPDATE_TYPE.update
            ? `${
                type === PROJECT_UPDATE_TYPE.project
                  ? "Actualizar el Nombre del Proyecto"
                  : "Actualizar el Nombre de la Carpeta"
              }`
            : `${
                type === PROJECT_DELETE_TYPE.project
                  ? "Eliminar el Proyecto"
                  : type === PROJECT_DELETE_TYPE.folder
                  ? "Eliminar la Carpeta"
                  : "Eliminar el Archivo"
              }`
        } ?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {showUpdateModal.type === DIALOG_UPDATE_TYPE.update ? (
            <TextField
              id="standard-basic"
              label={`Nombre ${
                type === PROJECT_UPDATE_TYPE.project
                  ? "del Proyecto"
                  : "de la Carpeta"
              }`}
              variant="standard"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
          ) : (
            "Al aceptar, se eliminará."
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAction} color="primary" autoFocus>
          {showUpdateModal.type === "actualizar" ? "Actualizar" : "Eliminar"}
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
