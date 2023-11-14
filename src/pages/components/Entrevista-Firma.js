import { useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";
import SignaturePad from "react-signature-pad-wrapper";
import PropTypes from "prop-types";
import { DatePicker } from "@mui/lab";

function Firma({ data, setData }) {
  const signatureRefEvaluador = useRef(null);
  const signatureRefServidor = useRef(null);

  const handleSaveFirmaEvaluador = (signatureEvaluador) => {
    setData({ ...data, firmaEvaluador: signatureEvaluador });
  };

  const handleSaveFirmaServidor = (signatureServidor) => {
    setData({ ...data, firmaServidor: signatureServidor });
  };

  const handleClearEvaluador = () => {
    signatureRefEvaluador.current.clear();
  };

  const handleClearServidor = () => {
    signatureRefServidor.current.clear();
  };

  // const handleSave = () => {
  //   const signatureDataEvaluador =
  //     signatureRefEvaluador.current.toDataURL("image/png");
  //   handleSaveFirmaEvaluador(signatureDataEvaluador);
  // };

  // const handleSaveServidor = () => {
  //   const signatureDataServidor = signatureRefServidor.current.toDataURL();
  //   handleSaveFirmaServidor(signatureDataServidor);
  // };

  const handleSave = () => {
    const signatureDataEvaluador =
      signatureRefEvaluador.current.toDataURL("image/png");
    const imageBlob = dataURLtoBlob(signatureDataEvaluador);
    const imageUrl = URL.createObjectURL(imageBlob);
    handleSaveFirmaEvaluador(imageUrl);
    alert("Firma del Evaluador guardada.");
  };

  const handleSaveServidor = () => {
    const signatureDataServidor =
      signatureRefServidor.current.toDataURL("image/png");
    const imageBlob = dataURLtoBlob(signatureDataServidor);
    const imageUrl = URL.createObjectURL(imageBlob);
    handleSaveFirmaServidor(imageUrl);
    alert("Firma del Servidor guardada.");
  };

  // Helper function to convert base64 to Blob
  function dataURLtoBlob(dataURL) {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <DatePicker
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "10px",
          }}
          label="Fecha"
          value={data.fecha}
          onChange={(newDate) => setData({ ...data, fecha: newDate })}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          id="outlined-basic"
          label="Escriba un comentario"
          variant="outlined"
          value={data.comentarios}
          onChange={(e) => setData({ ...data, comentarios: e.target.value })}
        />
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Typography variant="h6" sx={{ alignItems: "start" }}>
            Conforme con la calificación y el plan de mejora:
          </Typography>

          <RadioGroup row>
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Si"
              checked={data.calificacion_plan_mejora === true}
              onChange={(e) =>
                setData({
                  ...data,
                  calificacion_plan_mejora:
                    e.target.value === false ? false : true,
                })
              }
            />

            <FormControlLabel
              value={false}
              control={<Radio />}
              label="No"
              checked={data.calificacion_plan_mejora === false}
              onChange={(e) =>
                setData({
                  ...data,
                  calificacion_plan_mejora:
                    e.target.value === true ? true : false,
                })
              }
            />
          </RadioGroup>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "5% 0% 2% 0%",
          }}
        >
          <Box>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Firma del Evaluador
            </Typography>

            {/* Firma del Evaluador*/}

            <Box
              sx={{
                backgroundColor: "white",
                width: "450px",
                border: "3px solid",
                borderRadius: "10px",
              }}
            >
              <SignaturePad
                onSaveSignature={handleSaveFirmaEvaluador}
                ref={signatureRefEvaluador}
              />

              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2%",
                  backgroundColor: "transparent",
                }}
              >
                <Button variant="contained" onClick={handleClearEvaluador}>
                  Eliminar
                </Button>
                <Button variant="contained" onClick={handleSave}>
                  Guardar
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Firma del Servidor*/}

          <Box>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Firma del Servidor
            </Typography>

            <Box
              sx={{
                backgroundColor: "white",
                width: "450px",
                border: "3px solid",
                borderRadius: "10px",
              }}
            >
              <SignaturePad
                onSaveSignature={handleSaveFirmaServidor}
                ref={signatureRefServidor}
              />

              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2%",
                  backgroundColor: "transparent",
                }}
              >
                <Button variant="contained" onClick={handleClearServidor}>
                  Eliminar
                </Button>
                <Button variant="contained" onClick={handleSaveServidor}>
                  Guardar
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

Firma.propTypes = {
  setData: PropTypes.func.isRequired,

  data: PropTypes.shape({
    fecha: PropTypes.string,
    comentario: PropTypes.string,
    opcion: PropTypes.string,
  }),
};

export default Firma;
