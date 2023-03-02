// import React from "react";
// import styled from "styled-components/macro";
// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
// import { NavLink, useParams } from "react-router-dom";
// import BootcampForm from "./Form";
// import bootcampData from "./bootcamp.json";

// import {
//   Grid,
//   Link,
//   Divider as MuiDivider,
//   Typography as MuiTypography,
//   Breadcrumbs as MuiBreadcrumbs,
// } from "@mui/material";
// import { spacing } from "@mui/system";

// const Divider = styled(MuiDivider)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Spacer = styled.div(spacing);

// function BootcampProfile() {
//   const { t } = useTranslation();

//   const { id } = useParams();

//   const bootcampInfo = bootcampData.find((bootcamp) => (bootcamp.id = id));

//   return (
//     <React.Fragment>
//       <Helmet title="Bootcamps" />
//       {/* <Grid justifyContent="space-between" container spacing={6}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom>
//             Bootcamps
//           </Typography>
//           <Typography variant="subtitle1">
//             {t("Welcome back")}, José Armando! {t("We've missed you")}.{" "}
//             <span role="img" aria-label="Waving Hand Sign">
//               👋
//             </span>
//           </Typography>
//         </Grid>
//       </Grid> */}
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {bootcampInfo.bootcampName}
//           </Typography>

//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} to="/admin/dashboard/bootcamps">
//               Bootcamps
//             </Link>
//             <Link component={NavLink} to="/admin/dashboard/bootcamps/list">
//               Lista de bootcamps
//             </Link>
//             <Typography>{bootcampInfo.bootcampName}</Typography>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>

//       <Divider my={6} />

//       <Grid container spacing={6}>
//         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//           <BootcampForm />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default BootcampProfile;

import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BootcampsInfo from "./bootcamp.json";
import { selectBootcampProfile } from "../../redux/slices/bootcampSlice";
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
import BootcampTecnologyList from "./BootcampTecnologyList";
import BootcampStudentList from "./BootcampStudentList";
import BootcampsProfileForm from "./BootcampProfileForm";

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

function Private(bootcampPrivate) {
  return (
    <Card mb={6}>
      <CardContent>
        <BootcampsProfileForm {...bootcampPrivate} />
      </CardContent>
    </Card>
  );
}

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

function BootcampProfile() {
  const bootcamp = useSelector(selectBootcampProfile);
  let bootcampStructure;

  bootcamp && (bootcampStructure = formBootcampStructure(bootcamp));

  return (
    <React.Fragment>
      <Helmet title="Bootcamp Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Perfil Bootcamp
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/admin/dashboard/bootcamps">
          Bootcamps Dashboard
        </Link>
        <Link component={NavLink} to="/admin/dashboard/bootcamps/list">
          Lista de Bootcamps
        </Link>
        <Typography>{bootcamp ? bootcamp.bootcampName : ""}</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {bootcamp ? (
            <>
              <Public {...bootcampStructure.bootcampPublic} />
              <Private {...bootcampStructure.bootcampPrivate} />
              <Tecnology />
              <Student />
            </>
          ) : (
            <Typography variant="h3" gutterBottom display="inline">
              ¡Bootcamp no encontrado!
            </Typography>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BootcampProfile;
