import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
import RecruiterTecnologyList from "./RecruiterTecnologyList";
import RecruitersProfileForm from "./RecruitersProfileForm";

import { useSelector } from "react-redux";
import { currentRecruiter } from "../../../../redux/slices/recruiterSlice";

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

function Public() {
  let recruiter = useSelector(currentRecruiter);
  if (!recruiter) {
    recruiter = {
      firstName: "Alexander",
      lastName: "Santos",
      avatar: "A",
      email: "alex@gmail.com",
      phoneNumber: "829-098-0987",
      identificationCard: "012-0987987-9",
      company: "Banco Popular",
      birth: "1980-05-22",
      technology: [2, 1, 3],
      affiliationDate: "05-12-2022",
      lastConnectionDate: "05-12-2022 3:00 PM",
      address: {
        street: "Nueva Vista",
        numHouseOrApartment: "#99",
        neighborhood: "Los Jardinez",
        city: "Santo Domingo",
      },
      password: "mypassword123",
      confirmPassword: "mypassword123",
      photoUrl: "/static/img/recruiters/recruiter-1.jpg",
      id: "1",
    };
  }
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item md={4}>
            <CenteredContent>
              <BigAvatar alt="Remy Sharp" src={recruiter.photoUrl} />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="contained" color="primary" component="span">
                  <CloudUpload mr={2} /> Upload
                </Button>
              </label>
            </CenteredContent>
          </Grid>
          <Grid item md={8}>
            <TextField
              id="username"
              label="Usuario desde"
              defaultValue={recruiter.affiliationDate}
              variant="outlined"
              fullWidth
              my={2}
              disabled
            />

            <FormControl fullWidth my={2} variant="outlined">
              <TextField
                id="lastConnection"
                label="Última conexión"
                defaultValue={recruiter.lastConnectionDate}
                variant="outlined"
                fullWidth
                my={2}
                disabled
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Private() {
  return (
    <Card mb={6}>
      <CardContent>
        <RecruitersProfileForm />
      </CardContent>
    </Card>
  );
}

function Tecnology() {
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item md={12}>
            <RecruiterTecnologyList />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Settings() {
  let recruiter = useSelector(currentRecruiter);

  if (!recruiter) {
    recruiter = {
      firstName: "Alexander",
      lastName: "Santos",
      avatar: "A",
      email: "alex@gmail.com",
      phoneNumber: "829-098-0987",
      identificationCard: "012-0987987-9",
      company: "Banco Popular",
      birth: "1980-05-22",
      technology: [2, 1, 3],
      affiliationDate: "05-12-2022",
      lastConnectionDate: "05-12-2022 3:00 PM",
      address: {
        street: "Nueva Vista",
        numHouseOrApartment: "#99",
        neighborhood: "Los Jardinez",
        city: "Santo Domingo",
      },
      password: "mypassword123",
      confirmPassword: "mypassword123",
      photoUrl: "/static/img/recruiters/recruiter-1.jpg",
      biography:
        "Ingeniero en sistema de la Universidad Tecnologica de Santo Domingo, especialidazo en desarrollo paginas web.",
      id: "1",
    };
  }

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Perfil Reclutador
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/admin/dashboard/home">
          Panel
        </Link>
        <Typography>Usuarios</Typography>
        <Link component={NavLink} to="/admin/dashboard/users/recruiters">
          Reclutadores
        </Link>
        <Link
          component={NavLink}
          to="/admin/dashboard/users/instructors/list_instructors"
        >
          Lista
        </Link>
        <Typography>Perfil</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {recruiter ? (
            <>
              <Public />
              <Private />
              <Tecnology />
            </>
          ) : (
            <Typography variant="h3" gutterBottom display="inline">
              Reclutador no encontrado!
            </Typography>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Settings;
