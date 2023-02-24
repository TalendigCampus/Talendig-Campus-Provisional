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
import { currentRecruiter } from "../../../redux/slices/recruiterSlice";

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
  const recruiter = useSelector(currentRecruiter);
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

const formRecruiterStructure = (recruiter) => {
  return {
    recruiterPublic: {
      photoUrl: recruiter.photoUrl,
      affiliationDate: recruiter.affiliationDate,
      lastConnectionDate: recruiter.lastConnectionDate,
    },
    recruiterPrivate: {
      firstName: recruiter.firstName,
      lastName: recruiter.lastName,
      birth: recruiter.birth,
      identificationCard: recruiter.identificationCard,
      phoneNumber: recruiter.phoneNumber,
      company: recruiter.company,
      email: recruiter.email,
      address: {
        street: recruiter.address.street,
        numHouseOrApartment: recruiter.address.numHouseOrApartment,
        neighborhood: recruiter.address.neighborhood,
        city: recruiter.address.city,
      },
      password: recruiter.password,
      confirmPassword: recruiter.confirmPassword,
    },
    recruiterTechnology: {
      technology: recruiter.technology.split(","),
    },
  };
};

function Settings() {
  const recruiter = useSelector(currentRecruiter);

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Perfil Reclutador
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Typography>Usuario</Typography>
        <Typography>Reclutador</Typography>
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
