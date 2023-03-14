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
import { id } from "date-fns/locale";

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

function MediaCard(props) {
  const [selected, setSelected] = React.useState([]);
  const navigate = useNavigate();

  let IdDataTable = {
    id: 0,
    tableEliminate: {},
  };

  const handleChange = (pathToGo, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      IdDataTable.id = newSelected[0] - 1;
      console.log(IdDataTable.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
    navigate(pathToGo);
  };
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
        <Button
          size="small"
          color="primary"
          onClick={(event) =>
            handleChange(
              "/admin/dashboard/users/instructors/bootcampInfo",
              props.id
            )
          }
        >
          Mas información
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
