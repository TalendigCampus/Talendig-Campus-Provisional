import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Spacer = styled.div(spacing);
const Centered = styled.div`
  text-align: center;
`;
const ProductsChip = styled(Chip)`
  height: 20px;
  padding: 4px 0;
  margin-left: 8px;
  font-size: 90%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
`;

const columns = [
  { field: "id", headerName: "#", width: 150, editable: false },
  {
    field: "tecno",
    headerName: "Tecnología",
    width: 200,
    editable: false,
    flex: 1,
  },
];

function DataGridDemo({ tecnologiesToSelect }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tecnologías
        </Typography>

        <Spacer mb={4} />

        <Centered>
          {tecnologiesToSelect.map((tecnology) => {
            let colors = [
              "success",
              "error",
              "primary",
              "success",
              "error",
              "primary",
              "success",
              "error",
              "primary",
            ];
            return (
              <ProductsChip
                size="small"
                color="success"
                value={Number(tecnology.id)}
                label={tecnology.name}
                mr={3}
              />
            );
          })}
        </Centered>
      </CardContent>
    </Card>
  );
}

export default DataGridDemo;
