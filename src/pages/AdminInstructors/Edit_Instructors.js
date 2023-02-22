import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TableData from "./InfoDataInstructors";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  FormControl as MuiFormControl,
  Grid,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";
import { spacing } from "@mui/system";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(Avatar)`
  width: 300px;
  height: 300px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

let IdDataTable = {
  id: 0,
  tableEliminate: {},
};

function Public({ dataTableData }) {
  console.log(dataTableData);
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Avatar
        </Typography>
        <CenteredContent>
          <BigAvatar alt="Remy Sharp" src={dataTableData.instructorsAvatar} />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" color="primary" component="span">
              <CloudUpload mr={2} /> Subir Foto
            </Button>
            <Typography variant="caption" display="block" gutterBottom>
              {dataTableData.lastConection}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {dataTableData.dateCreateAccount}
            </Typography>
          </label>
        </CenteredContent>
      </CardContent>
    </Card>
  );
}

function Private({ dataTableData }) {
  const [selected, setSelected] = React.useState([]);
  const navigate = useNavigate();

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
    navigate(pathToGo, { replace: true });
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Datos Personales
        </Typography>
        <TextField
          id="name"
          label="Name"
          defaultValue={dataTableData.instructors}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="date"
          label="Fecha"
          defaultValue={dataTableData.birth}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="idCard"
          label="Cedula"
          defaultValue={dataTableData.idCard}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="instructorsEmail"
          label="Correo"
          variant="outlined"
          type="email"
          defaultValue={dataTableData.instructorsEmail}
          fullWidth
          my={2}
        />

        <TextField
          id="date"
          label="Fecha"
          defaultValue={dataTableData.birth}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="date"
          label="Fecha"
          defaultValue={dataTableData.birth}
          variant="outlined"
          fullWidth
          my={2}
        />

        <Button
          variant="contained"
          color="primary"
          mt={3}
          onClick={(event) =>
            handleChange(
              "/admin/dashboard/users/instructors/list_instructors",
              dataTableData.id
            )
          }
        >
          Guardar cambios
        </Button>
      </CardContent>
    </Card>
  );
}

function Edit_Instructors() {
  const IdTable = IdDataTable.id;
  const dataTableData = TableData[IdTable];

  return (
    <React.Fragment>
      <Helmet title="Settings" />

      <Typography variant="h3" gutterBottom display="inline">
        Mi Perfil
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/admin/dashboard/home">
          Dashboard
        </Link>
        <Link component={NavLink} to="/admin/dashboard/home">
          Usuarios
        </Link>
        <Link component={NavLink} to="/admin/dashboard/users/instructors">
          Instructores
        </Link>
        <Link
          component={NavLink}
          to="/admin/dashboard/users/instructors/list_instructors"
        >
          Lista
        </Link>
        <Typography>Perfil de Instructor</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Public dataTableData={dataTableData} />
        </Grid>
        <Grid item xs={8}>
          <Private dataTableData={dataTableData} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Edit_Instructors;
