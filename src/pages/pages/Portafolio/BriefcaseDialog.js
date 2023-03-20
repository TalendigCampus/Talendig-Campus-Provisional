import React from "react";
import styled from "styled-components/macro";
import {
  Button,
  Card as MuiCard,
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
  deletebriefcase,
  briefcaseToBeRemoved,
} from "../../../redux/slices/brieftcaseSlice";

const Card = styled(MuiCard)(spacing);

function BriefcaseDialogs({ allowDelete, setAllowDelete }) {
  const dispatch = useDispatch();
  let currentBriefcase = useSelector(briefcaseToBeRemoved);

  const handleClose = () => {
    setAllowDelete(false);
  };

  const handleDelete = () => {
    dispatch(deletebriefcase({ briefcaseId: currentBriefcase.briefcaseId }));
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
    </Card>
  );
}

export default BriefcaseDialogs;
