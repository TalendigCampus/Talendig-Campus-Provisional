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

const LineChart_Instructors = withTheme(({ theme }) => {
  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre ",
      "Diciembre",
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

export default LineChart_Instructors;
