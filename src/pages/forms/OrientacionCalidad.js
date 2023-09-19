import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Button as MuiButton,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
  Button,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const RoundedButton = styled(MuiButton)({
  borderRadius: "100px",
});

const StyledFormControlLabel = styled(FormControlLabel)({
  marginRight: "-20px", // Adjust this value to your needs
});

function FormControlLabelPosition() {
  return (
    <Card mb={6} paddingX={3}>
      <CardContent>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          paddingBottom={11}
          paddingTop={13}
        >
          Comportamiento / Escala de clasificación
        </Typography>
        <Paper marginX={12}>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Realiza propuestas de mejora; Abierto a valorar las propuestas
                  de los demas para optimizar el desempeño.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Desarrolla e implementa acciones dirigidas al mejoramiento
                  continuo de los servicios de su area o de la institucion.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Asume sus actos con responsabilidad e intenta corregir
                  loserrores cometidos.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Asume sus actos con responsabilidad e intenta corregir los Sus
                  reportes, trabajos, o proyectos son completos, precisos y
                  siempre estan bien presentados.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Los trabajos que realiza estan acorde a los procesos y
                  procedimientos del area o de la institucion.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Asume las nuevas metodologias de trabajo con facilidad, aplica
                  las sugerencias de mejoras en los procesos de su trabajo o de
                  la institucion.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Se interesa por mejorar su trabajo y servicio; busca
                  retroalimentacion de su supervisor, sus colegas y usuarios /
                  clientes para incorporar mejoras sugeridad.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <Divider />
          <FormControl component="fieldset" variant="standard">
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Comunica errores y presenta propuestas para que se corrijan.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <Divider />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
              paddingX={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Vigila la calidad del trabajo de otras personas para asegurar
                  el trabajo bien hecho.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <Divider />
        </Paper>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          marginTop={9}
        >
          <RoundedButton mr={2} variant="contained" color="primary">
            Someter
          </RoundedButton>
        </Grid>
      </CardContent>
    </Card>
  );
}

function OrientacionCalidad() {
  return (
    <React.Fragment>
      <Helmet title="Selection Controls" />
      <Typography variant="h3" gutterBottom display="inline">
        Orientación a Calidad
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Forms
        </Link>
        <Typography>Orientación a Calidad</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={6}>
          <FormControlLabelPosition />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default OrientacionCalidad;
