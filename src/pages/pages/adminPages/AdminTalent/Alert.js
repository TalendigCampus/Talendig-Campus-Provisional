import React from "react";
import styled from "styled-components/macro";
import {
  Button,
  Card as MuiCard,
  Paper as MuiPaper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { spacing } from "@mui/system";

import { useSelector, useDispatch } from "react-redux";
import {
  setShowUndo,
  deleteTalent,
  CurrentTalent,
} from "../../../../redux/slices/talentSlice";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

function AlertDialog({ allowDelete, setAllowDelete }) {
  const dispatch = useDispatch();
  let currentTalent = useSelector(CurrentTalent);

  const handleClose = () => {
    setAllowDelete(false);
  };

  const handleDelete = () => {
    dispatch(deleteTalent({ talentId: currentTalent.talentId }));
    dispatch(setShowUndo({ status: true }));
    setAllowDelete(false);
  };

  return (
    <Card mb={6}>
      <Dialog
        open={allowDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Seguro de elminiar?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas seguro que quieres elminiar este Talento?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default AlertDialog;
