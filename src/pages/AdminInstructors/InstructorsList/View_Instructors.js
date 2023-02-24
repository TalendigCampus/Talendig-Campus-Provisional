import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import InstructorsInfo from "./InstructorsInfo.json";

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
import InstructorTecnologyList from "./InstructorTecnologyList";
import InstructorsProfileForm from "./InstructorsProfileForm";

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

function Public(instructorPublic) {
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item md={4}>
            <CenteredContent>
              <BigAvatar alt="Remy Sharp" src={instructorPublic.photoUrl} />
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
              defaultValue={instructorPublic.affiliationDate}
              variant="outlined"
              fullWidth
              my={2}
              disabled
            />

            <FormControl fullWidth my={2} variant="outlined">
              <TextField
                id="lastConnection"
                label="Última conexión"
                defaultValue={instructorPublic.lastConnectionDate}
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

function Private(instructorPrivate) {
  return (
    <Card mb={6}>
      <CardContent>
        <InstructorsProfileForm {...instructorPrivate} />
      </CardContent>
    </Card>
  );
}

function Tecnology(instructorTechnology) {
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item md={12}>
            <InstructorTecnologyList {...instructorTechnology} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const formInstructorStructure = (instructor) => {
  return {
    instructorPublic: {
      photoUrl: instructor.photoUrl,
      affiliationDate: instructor.affiliationDate,
      lastConnectionDate: instructor.lastConnectionDate,
    },
    instructorPrivate: {
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      birth: instructor.birth,
      identificationCard: instructor.identificationCard,
      phoneNumber: instructor.phoneNumber,
      company: instructor.company,
      email: instructor.email,
      address: {
        street: instructor.address.street,
        numHouseOrApartment: instructor.address.numHouseOrApartment,
        neighborhood: instructor.address.neighborhood,
        city: instructor.address.city,
      },
      password: instructor.password,
      confirmPassword: instructor.confirmPassword,
    },
    instructorTechnology: {
      technology: instructor.technology.split(","),
    },
  };
};

function View_Instructors() {
  const { id: instructorId } = useParams();
  const instructor = InstructorsInfo.find(
    (instructor) => instructor.id === instructorId
  );

  if (!instructor) {
    return (
      <React.Fragment>
        <Helmet title="Instructor Profile" />

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
            <Typography variant="h3" gutterBottom display="inline">
              Reclutador no encontrado!
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  const instructorStructure = formInstructorStructure(instructor);
  return (
    <React.Fragment>
      <Helmet title="Instructor Profile" />

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
          <Public {...instructorStructure.instructorPublic} />
          <Private {...instructorStructure.instructorPrivate} />
          <Tecnology {...instructorStructure.instructorTechnology} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default View_Instructors;
