import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";

import { spacing } from "@mui/system";

const Chip = styled(MuiChip)`
  height: 20px;
  margin-top: -3px;
  font-weight: bold;
  font-size: 75%;
`;

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Changelog() {
  return (
    <React.Fragment>
      <Helmet title="Changelog" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Changelog
          </Typography>

          <Divider my={6} />

          <Box mt={3}>
            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.0" /> – Mar 2, 2023
              <ul>
                <li>Lanzamiento inicial de la aplicación.</li>
                <li>
                  Se mejoró la velocidad y estabilidad de la aplicación en un
                  30%.
                </li>
              </ul>
            </Typography>

            <Divider my={6} />
            <Typography variant="subtitle1">
              <Chip color="secondary" label="v0.0.9" /> – Feb 25, 2023
              <ul>
                <li>
                  Se mejoró la velocidad de carga de la aplicación en un 20%. Se
                </li>
                <li>agregó soporte para varios idiomas.</li>
                <li>
                  Se rediseñó completamente la interfaz de usuario de la
                  aplicación.
                </li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v0.0.8" /> – Feb 20, 2023
              <ul>
                <li>
                  Se mejoró la experiencia de usuario en la sección de
                  configuración de la aplicación.
                </li>
                <li>Se agregó soporte para notificaciones push.</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v0.0.7" /> – Feb 15, 2023
              <ul>
                <li>
                  Se agregaron nuevas funciones de personalización que permiten
                  a los usuarios personalizar la apariencia de la aplicación.
                </li>
                <li>Se mejoró el rendimiento general de la aplicación.</li>
              </ul>
            </Typography>
            <Divider my={6} />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Changelog;
