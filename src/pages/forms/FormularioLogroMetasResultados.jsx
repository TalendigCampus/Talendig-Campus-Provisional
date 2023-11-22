import React from "react";
import { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";

import "./forms_styles/FormularioLogroMetasResultadosStyles.css";

import LogrosPage1 from "./LogrosPage1";
import LogrosPage2 from "./LogrosPage2";
import LogrosPage3 from "./LogrosPage3";
import LogrosPage4 from "./LogrosPage4";

function FormularioLogroMetasResultados() {
  const [page, setPage] = useState(0);

  const handlePage = () => {
    if (page === 0) {
      return <LogrosPage1 />;
    } else if (page === 1) {
      return <LogrosPage2 />;
    } else if (page === 2) {
      return <LogrosPage3 />;
    } else {
      return <LogrosPage4 />;
    }
  };

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
        <Grid Container>{handlePage()}</Grid>
      </form>
    </>
  );
}

export default FormularioLogroMetasResultados;
