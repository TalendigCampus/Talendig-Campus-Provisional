import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  FormControl,
  FormControlLabel,
  Button as MuiButton,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Radio,
  RadioGroup,
  Typography,
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
  marginRight: "-20px",
});

function Puntaje({ textoPregunta, nombre, valor, onChange }) {
  return (
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
          <Typography>{textoPregunta}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioGroup
            aria-label={nombre}
            name={nombre}
            value={valor}
            onChange={onChange}
            row
          >
            {[1, 2, 3, 4, 5].map((opcion) => (
              <StyledFormControlLabel
                key={opcion}
                value={opcion.toString()}
                control={<Radio color="primary" />}
                label={opcion.toString()}
                labelPlacement="bottom"
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
}

function FormularioEvaluacion() {
  const [valorPropuesta, setValorPropuesta] = useState("1");
  const [valorMejoraContinua, setValorMejoraContinua] = useState("1");
  const [valorResponsabilidad, setValorResponsabilidad] = useState("1");
  const [valorAprendeErrores, setAprendeErrores] = useState("1");
  const [valorAlineacion, setValorAlineacion] = useState("1");
  const [valorAdaptable, setValorAdaptable] = useState("1");
  const [valorMejora, setValorMejora] = useState("1");
  const [valorComunicacion, setValorComunicacion] = useState("1");
  const [valorCalidad, setValorCalidad] = useState("1");

  // TODO: ADD LOGIC TO SEND TO ENDPOINT ONCE ENDPOINT IS CONFIRMED ATT: CARLOS

  const handleSubmit = () => {
    const formData = {
      propuesta: valorPropuesta,
      mejoraContinua: valorMejoraContinua,
      responsabilidad: valorResponsabilidad,
      aprendeErrores: valorAprendeErrores,
      alineacion: valorAlineacion,
      adaptable: valorAdaptable,
      mejora: valorMejora,
      comunicacion: valorComunicacion,
      calidad: valorCalidad,
    };

    console.log(formData);
  };

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
          <Puntaje
            textoPregunta="Realiza propuestas de mejora; Abierto a valorar las propuestas de los demás para optimizar el desempeño."
            nombre="propuesta"
            valor={valorPropuesta}
            onChange={(e) => setValorPropuesta(e.target.value)}
          />

          <Puntaje
            textoPregunta="Desarrolla e implementa acciones dirigidas al mejoramiento continuo de los servicios de su área o de la institución."
            nombre="mejoraContinua"
            valor={valorMejoraContinua}
            onChange={(e) => setValorMejoraContinua(e.target.value)}
          />

          <Puntaje
            textoPregunta="Asume sus actos con responsabilidad e intenta corregir los errores cometidos."
            nombre="responsabilidad"
            valor={valorResponsabilidad}
            onChange={(e) => setValorResponsabilidad(e.target.value)}
          />

          <Puntaje
            textoPregunta="Asume sus actos con responsabilidad e intenta corregir los Sus reportes, trabajos, o proyectos son completos, precisos y siempre estan bien presentados."
            nombre="aprendeErrores"
            valor={valorAprendeErrores}
            onChange={(e) => setAprendeErrores(e.target.value)}
          />

          <Puntaje
            textoPregunta="Los trabajos que realiza estan acorde a los procesos y procedimientos del area o de la institucion."
            nombre="alineacion"
            valor={valorAlineacion}
            onChange={(e) => setValorAlineacion(e.target.value)}
          />

          <Puntaje
            textoPregunta="Asume las nuevas metodologias de trabajo con facilidad, aplica las sugerencias de mejoras en los procesos de su trabajo o de la institucion."
            nombre="adaptable"
            valor={valorAdaptable}
            onChange={(e) => setValorAdaptable(e.target.value)}
          />

          <Puntaje
            textoPregunta="Se interesa por mejorar su trabajo y servicio; busca retroalimentacion de su supervisor, sus colegas y usuarios / clientes para incorporar mejoras sugeridad."
            nombre="mejora"
            valor={valorMejora}
            onChange={(e) => setValorMejora(e.target.value)}
          />

          <Puntaje
            textoPregunta="Comunica errores y presenta propuestas para que se corrijan."
            nombre="comunicacion"
            valor={valorComunicacion}
            onChange={(e) => setValorComunicacion(e.target.value)}
          />

          <Puntaje
            textoPregunta="Vigila la calidad del trabajo de otras personas para asegurar el trabajo bien hecho."
            nombre="calidad"
            valor={valorCalidad}
            onChange={(e) => setValorCalidad(e.target.value)}
          />
        </Paper>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          marginTop={9}
        >
          <RoundedButton
            mr={2}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
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
          <FormularioEvaluacion />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default OrientacionCalidad;
