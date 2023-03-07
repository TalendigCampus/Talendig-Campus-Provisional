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

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

function MediaCard(props) {
  return (
    <Card mb={6}>
      <CardActionArea>
        <CardMedia image={props.bootcampImage} title={props.bootcampName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.bootcampName}
          </Typography>
          <Typography component="p">{props.bootcampDescription}</Typography>
        </CardContent>
      </CardActionArea>
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

export default MediaCard;
