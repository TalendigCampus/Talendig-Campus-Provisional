import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import {
  Grid,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { green, red } from "@mui/material/colors";

import Actions from "./Actions";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Stats from "./Stats";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Recruiters() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Recruiters Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Reclutadores
          </Typography>
          <Typography variant="subtitle1">
            {t("Welcome back")}, José Armando! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
          <MuiBreadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/home">
              Panel
            </Link>
            <Typography>Usuarios</Typography>
            <Typography>Reclutadores</Typography>
          </MuiBreadcrumbs>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={11.9}>
          <PieChart />
        </Grid>
      </Grid>

      <Grid container spacing={6} my={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl>
          <Stats
            title="Cazatalentos Registrados"
            amount="200"
            percentagetext="+14%"
            percentagecolor={green[500]}
            icon="Person"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl>
          <Stats
            title="Cazatalentos Conectados"
            amount="50"
            percentagetext="+12%"
            percentagecolor={green[500]}
            icon="SignalWifi4Bar"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl>
          <Stats
            title="Cazatalentos +10 Talentos"
            amount="18"
            percentagetext="+18%"
            percentagecolor={green[500]}
            icon="CheckCircle"
          />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={11.9}>
          <LineChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Recruiters;
