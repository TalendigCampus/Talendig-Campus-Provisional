import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";
import { AvatarGroup as MuiAvatarGroup } from "@mui/material";
import { spacing } from "@mui/system";
import Actions from "./Actions";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const AvatarGroup = styled(MuiAvatarGroup)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Project = ({ image, title, description, chip }) => {
  const navigate = useNavigate();

  const handleClose = (id) => {
    //   dispatch(bootcampProfile({ id: Number(id) }));
    navigate("/institution/students/view-requests-details");
  };
  return (
    <Card>
      {image ? <CardMedia image={image} title="Contemplative Reptile" /> : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        {chip}

        <Typography mb={4} color="textSecondary" component="p">
          {description}
        </Typography>

        <AvatarGroup max={3}>
          <Avatar alt="Avatar" src="/static/img/avatars/avatar-1.jpg" />
          <Avatar alt="Avatar" src="/static/img/avatars/avatar-2.jpg" />
          <Avatar alt="Avatar" src="/static/img/avatars/avatar-3.jpg" />
        </AvatarGroup>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClose}>
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

function ViewRequests() {
  return (
    <React.Fragment>
      <Helmet title="Projects" />

      <Typography variant="h3" gutterBottom display="inline">
        Mis Solicitudes
      </Typography>

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Talentos de la institucion
            </Link>
            <Link component={NavLink} to="/">
              Pasantia
            </Link>
            <Typography>Mis solicitudes</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Desarrollo web MERN"
            description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
            chip={<Chip label="En progreso" color="warning" />}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ViewRequests;
