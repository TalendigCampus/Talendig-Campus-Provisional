import React from "react";
import { Container, Grid, TextField } from "@mui/material";

function LogrosPage1() {
  return (
    <>
      <Container
        sx={{
          width: "80%",
        }}
      >
        <Grid item>
          <TextField
            label="INSTITUCION"
            placeholder="Nombre de la institucion"
            fullWidth
          />
        </Grid>
      </Container>
      <Container>
        <Grid item xs={12} sm={6}>
          <TextField
            label="PERIODO DE EVALUACION"
            placeholder="Digite el periodo de evaluacion"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="NOMBRE DEL SUPERVISOR/A"
            placeholder="Digite el nombre del supervisor/a"
          />
        </Grid>
      </Container>
    </>
  );
}

export default LogrosPage1;
