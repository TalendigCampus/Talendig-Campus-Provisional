import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RecruitmentSteps from "../TalentProcess/RecruitmentSteps";
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
            <RecruitmentSteps />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Private({ props }) {
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

function Settings() {
  const talent = useSelector(CurrentTalent);

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Perfil Talento
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/recruiter/home">
          Inicio
        </Link>
        <Link component={NavLink} to="/recruiters/talentsList/bestScore">
          Talentos
        </Link>
        <Typography>Perfil</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {talent ? (
            <>
              <Public />
              <Private />
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
