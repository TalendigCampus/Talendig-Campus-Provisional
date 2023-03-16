import React from "react";
import styled from "styled-components/macro";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import {
  selectBootcamps,
  bootcampProfile,
} from "../../../../../redux/slices/bootcampSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)``;

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

const Project = ({ image, title, description, chip, price, id, specialty }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (id) => {
    dispatch(bootcampProfile({ id: Number(id) }));
    navigate("/institution/bootcamps/details");
  };
  return (
    <Card>
      {image ? <CardMedia image={image} title="Contemplative Reptile" /> : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {specialty ? (
          <Typography gutterBottom variant="h5" component="h2">
            {specialty}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

function Projects() {
  const rows = useSelector(selectBootcamps);
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        {rows.map((row) => {
          console.log(row.bootcampName);
          return (
            <Grid item xs={12} lg={6} xl={3}>
              <Project
                title={row.bootcampName}
                description={row.description}
                chip={
                  <Chip
                    label={row.status}
                    color={row.status === "Disponible" ? "success" : "error"}
                  />
                }
                image={row.image}
                price={row.price}
                id={row.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default Project;
