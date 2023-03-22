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
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentInstructor,
  currentInstructor,
} from "../../../../redux/slices/instructorSlice";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Spacer = styled.div(spacing);

function InstructorHome() {
  const dispatch = useDispatch();

  dispatch(setCurrentInstructor({ instructorId: "1" }));

  const instructor = useSelector(currentInstructor);

  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Bienvenido {instructor.firstName + " " + instructor.lastName} este
            es tu panel de control como Instructor.
          </Typography>
        </Grid>

        {/* <Grid item>
          <Actions />
        </Grid> */}
      </Grid>

      <Divider my={6} />

      {/* <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={11.9} xl={11.9}>
        <StatsList />
        </Grid>
      </Grid> */}
      <MyBootcamps instructorId={instructor.id} />

      {/* <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={11.9} xl={11.9}>
          <BarChart />
        </Grid>
      </Grid> */}

      {/*  <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={11.9} xl={11.9}>
          <LineChart />
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

export default InstructorHome;
