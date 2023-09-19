import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Habilidades({ data, setData }) {
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
          value={data.fuerte1}
          onChange={(e) => setData({ ...data, fuerte1: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="Escriba otro punto fuerte"
          variant="outlined"
          value={data.fuerte2}
          onChange={(e) => setData({ ...data, fuerte2: e.target.value })}
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
            value={data.mejora1}
            onChange={(e) => setData({ ...data, mejora1: e.target.value })}
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra area de mejora"
            variant="outlined"
            value={data.mejora2}
            onChange={(e) => setData({ ...data, mejora2: e.target.value })}
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
