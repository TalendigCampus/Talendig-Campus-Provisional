import React, { useState } from "react";
import styled from "styled-components/macro";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import {
  Box,
  CardContent,
  Grid,
  Button as MuiButton,
  Card as MuiCard,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)`
  ${spacing};

  overflow: visible;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 200px;
  }
`;

function Quill() {
  const [value, setValue] = useState("");

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Comentarios
        </Typography>
        <Typography variant="body2" gutterBottom>
          Agrega el comentario que leera tu maestro!
        </Typography>
        <Box mt={3}>
          <QuillWrapper>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Escribe Algo.."
            />
          </QuillWrapper>
        </Box>
      </CardContent>
    </Card>
  );
}

function Editors({ setShowComments }) {
  const handdleChange = () => {
    console.log("algo");
    setShowComments((currentState) => !currentState);
  };
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Quill />
          <Button variant="contained" color="info" component="span" mr={2}>
            {" "}
            Listo
          </Button>
          <Button
            variant="contained"
            color="error"
            component="span"
            mr={2}
            onClick={handdleChange}
          >
            {" "}
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Editors;
