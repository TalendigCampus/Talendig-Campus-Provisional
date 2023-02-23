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
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { spacing } from "@mui/system";

import { useSelector } from "react-redux";
import { currentRecruiter } from "../../../redux/slices/recruiterSlice";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const columns = [
  { field: "id", headerName: "#", width: 150, editable: false },
  {
    field: "technology",
    headerName: "Tecnologia",
    width: 200,
    editable: false,
    flex: 1,
  },
];

// const rows = [
//   { id: 1, tecnology: "Angular" },
//   { id: 2, tecnology: "Javascript" },
//   { id: 3, tecnology: "React" },
// ];

function DataGridDemo() {
  const recruiter = useSelector(currentRecruiter);
  const rows = recruiter.technology.split(",").map((technology, index) => ({
    id: ++index,
    technology,
  }));
  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Typography variant="h6" gutterBottom>
          Tecnologias de Interes
        </Typography>
      </CardContent>
      <Paper>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            rowsPerPageOptions={[5, 10, 25]}
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </Paper>
    </Card>
  );
}

function DataGridPage() {
  return (
    <React.Fragment>
      <Helmet title="RecruiterTecnologyList Grid" />
      <DataGridDemo />
    </React.Fragment>
  );
}

export default DataGridPage;
