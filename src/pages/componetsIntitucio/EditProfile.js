import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Rows from "./InfoDataInstitution";
import { IdDataTable } from "./componets/IdDataTableList";

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
  width: 150px;
  height: 150px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

function Public({ dataRows }) {
  console.log(dataRows);
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Public info
        </Typography>
        <CenteredContent>
          <BigAvatar alt="Remy Sharp" src={dataRows.institutionAvatar} />
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
              {dataRows.lastConection}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {dataRows.dateCreateAccount}
            </Typography>
          </label>
        </CenteredContent>
      </CardContent>
    </Card>
  );
}

function Private({ dataRows }) {
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
    handleSaveChanges(IdDataTable.id);
    setSelected(newSelected);
    navigate(pathToGo);
  };
  const handleChangeCancel = (pathToGo) => {
    navigate(pathToGo);
  };

  const handleSaveChanges = (index) => {
    const institution = document.getElementById("institution").value;
    const date = document.getElementById("date").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const institutionEmail = document.getElementById("institutionEmail").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    return (
      (dataRows.institution = institution),
      (dataRows.date = date),
      (dataRows.address = address),
      (dataRows.phoneNumber = phoneNumber),
      (dataRows.institutionEmail = institutionEmail),
      (dataRows.newPassword = newPassword),
      (dataRows.confirmPassword = confirmPassword)
    );
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Private info
        </Typography>
        <TextField
          id="institution"
          label="Name"
          defaultValue={dataRows.institution}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="date"
          label="Fecha"
          defaultValue={dataRows.date}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="address"
          label="Direccion"
          defaultValue={dataRows.address}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="phoneNumber"
          label="Telefono"
          defaultValue={dataRows.phoneNumber}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="institutionEmail"
          label="Correo"
          variant="outlined"
          type="email"
          defaultValue={dataRows.institutionEmail}
          fullWidth
          my={2}
        />

        <TextField
          id="newPassword"
          label="Ingrese Clave Nueva"
          type="password"
          defaultValue={dataRows.newPassword}
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="confirmPassword"
          label="Repita Clave Nueva"
          type="password"
          defaultValue={dataRows.confirmPassword}
          variant="outlined"
          fullWidth
          my={2}
        />

        <Button
          variant="contained"
          color="success"
          marginRight="10px"
          mt={3}
          onClick={(event) =>
            handleChange(
              "/admin/dashboard/users/institutions/info",
              dataRows.id
            )
          }
        >
          Guardar cambios
        </Button>
        <Button
          variant="contained"
          color="error"
          mt={3}
          onClick={(event) =>
            handleChangeCancel("/admin/dashboard/users/institutions/info")
          }
        >
          Cancelar
        </Button>
      </CardContent>
    </Card>
  );
}

function EditProfile() {
  const IdTable = IdDataTable.id;
  const dataRows = Rows[IdTable];

  return (
    <React.Fragment>
      <Helmet title="Settings" />

      <Typography variant="h3" gutterBottom display="inline">
        Mi Perfil
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Usuario
        </Link>
        <Link component={NavLink} to="/">
          Instituciones
        </Link>
        <Typography>Mi Perfil</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid item xs={11.9}>
        <Public dataRows={dataRows} />
      </Grid>
      <Grid item xs={11.9}>
        <Private dataRows={dataRows} />
      </Grid>
    </React.Fragment>
  );
}

export default EditProfile;
