import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { orange, red, green, blue } from "@mui/material/colors";

import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import { alpha } from "@mui/material/styles";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 378px;
`;

function LineChart({ theme }) {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, alpha(theme.palette.secondary.main, 0.0875));
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    return {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          label: "Talentos",
          fill: true,
          backgroundColor: gradient,
          borderColor: orange[500],
          tension: 0.4,
          data: [2115, 1562, 1584, 1892, 1587, 1923],
        },
        {
          label: "Instructores",
          fill: true,
          backgroundColor: gradient,
          borderColor: blue[500],
          tension: 0.4,
          data: [928, 744, 679, 813, 925, 1114],
        },
        {
          label: "Reclutadores",
          fill: true,
          backgroundColor: gradient,
          borderColor: green[500],
          tension: 0.4,
          data: [2135, 1462, 1554, 1892, 1387, 2023],
        },
        {
          label: "Instituciones",
          fill: true,
          backgroundColor: gradient,
          borderColor: red[500],
          tension: 0.4,
          data: [958, 724, 629, 883, 915, 1214],
        },
      ],
    };
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
          color: "rgba(0,0,0,0.0)",
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.0375)",
          fontColor: "#fff",
        },
      },
    },
  };

  return (
    <Card mb={6}>
      <CardHeader title="Usuario por mes" />
      <CardContent>
        <ChartWrapper>
          <Chart type="line" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
export default withTheme(LineChart);
