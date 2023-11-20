import React from "react";
import { Container, TextField, Typography, Grid } from "@mui/material";

function FormularioLogroMetasResultados() {
  return (
    <>
      <Container>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
          }}
        >
          Logro de Metas y Resultados
        </Typography>
      </Container>
      <form>
        <Grid Container>
          <Container>
            <Grid item>
              <TextField label="Test" placeholder="Esto es una prueba" />
            </Grid>
          </Container>
        </Grid>
      </form>
    </>
  );
}

export default FormularioLogroMetasResultados;
