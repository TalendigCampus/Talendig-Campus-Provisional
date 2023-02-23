import React from "react";
import styled, { css } from "styled-components/macro";
import { rgba } from "polished";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { Person, SignalWifi4Bar, CheckCircle } from "@mui/icons-material";

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
  svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Chip = styled(MuiChip)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};

  span {
    padding-left: ${(props) => props.theme.spacing(2)};
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;

const Percentage = styled(MuiTypography)`
  span {
    color: ${(props) => props.percentagecolor};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    background: ${(props) => rgba(props.percentagecolor, 0.1)};
    padding: 2px;
    border-radius: 3px;
    margin-right: ${(props) => props.theme.spacing(2)};
  }

  ${(props) =>
    props.illustration &&
    props.theme.palette.mode !== "dark" &&
    css`
      color: ${(props) => rgba(props.theme.palette.primary.main, 0.85)};
    `}
`;

const IllustrationImage = styled.img`
  height: 100px;
  position: absolute;
  right: ${(props) => props.theme.spacing(1)};
  bottom: ${(props) => props.theme.spacing(1)};
  display: none;

  ${(props) => props.theme.breakpoints.between("xs", "lg")} {
    display: block;
  }

  @media (min-width: 1600px) {
    display: block;
  }
`;

const ICONS = {
  Person: <Person />,
  SignalWifi4Bar: <SignalWifi4Bar />,
  CheckCircle: <CheckCircle />,
};

const Stats = ({
  title,
  amount,
  chip,
  percentagetext,
  percentagecolor,
  illustration,
  icon,
}) => {
  return (
    <Card illustration={illustration}>
      <CardContent>
        <>
          <Typography
            variant="h6"
            mb={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {title} <StatsIcon>{icon && ICONS[icon]}</StatsIcon>
          </Typography>
        </>
        <Typography variant="h3" mb={3}>
          <Box fontWeight="fontWeightRegular">{amount}</Box>
        </Typography>
        <Percentage
          variant="subtitle2"
          color="textSecondary"
          percentagecolor={percentagecolor}
          illustration={illustration}
        >
          <span>{percentagetext}</span> Desde el mes pasado
        </Percentage>
        {!illustration && chip && <Chip label={chip} />}
      </CardContent>

      {!!illustration && (
        <IllustrationImage src={illustration} alt="Illustration" />
      )}
    </Card>
  );
};

export default Stats;
