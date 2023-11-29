import React from "react";
import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
// import { DateField } from "@mui/x-date-pickers/DateField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./forms_styles/FormularioLogroMetasResultadosStyles.css";

function LogrosPage4() {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const handleClear = () => {
    sign.clear();
  };

  const handleGuardarFirma = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    // sign.clear();
  };

  console.log(sign);
  console.log(url);

  /* Configuracion segunda firma */

  const [sign2, setSign2] = useState();
  const [url2, setUrl2] = useState();

  const handleClear2 = () => {
    sign2.clear();
  };

  const handleGuardarFirma2 = () => {
    setUrl2(sign2.getTrimmedCanvas().toDataURL("image/png"));
    // sign.clear();
  };

  console.log(sign2);
  console.log(url2);

  /* Configuracion tercera firma */

  const [sign3, setSign3] = useState();
  const [url3, setUrl3] = useState();

  const handleClear3 = () => {
    sign3.clear();
  };

  const handleGuardarFirma3 = () => {
    setUrl3(sign3.getTrimmedCanvas().toDataURL("image/png"));
    // sign.clear();
  };

  console.log(sign3);
  console.log(url3);

  /* Configuracion cuarta firma */

  const [sign4, setSign4] = useState();
  const [url4, setUrl4] = useState();

  const handleClear4 = () => {
    sign4.clear();
  };

  const handleGuardarFirma4 = () => {
    setUrl4(sign4.getTrimmedCanvas().toDataURL("image/png"));

    // sign.clear();
  };

  console.log(sign4);
  console.log(url4);

  //TODO: Validar formularios
  //TODO: Enviar datos del formulario al Backend

  return (
    <>
      <Container
        className="eSignRowContainer"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        {/* Primera Firma */}

        <Container sx={{ width: "50%" }}>
          <Typography className="eSignCaption">Firma del Servidor/a</Typography>

          <SignatureCanvas
            ref={(data) => setSign(data)}
            canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
          />

          <Container
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              // margin: "10px 0",
            }}
          >
            <Button
              className="btn limpiarBTN"
              variant="contained"
              onClick={handleClear}
            >
              Limpiar
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={handleGuardarFirma}
            >
              Guardar Firma
            </Button>
          </Container>
        </Container>

        {/* Segunda Firma */}

        <Container sx={{ width: "50%" }}>
          <Typography className="eSignCaption">Firma del Servidor/a</Typography>

          <SignatureCanvas
            ref={(data) => setSign2(data)}
            canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
          />

          <Container
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              // margin: "10px 0",
            }}
          >
            <Button
              className="btn limpiarBTN"
              variant="contained"
              onClick={handleClear2}
            >
              Limpiar
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={handleGuardarFirma2}
            >
              Guardar Firma
            </Button>
          </Container>
        </Container>
      </Container>

      {/* Segunda Fila */}

      <Container
        className="eSignRowContainer"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        {/* Tercera Firma */}

        <Container sx={{ width: "50%" }}>
          <Typography className="eSignCaption">
            Firma del Supervisor/a
          </Typography>

          <SignatureCanvas
            ref={(data) => setSign3(data)}
            canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
          />

          <Container
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              // margin: "10px 0",
            }}
          >
            <Button
              className="btn limpiarBTN"
              variant="contained"
              onClick={handleClear3}
            >
              Limpiar
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={handleGuardarFirma3}
            >
              Guardar Firma
            </Button>
          </Container>
        </Container>

        {/* Cuarta Firma */}

        <Container sx={{ width: "50%" }}>
          <Typography className="eSignCaption">
            Firma del Supervisor/a
          </Typography>

          <SignatureCanvas
            ref={(data) => setSign4(data)}
            canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
          />

          <Container
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              // margin: "10px 0",
            }}
          >
            <Button
              className="btn limpiarBTN"
              variant="contained"
              onClick={handleClear4}
            >
              Limpiar
            </Button>
            <Button
              className="btn"
              variant="contained"
              onClick={handleGuardarFirma4}
            >
              Guardar Firma
            </Button>
          </Container>
        </Container>
      </Container>
      {/* <Container className="dateOuttertContainer" sx={{ marginBottom: "20px" }}>
        <Container
          className="dateInnerContainer"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            // border: "3px solid blue",
            // width: "100%",
          }}
        >
          <Container className="dateComponentContainer">
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Fecha del acuerdo
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField className="date" />
            </LocalizationProvider>
          </Container>
          <Container className="dateComponentContainer">
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Fecha de evaluacion
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField className="date" />
            </LocalizationProvider>
          </Container>
        </Container>
      </Container> */}
    </>
  );
}

export default LogrosPage4;
