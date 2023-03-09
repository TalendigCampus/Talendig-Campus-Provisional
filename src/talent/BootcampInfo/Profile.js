import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  Grid as MuiGrid,
  Link,
  Typography as MuiTypography,
  CardActionArea,
  CardActions,
  CardMedia as MuiCardMedia,
} from "@mui/material";

import { spacing } from "@mui/system";

import BootcampInfo from "./Details";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const Typography = styled(MuiTypography)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

function MediaCard(props) {
  return (
    <Card mb={6}>
      <CardMedia image="/static/img/unsplash/unsplash-1.jpg" title="jlsakjd" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          DOP$3500
        </Typography>
        <Typography component="p">props.bootcampDescription</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
function Profile() {
  return (
    <React.Fragment>
      <Helmet title="Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Profile
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>Profile</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <BootcampInfo />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Profile;
