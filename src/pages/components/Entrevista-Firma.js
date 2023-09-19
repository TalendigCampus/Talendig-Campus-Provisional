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

  const handleSave = () => {
    const signatureDataEvaluador = signatureRefEvaluador.current.toDataURL();
    handleSaveFirmaEvaluador(signatureDataEvaluador);
  };

  const handleSaveServidor = () => {
    const signatureDataServidor = signatureRefServidor.current.toDataURL();
    handleSaveFirmaServidor(signatureDataServidor);
  };

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
          value={data.comentario}
          onChange={(e) => setData({ ...data, comentario: e.target.value })}
        />
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Typography variant="h6" sx={{ alignItems: "start" }}>
            Conforme con la calificación y el plan de mejora:
          </Typography>

          <RadioGroup row>
            <FormControlLabel
              value="Si"
              control={<Radio />}
              label="Si"
              checked={data.opcion === "Si"}
              onChange={(e) => setData({ ...data, opcion: e.target.value })}
            />

            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
              checked={data.opcion === "No"}
              onChange={(e) => setData({ ...data, opcion: e.target.value })}
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
    fecha: PropTypes.number,
    comentario: PropTypes.string,
    opcion: PropTypes.string,
  }),
};

export default Firma;
