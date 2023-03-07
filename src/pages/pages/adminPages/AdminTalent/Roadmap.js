import * as React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import * as Icon from "@mui/icons-material";
import { spacing } from "@mui/system";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  FormControl as MuiFormControl,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const TextField = styled(MuiTextField)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const Spacer = styled.div(spacing);

const BigAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

function RoadmapPrimerNivel() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Tooltip title="Intro">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Que es una variable?">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Ejercicios de Variables">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Examen: Las Variables">
          <Button>
            <Icon.GolfCourse color="warning" style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

function RoadmapSegundoNivel() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Tooltip title="Aprendiendo Logica" placement="top-start">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Calculadora en Lenguaje de Programacion">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Formularios">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="El Login">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Examen de Formularios">
          <Button>
            <Icon.GolfCourse color="warning" style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

function RoadmapTercerNivel() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Tooltip title="Añadir Usuarios">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Variables Locales y Globales">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Hooks">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Logica Avanzada">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Programacion FrontEnd y BackEnd">
          <Button>
            <Icon.School style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Examen Final">
          <Button>
            <Icon.Flag color="error" style={{ fontSize: "50px" }} />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

function PositionedTooltips() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <RoadmapPrimerNivel />
        </Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}>
          <RoadmapSegundoNivel />
        </Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}>
          <RoadmapTercerNivel />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function Roadmap() {
  return (
    <React.Fragment>
      <Helmet title="Instructor Profile" />
      <Typography variant="h3" gutterBottom display="inline">
        Roadmap
      </Typography>
      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/admin/dashboard/home">
          Panel
        </Link>
        <Link component={NavLink} to="/admin/dashboard/users/talents">
          Talentos
        </Link>
        <Link component={NavLink} to="/admin/dashboard/users/talents/list">
          Lista
        </Link>
        <Typography gutterBottom display="inline">
          Roadmap
        </Typography>
      </Breadcrumbs>
      <Divider my={6} />
      <PositionedTooltips />
    </React.Fragment>
  );
}

export default Roadmap;
