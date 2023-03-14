import React, { useState } from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Button,
  Card as MuiCard,
  CardActions,
  CardActionArea,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Pagination as MuiPagination,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import projectsInfo from "../../../adminPages/AdminProyects/info.json";

import { STATSQUANTITYBYPAGINATION } from "../../../../../common/constants/data";

const Card = styled(MuiCard)(spacing);
const Pagination = styled(MuiPagination)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

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

const Project = (props) => {
  const navigate = useNavigate();
  const handdleAction = (pathToGo) => {
    navigate(pathToGo);
  };
  return (
    <Card>
      <CardActionArea>
        <CardContent
          onClick={() => {
            handdleAction("/talent/HomeWorkDetails");
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {props.projectName}
          </Typography>

          {props.status === "Pendiente" ? (
            <Chip label="Pendiente" color="warning" />
          ) : (
            <Chip label="Completado" color="success" />
          )}

          <Typography mb={4} color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            handdleAction("/talent/ProjectDetails");
          }}
        >
          Más Información
        </Button>
      </CardActions>
    </Card>
  );
};

function Projects({ id }) {
  const projects = projectsInfo.filter(
    (homeWork) => homeWork.bootcampId === id
  );

  const [page, setPage] = useState(1);
  const pageQuantity = Math.ceil(projects.length / STATSQUANTITYBYPAGINATION);
  const dataToShow = projects.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <React.Fragment>
      <Helmet title="Projects" />

      <Typography variant="h4" gutterBottom display="inline" mt={6}>
        Proyectos
      </Typography>

      <Grid container spacing={6} mt={4}>
        {dataToShow.map((project) => (
          <Grid item xs={12} sm={6} lg={3} key={project.projectId}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        mb={2}
        count={pageQuantity}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
        page={page}
        onChange={handleChange}
      />
    </React.Fragment>
  );
}

export default Projects;
