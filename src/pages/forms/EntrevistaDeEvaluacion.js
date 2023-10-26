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
import axios from "axios";

function EntrevistaDeEvaluacion() {
  const [data, setData] = useState({
    userId: "650c566d33d491669553127b",
    instructorId: "650c5e97733fc0d37b8bbb3b",
    puntos_fuertes: ["", ""],
    areas_mejora: ["", ""],
    recomendaciones: ["", "", "", ""],
    condicion_trabajo: ["", "", "", ""],
    comentarios: [""],
    calificacion_plan_mejora: true,
    firmaEvaluador: "http://google.com",
    firmaServidor: "http://google.com",
  });

  const handleSubmit = () => {
    // Crea un objeto que contenga los datos a enviar
    const formData = { data };

    // Realiza la solicitud POST al backend
    axios
      .post("http://localhost:8080/api/v1/aspecto-mejora", formData)
      .then((response) => {
        // Maneja la respuesta del servidor si es necesario
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al enviar los datos al servidor:", error);
      });

    setData({
      userId: "650c566d33d491669553127b",
      // userId: "6536fae2c23512d9403dfbf6",
      instructorId: "650c566d33d491669553127b",
      // instructorId: "6539d3a4e0a976bef1bf5758",
      puntos_fuertes: ["", ""],
      areas_mejora: ["", ""],
      recomendaciones: ["", "", "", ""],
      condicion_trabajo: ["", "", "", ""],
      comentarios: "",
      calificacion_plan_mejora: true,
      firmaEvaluador: "",
      firmaServidor: "",
    });

    alert("Formulario enviado");
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
              cy-data-title="aspectoMejoraTitle"
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
            <Typography
              cy-data-title="Page"
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "2em",
                textAlign: "center",
              }}
            >
              {page === 1
                ? "Puntos Fuertes y De Mejora"
                : page === 2
                ? "Recomendacion"
                : page === 3
                ? "II - Recomendacion"
                : page === 4
                ? "Firma"
                : ""}
            </Typography>
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
                  cy-data-btn="btn prev page"
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
                  cy-data-btn="btn next page"
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
