import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Habilidades({ data, setData }) {
  const handleFuerteChange = (index, value) => {
    const updatedFuerte = [...data.puntos_fuertes];
    updatedFuerte[index] = value;
    setData({ ...data, puntos_fuertes: updatedFuerte });
  };

  const handleMejoraChange = (index, value) => {
    const updatedMejora = [...data.areas_mejora];
    updatedMejora[index] = value;
    setData({ ...data, areas_mejora: updatedMejora });
  };

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
          cy-data-input="punto fuerte 1"
          id="outlined-basic"
          label="Escriba un punto fuerte"
          variant="outlined"
          value={data.puntos_fuertes[0]}
          onChange={(e) => handleFuerteChange(0, e.target.value)}
        />

        <TextField
          cy-data-input="punto fuerte 2"
          id="outlined-basic"
          label="Escriba otro punto fuerte"
          variant="outlined"
          value={data.puntos_fuertes[1]}
          onChange={(e) => handleFuerteChange(1, e.target.value)}
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
            cy-data-input="area mejora 1"
            id="outlined-basic"
            label="Escriba una area de mejora"
            variant="outlined"
            value={data.areas_mejora[0]}
            onChange={(e) => handleMejoraChange(0, e.target.value)}
          />

          <TextField
            id="outlined-basic"
            cy-data-input="area mejora 2"
            label="Escriba otra area de mejora"
            variant="outlined"
            value={data.areas_mejora[1]}
            onChange={(e) => handleMejoraChange(1, e.target.value)}
          />
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
