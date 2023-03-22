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
import { MyBootcamps } from "../../Componets/CardContent";
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Divider = styled(MuiDivider)(spacing);

function MyBootcamp() {
  return (
    <React.Fragment>
      <Helmet title="Bootcamp Profile" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Mis Bootcamps
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/institution/bootcamps/">
              Bootcamps
            </Link>
            <Typography>Mis Bootcamps</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Divider my={6} />

      <MyBootcamps InPossession={true} />
    </React.Fragment>
  );
}

export default MyBootcamp;
