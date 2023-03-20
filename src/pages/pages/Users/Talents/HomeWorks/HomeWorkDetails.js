import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  FormControl,
  TextField,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";

import Editors from "./Editors";

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function Description({ setShowComments }) {
  const handdleChange = () => {
    console.log("algo");
    setShowComments((currentState) => !currentState);
  };
  return (
    <CardContent>
      <Typography variant="h3">Tarea</Typography>

      <Spacer mb={4} />
      <Typography>
        Esta es la asignacion del Bootcamp, sube aqui tus archivos y deja un
        comentario para que el instructor lo vea si es necesario. Buena Suerte!
      </Typography>
      <Spacer mb={4} />
      <Typography>Fecha de Cierre: (30-Mayo-2023) - 11:59:00</Typography>

      <Spacer mb={4} />
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
      />

      <label htmlFor="raised-button-file">
        <Button variant="contained" color="info" component="span" mr={2}>
          <CloudUpload mr={2} /> Subir Archivo
        </Button>
      </label>
      <Button
        variant="contained"
        color="warning"
        component="span"
        mr={2}
        onClick={handdleChange}
      >
        {" "}
        Comentar
      </Button>
    </CardContent>
  );
}

function HomeWorkDetails() {
  const [showComments, setShowComments] = React.useState(false);
  const Navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    Navigate(pathToGo);
  };
  return (
    <React.Fragment>
      <Helmet title="Asignaciones" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Asignaciones
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/talent/home">
              Inicio
            </Link>
            <Link component={NavLink} to="/talent/bootcamp-info">
              Bootcamps
            </Link>
            <Typography>Detalles de Tarea</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() => handlePageChange("/talent/home")}
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={8}>
          <Description setShowComments={setShowComments} />
        </Grid>
        {showComments ? (
          <Grid item xs={12}>
            <Editors setShowComments={setShowComments} />
          </Grid>
        ) : null}
      </Grid>
    </React.Fragment>
  );
}

export default HomeWorkDetails;
