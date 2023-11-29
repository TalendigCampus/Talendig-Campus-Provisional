import React from "react";
// import { useState } from "react";
import { Container, Grid, TextField } from "@mui/material";

function LogrosPage1({ inputData, setInputData }) {
  // const [institucion, setInstitucion] = useState("");

  // function handleInstitucion(e) {
  //   setInstitucion(e.target.value);
  // }

  // console.log(`la institucion es ${institucion}`);
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
            onChange={
              (e) => {
                setInputData({ ...inputData, institucion: e.target.value });
              } //FIX
            }
            id="institucion"
            name="institucion"
            value={inputData.institucion}
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
            onChange={
              (e) => {
                setInputData({
                  ...inputData,
                  periodoEvaluacion: e.target.value,
                });
              } //FIX
            }
            id="periodoEvaluacion"
            label="PERIODO DE EVALUACION"
            name="periodoEvaluacion"
            value={inputData.periodoEvaluacion}
            placeholder="Digite el periodo de evaluacion"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            onChange={
              (e) => {
                setInputData({
                  ...inputData,
                  nombreSupervisor: e.target.value,
                });
              } //FIX
            }
            id="nombreSupervisor"
            label="NOMBRE DEL SUPERVISOR/A"
            name="nombreSupervisor"
            value={inputData.nombreSupervisor}
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
            onChange={
              (e) => {
                setInputData({ ...inputData, cargoActual: e.target.value });
              } //FIX
            }
            id="cargoActual"
            name="cargoActual"
            value={inputData.cargoActual}
            label="CARGO ACTUAL"
            placeholder="Digite el cargo actual"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            onChange={
              (e) => {
                setInputData({
                  ...inputData,
                  unidadOrganizativa: e.target.value,
                });
              } //FIX
            }
            id="unidadOrganizativa"
            name="unidadOrganizativa"
            value={inputData.unidadOrganizativa}
            label="UNIDAD ORGANIZATIVA"
            placeholder="Digite la unidad organizativa"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            onChange={
              (e) => {
                setInputData({
                  ...inputData,
                  nombreSupervisor2: e.target.value,
                });
              } //FIX
            }
            id="nombreSupervisor2"
            name="nombreSupervisor2"
            value={inputData.nombreSupervisor2}
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
