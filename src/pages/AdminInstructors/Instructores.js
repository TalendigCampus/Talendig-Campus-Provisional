import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Chart from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import * as Icon from "react-feather";
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

import {
  Avatar as MuiAvatar,
  Box,
  Chip as MuiChip,
  Grid as MuiGrid,
  LinearProgress as MuiLinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography as MuiTypography,
} from "@mui/material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";
import { spacing } from "@mui/system";
import Actions from "./Actions";
import BarChart_Instructors from "./BarChart_Instructors";
import LineChart_Instructors from "./LineChart_Instructors";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const LinearProgress = styled(MuiLinearProgress)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
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

const BarChart = withTheme(({ theme }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Año Pasado",
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        hoverBackgroundColor: theme.palette.secondary.main,
        hoverBorderColor: theme.palette.secondary.main,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
      {
        label: "Este Año",
        backgroundColor: theme.palette.grey[300],
        borderColor: theme.palette.grey[300],
        hoverBackgroundColor: theme.palette.grey[300],
        hoverBorderColor: theme.palette.grey[300],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        stacked: false,
        ticks: {
          stepSize: 20,
        },
      },

      x: {
        stacked: false,
        grid: {
          color: "transparent",
        },
      },
    },
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Cantidad de Instructores por mes
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
});

const LineChart = withTheme(({ theme }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Profesores",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.secondary.main,
        tension: 0.4,
        data: [13, 10, 15, 32, 24, 22, 19, 27, 32, 38, 40, 49],
      },
      {
        label: "Reseñas",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.grey[500],
        borderDash: [4, 4],
        tension: 0.4,
        data: [7, 5, 3, 6, 12, 13, 17, 12, 15, 21, 14, 18],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      y: {
        display: true,
        borderDash: [5, 5],
        grid: {
          color: "rgba(0,0,0,0)",
          fontColor: "#fff",
        },
      },
    },
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Reseñas Por Profesores
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="line" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
});

function Private() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Private info
        </Typography>

        <Grid container spacing={6}>
          <Grid item md={6}>
            <TextField
              id="first-name"
              label="First name"
              variant="outlined"
              defaultValue="Lucy"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              id="last-name"
              label="Last name"
              variant="outlined"
              defaultValue="Lavender"
              fullWidth
              my={2}
            />
          </Grid>
        </Grid>

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          defaultValue="lucylavender@gmail.com"
          fullWidth
          my={2}
        />

        <TextField
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          my={2}
        />

        <TextField
          id="address2"
          label="Apartment, studio, or floor"
          variant="outlined"
          fullWidth
          my={2}
        />

        <Grid container spacing={6}>
          <Grid item md={6}>
            <TextField
              id="city"
              label="City"
              variant="outlined"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="state"
              label="State"
              variant="outlined"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="zip"
              label="Zip"
              variant="outlined"
              fullWidth
              my={2}
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" mt={3}>
          Save changes
        </Button>
      </CardContent>
    </Card>
  );
}

function Earnings() {
  return (
    <Box position="relative">
      <Card mb={3} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">200</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Instructores registrados
          </Typography>
          <StatsIcon>
            <Icon.Users />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function Orders() {
  return (
    <Box position="relative">
      <Card mb={3} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">50</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Instructores conectados
          </Typography>

          <StatsIcon>
            <Icon.Activity />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function Revenue() {
  return (
    <Box position="relative">
      <Card mb={3} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">22</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Instructores valoración +7
          </Typography>

          <StatsIcon>
            <Icon.Briefcase />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function Instructores() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Helmet title="Instructores" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Instructores
          </Typography>
          <Typography variant="subtitle1">
            {t("Welcome back")}, José Armando! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Actions />
        </Grid>
      </Grid>
      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={11.9} xl={11.99}>
          <BarChart_Instructors />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Earnings />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Orders />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Revenue />
        </Grid>
        <Grid item xs={12} lg={11.9} xl={11.99}>
          <LineChart_Instructors />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Instructores;
