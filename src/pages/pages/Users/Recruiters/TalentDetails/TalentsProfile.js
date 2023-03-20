import React from "react";
import styled from "styled-components/macro";
import { useNavigate, NavLink } from "react-router-dom";
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
import { ArrowBack } from "@mui/icons-material";
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
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />
      <Grid
        justifyContent="space-between"
        alignItems="center"
        container
        spacing={10}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Perfil Talento
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={goBack}
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
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
