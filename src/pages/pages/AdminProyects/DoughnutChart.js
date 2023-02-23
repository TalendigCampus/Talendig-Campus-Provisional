import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";

import { orange, red } from "@mui/material/colors";
import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 280px;
  position: relative;
`;

const DoughnutChart = ({ theme }) => {
  const data = {
    labels: ["JavaScript", "PHP", "C#", "Python"],
    datasets: [
      {
        data: [70, 2, 3, 25],
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
        display: true,
      },
    },
    cutout: "70%",
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Proyectos por tecnologías
        </Typography>
        <Typography variant="body2" gutterBottom>
          Una vista rápida de la cantidad de proyectos registrados, dividos por
          bootcamps.
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="doughnut" data={data} options={options} />
        </ChartWrapper>

        <Spacer mb={3} />

        <Typography align="center" variant="body2" gutterBottom>
          Datos en %
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withTheme(DoughnutChart);
