import React from "react";
import styled from "styled-components/macro";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Paper as MuiPaper,
  Divider as MuiDivider,
  FormControl as MuiFormControl,
  Grid,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";
import { spacing } from "@mui/system";
import { DatePicker } from "@mui/lab";
import JsonInfo from "./info.json";

import Technologies from "./TalentTecnologyList";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Divider = styled(MuiDivider)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

const rows = JsonInfo;

function Public(props) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(props.birth);
  const [num, setNum] = React.useState(props.phoneNumber);

  const handleNumChange = (event) => {
    const limit = 10;
    setNum(event.target.value.slice(0, limit));
  };
  const handdlePath = (pathToGo) => {
    navigate(pathToGo, { replace: true });
  };
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Informacion
        </Typography>

        <Grid container spacing={6}>
          <Grid item md={8}>
            <TextField
              id="name"
              label="Nombre"
              disabled="true"
              defaultValue={props.talentName}
              variant="outlined"
              fullWidth
              my={2}
            />
            <TextField
              id="Lastname"
              label="Apellido"
              disabled="true"
              defaultValue={props.talentLastName}
              variant="outlined"
              fullWidth
              my={2}
            />

            <FormControl fullWidth my={2} variant="outlined">
              <TextField
                label="Biografia"
                id="biography"
                disabled="true"
                multiline={true}
                rows={3}
                maxpRows={4}
                variant="outlined"
                defaultValue={props.biography}
              />
            </FormControl>
            <Paper mt={3}>
              <DatePicker
                label="Fecha de nacimiento"
                disabled="true"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Paper>
            <Grid container spacing={4}>
              <Grid item md={4}>
                <TextField
                  id="id-card"
                  label="Identificacion"
                  disabled="true"
                  variant="outlined"
                  defaultValue={props.idCard}
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="Phone"
                  label="Telefono"
                  variant="outlined"
                  disabled="true"
                  type="number"
                  value={num}
                  onChange={handleNumChange}
                  fullWidth
                  my={2}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item md={6}>
                <TextField
                  id="city"
                  label="Ciudad"
                  variant="outlined"
                  disabled="true"
                  defaultValue={props.city}
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="neighborhood"
                  label="Sector"
                  variant="outlined"
                  disabled="true"
                  defaultValue={props.neighborhood}
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item md={2}>
                <TextField
                  id="Street"
                  label="Calle"
                  variant="outlined"
                  disabled="true"
                  defaultValue={props.Street}
                  fullWidth
                  my={2}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Contacto de Emergencia
            </Typography>
            <Grid container spacing={6}>
              <Grid item md={6}>
                <TextField
                  fullWidth
                  my={2}
                  id="contactEmergencyAddress"
                  label="Direccion"
                  variant="outlined"
                  disabled="true"
                  defaultValue={`${props.city}, ${props.neighborhood}, ${props.Street}`}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="contactEmergencyName"
                  label="Nombre de contacto"
                  disabled="true"
                  variant="outlined"
                  defaultValue={props.contactEmergencyName}
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item md={2}>
                <TextField
                  id="contactEmergencyNumber"
                  label="Numero telefonico"
                  disabled="true"
                  variant="outlined"
                  value={num}
                  onChange={handleNumChange}
                  type="number"
                  fullWidth
                  my={2}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <CenteredContent>
              <BigAvatar
                alt="Remy Sharp"
                src="/static/img/avatars/avatar-1.jpg"
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Typography variant="caption" display="block" gutterBottom>
                  {props.talentEmail}
                </Typography>
              </label>
            </CenteredContent>
            <Technologies />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" mr={3}>
          Curriculum
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() =>
            handdlePath(`/admin/dashboard/users/talents/edit/${props.talentId}`)
          }
          mr={3}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          color="info"
          mr={3}
          onClick={() => handdlePath(`/admin/dashboard/users/talents/list`)}
        >
          Cancelar
        </Button>
      </CardContent>
    </Card>
  );
}

function Settings() {
  let { talentId } = useParams();
  console.log(talentId);
  console.log(rows);
  const result = rows.find((row) => row.talentId === Number(talentId));
  console.log(result);

  return (
    <React.Fragment>
      <Helmet title="Settings" />

      <Typography variant="h3" gutterBottom display="inline">
        Settings
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>Settings</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Public {...result} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Settings;
