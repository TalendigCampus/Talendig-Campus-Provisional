import React from "react";
import { Container, Typography, Grid } from "@mui/material";

import LogrosPage1 from "./LogrosPage1";

function FormularioLogroMetasResultados() {
  return (
    <>
      <Container>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          Logro de Metas y Resultados
        </Typography>
        <hr className="hr" />
      </Container>
      <form>
        <Grid Container>
          <LogrosPage1 />
        </Grid>
      </form>
    </>
  );
}

export default FormularioLogroMetasResultados;
