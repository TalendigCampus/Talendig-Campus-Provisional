import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { orange, red } from "@mui/material/colors";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
`;

function PieChart({ theme }) {
  const data = {
    labels: ["React", "ASP.Net", "Python", "Angular"],
    datasets: [
      {
        data: [40, 20, 25, 15],
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
    <Card mb={1}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Tecnologias mas buscadas por cazatalentos
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="pie" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(PieChart);
