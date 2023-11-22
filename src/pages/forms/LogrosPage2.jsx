import React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

function LogrosPage2() {
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
            Metas del servidor ¿Que tengo que Lograr?
          </Typography>
          <TextField
            placeholder="Escriba aqui las metas a lograr"
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
            Indicador ¿Cuanto tengo que Lograr?
          </Typography>
          <TextField
            placeholder="Escriba aqui el indicador"
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
            Ponderacion de Metas
          </Typography>
          <TextField
            placeholder="Escriba aqui las ponderaciones de metas"
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

export default LogrosPage2;
