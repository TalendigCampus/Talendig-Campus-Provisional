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
// import handleFuerteChange from "../components/Entrevista-Habilidades";
// import handleMejoraChange from "../components/Entrevista-Habilidades";

function EntrevistaDeEvaluacion() {
  const [page, setPage] = useState(1);
  // const [ready, setReady] = useState(false);
  const [data, setData] = useState({
    userId: "6536fae2c23512d9403dfbf6",
    instructorId: "6539d3a4e0a976bef1bf5758",
    puntos_fuertes: ["", ""],
    areas_mejora: ["", ""],
    recomendaciones: ["", "", "", ""],
    condicion_trabajo: ["", "", "", ""],
    comentarios: [""],
    calificacion_plan_mejora: true,
    firmaEvaluador: "",
    firmaServidor: "",
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
      userId: "6536fae2c23512d9403dfbf6",
      instructorId: "6539d3a4e0a976bef1bf5758",
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

  // const inputArray = [handleFuerteChange, handleMejoraChange];

  // const handleReady = () => {
  //   if (inputArray) {
  //     setReady(true);
  //   } else {
  //     setReady(false);
  //   }
  // };

  const PageDisplay = () => {
    switch (page) {
      case 1:
        return (
          <Habilidades
            data={data}
            setData={setData}
            page={page}
            setPage={setPage}
          />
        );
      case 2:
        return (
          <Recomendacion1
            data={data}
            setData={setData}
            page={page}
            setPage={setPage}
          />
        );
      case 3:
        return (
          <Recomendacion2
            data={data}
            setData={setData}
            page={page}
            setPage={setPage}
          />
        );
      case 4:
        return (
          <Firma data={data} setData={setData} page={page} setPage={setPage} />
        );
      default:
        <Habilidades
          data={data}
          setData={setData}
          page={page}
          setPage={setPage}
        />;
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
              {page === 4 && (
                <Button
                  variant="contained"
                  onClick={() => {
                    setPage((index) => index - 1);
                  }}
                >
                  Atras
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
