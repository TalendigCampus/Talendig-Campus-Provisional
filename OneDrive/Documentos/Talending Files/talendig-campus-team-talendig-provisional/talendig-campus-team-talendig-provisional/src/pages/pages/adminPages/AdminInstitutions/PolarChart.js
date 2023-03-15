import React from "react";
import styled, { withTheme } from "styled-components/macro";
import Chart from "react-chartjs-2";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { orange, red, yellow } from "@mui/material/colors";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
`;

function PolarChart({ theme }) {
  const data = {
    labels: ["MEAN", "MERN", "Python avanzado", "ASP.Net"],
    datasets: [
      {
        label: "Model S",
        data: [35, 38, 65, 70],
        backgroundColor: [
          theme.palette.secondary.main,
          yellow[700],
          orange[500],
          red[500],
          theme.palette.grey[300],
        ],
      },
    ],
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Bootcamps mas interesantes para las instituciones
        </Typography>
        <Spacer mb={6} />

        <ChartWrapper>
          <Chart type="polarArea" data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(PolarChart);
