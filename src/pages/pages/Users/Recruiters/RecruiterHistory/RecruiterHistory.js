import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { selectTalents } from "../../../../../redux/slices/talentSlice";
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

const Project = ({
  image,
  title,
  description,
  chip,
  talentImages,
  pathToGo,
}) => {
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
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
          {talentImages.map((src) => (
            <Avatar alt="Avatar" src={src} />
          ))}
        </AvatarGroup>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handlePageChange(pathToGo)}
        >
          Ver Lista
        </Button>
      </CardActions>
    </Card>
  );
};

function Projects() {
  const recruiterTalents = useSelector(selectTalents);
  return (
    <React.Fragment>
      <Helmet title="Projects" />

      <Typography variant="h3" gutterBottom display="inline">
        Historial
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/recruiters/home">
          Inicio
        </Link>
        <Typography>Historial</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            description="Lista de Talentos que fueron Reclutados y que cuentan con las actitudes y aptitudes valoradas para la empresa."
            chip={<Chip label="Reclutados" color="success" />}
            image="/static/img/miscellaneous/recruiterHired.jpg"
            talentImages={recruiterTalents
              .filter(
                (talent) =>
                  talent?.recruiterProcess?.decision?.selection === "contratado"
              )
              .map((talent) => talent.photoUrl)}
            pathToGo="/recruiters/history/hired"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            description="Lista de talentos que deben mejorar algunos aspectos de sus habilidades y serán grandes candidatos."
            chip={<Chip label="A mejorar" color="error" />}
            image="/static/img/miscellaneous/recruiterDeclined.jpg"
            talentImages={recruiterTalents
              .filter(
                (talent) =>
                  talent?.recruiterProcess?.decision?.selection ===
                  "debeMejorar"
              )
              .map((talent) => talent.photoUrl)}
            pathToGo="/recruiters/history/improvement"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Projects;
