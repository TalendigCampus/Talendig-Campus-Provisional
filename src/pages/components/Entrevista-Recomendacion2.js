import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Recomendacion2({ data, setData }) {
  const handleCondicionChange = (index, value) => {
    const updatedCondicion = [...data.condicion_trabajo];
    updatedCondicion[index] = value;
    setData({ ...data, condicion_trabajo: updatedCondicion });
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
        />

        <TextField
          id="outlined-basic"
          label="Escriba otra recomendación"
          variant="outlined"
          value={data.condicion_trabajo[1]}
          onChange={(e) => handleCondicionChange(1, e.target.value)}
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
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra recomendación"
            variant="outlined"
            value={data.condicion_trabajo[3]}
            onChange={(e) => handleCondicionChange(3, e.target.value)}
          />
        </Box>
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
