import React, { useState } from "react";
import { Divider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Paper } from "@mui/material";
import Habilidades from "../components/Entrevista-Habilidades";
import Recomendacion1 from "../components/Entrevista-Recomendacion1";
import Recomendacion2 from "../components/Entrevista-Recomendacion2";
import Firma from "../components/Entrevista-Firma";

function EntrevistaDeEvaluacion() {
  const [data, setData] = useState({
    fuerte1: "",
    fuerte2: "",
    mejora1: "",
    mejora2: "",
    recomendacion1: "",
    recomendacion2: "",
    otraClase1: "",
    otraClase2: "",
    entornoCondiciones1: "",
    entornoCondiciones2: "",
    satisfacciónProfesional1: "",
    satisfacciónProfesional2: "",
    fecha: null,
    comentario: "",
    opcion: "",
    firmaEvaluador: "",
    firmaServidor: "",
  });

  const handleSubmit = () => {
    alert("Form submitted");

    console.log(data);
  };

  const [page, setPage] = useState(1);

  const PageDisplay = () => {
    switch (page) {
      case 1:
        return <Habilidades data={data} setData={setData} />;
      case 2:
        return <Recomendacion1 data={data} setData={setData} />;
      case 3:
        return <Recomendacion2 data={data} setData={setData} />;
      case 4:
        return <Firma data={data} setData={setData} />;
      default:
        <Habilidades data={data} setData={setData} />;
    }
  };

  return (
    <>
      <CssBaseline />

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <header>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "2em", fontWeight: "bold", marginTop: "5%" }}
            >
              Aspectos a considerar durante la entrevista de evaluacion
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "1.5em", fontWeight: "bold", marginTop: "0.7%" }}
            >
              Plan De Mejora
            </Typography>
            <Divider
              variant="middle"
              sx={{
                background: "grey",
                marginBottom: "3%",
                marginTop: "3%",
                height: "1px",
              }}
            />
          </Box>
        </header>

        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            padding: "1% 1.5% 1% 1.5%",
            marginLeft: "70%",
            borderRadius: "10px",
            border: "2px solid",
          }}
        >
          <Typography variant="h6">{page} / 4</Typography>
        </Paper>

        <Paper
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "25px",
          }}
        >
          <Box>
            {page === 1 && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                Puntos Fuertes y De Mejora
              </Typography>
            )}
            {page === 2 && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                Recomendacion
              </Typography>
            )}
            {page === 3 && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                II - Recomendacion
              </Typography>
            )}
            {page === 4 && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                Firma
              </Typography>
            )}

            <Divider
              variant="middle"
              sx={{
                background: "grey",
                marginBottom: "2%",
                marginTop: "2%",
                height: "1px",
              }}
            />

            {PageDisplay()}
          </Box>

          <CardActions>
            <Stack
              spacing={2}
              direction="row"
              sx={{ margin: "0 auto", marginTop: "3%" }}
            >
              {page !== 1 && (
                <Button
                  variant="contained"
                  onClick={() => {
                    setPage((index) => index - 1);
                  }}
                >
                  Atras
                </Button>
              )}
              {page !== 4 && (
                <Button
                  variant="contained"
                  onClick={() => {
                    setPage((index) => index + 1);
                  }}
                >
                  Siguiente
                </Button>
              )}
              {page === 4 && (
                <Button variant="contained" onClick={handleSubmit}>
                  Someter
                </Button>
              )}
            </Stack>
          </CardActions>
        </Paper>
      </Card>
    </>
  );
}
export default EntrevistaDeEvaluacion;
