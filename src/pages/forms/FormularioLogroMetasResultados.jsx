import React from "react";
import { useState } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";

import "./forms_styles/FormularioLogroMetasResultadosStyles.css";

import LogrosPage1 from "./LogrosPage1";
import LogrosPage2 from "./LogrosPage2";
import LogrosPage3 from "./LogrosPage3";
import LogrosPage4 from "./LogrosPage4";

function FormularioLogroMetasResultados() {
  const [page, setPage] = useState(0);

  //Functions to handle page state

  const handlePageForward = () => {
    setPage(page + 1);
  };

  const handlePageBackward = () => {
    setPage(page - 1);
  };

  //Condition to handle buttons visibility

  let showHideBackwardBTN;

  if (page > 0) {
    showHideBackwardBTN = true;
  } else {
    showHideBackwardBTN = false;
  }

  let showHideForwardBTN;

  if (page === 3) {
    showHideForwardBTN = false;
  } else {
    showHideForwardBTN = true;
  }

  let showHideSubmitdBTN;

  if (page === 3) {
    showHideSubmitdBTN = true;
  } else {
    showHideSubmitdBTN = false;
  }

  //Function to handle page change

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

  //Function to handle submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
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

      <form onSubmit={handleSubmit}>
        <Grid Container>{handlePage()}</Grid>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            className={showHideBackwardBTN ? "visible" : "notVisible"}
            onClick={handlePageBackward}
            variant="contained"
            sx={{ width: "150px", padding: "10px 0" }}
          >
            Atras
          </Button>
          <Button
            className={showHideForwardBTN ? "visible" : "notVisible"}
            onClick={handlePageForward}
            variant="contained"
            sx={{ width: "150px", padding: "10px 0" }}
          >
            Siguiente
          </Button>

          <Button
            className={showHideSubmitdBTN ? "visible" : "notVisible"}
            type="submit"
            variant="contained"
            sx={{ width: "150px", padding: "10px 0" }}
          >
            Enviar
          </Button>
        </Container>
      </form>
    </>
  );
}

export default FormularioLogroMetasResultados;
