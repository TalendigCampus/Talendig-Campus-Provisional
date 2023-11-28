import { useState } from "react";
import { Box, CssBaseline, Card, Typography, Button } from "@mui/material";
import Regimen from "../components/Regimen-Etico1";
import axios from "axios";

const RegimenEtico = () => {
  const [values, setValues] = useState({
    userId: "650c566d33d491669553127b",
    instructorId: "650c5e97733fc0d37b8bbb3b",
    lealtad: "",
    transparencia: "",
    colaboracion: "",
    relaciones_interpersonales: "",
    cumplimiento_normas: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.values(values).some(
        (value) => value === null || value === undefined || value === ""
      )
    ) {
      alert("Favor de llenar los campos");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/regimen-etico",
        values,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // console.log(values);
  };

  // eslint-disable-next-line prettier/prettier
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: parseInt(e.target.value) });
  };

  return (
    <>
      <CssBaseline />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <hearder>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "2em", fontWeight: "bold", marginTop: "5%" }}
            >
              Cumplimiento del regimen etico y disciplinario
            </Typography>
          </Box>
        </hearder>
        <hr
          style={{
            marginTop: "3em",
            border: "0px",
            height: "1px",
            backgroundColor: "gray",
            width: "100%",
          }}
        />
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          <Regimen
            textTopic={
              "Lealtad Institucional. Actúa como defensa de la institución en todos los escenarios, y no realiza comentarios públicos que puedan afectar a la imagen de la institución y sus funcionarios."
            }
            handleChange={handleChange}
            inputName={"lealtad"}
          />
          <Regimen
            textTopic={
              "Transparencia. Contribuye a dar visibilidad a las actividades de la institución, facilitando a los ciudadanos toda la información que necesiten para poder realizar sus trámites o ejercer el control democrático de la administración."
            }
            handleChange={handleChange}
            inputName={"transparencia"}
          />
          <Regimen
            textTopic={
              "Colaboracion. Esta dispuesto a ayudar a otros y a integrarse mediante un esfuerzo conjunto con los responsables de otras unidades operativas, dirigido a lograr conjuntamente los objetivos de la institución"
            }
            handleChange={handleChange}
            inputName={"colaboracion"}
          />
          <Regimen
            textTopic={
              "Relaciones Interpersonales. Crea las condiciones dentro de su área de trabajo y en la institución para contribuir con un ambiente de trabajo productivo mediante el fomento de relaciones basadas en el respeto, afabilidad y cortesia con sus superiores, compañeros de trabajo, supervisados, usuarios de los servicios y visitantes."
            }
            handleChange={handleChange}
            inputName={"relaciones_interpersonales"}
          />

          <Regimen
            textTopic={
              "Cumplimiento de Normas. Actúa con apego y respeto a las normas, politicas y disposiciones institucionales; tambien respeta los procedimientos de su área, como las normas legales vigentes que rigen otros temas que le conciernen."
            }
            handleChange={handleChange}
            inputName={"cumplimiento_normas"}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ padding: "6px 20px" }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default RegimenEtico;
