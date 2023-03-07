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
  setShowUndo,
  deleteInstructor,
  currentInstructor,
} from "../../../../../redux/slices/instructorSlice.js";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

function AlertDialog({ deleteInstructorModal, setDeleteInstructorModal }) {
  const instructorToDelete = useSelector(currentInstructor);
  const dispatch = useDispatch();

  const handleClose = () => {
    setDeleteInstructorModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteInstructor({ instructorId: instructorToDelete.id }));
    handleClose();
    dispatch(setShowUndo({ status: true }));
  };

  return (
    <Dialog
      open={deleteInstructorModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {" Desea eliminar este usuario?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Al aceptar, se eliminará el usuario.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Dialogs({ deleteInstructorModal, setDeleteInstructorModal }) {
  return (
    <React.Fragment>
      <Helmet title="Dialogs" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AlertDialog
            deleteInstructorModal={deleteInstructorModal}
            setDeleteInstructorModal={setDeleteInstructorModal}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dialogs;
