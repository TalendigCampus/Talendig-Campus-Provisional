import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import Chart from "react-chartjs-2";
import * as Icon from "react-feather";
import Actions from "./Actions";

import { Briefcase, ShoppingBag } from "react-feather";

import {
  Box,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  Grid as MuiGrid,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

import { orange, red } from "@mui/material/colors";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

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

function RegisteredTalents() {
  return (
    <Box position="relative">
      <Card mb={3} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">200</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Total de talentos reistrados
          </Typography>
          <StatsIcon>
            <Icon.Users />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function ConnectedTalents() {
  return (
    <Box position="relative">
      <Card mb={3} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">50</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Talentos conectados
          </Typography>

          <StatsIcon>
            <Icon.Activity />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function StatisticalPortfolios() {
  return (
    <Box position="relative">
      <Card mb={3} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">22</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Portafolios +5 proyectos
          </Typography>

          <StatsIcon>
            <Briefcase />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function TalentAssessment() {
  return (
    <Box position="relative">
      <Card mb={6} pt={1}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">22</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Talentos valoración +7
          </Typography>

          <StatsIcon>
            <Icon.UserCheck />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function RoadmapTalents() {
  return (
    <Box position="relative">
      <Card mb={6} pt={1}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">12</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Talentos roadmap 70%
          </Typography>
          <StatsIcon>
            <ShoppingBag />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function GraduatedTalents() {
  return (
    <Box position="relative">
      <Card mb={6} pt={1}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">22</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={2} mb={0}>
            Talentos Egresados
          </Typography>

          <StatsIcon>
            <Icon.UserMinus />
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

const GraphicBootcamps = withTheme(({ theme }) => {
  const data = {
    labels: ["MERN", "C#", ".NETCORE", "DATA SCIENCE", "PROGRAMACION"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        hoverBackgroundColor: theme.palette.secondary.main,
        hoverBorderColor: theme.palette.secondary.main,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.625,
        categoryPercentage: 0.5,
      },
      {
        label: "Revenue",
        backgroundColor: theme.palette.grey[200],
        borderColor: theme.palette.grey[200],
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.625,
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
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Grafico de los Bootcamps
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
});

const SalesRevenue = withTheme(({ theme }) => {
  const data = {
    labels: ["Excelente", "Muy bueno", "En observación", "Bueno"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          theme.palette.secondary.main,
          orange[500],
          red[500],
          theme.palette.grey[300],
        ],
        borderColor: "transparent",
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
  };

  return (
    <Card mb={4}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Talentos por calificación
        </Typography>
        <Typography variant="body2" gutterBottom>
          Una vista general de las calificaciones desde observacion hasta
          excelente
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="pie" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
});

function Profile() {
  return (
    <React.Fragment>
      <Helmet title="Profile" />
      <Grid justifyContent="space-between" container spacing={6}>
        {" "}
        <Grid item>
          {" "}
          <Typography variant="h3" gutterBottom>
            Talentos{" "}
          </Typography>{" "}
          <Typography variant="subtitle1">
            Bienvenido de nuevo Jose Armando te echamos de menos 👋
          </Typography>{" "}
        </Grid>{" "}
        <Grid item>
          <Actions />{" "}
        </Grid>{" "}
      </Grid>
      <Divider my={6} />
      <Grid container spacing={6}>
        <Grid item xs={12} lg={11.9} xl={11.9}>
          <SalesRevenue />
          <Grid container spacing={6}>
            <Grid item xs={12} lg={4}>
              <RegisteredTalents />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ConnectedTalents />
            </Grid>
            <Grid item xs={12} lg={4}>
              <StatisticalPortfolios />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TalentAssessment />
            </Grid>
            <Grid item xs={12} lg={4}>
              <RoadmapTalents />
            </Grid>
            <Grid item xs={12} lg={4}>
              <GraduatedTalents />
            </Grid>
          </Grid>
          <GraphicBootcamps />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Profile;
