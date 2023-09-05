import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const StyledFormControlLabel = styled(FormControlLabel)({
  marginRight: "-20px", // Adjust this value to your needs
});

function FormControlLabelPosition() {
  return (
    <Card mb={6} paddingX={3}>
      <CardContent>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          paddingBottom={11}
          paddingTop={13}
        >
          Comportamiento / Escala de clasificación
        </Typography>
        <Divider />
        <Paper marginX={12}>
          <FormControl component="fieldset" variant="standard">
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              paddingTop={7}
              paddingBottom={7}
            >
              <Grid item xs={12} sm={6}>
                <Typography>
                  Realiza propuestas de mejora; Abierto a valorar las propuestas
                  de los demas para optimizar el desempeño.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <RadioGroup aria-label="position" name="position" row>
                  <StyledFormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                  />
                  <StyledFormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
        <Divider />
      </CardContent>
    </Card>
  );
}

function OrientacionCalidad() {
  return (
    <React.Fragment>
      <Helmet title="Selection Controls" />
      <Typography variant="h3" gutterBottom display="inline">
        Orientación a Calidad
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Forms
        </Link>
        <Typography>Orientación a Calidad</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={6}>
          <FormControlLabelPosition />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default OrientacionCalidad;
