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
import StatsList from "./StatsList";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Spacer = styled.div(spacing);

function BootcampsStatistics() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Bootcamps" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Bootcamps
          </Typography>
          <Typography variant="subtitle1">
            {t("Welcome back")}, José Armando! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions path={"/admin/dashboard/bootcamps/list"} btnName={"Lista"} />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <StatsList />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <LineChart />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <BarChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BootcampsStatistics;
