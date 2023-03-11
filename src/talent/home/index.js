import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

/* import Actions from "./Actions"; */
import { BootcapmsDispo, MyBootcamps } from "./CardContent";
import { useDispatch } from "react-redux";
import { setCurrentTalent } from "../../redux/slices/talentSlice";
import { setProjectsByTalent } from "../../redux/slices/projectsSlice";
import HomeWorks from "../HomeWorks/Projects";

import { bootcampProfile } from "../../redux/slices/bootcampSlice";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Spacer = styled.div(spacing);

function TalentHome() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const talentId = 1;

  dispatch(setCurrentTalent({ talentId }));
  dispatch(setProjectsByTalent({ talentId }));
  const handdleGetBootcamp = (bootcampId) => {
    dispatch(bootcampProfile(bootcampId));
  };

  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Bienvenido Kiancis Dominguez! este es tu panel de control como
            nuestro talento.
          </Typography>
        </Grid>

        {/* <Grid item>
          <Actions />
        </Grid> */}
      </Grid>

      <Divider my={6} />

      <BootcapmsDispo />

      {/* <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={11.9} xl={11.9}>
        <StatsList />
        </Grid>
      </Grid> */}
      <MyBootcamps />
      <HomeWorks />
    </React.Fragment>
  );
}

export default TalentHome;
