import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteBootcamp,
  bootcampToBeRemoved,
  setShowUndo,
} from "../../../redux/slices/bootcampSlice";

function AlertDialog({ deleteBootcampModal, setDeleteBootcampModal }) {
  const bootcampToDelete = useSelector(bootcampToBeRemoved);
  const dispatch = useDispatch();

  const handleClose = () => {
    setDeleteBootcampModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteBootcamp({ id: bootcampToDelete.id }));
    handleClose();
    dispatch(setShowUndo({ status: true }));
  };

  return (
    <Dialog
      open={deleteBootcampModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"¿Desea eliminar este bootcamp?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Al aceptar, se eliminará el bootcamp.
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

function BootcampDialog({ deleteBootcampModal, setDeleteBootcampModal }) {
  return (
    <React.Fragment>
      <Helmet title="Dialogs" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AlertDialog
            deleteBootcampModal={deleteBootcampModal}
            setDeleteBootcampModal={setDeleteBootcampModal}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BootcampDialog;
