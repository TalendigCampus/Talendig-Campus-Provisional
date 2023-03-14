import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import Editors from "./Editors";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function Description({ bootcamp }) {
  return (
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Descripcion
      </Typography>

      <Spacer mb={4} />
      <Typography variant="p" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        dolores ipsum corporis dicta? Reiciendis veritatis ea inventore cum ad
        officia non facere, quis in qui! Animi necessitatibus, nostrum harum
        sequi inventore nobis numquam cumque dolorum sint voluptates error hic
        expedita maiores soluta est exercitationem! Quisquam culpa inventore
        maiores qui deleniti?
      </Typography>
    </CardContent>
  );
}

function HomeWorkDetails() {
  return (
    <React.Fragment>
      <Helmet title="Asignaciones" />
      <Typography variant="h3" gutterBottom display="inline">
        Asignaciones
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>Información</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={8}>
          <Description />
        </Grid>
        <Grid item xs={12}>
          <Editors />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default HomeWorkDetails;
