import React from "react";
import { Container, Grid, TextField } from "@mui/material";

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
          <TextField
            label="Metas del servidor ¿Que tengo que Lograr?"
            placeholder="Escriba aqui las metas a lograr"
            fullWidth
          />
        </Grid>
      </Container>
    </>
  );
}

export default LogrosPage2;
