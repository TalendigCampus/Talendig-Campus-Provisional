import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Recomendacion1({ data, setData }) {
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
          value={data.recomendacion1}
          onChange={(e) => setData({ ...data, recomendacion1: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="Escriba otra recomendación de informacion"
          variant="outlined"
          value={data.recomendacion2}
          onChange={(e) => setData({ ...data, recomendacion2: e.target.value })}
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
            value={data.otraClase1}
            onChange={(e) => setData({ ...data, otraClase1: e.target.value })}
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra recomendación de otra clase"
            variant="outlined"
            value={data.otraClase2}
            onChange={(e) => setData({ ...data, otraClase2: e.target.value })}
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
