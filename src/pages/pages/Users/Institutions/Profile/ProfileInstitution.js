import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

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
import InstitutionProfileForm from "./InstitutionProfileForm";

import { useSelector } from "react-redux";
import { currentInstitution } from "../../../../../redux/slices/institutionSlice";

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

function Public({ institution }) {
  const talent = institution;
  console.log(talent.institutionAvatar);
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item md={4}>
            <CenteredContent>
              <BigAvatar alt="Remy Sharp" src={talent.institutionAvatar} />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="contained" color="primary" component="span">
                  <CloudUpload mr={2} /> Cargar imagen
                </Button>
              </label>
            </CenteredContent>
          </Grid>
          <Grid item md={8}>
            <TextField
              id="username"
              label="Usuario desde"
              defaultValue={talent.dateCreateAccount}
              variant="outlined"
              fullWidth
              my={2}
              disabled
            />

            <FormControl fullWidth my={2} variant="outlined">
              <TextField
                id="lastConnection"
                label="Última conexión"
                defaultValue={talent.lastConection}
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

function Private({ institution }) {
  return (
    <Card mb={6}>
      <CardContent>
        <InstitutionProfileForm institution={institution} />
      </CardContent>
    </Card>
  );
}

const formTalentStructure = (talent) => {
  return {
    talentPublic: {
      photoUrl: talent.photoUrl,
      affiliationDate: talent.affiliationDate,
      lastConnectionDate: talent.lastConnectionDate,
    },
    talentPrivate: {
      firstName: talent.talentName,
      lastName: talent.talentLastName,
      birth: talent.birth,
      identificationCard: talent.idCard,
      phoneNumber: talent.phoneNumber,
      bootcamp: talent.bootcamp,
      email: talent.talentEmail,
      address: {
        street: talent.address.street,
        numHouseOrApartment: talent.address.numHouseOrApartment,
        neighborhood: talent.address.neighborhood,
        city: talent.address.city,
      },
      biography: talent.biography,
      password: talent.password,
      confirmPassword: talent.confirmPassword,
    },
    talentTechnology: {
      technology: talent.technology,
    },
  };
};

function ProfileInstitution() {
  const institution = useSelector(currentInstitution);
  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Perfil de institucion
      </Typography>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {institution ? (
            <>
              <Public institution={institution} />
              <Private institution={institution} />
            </>
          ) : (
            <Typography variant="h3" gutterBottom display="inline">
              Talento no encontrado!
            </Typography>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProfileInstitution;
