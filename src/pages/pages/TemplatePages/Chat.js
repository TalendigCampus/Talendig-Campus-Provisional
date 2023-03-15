import React from "react";
import styled from "styled-components/macro";
import BarChart from "../charts/Chartjs/BarChart";
import Stats from "../dashboards/Default/Stats";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

import {
  TextField as MuiTextField,
  Grid,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
  CardContent,
  Link,
} from "@mui/material";
import { spacing } from "@mui/system";
import PolarChart from "../charts/Chartjs/PolarChart";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const contentDiv = styled.div``;

const contentsDivsAnalityts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  flex-direction: column;
`;

function DivAnalityths() {
  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Typography variant="h6" gutterBottom>
            Instituciones conectadas
          </Typography>
          <Typography variant="body2" gutterBottom>
            50
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Typography variant="h6" gutterBottom>
            Instituciones conectadas
          </Typography>
          <Typography variant="body2" gutterBottom>
            50
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Typography variant="h6" gutterBottom>
            Instituciones conectadas
          </Typography>
          <Typography variant="body2" gutterBottom>
            50
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Typography variant="h6" gutterBottom>
            Instituciones conectadas
          </Typography>
          <Typography variant="body2" gutterBottom>
            50
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function Content() {
  return (
    <contentDiv>
      <PolarChart />
      <Divider my={1} />

      <DivAnalityths />
      <Divider my={1} />

      <BarChart />
    </contentDiv>
  );
}

function Chat() {
  return (
    <React.Fragment>
      <Helmet title="Chat" />

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Panel
        </Link>
        <Link component={NavLink} to="/">
          Usuarios
        </Link>
        <Typography>Instituciones</Typography>
      </Breadcrumbs>
      <Typography variant="h3" gutterBottom display="inline">
        Estadisticas
      </Typography>

      <Divider my={3} />

      <Content />
    </React.Fragment>
  );
}

export default Chat;
