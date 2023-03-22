import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { selectBootcampProfile } from "../../../../../../redux/slices/bootcampSlice";
import { useSelector } from "react-redux";

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
import BootcampTecnologyList from "../BootcampTecnologyList";
import BootcampStudentList from "../BootcampStudentList";
import { MyBootcamps } from "../../Componets/CardContent";
import institutionStudents from "../../../../adminPages/AdminInstitutions/institutionStudents.json";
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

function Public(bootcampPublic) {
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <CenteredContent>
              <BigAvatar alt="Remy Sharp" src={bootcampPublic.photoUrl} />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="contained" color="primary" component="span">
                  <CloudUpload mr={2} /> Subir
                </Button>
              </label>
            </CenteredContent>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

// function Private(bootcampPrivate) {
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <BootcampsProfileForm {...bootcampPrivate} />
//       </CardContent>
//     </Card>
//   );
// }

function Tecnology(bootcampTechnology) {
  return (
    <>
      <Card mb={6}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <BootcampTecnologyList {...bootcampTechnology} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

function Student(bootcampStudents) {
  return (
    <>
      <Card mb={6}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <BootcampStudentList {...bootcampStudents} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

const formBootcampStructure = (bootcamp) => {
  return {
    bootcampPublic: {
      id: bootcamp.id,
      photoUrl: bootcamp.image,
    },
    bootcampPrivate: {
      id: bootcamp.id,
      bootcampName: bootcamp.bootcampName,
      teacher: {
        name: bootcamp.teacher,
        id: bootcamp.teacherId,
      },
      initialDate: bootcamp.initialDate,
      endDate: bootcamp.endDate,
    },
  };
};

function MyBootcamp() {
  const bootcamp = useSelector(selectBootcampProfile);
  console.log(institutionStudents);
  let bootcampStructure;
  bootcamp && (bootcampStructure = formBootcampStructure(bootcamp));

  return (
    <React.Fragment>
      <Helmet title="Bootcamp Profile" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Mis Bootcamps
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/institution/bootcamps/">
              Bootcamps
            </Link>
            <Typography>Mis Bootcamps</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Divider my={6} />

      <MyBootcamps InPossession={true} />
    </React.Fragment>
  );
}

export default MyBootcamp;
