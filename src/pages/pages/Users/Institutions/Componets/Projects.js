import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { useDispatch } from "react-redux";
import { bootcampProfile } from "../../../../../redux/slices/bootcampSlice";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)``;

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Typography = styled(MuiTypography)(spacing);

const Project = ({ image, title, specialty }) => {
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

export default Project;
