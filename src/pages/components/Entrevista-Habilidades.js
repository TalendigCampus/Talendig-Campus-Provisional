import { Box, Typography, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Habilidades({ data, setData, page, setPage }) {
  const [errors, setErrors] = useState({
    fuerte1: false,
    fuerte2: false,
    mejora1: false,
    mejora2: false,
  });

  const handleFuerteChange = (index, value) => {
    const updatedFuerte = [...data.puntos_fuertes];
    updatedFuerte[index] = value;
    setData({ ...data, puntos_fuertes: updatedFuerte });
    setErrors({ ...errors, [`fuerte${index + 1}`]: value.trim() === "" });
  };

  const handleMejoraChange = (index, value) => {
    const updatedMejora = [...data.areas_mejora];
    updatedMejora[index] = value;
    setData({ ...data, areas_mejora: updatedMejora });
    setErrors({ ...errors, [`mejora${index + 1}`]: value.trim() === "" });
  };

  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    // Check if form has been loaded
    if (
      !formLoaded &&
      data.puntos_fuertes.every((value) => value.trim() !== "") &&
      data.areas_mejora.every((value) => value.trim() !== "")
    ) {
      setFormLoaded(true);
    }
  }, [data, formLoaded]);

  const canProceed =
    formLoaded &&
    !Object.values(errors).some((error) => error) &&
    data.puntos_fuertes.every((value) => value.trim() !== "") &&
    data.areas_mejora.every((value) => value.trim() !== "");

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
          Puntos Fuertes:
        </Typography>

        <TextField
          id="outlined-basic"
          label="Escriba un punto fuerte"
          variant="outlined"
          value={data.puntos_fuertes[0]}
          onChange={(e) => handleFuerteChange(0, e.target.value)}
          error={errors.fuerte1}
        />

        <TextField
          id="outlined-basic"
          label="Escriba otro punto fuerte"
          variant="outlined"
          value={data.puntos_fuertes[1]}
          onChange={(e) => handleFuerteChange(1, e.target.value)}
          error={errors.fuerte2}
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
            Areas de Mejora:
          </Typography>

          <TextField
            id="outlined-basic"
            label="Escriba una area de mejora"
            variant="outlined"
            value={data.areas_mejora[0]}
            onChange={(e) => handleMejoraChange(0, e.target.value)}
            error={errors.mejora1}
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra area de mejora"
            variant="outlined"
            value={data.areas_mejora[1]}
            onChange={(e) => handleMejoraChange(1, e.target.value)}
            error={errors.mejora2}
          />
        </Box>
        <Box>
          {page !== 4 && (
            <Button
              type="submit"
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
      </Box>
    </>
  );
}

Habilidades.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    fuerte1: PropTypes.string,
    fuerte2: PropTypes.string,
    mejora1: PropTypes.string,
    mejora2: PropTypes.string,
  }),
};

export default Habilidades;
