import React from "react";
import styled from "styled-components/macro";
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
import { bootcampProfile } from "../../../../../redux/slices/bootcampSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

export function MediaCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (id) => {
    dispatch(bootcampProfile({ id: Number(id) }));
    navigate("/institution/bootcamps/details");
  };
  console.log(props.id);
  return (
    <Card mb={6}>
      <CardActionArea>
        <CardMedia image={props.image} title={props.bootcampName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.bootcampName}
          </Typography>
          <Typography component="p">
            {props.description.split(" ").slice(0, 10).join(" ")}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartir
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleClose(props.id)}
        >
          Mas informacion
        </Button>
      </CardActions>
    </Card>
  );
}

export function MyMediaCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (id) => {
    dispatch(bootcampProfile({ id: Number(id) }));
    navigate("/institution/bootcamps/details");
  };
  console.log(props.id);
  return (
    <Card mb={6}>
      <CardActionArea>
        <CardMedia image={props.image} title={props.bootcampName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.bootcampName}
          </Typography>
          <Typography component="p">
            {props.description.split(" ").slice(0, 10).join(" ")}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleClose(props.id)}
        >
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
}
