import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Recomendacion2({ data, setData }) {
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
          value={data.entornoCondiciones1}
          onChange={(e) =>
            setData({ ...data, entornoCondiciones1: e.target.value })
          }
        />

        <TextField
          id="outlined-basic"
          label="Escriba otra recomendación"
          variant="outlined"
          value={data.entornoCondiciones2}
          onChange={(e) =>
            setData({ ...data, entornoCondiciones2: e.target.value })
          }
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
            value={data.satisfacciónProfesional1}
            onChange={(e) =>
              setData({ ...data, satisfacciónProfesional1: e.target.value })
            }
          />

          <TextField
            id="outlined-basic"
            label="Escriba otra recomendación"
            variant="outlined"
            value={data.satisfacciónProfesional2}
            onChange={(e) =>
              setData({ ...data, satisfacciónProfesional2: e.target.value })
            }
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
