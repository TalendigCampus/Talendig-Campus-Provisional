import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
`;

function LineChart({ theme }) {
  const data = {
    labels: [
      "Enero-Febrero",
      "Marzo-Abril",
      "Mayo-Junio",
      "Julio-Agosto",
      "Septiembre-Octubre",
      "Noviembre-Diciembre",
    ],
    datasets: [
      {
        label: "Alexander Santos",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.secondary.main,
        tension: 0.4,
        data: [0, 20, 40, 50, 65, 68],
      },
      {
        label: "Ramón Hernandez",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.secondary.main,
        tension: 0.4,
        data: [10, 20, 35, 50, 60, 70],
      },
      {
        label: "Juana Jimenez",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.secondary.main,
        tension: 0.4,
        data: [15, 25, 35, 53, 68, 55],
      },
      {
        label: "Yacaira Rodriguez",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.grey[500],
        borderDash: [4, 4],
        tension: 0.4,
        data: [5, 10, 30, 40, 70, 80],
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
        <Typography
          variant="h6"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Los cazatalentos más activos
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="line" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(LineChart);
