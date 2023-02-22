import React from "react";

import styled from "styled-components/macro";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Paper as MuiPaper,
  Button as MuiButton,
  Snackbar,
  IconButton,
  Grid,
} from "@mui/material";
import { spacing } from "@mui/system";
import { Close as CloseIcon } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import {
  showUndo,
  setShowUndo,
  addTalent,
  deleteTalent,
  talentToBeRemoved,
} from "../../../redux/slices/talentSlice";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);
const Button = styled(MuiButton)(spacing);

function SimpleSnackbar() {
  let status = useSelector(showUndo);
  const dispatch = useDispatch();
  let currentTalent = useSelector(talentToBeRemoved);

  const handleClose = (event, reason) => {
    dispatch(setShowUndo({ status: false }));
  };

  const handleClick = () => {
    dispatch(addTalent({ newTalent: currentTalent }));
    dispatch(setShowUndo({ status: false }));
  };

  return (
    <Paper mt={3}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={status}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Deshacer opción"
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
