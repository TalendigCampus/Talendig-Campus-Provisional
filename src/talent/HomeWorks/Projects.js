import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Pagination as MuiPagination,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import HomeWorks from "./homeWorks.json";

import { STATSQUANTITYBYPAGINATION } from "../../common/constants/data";

const Card = styled(MuiCard)(spacing);
const Pagination = styled(MuiPagination)(spacing);

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

const Project = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.homeWorkName}
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
};

function Projects() {
  const [page, setPage] = useState(1);
  const pageQuantity = Math.ceil(HomeWorks.length / STATSQUANTITYBYPAGINATION);
  const dataToShow = HomeWorks.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <React.Fragment>
      <Helmet title="Projects" />

      <Typography variant="h3" gutterBottom display="inline">
        Asignaciones
      </Typography>

      <Divider my={6} />

      <Grid container spacing={6}>
        {dataToShow.map((homeWork) => (
          <Grid item xs={12} sm={6} lg={4} key={homeWork.id}>
            <Project {...homeWork} />
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
