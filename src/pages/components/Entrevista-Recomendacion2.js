import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Recomendacion2({ data, setData, page, setPage }) {
  const [formLoaded, setFormLoaded] = useState(false);
  const [errors, setErrors] = useState({
    condicion1: false,
    condicion2: false,
    satisfaccion1: false,
    satisfaccion2: false,
  });

  const handleCondicionChange = (index, value) => {
    const updatedCondicion = [...data.condicion_trabajo];
    updatedCondicion[index] = value;
    setData({ ...data, condicion_trabajo: updatedCondicion });
    setErrors({ ...errors, [`condicion${index + 1}`]: value.trim() === "" });
  };

  useEffect(() => {
    // Check if all fields are non-empty
    const allFieldsFilled = data.condicion_trabajo.every(
      (value) => value.trim() !== ""
    );

    // Check if form has been loaded and all fields are non-empty
    if (!formLoaded && allFieldsFilled) {
      setFormLoaded(true);
    }

    // Check if form was loaded and fields are now empty
    if (formLoaded && !allFieldsFilled) {
      setFormLoaded(false);
    }
  }, [data, formLoaded]);

  const canProceed =
    formLoaded && !Object.values(errors).some((error) => error);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Entorno-condiciones de trabajo
        </Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          Señale aquellos elementos que han distorsionado el desempeño del/de la
          servidor/a
        </Typography>

        <TextField
          id="outlined-basic"
          label="Escriba una recomendación"
          variant="outlined"
          value={data.condicion_trabajo[0]}
          onChange={(e) => handleCondicionChange(0, e.target.value)}
          required
          error={errors.condicion1}
        />

        <TextField
          id="outlined-basic"
          label="Escriba otra recomendación"
          variant="outlined"
          value={data.condicion_trabajo[1]}
          onChange={(e) => handleCondicionChange(1, e.target.value)}
          required
          error={errors.condicion2}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "1%",
          }}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Señale otras cuestiones dirigidas a incrementar la motivación y
            satisfacción profesional del/de la servidor/a:
          </Typography>

          <TextField
            id="outlined-basic"
            label="Escriba una recomendación"
            variant="outlined"
            value={data.condicion_trabajo[2]}
            onChange={(e) => handleCondicionChange(2, e.target.value)}
            required
            error={errors.satisfaccion1}
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra recomendación"
            variant="outlined"
            value={data.condicion_trabajo[3]}
            onChange={(e) => handleCondicionChange(3, e.target.value)}
            required
            error={errors.satisfaccion2}
          />
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            margin: "0 auto",
            marginTop: "3%",
          }}
        >
          <Box>
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
          </Box>
          <Box>
            {page !== 4 && (
              <Button
                variant="contained"
                onClick={() => {
                  if (canProceed) {
                    setPage((index) => index + 1);
                  }
                }}
                disabled={!canProceed}
              >
                Siguiente
              </Button>
            )}
          </Box>
        </Stack>
      </Box>
    </>
  );
}

Recomendacion2.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    entornoCondiciones1: PropTypes.string,
    entornoCondiciones2: PropTypes.string,
    satisfacciónProfesional1: PropTypes.string,
    satisfacciónProfesional2: PropTypes.string,
  }),
};

export default Recomendacion2;
