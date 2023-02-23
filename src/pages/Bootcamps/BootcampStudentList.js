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

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const columns = [
  { field: "id", headerName: "#", width: 150, editable: false },
  {
    field: "talent",
    headerName: "Estudiante",
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

function DataGridDemo(bootcampStudents) {
  const rows = bootcampStudents.talents.map((talent, index) => ({
    id: ++index,
    talent,
  }));
  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Typography variant="h6" gutterBottom>
          Estudiantes del bootcamp
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

function DataGridPage(bootcampStudents) {
  return (
    <React.Fragment>
      <Helmet title="BootcampStudentList Grid" />
      <DataGridDemo {...bootcampStudents} />
    </React.Fragment>
  );
}

export default DataGridPage;
