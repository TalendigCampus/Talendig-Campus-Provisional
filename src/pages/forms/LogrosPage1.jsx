import React from "react";
// import { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

function LogrosPage1({ inputData, handleChange }) {
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
          <FormControl fullWidth>
            <InputLabel id="institucionSelect">Institucion</InputLabel>
            <Select
              labelId="institucionSelect"
              id="institucionSelect"
              // value={inputData.institucion}
              label="Institucion"
              fullWidth
              cy-data-input="institucion"
              value={inputData.institucion}
              name="institucion"
              required
              onChange={handleChange}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"Talendig"}>Talendig</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
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
            cy-data-input="institucion"
            fullWidth
          /> */}
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
            onChange={handleChange}
            id="periodoEvaluacion"
            label="PERIODO DE EVALUACION"
            name="periodoEvaluacion"
            cy-data-input="periodoEvaluacion"
            value={inputData.periodoEvaluacion}
            placeholder="Digite el periodo de evaluacion"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <TextField
            onChange={handleChange}
            id="nombreSupervisor"
            label="NOMBRE DEL SUPERVISOR/A"
            name="nombreSupervisor"
            value={inputData.nombreSupervisor}
            placeholder="Digite el nombre del supervisor/a"
            cy-data-input="sepervisor"
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
            onChange={handleChange}
            id="cargoActual"
            name="cargoActual"
            value={inputData.cargoActual}
            label="CARGO ACTUAL"
            placeholder="Digite el cargo actual"
            cy-data-input="cargo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            onChange={handleChange}
            id="unidadOrganizativa"
            name="unidadOrganizativa"
            value={inputData.unidadOrganizativa}
            label="UNIDAD ORGANIZATIVA"
            placeholder="Digite la unidad organizativa"
            cy-data-input="unidadOrganizativa"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <TextField
            onChange={handleChange}
            id="nombreSupervisor2"
            name="nombreSupervisor2"
            value={inputData.nombreSupervisor2}
            label="NOMBRE DEL SUPERVISOR/A"
            placeholder="Digite el nombre del supervisor/a"
            cy-data-input="supervisor2"
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
