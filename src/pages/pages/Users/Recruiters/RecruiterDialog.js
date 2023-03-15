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
  showEmerge,
  setShowEmerge,
  setShowUndo,
} from "../../../../redux/slices/recruiterSlice";
import {
  setRecruitmentProcess,
  setTalentFavorite,
} from "../../../../redux/slices/talentSlice";
import { RECRUITER_ACTION_TYPE } from "../../../../common/constants/data";

function AlertDialog({ actionToPerform }) {
  const recruiterTalentDialog = useSelector(showEmerge);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowEmerge({ status: false }));
  };

  const handleDelete = () => {
    if (actionToPerform === RECRUITER_ACTION_TYPE.removeFromProcess) {
      dispatch(setRecruitmentProcess({ activeProcess: false }));
    }

    if (actionToPerform === RECRUITER_ACTION_TYPE.removeFromFavorite) {
      dispatch(setTalentFavorite());
    }

    dispatch(setShowUndo({ status: true }));
    handleClose();
  };

  return (
    <Dialog
      open={recruiterTalentDialog}
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

function Dialogs({ actionToPerform }) {
  return (
    <React.Fragment>
      <Helmet title="Dialogs" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AlertDialog actionToPerform={actionToPerform} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dialogs;
