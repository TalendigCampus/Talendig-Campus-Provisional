import React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

function LogrosPage2({ inputData, setInputData }) {
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
            onChange={(e) =>
              setInputData({ ...inputData, metas_a_lograr: [e.target.value] })
            }
            id="metas_a_lograr"
            name="metas_a_lograr"
            value={inputData.metas_a_lograr}
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
            onChange={(e) =>
              setInputData({
                ...inputData,
                cuanto_tengo_que_lograr: [e.target.value],
              })
            }
            id="cuanto_tengo_que_lograr"
            name="cuanto_tengo_que_lograr"
            value={inputData.cuanto_tengo_que_lograr}
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
            onChange={(e) =>
              setInputData({
                ...inputData,
                ponderacion_de_metas: [parseInt(e.target.value)],
              })
            }
            id="ponderacion_de_metas"
            name="ponderacion_de_metas"
            value={inputData.ponderacion_de_metas}
            placeholder="Escriba aqui las ponderaciones de metas"
            fullWidth
            type="number"
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
