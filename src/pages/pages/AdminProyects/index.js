import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

import Actions from "./Actions";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import StatsList from "./StatsList";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Spacer = styled.div(spacing);

function Default() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {t("Welcome back")}, José Armando! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <DoughnutChart />
        </Grid>
      </Grid>

      <Spacer mb={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <StatsList />
        </Grid>
      </Grid>

      <Spacer mb={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <BarChart />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <LineChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Default;
