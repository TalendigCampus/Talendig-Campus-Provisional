import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FilterIntitution from "./FilterIntitution";

import {
  Link,
  Grid,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Nombre",
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "Correo",
    width: 200,
    editable: true,
  },
  {
    field: "profile",
    headerName: "perfil",
    width: 200,
    editable: true,
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 200,
    editable: true,
  },
  {
    field: "direction",
    headerName: "Direccion",
    width: 200,
    editable: true,
  },
  {
    field: "numberPhone",
    headerName: "Telefono",
    type: "number",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Claro Dominicana",
    email: "claro@gmail.com	",
    profile: "Institución",
    date: "2022-12-5",
    direction: "Av. Luperon ezquina 27 de Febrero #1023",
    numberPhone: 8290983454,
  },
  {
    id: 2,
    name: "GBH",
    email: "gbh@gmail.com	",
    profile: "Institución",
    date: "2022-12-5	",
    direction: "Av. Lincoln ezquina Sarasota #200	",
    numberPhone: 8292342343,
  },
  {
    id: 3,
    name: "Banco Reservas",
    email: "loyola@gmail.com	",
    profile: "Institución",
    date: "2022-12-5	",
    direction: "P. Ángel Arias, San Cristóbal	",
    numberPhone: 8293244645,
  },
  {
    id: 4,
    name: "Instituto Tecnologico de Las Americas",
    email: "banreservas@gmail.com	",
    profile: "Institución",
    date: "2022-01-12	",
    direction: "Av. Winstorn Churchill #324	",
    numberPhone: 8293234545,
  },
  {
    id: 5,
    name: "Instituto Politécnico Loyola",
    email: "itla@gmail.com	",
    profile: "Institución	",
    date: "2022-12-5	",
    direction: "Las Américas, Km. 27, La Caleta, Calle 27, 11606	",
    numberPhone: 8292342343,
  },
];

function DataGridDemo() {
  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Typography variant="h6" gutterBottom>
          Lista
        </Typography>
        <Typography variant="body2" gutterBottom>
          A fast and extendable data table and data grid for React, made by
          Material-UI.{" "}
          <Link
            href="https://material-ui.com/components/data-grid/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Official docs
          </Link>
          .
        </Typography>
      </CardContent>
      <Paper>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rowsPerPageOptions={[5, 10, 25]}
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </Paper>
    </Card>
  );
}

function DataGridPage() {
  return (
    <React.Fragment>
      <Helmet title="Data Grid" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Panel
            </Link>
            <Link component={NavLink} to="/">
              Usuarios
            </Link>
            <Link component={NavLink} to="/">
              Instituciones
            </Link>
            <Typography>Lista de instituciones</Typography>
          </Breadcrumbs>
          <Typography variant="h3" gutterBottom display="inline">
            Lista
          </Typography>
        </Grid>
        <Grid item>
          <FilterIntitution />
        </Grid>
      </Grid>

      <Divider my={6} />

      <DataGridDemo />
    </React.Fragment>
  );
}

export default DataGridPage;
