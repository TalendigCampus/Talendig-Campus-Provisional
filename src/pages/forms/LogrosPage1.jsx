import React from "react";
import { Container, Grid, TextField } from "@mui/material";

function LogrosPage1() {
  return (
    <>
      <Container
        sx={{
          width: "80%",
          marginBottom: 10,
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
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          marginBottom: 10,
        }}
      >
        <Grid item xs={12} sm={5.5}>
          <TextField
            label="PERIODO DE EVALUACION"
            placeholder="Digite el periodo de evaluacion"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            label="NOMBRE DEL SUPERVISOR/A"
            placeholder="Digite el nombre del supervisor/a"
            fullWidth
          />
        </Grid>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          marginBottom: 10,
        }}
      >
        <Grid item xs={12} sm={3.5}>
          <TextField
            label="CARGO ACTUAL"
            placeholder="Digite el cargo actual"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            label="UNIDAD ORGANIZATIVA"
            placeholder="Digite la unidad organizativa"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            label="NOMBRE DEL SUPERVISOR/A"
            placeholder="Digite el nombre del supervisor/a"
            fullWidth
          />
        </Grid>
      </Container>
      {/* <Container>
        <Button
          variant="contained"
          sx={{
            display: "block",
            margin: "0 auto",
          }}
        >
          Siguiente
        </Button>
      </Container> */}
    </>
  );
}

export default LogrosPage1;
