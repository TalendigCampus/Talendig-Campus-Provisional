import React from "react";
import styled from "styled-components/macro";
import BarChart from "./BarChart";
import Stats from "./Stats";
import FilterIntitution from "./FilterIntitution";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  TextField as MuiTextField,
  Grid,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
  CardContent,
  Link,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { spacing } from "@mui/system";
import PolarChart from "./PolarChart";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const contentDiv = styled.div``;

const contentsDivsAnalityts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  flex-direction: column;
`;

function DivAnalityths() {
  return (
    <React.Fragment>
      <Helmet title="Institutions Dashboard" />
      <Grid container spacing={6}>
        <Grid item xs={12} lg={11.9}>
          <PolarChart />
        </Grid>
        <Grid item xs={12} lg={11.9}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Intituciones registradas"
                amount="200"
                percentagetext="+26%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Instituciones conectadas"
                amount="50"
                percentagetext="+26%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Instituciones +5 talentos"
                amount="22"
                percentagetext="+26%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Instituciones valoración +8"
                amount="18"
                percentagetext="+26%"
                percentagecolor={green[500]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={11.9}>
          <BarChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function Content() {
  return (
    <contentDiv>
      <DivAnalityths />
    </contentDiv>
  );
}

function Chat() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Helmet title="Chat" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Instituciones
          </Typography>
          <Typography variant="subtitle1">
            {t("Welcome back")}, José Armando! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <FilterIntitution />
        </Grid>
      </Grid>
      <Divider my={3} />
      <Content />
    </React.Fragment>
  );
}

export default Chat;
