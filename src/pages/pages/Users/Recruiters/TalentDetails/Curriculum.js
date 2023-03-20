import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components/macro";
import { useNavigate, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Chart from "react-chartjs-2";

import {
  Briefcase,
  DollarSign,
  ExternalLink,
  Facebook,
  Home,
  Instagram,
  MapPin,
  ShoppingBag,
  Twitter,
} from "react-feather";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid as MuiGrid,
  LinearProgress as MuiLinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import JsonInfo from "../../../adminPages/AdminTalent/info.json";
import tecnologiesInfo from "../../../Bootcamps/tecnologies.json";
import { Email, Person, Phone, School, Star, Work } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { CurrentTalent } from "../../../../../redux/slices/talentSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const LinearProgress = styled(MuiLinearProgress)(spacing);

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const Centered = styled.div`
  text-align: center;
`;

const ContentImgProfile = styled.div`
  text-align: center;
`;

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 178px;
  width: 178px;
`;

const AboutIcon = styled.span`
  display: flex;
  padding-right: ${(props) => props.theme.spacing(2)};

  svg {
    width: 14px;
    height: 14px;
  }
`;

const ChartWrapper = styled.div`
  height: 280px;
  position: relative;
`;

const StatsIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 32px;

  svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const ProductsChip = styled(Chip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
`;

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)});
`;

const rows = JsonInfo;

function Details(props) {
  return (
    <Card mb={6}>
      <CardContent>
        <ContentImgProfile>
          <Avatar alt="Lucy Lavender" src={props.photoUrl} />
          <Typography variant="h4" component="div" gutterBottom>
            <Box fontWeight="fontWeightMedium">
              {props.talentName} {props.talentLastName}
            </Box>
            <Box fontWeight="fontWeightRegular">{props.career}</Box>
          </Typography>
        </ContentImgProfile>
      </CardContent>
    </Card>
  );
}

function Skills(props) {
  let values = [];
  tecnologiesInfo.forEach(
    (technology) =>
      props.technology.includes(technology.id) && values.push(technology.name)
  );
  let skills = values;
  let i = 0;
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Habilidades
        </Typography>

        <Spacer mb={4} />

        <Centered>
          {skills.map((skill) => {
            return (
              <Chip
                size="small"
                key={i++}
                mr={1}
                mb={1}
                label={skill}
                color="secondary"
              />
            );
          })}
        </Centered>
      </CardContent>
    </Card>
  );
}

function About(props) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Informacion personal
        </Typography>

        <Spacer mb={4} />

        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Home />
            </AboutIcon>
          </Grid>
          <Grid item>
            Vivo en{" "}
            <Link href="https://material-app.bootlab.io/">
              {props.address.neighborhood}, {props.address.street}
            </Link>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <AboutIcon>
                <MapPin />
              </AboutIcon>
            </Grid>
            <Grid item>
              Ciudad{" "}
              <Link href="https://material-app.bootlab.io/">
                {props.address.city}
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <AboutIcon>
                <Phone />
              </AboutIcon>
            </Grid>
            <Grid item>
              Numero de telefono{" "}
              <Link href="https://material-app.bootlab.io/">
                {props.phoneNumber}
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <AboutIcon>
                <Email />
              </AboutIcon>
            </Grid>
            <Grid item>
              Email{" "}
              <Link href="https://material-app.bootlab.io/">
                {props.talentEmail}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Referens(props) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Referencias
        </Typography>

        <Spacer mb={4} />

        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Person />
            </AboutIcon>
          </Grid>
          <Grid item>
            <Link href="https://material-app.bootlab.io/">
              {props.contactEmergencyName}
            </Link>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Phone />
            </AboutIcon>
          </Grid>
          <Link href="https://material-app.bootlab.io/">
            {props.contactNumEmergencyName}
          </Link>
        </Grid>
      </CardContent>
    </Card>
  );
}

function AboutMe(props) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Perfil
        </Typography>

        <Spacer mb={4} />

        <Centered>
          <Typography textAlign={"justify"}>{props.biography}</Typography>
        </Centered>
      </CardContent>
    </Card>
  );
}

function Expirence(props) {
  let workExpirences = props.workExpirences;
  let i = 0;
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Experiencia
        </Typography>

        <Spacer mb={4} />

        {workExpirences.split(",").map((workExpirence) => {
          return (
            <Grid container direction="row" alignItems="center" mb={2}>
              <Grid item>
                <AboutIcon>
                  <Work />
                </AboutIcon>
              </Grid>
              <Grid item>
                <Link href="https://material-app.bootlab.io/">
                  {workExpirence}
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
    </Card>
  );
}

function Education(props) {
  let educations = props.education;
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Educacion
        </Typography>

        <Spacer mb={4} />

        {educations.split(",").map((education) => {
          return (
            <Grid container direction="row" alignItems="center" mb={2}>
              <Grid item>
                <AboutIcon>
                  <School />
                </AboutIcon>
              </Grid>
              <Grid item>
                <Link href="https://material-app.bootlab.io/">{education}</Link>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
    </Card>
  );
}

function Lenguages(props) {
  let lenguages = props.lenguages;
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Idiomas
        </Typography>

        <Spacer mb={4} />

        {lenguages.split(",").map((lenguage) => {
          return (
            <Grid container direction="row" alignItems="center" mb={2}>
              <Grid item>
                <AboutIcon>
                  <School />
                </AboutIcon>
              </Grid>
              <Grid item>
                <Link href="https://material-app.bootlab.io/">{lenguage}</Link>
                <AboutIcon>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </AboutIcon>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
    </Card>
  );
}

function Curriculum() {
  const talent = useSelector(CurrentTalent);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Helmet title="Profile" />

      <Grid
        justifyContent="space-between"
        alignItems="center"
        container
        spacing={10}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Perfil de {`${talent.talentName} ${talent.talentLastName}`}
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
        <Grid item xs={12} lg={4} xl={3}>
          <Details {...talent} />
          <Skills {...talent} />
          <Referens {...talent} />
          <Lenguages {...talent} />
        </Grid>
        <Grid item xs={12} lg={8} xl={9}>
          <AboutMe {...talent} />
          <Expirence {...talent} />
          <Education {...talent} />
          <About {...talent} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Curriculum;
