import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import BootcampForm from "./Form";
import bootcampData from "./bootcamp.json";

import {
  Grid,
  Link,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Breadcrumbs as MuiBreadcrumbs,
} from "@mui/material";
import { spacing } from "@mui/system";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Spacer = styled.div(spacing);

function BootcampProfile() {
  const { t } = useTranslation();

  const { id } = useParams();

  const bootcampInfo = bootcampData.find((bootcamp) => (bootcamp.id = id));

  return (
    <React.Fragment>
      <Helmet title="Bootcamps" />
      {/* <Grid justifyContent="space-between" container spacing={6}>
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
      </Grid> */}
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            {bootcampInfo.bootcampName}
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/bootcamps">
              Bootcamps
            </Link>
            <Link component={NavLink} to="/admin/dashboard/bootcamps/list">
              Lista de bootcamps
            </Link>
            <Typography>{bootcampInfo.bootcampName}</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <BootcampForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BootcampProfile;
