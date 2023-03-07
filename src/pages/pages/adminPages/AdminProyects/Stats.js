import React from "react";
import styled, { css } from "styled-components/macro";
import { rgba } from "polished";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)`
  position: relative;
  margin-bottom: ${(props) => props.theme.spacing(6)};

  ${(props) =>
    props.illustration &&
    props.theme.palette.mode !== "dark" &&
    css`
      background: ${(props) => rgba(props.theme.palette.primary.main, 0.125)};
      color: ${(props) => props.theme.palette.primary.main};
    `}
`;

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

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

const Stats = ({ title, stat, icon }) => {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">{stat}</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            {title}
          </Typography>
          <StatsIcon>{icon}</StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Stats;
