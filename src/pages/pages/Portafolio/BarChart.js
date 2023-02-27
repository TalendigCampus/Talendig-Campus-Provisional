import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";

import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 340px;
  width: 100%;
`;

const BarChart = ({ theme }) => {
  const firstDatasetColor = theme.palette.secondary.main;

  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Instituciones"],
    datasets: [
      {
        label: "Portafolios modificados por mes",
        backgroundColor: firstDatasetColor,
        borderColor: firstDatasetColor,
        hoverBackgroundColor: firstDatasetColor,
        hoverBorderColor: firstDatasetColor,
        data: [40, 30, 40, 50],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
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
        stacked: true,
        ticks: {
          stepSize: 20,
          fontColor: theme.palette.text.secondary,
        },
      },

      x: {
        stacked: true,
        grid: {
          color: "transparent",
        },
        ticks: {
          fontColor: theme.palette.text.secondary,
        },
      },
    },
  };

  return (
    <Card mb={6}>
      <CardHeader title="Portafolios modificados por mes" />

      <CardContent>
        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export default withTheme(BarChart);
