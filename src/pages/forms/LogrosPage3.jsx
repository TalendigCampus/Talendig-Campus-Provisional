import React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

function LogrosPage3({ inputData, setInputData }) {
  return (
    <>
      <Container
        sx={{
          width: "80%",
          marginBottom: 10,
        }}
      >
        <Grid item>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ marginBottom: 4 }}
          >
            Calificacion Otorgada
          </Typography>
          <TextField
            onChange={(e) => {
              setInputData({
                ...inputData,
                calificacion_otorgada: e.target.value,
              });
            }}
            id="calificacion_otorgada"
            name="calificacion_otorgada"
            value={inputData.calificacion_otorgada}
            placeholder="Escriba aqui la calificacion otorgada"
            fullWidth
            sx={{ marginBottom: 10 }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ marginBottom: 4 }}
          >
            Medios de Verificacion y Evidencias. Observaciones
          </Typography>
          <TextField
            onChange={(e) => {
              setInputData({
                ...inputData,
                medios_de_verificacion_y_evidencias: e.target.value,
              });
            }}
            id="medios_de_verificacion_y_evidencias"
            name="medios_de_verificacion_y_evidencias"
            value={inputData.medios_de_verificacion_y_evidencias}
            placeholder="Escriba aqui las observaciones"
            fullWidth
            sx={{ marginBottom: 10 }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ marginBottom: 4 }}
          >
            Indicador ¿Cuanto tengo que lograr?
          </Typography>
          <TextField
            onChange={(e) => {
              setInputData({
                ...inputData,
                cuanto_tengo_que_lograr2: e.target.value,
              });
            }}
            id="cuanto_tengo_que_lograr2"
            name="cuanto_tengo_que_lograr2"
            value={inputData.cuanto_tengo_que_lograr2}
            placeholder="Escriba aqui los indicadores"
            fullWidth
            sx={{ marginBottom: 10 }}
          />
        </Grid>
        {/* <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            sx={{ width: "150px", padding: "10px 0" }}
          >
            Atras
          </Button>
          <Button
            variant="contained"
            sx={{ width: "150px", padding: "10px 0" }}
          >
            Siguiente
          </Button>
        </Container> */}
      </Container>
    </>
  );
}

export default LogrosPage3;
