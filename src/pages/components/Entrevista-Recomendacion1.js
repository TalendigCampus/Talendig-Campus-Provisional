import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Recomendacion1({ data, setData }) {
  const handleRecomendacionChange = (index, value) => {
    const updatedRecomendacion = [...data.recomendaciones];
    updatedRecomendacion[index] = value;
    setData({ ...data, recomendaciones: updatedRecomendacion });
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
          De Formacion:
        </Typography>

        <TextField
          cy-data-input="recomendacion 1"
          id="outlined-basic"
          label="Escriba una recomendación de informacion"
          variant="outlined"
          value={data.recomendaciones[0]}
          onChange={(e) => handleRecomendacionChange(0, e.target.value)}
        />

        <TextField
          cy-data-input="recomendacion 2"
          id="outlined-basic"
          label="Escriba otra recomendación de informacion"
          variant="outlined"
          value={data.recomendaciones[1]}
          onChange={(e) => handleRecomendacionChange(1, e.target.value)}
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
            cy-data-input="class 1"
            id="outlined-basic"
            label="Escriba una recomendación de otra clase"
            variant="outlined"
            value={data.recomendaciones[2]}
            onChange={(e) => handleRecomendacionChange(2, e.target.value)}
          />

          <TextField
            cy-data-input="class 2"
            id="outlined-basic"
            label="Escriba otra recomendación de otra clase"
            variant="outlined"
            value={data.recomendaciones[3]}
            onChange={(e) => handleRecomendacionChange(3, e.target.value)}
          />
        </Box>
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
