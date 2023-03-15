import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  Button as MuiButton,
} from "@mui/material";

import { spacing } from "@mui/system";

import { useDispatch } from "react-redux";
import { bootcampProfile } from "../../../../../redux/slices/bootcampSlice";

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

function MediaCard({ bootcamp }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handdleNavigate = (id, pathToGo) => {
    dispatch(bootcampProfile({ id: id }));
    navigate(pathToGo);
  };
  return (
    <Card mb={6}>
      <CardActionArea
        onClick={() => {
          handdleNavigate(bootcamp.id, "/Talents/bootcamp-info");
        }}
      >
        <CardMedia image={bootcamp.image} title={bootcamp.bootcampName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {bootcamp.bootcampName}
          </Typography>
          <Typography component="p">{bootcamp.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            handdleNavigate(bootcamp.id, "/Talents/bootcamp-info");
          }}
        >
          Mas Información
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
