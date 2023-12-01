import React, { useRef } from "react";
import { Button, Container, Typography } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";

import { formLogroMetasData } from "./services/data";
// import { DateField } from "@mui/x-date-pickers/DateField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./forms_styles/FormularioLogroMetasResultadosStyles.css";

function LogrosPage4({ inputData, setInputData }) {
  const firmaServidor = useRef(null);
  const firmaSupervisor = useRef(null);

  const handleClear = () => firmaSupervisor.current.clear();

  const handleClear2 = () => firmaServidor.current.clear();

  const handleSave = () => {
    setInputData({
      ...inputData,
      firmaSupervisor: firmaSupervisor.current
        .getTrimmedCanvas()
        .toDataURL("image/png"),
    });

    alert("firma guardada");
  };

  const handleSave2 = () => {
    setInputData({
      ...inputData,
      firmaServidor: firmaServidor.current
        .getTrimmedCanvas()
        .toDataURL("image/png"),
    });

    alert("firma guardada");
  };

  /* Configuracion tercera firma */

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
            ref={firmaServidor}
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
              onClick={handleSave2}
              cy-data-btn="signature"
            >
              Guardar Firma
            </Button>
          </Container>
        </Container>

        {/* Segunda Firma */}

        <Container sx={{ width: "50%" }}>
          <Typography className="eSignCaption">Firma del Supervisor</Typography>

          <SignatureCanvas
            ref={firmaSupervisor}
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
              onClick={handleSave}
              cy-data-btn="signature"
            >
              Guardar Firma
            </Button>
          </Container>
        </Container>
      </Container>

      {/* Segunda Fila */}

      {/* <Container
        className="eSignRowContainer"
        sx={{ display: "flex", justifyContent: "space-around" }}
      > */}
      {/* Tercera Firma

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
        </Container> */}

      {/* Cuarta Firma

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
        </Container> */}
      {/* </Container> */}
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
