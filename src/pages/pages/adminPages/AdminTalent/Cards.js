import React from "react";

import styled, { withTheme } from "styled-components/macro";

import {
  Box,
  Card as MuiCard,
  CardContent,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

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

function CardMaker(props) {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">{props.value}</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            {props.title}
          </Typography>

          <StatsIcon>{props.icon}</StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardMaker;
