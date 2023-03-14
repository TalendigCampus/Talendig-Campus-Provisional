import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const BarChart = ({ theme }) => {
  const data = {
    labels: [
      "Ener",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        hoverBackgroundColor: theme.palette.secondary.main,
        hoverBorderColor: theme.palette.secondary.main,
        data: [3, 5, 10, 3, 4, 15, 20, 18, 16, 17, 23, 25],
        barPercentage: 0.3,
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
          stepSize: 5,
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
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Talentos Contratados
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="bar" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export default withTheme(BarChart);
