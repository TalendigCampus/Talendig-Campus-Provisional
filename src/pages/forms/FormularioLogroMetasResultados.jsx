import React from "react";
import { Container, Typography, Grid } from "@mui/material";

import "./forms_styles/FormularioLogroMetasResultadosStyles.css";

import LogrosPage1 from "./LogrosPage1";
import LogrosPage2 from "./LogrosPage2";
import LogrosPage3 from "./LogrosPage3";

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
          <LogrosPage3 />
        </Grid>
      </form>
    </>
  );
}

export default FormularioLogroMetasResultados;
