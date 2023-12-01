import React from "react";
import { useState } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import axios from "axios";

import "./forms_styles/FormularioLogroMetasResultadosStyles.css";

import LogrosPage1 from "./LogrosPage1";
import LogrosPage2 from "./LogrosPage2";
import LogrosPage3 from "./LogrosPage3";
import LogrosPage4 from "./LogrosPage4";
import { formLogroMetasData } from "./services/data";

function FormularioLogroMetasResultados() {
  const [page, setPage] = useState(0);
  const [inputData, setInputData] = useState(formLogroMetasData);

  // * Functions to handle th inputs

  // eslint-disable-next-line prettier/prettier
  const handleChange = (e) =>
    setInputData({ ...inputData, [e.target.name]: e.target.value });

  // * Functions to handle page state

  const handlePageForward = () => {
    setPage(page + 1);
  };

  const handlePageBackward = () => {
    setPage(page - 1);
  };

  // * Condition to handle buttons visibility

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
      return <LogrosPage1 inputData={inputData} handleChange={handleChange} />;
    } else if (page === 1) {
      return <LogrosPage2 inputData={inputData} setInputData={setInputData} />;
    } else if (page === 2) {
      return <LogrosPage3 inputData={inputData} setInputData={setInputData} />;
    } else {
      return <LogrosPage4 inputData={inputData} setInputData={setInputData} />;
    }
  };

  //Function to handle submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    const logroMetasBody = {
      userId: inputData.userId,
      instructorId: inputData.instructorId,
      institucion: "65296fbb7189553d2356fe42",
      firmaServidor: inputData.firmaServidor,
      firmaSupervisor: inputData.firmaSupervisor,
      indicadorCuando: inputData.cuanto_tengo_que_lograr,
      indicadorCuanto: inputData.cuanto_tengo_que_lograr2,
      metas: inputData.metas_a_lograr,
      observaciones: inputData.medios_de_verificacion_y_evidencias,
      ponderacion: inputData.ponderacion_de_metas,
      unidadOrganizativa: inputData.unidadOrganizativa,
      calificacion: inputData.calificacion_otorgada,
      cargoSupervisor: "Maestro",
      cargoServidor: inputData.cargoActual,
    };
    console.log(inputData);

    if (
      Object.values(inputData).some(
        (value) => value === undefined || value === null || value === ""
      )
    ) {
      alert("Error favor de llenar los datos");
      return;
    }
    alert("Formulario enviado");
    // setInputData(formData);
    setPage(0);
    axios
      .post("http://localhost:8080/api/v1/logro-metas", { ...logroMetasBody })
      .then((res) => {
        setInputData(formLogroMetasData);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Typography
          cy-data-title="logroMetasTitle"
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
            marginBottom: 5,
          }}
        >
          <Button
            className={showHideBackwardBTN ? "visible" : "notVisible"}
            onClick={handlePageBackward}
            variant="contained"
            cy-data-btn="btn prev page"
            sx={{ width: "150px", padding: "10px 0" }}
          >
            Atras
          </Button>
          <Button
            className={showHideForwardBTN ? "visible" : "notVisible"}
            onClick={handlePageForward}
            variant="contained"
            sx={{ width: "150px", padding: "10px 0" }}
            cy-data-btn="btn next page"
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
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              border: "2px solid #000",
              padding: 2,
            }}
          >{`${page + 1}/4`}</Typography>
        </Container>
      </form>
    </>
  );
}

export default FormularioLogroMetasResultados;
