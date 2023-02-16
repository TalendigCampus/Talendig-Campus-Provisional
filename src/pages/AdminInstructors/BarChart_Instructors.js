import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";

import { Card as MuiCard, CardContent, Typography } from "@mui/material";

import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const BarChart_Instructors = withTheme(({ theme }) => {
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

export default BarChart_Instructors;
