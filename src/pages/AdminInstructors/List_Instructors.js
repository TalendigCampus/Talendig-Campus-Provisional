import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import Actions from "./Actions";
import EnhancedTable from "./List";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function list_instructors() {
  return (
    <React.Fragment>
      <Helmet title="Invoices" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Lista de Instructores
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/home">
              Dashboard
            </Link>
            <Link component={NavLink} to="/admin/dashboard/home">
              Usuarios
            </Link>
            <Link component={NavLink} to="/admin/dashboard/users/instructors">
              Instructores
            </Link>
            <Typography gutterBottom display="inline">
              Lista
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default list_instructors;
