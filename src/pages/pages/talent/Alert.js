import React from "react";
import styled from "styled-components/macro";
import {
  Button,
  Card as MuiCard,
  CardContent,
  Typography,
  Paper as MuiPaper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { spacing } from "@mui/system";
import JsonInfo from "./info.json";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

function AlertDialog({ TalentAlert, setTalentAlert, setAllowDelete }) {
  const handleClose = () => {
    setTalentAlert(false);
  };

  const handleDelete = () => {
    setAllowDelete(true);
  };

  return (
    <Card mb={6}>
      <Dialog
        open={TalentAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default AlertDialog;
