import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { StarBorder as StarIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";
import CardDetails from "../Componets/CardDetails";

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)};
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
`;

function Pricing() {
  return (
    <React.Fragment>
      <Header>
        <Typography variant="h3" gutterBottom align="center">
          Instructores destacados
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="center">
          Guia de manera correcta a tu equipo de trabajo.
        </Typography>
      </Header>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={10}>
          <Grid container spacing={6} alignItems="flex-end">
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardDetails />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={8}>
                <CardDetails />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardDetails />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Pricing;
