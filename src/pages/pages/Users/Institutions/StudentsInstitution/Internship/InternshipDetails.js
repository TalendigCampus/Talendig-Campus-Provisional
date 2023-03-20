import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
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
import ListStudentToAdd from "./ListStudentToAdd";
import { useSelector } from "react-redux";
import {
  currentTalentIntership,
  talentsIntership,
} from "../../../../../../redux/slices/institutionSlice";

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

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 128px;
  width: 128px;
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

function Earnings({ newCurrentSelectionIntership }) {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent align="center">
          <Typography variant="h2" gutterBottom>
            {newCurrentSelectionIntership.nameGroup}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

function Revenue({ newCurrentSelectionIntership }) {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent align="center">
          <Typography variant="h2" gutterBottom>
            {newCurrentSelectionIntership.laboralArea}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

function Description({ newCurrentSelectionIntership }) {
  return (
    <Box position="relative">
      <Card mb={12} pt={2}>
        <CardContent align="center">
          <Typography variant="h4" gutterBottom>
            {newCurrentSelectionIntership.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

function Profile() {
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };
  const newCurrentSelectionIntership = useSelector(currentTalentIntership);
  console.log(newCurrentSelectionIntership);

  return (
    <React.Fragment>
      <Helmet title="Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        Detalles
      </Typography>

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Talentos de la institucion
            </Link>
            <Link component={NavLink} to="/">
              Pasantia
            </Link>
            <Typography>Mis solicitudes</Typography>
            <Typography>Detalles</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="info"
            onClick={() =>
              handlePageChange("/institution/students/view-requests")
            }
            mt={3}
            ml={3}
          >
            volver
          </Button>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={12} xl={9}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6}>
              <Earnings
                newCurrentSelectionIntership={newCurrentSelectionIntership}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Revenue
                newCurrentSelectionIntership={newCurrentSelectionIntership}
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Description
                newCurrentSelectionIntership={newCurrentSelectionIntership}
              />
            </Grid>

            <ListStudentToAdd
              newCurrentSelectionIntership={newCurrentSelectionIntership}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Profile;
