import React, { useState, useEffect } from "react";
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
} from "../../../../../redux/slices/recruiterSlice";
import {
  CurrentTalent,
  setRecruiterDecision,
} from "../../../../../redux/slices/talentSlice";

function AlertDialog({ setShowDecision }) {
  const showDialog = useSelector(showEmerge);
  const talent = useSelector(CurrentTalent);
  const dispatch = useDispatch();

  const [recruiterChoice, setRecruiterChoice] = React.useState(
    talent.recruiterProcess.decision
  );

  const [isTouched, setIsTouched] = React.useState({
    selection: false,
    comments: false,
  });

  useEffect(() => {
    dispatch(setShowEmerge({ status: true }));
  }, [dispatch]);

  const handleClose = () => {
    dispatch(setShowEmerge({ status: false }));
    setShowDecision(false);
  };

  const handleAction = () => {
    setIsTouched({
      selection: true,
      comments: true,
    });

    if (!recruiterChoice.selection || !recruiterChoice.comments) return;

    dispatch(setRecruiterDecision(recruiterChoice));
    handleClose();
  };

  const updateRecruiterDecision = (event) => {
    setIsTouched({
      ...isTouched,
      [event.target.name]: true,
    });
    setRecruiterChoice({
      ...recruiterChoice,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Dialog
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title" align="center">
        Cual es tu Decisión?
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", m: 3, flexDirection: "column", gap: 3 }}>
          <TextField
            name="selection"
            variant="outlined"
            value={recruiterChoice.selection}
            onChange={updateRecruiterDecision}
            select
            label="Decision"
            error={Boolean(isTouched.selection && !recruiterChoice.selection)}
          >
            <MenuItem key={1} value="contratado">
              Contratado
            </MenuItem>
            <MenuItem key={2} value="debeMejorar">
              Debe Mejorar
            </MenuItem>
          </TextField>

          <TextField
            name="comments"
            label="Comentarios"
            placeholder="Escriba un comentario del talento:"
            multiline
            rowsMax={Infinity}
            maxRows={Infinity}
            fullWidth
            variant="outlined"
            onChange={updateRecruiterDecision}
            value={recruiterChoice.comments}
            error={Boolean(isTouched.comments && !recruiterChoice.comments)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAction} color="primary" autoFocus>
          completar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Dialogs({ setShowDecision }) {
  return (
    <React.Fragment>
      <Helmet title="Dialogs" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AlertDialog setShowDecision={setShowDecision} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dialogs;
