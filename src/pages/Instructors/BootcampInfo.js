import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Alert as MuiAlert,
  CardActionArea,
  CardActions,
  CardContent,
  FormControl as MuiFormControl,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  Divider as MuiDivider,
  TextField as MuiTextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { Pagination as MuiPagination } from "@mui/material";
import bootcampSlice from "../../redux/slices/bootcampSlice";
import bootcampsDispo from "./bootcampsDispo.json";
import calendarStyle from "./Calendar.style";
import demoEvents from "./demo-events.json";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const Divider = styled(MuiDivider)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Spacer = styled.div(spacing);

const Pagination = styled(MuiPagination)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Alert = styled(MuiAlert)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const FullCalendarWrapper = styled.div`
  ${calendarStyle}
`;

let bootcamps = bootcampsDispo[1].bootcampId;

function SimpleCard() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Status del Bootcamp
        </Typography>
        <Alert variant="outlined" severity="success">
          Este Bootcamp se esta impartiendo en el momento
        </Alert>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Lista de Talentos</Button>
        <Button size="small">Ver otros bootcamps</Button>
      </CardActions>
    </Card>
  );
}

function BasicPagination() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Basic pagination
        </Typography>
        <Typography variant="body2" gutterBottom>
          The Pagination component enables the user to select a specific page
          from a range of pages.
        </Typography>

        <Spacer mb={6} />

        <Pagination mb={2} count={10} color="primary" />
      </CardContent>
    </Card>
  );
}

function MediaCard({ bootcamps }) {
  return (
    <Card mb={6}>
      <CardMedia
        image={bootcampsDispo[0].bootcampImage}
        title="Imagen del Bootcamp"
      />
      <CardContent>
        <Typography variant="h1" component="h2">
          Introduccion
        </Typography>
        <Typography gutterBottom variant="h8" component="p">
          Descripcion del Bootcamp <br />
        </Typography>
        <Typography variant="h5" component="h3">
          {" "}
          <br />
          En este bootcamp aprenderas todo acerca del stack MERN! Que es la
          abreviacion de las tecnologias MongoDB, Express, React y Node!
        </Typography>
      </CardContent>
      <br />
    </Card>
  );
}

function Modulos({ semanas }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{semanas}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl fullWidth my={2} variant="outlined">
          <TextField
            label="Titulo"
            id="title"
            multiline={true}
            rows={1}
            maxRows={1}
            variant="outlined"
            defaultValue="Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue."
          />
        </FormControl>
        <FormControl fullWidth my={2} variant="outlined">
          <TextField
            label="Descripcion"
            id="Descripcion"
            multiline={true}
            rows={0}
            maxRows={0}
            variant="outlined"
            defaultValue="Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue."
          />
        </FormControl>
        <Button variant="contained" color="primary">
          Guardar Cambios
        </Button>

        <Spacer mb={6} />

        <Divider m={6} />

        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" color="primary" component="span">
            <CloudUpload mr={2} /> Subir Actividad
          </Button>

          <Typography variant="caption" display="block" gutterBottom>
            Para mejores resultados mande imagenes con un formato de 128 x 128
            en formato jpg.
          </Typography>
        </label>
      </AccordionDetails>
    </Accordion>
  );
}

function SimpleAccordion(semanas) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Modulos de Clase
        </Typography>
        <Typography variant="body2" gutterBottom>
          Estas son las lecciones que se deben tomar por semana.
        </Typography>
        <div>
          <Modulos semanas={"Semana 1"} />
          <Modulos semanas={"Semana 2"} />
          <Modulos semanas={"Semana 3"} />
          <Modulos semanas={"Semana 4"} />
          <Modulos semanas={"Semana 5"} />
          <Modulos semanas={"Semana 6"} />
          <Modulos semanas={"Semana 7"} />
        </div>
      </CardContent>
    </Card>
  );
}

function MediaCard2({ bootcamps }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h3" component="h2">
          Que vas a aprender?
        </Typography>
        <Typography gutterBottom variant="h8" component="p">
          Descripcion del Bootcamp <br />
        </Typography>
        <FormControl fullWidth my={2} variant="outlined">
          <TextField
            label="Descripcion"
            id="Descripcion"
            multiline={true}
            rows={0}
            maxRows={0}
            variant="outlined"
            defaultValue="Construye 16 proyectos de desarrollo web para tu portfolio, listos
          para optar a trabajos de desarrollador junior. Aprende las últimas
          tecnologías, incluyendo Javascript, React y Node. Después del curso
          serás capaz de construir CUALQUIER sitio web que desees. Construir
          sitios web de pleno derecho y aplicaciones web para su puesta en
          marcha o negocio. Trabajar como desarrollador web freelance. Dominar
          el desarrollo frontend con React Dominar el desarrollo backend con
          Node Aprende las mejores prácticas de los desarrolladores
          profesionales."
          />
        </FormControl>
        <Button variant="contained" color="primary">
          Guardar Cambios
        </Button>
        <Spacer mb={6} />
        <Divider mb={6} />
        <Button variant="contained" color="primary" component="span">
          <CloudUpload mr={2} /> Subir Recurso
        </Button>
      </CardContent>
      <CardContent></CardContent>
      <br />
    </Card>
  );
}

function EmptyCard() {
  return (
    <Card mb={6}>
      <CardContent p={6}>
        <FullCalendarWrapper>
          <FullCalendar
            initialView="dayGridMonth"
            initialDate="2023-03-12"
            plugins={[dayGridPlugin, interactionPlugin]}
            events={demoEvents}
            editable={true}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridDay,dayGridWeek,dayGridMonth",
            }}
          />
        </FullCalendarWrapper>
      </CardContent>
    </Card>
  );
}

function Calendar() {
  return (
    <React.Fragment>
      <Helmet title="Calendar" />
      <Typography variant="h3" gutterBottom display="inline">
        Calendar
      </Typography>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function BootcampInstructorsInfo({ semanas }) {
  return (
    <React.Fragment>
      <Helmet title="Cards" />
      <Typography variant="h3" gutterBottom display="inline">
        MERN Stack Bootcamp
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link
          component={NavLink}
          to="/admin/dashboard/users/instructors/instructorBootcamps"
        >
          Bootcamps
        </Link>
        <Typography>Info</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <MediaCard />
          <Divider my={6} />
          <MediaCard2 />
          <Spacer mb={6} />
          <SimpleAccordion />
          <Pagination mb={2} count={4} color="primary" />
        </Grid>
        <Grid item xs={12} md={4}>
          <SimpleCard />
          <Calendar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BootcampInstructorsInfo;