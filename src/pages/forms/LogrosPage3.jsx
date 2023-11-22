import React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

function LogrosPage3() {
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
