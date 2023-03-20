import * as React from "react";
import styled from "styled-components/macro";
import { useNavigate, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import * as Icon from "@mui/icons-material";
import { spacing } from "@mui/system";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

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
  Accordion,
  AccordionDetails,
  AccordionSummary,
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

function PositionedTooltips() {
  return (
    <React.Fragment>
      <Grid container spacing={12}>
        <Grid item xs={12} lg={12}>
          <RoadmapPrimerNivel />
        </Grid>
        <Grid item xs={12} lg={12}>
          <RoadmapSegundoNivel />
        </Grid>
        <Grid item xs={12} lg={12}>
          <RoadmapTercerNivel />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function RoadmapPrimerNivel() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4">Modulo 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Completado!
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <Icon.School style={{ fontSize: "50px" }} color="white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Que es una variable?
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Proxima Leccion
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Ejercicios de Variables
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.GolfCourse color="warning" style={{ fontSize: "50px" }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Examen: Las Variables</TimelineContent>
          </TimelineItem>
        </Timeline>
      </AccordionDetails>
    </Accordion>
  );
}

function RoadmapSegundoNivel() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4">Modulo 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Calculadora en Lenguaje de Programacion
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>Formularios</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>El Login</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.GolfCourse color="warning" style={{ fontSize: "50px" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Examen de Formularios
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </AccordionDetails>
    </Accordion>
  );
}

function RoadmapTercerNivel() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4">Modulo 3</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Añadir Usuarios
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Variables Locales y Globales
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School style={{ fontSize: "50px" }} color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>Hooks</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.School color="primary" style={{ fontSize: "50px" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>
              Logica Avanzada
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Icon.Flag color="success" style={{ fontSize: "50px" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px" }}>Examen Final</TimelineContent>
          </TimelineItem>
        </Timeline>
      </AccordionDetails>
    </Accordion>
  );
}

function Roadmap() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      <Helmet title="Instructor Profile" />
      <Grid
        justifyContent="space-between"
        alignItems="center"
        container
        spacing={10}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Roadmap
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={goBack}
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
      <Divider my={6} />
      <PositionedTooltips />
    </React.Fragment>
  );
}

export default Roadmap;
