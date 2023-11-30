import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Recomendacion1({ data, setData, page, setPage }) {
  const [formLoaded, setFormLoaded] = useState(false);
  const [errors, setErrors] = useState({
    recomendacion1: false,
    recomendacion2: false,
    otraClase1: false,
    otraClase2: false,
  });

  const handleRecomendacionChange = (index, value) => {
    const updatedRecomendacion = [...data.recomendaciones];
    updatedRecomendacion[index] = value;
    setData({ ...data, recomendaciones: updatedRecomendacion });
    setErrors({
      ...errors,
      [`recomendacion${index + 1}`]: value.trim() === "",
    });
  };

  useEffect(() => {
    // Check if all fields are non-empty
    const allFieldsFilled = data.recomendaciones.every(
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
        <Typography variant="h6" fontWeight={"bold"}>
          De Formacion:
        </Typography>

        <TextField
          id="outlined-basic"
          label="Escriba una recomendación de informacion"
          variant="outlined"
          value={data.recomendaciones[0]}
          onChange={(e) => handleRecomendacionChange(0, e.target.value)}
          required
          error={errors.recomendacion1}
        />

        <TextField
          id="outlined-basic"
          label="Escriba otra recomendación de informacion"
          variant="outlined"
          value={data.recomendaciones[1]}
          onChange={(e) => handleRecomendacionChange(1, e.target.value)}
          required
          error={errors.recomendacion2}
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
            De otra clase:
          </Typography>

          <TextField
            id="outlined-basic"
            label="Escriba una recomendación de otra clase"
            variant="outlined"
            value={data.recomendaciones[2]}
            onChange={(e) => handleRecomendacionChange(2, e.target.value)}
            required
            error={errors.otraClase1}
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra recomendación de otra clase"
            variant="outlined"
            value={data.recomendaciones[3]}
            onChange={(e) => handleRecomendacionChange(3, e.target.value)}
            required
            error={errors.otraClase2}
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
          <Box sx={{ gap: "10px" }}>
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

Recomendacion1.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    recomendacion1: PropTypes.string,
    recomendacion2: PropTypes.string,
    otraClase1: PropTypes.string,
    otraClase2: PropTypes.string,
  }),
};

export default Recomendacion1;
