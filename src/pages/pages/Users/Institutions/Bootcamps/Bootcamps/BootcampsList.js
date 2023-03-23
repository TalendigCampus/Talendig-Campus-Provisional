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
import { BootcapmsDispo } from "../Componets/CardContent";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function BootcampsList() {
  return (
    <React.Fragment>
      <Helmet title="Bootcamps" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Lista de Bootcamps
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/bootcamps">
              Bootcamps
            </Link>
            <Typography>Lista de Bootcamps</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Divider my={6} />

      <BootcapmsDispo rank={false} />
    </React.Fragment>
  );
}

export default BootcampsList;
