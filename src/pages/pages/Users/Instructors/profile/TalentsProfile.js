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
  MenuItem,
  InputLabel,
  FormHelperText,
  Select,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import {
  CloudUpload as MuiCloudUpload,
  Star,
  StarBorder,
  StarRate,
} from "@mui/icons-material";
import { spacing } from "@mui/system";
import TalentTecnologyList from "./TalentTecnologyList";
import TalentProfileForm from "./TalentProfileForm";

import { useSelector } from "react-redux";
import { CurrentTalent } from "../../../../../redux/slices/talentSlice";

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
  const talent = useSelector(CurrentTalent);
  const [valor, setValor] = React.useState("");

  const handleChange = (event) => {
    setValor(event.target.value);
  };
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item md={4}>
            <CenteredContent>
              <BigAvatar alt="Remy Sharp" src={talent.photoUrl} />
            </CenteredContent>
          </Grid>
          <Grid item md={8}>
            <FormControl fullWidth>
              <FormHelperText>Valoración</FormHelperText>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={valor}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <em>No se ha valorado todavia.</em>
                </MenuItem>
                <MenuItem value={false}>
                  <StarBorder mr={2} /> No se ha valorado todavia.
                </MenuItem>
                <MenuItem value={true}>
                  <Star mr={2} color="warning" /> Recomendado Por Instructor
                </MenuItem>
              </Select>
            </FormControl>
            <Divider my={6} />
            <TextField
              fullWidth
              name="Comentario"
              label="Comentario"
              multiline
              maxRows={0}
              rows={0}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Private({ props }) {
  console.log(props);
  return (
    <Card mb={6}>
      <CardContent>
        <TalentProfileForm />
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
            <TalentTecnologyList />
          </Grid>
        </Grid>
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

function Settings() {
  const talent = useSelector(CurrentTalent);
  console.log(talent);

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Perfil Talento
      </Typography>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {talent ? (
            <>
              <Public />
              <Private talent={talent} />
              <Tecnology />
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

export default Settings;
