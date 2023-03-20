import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Chart from "react-chartjs-2";

import {
  Briefcase,
  DollarSign,
  ExternalLink,
  Facebook,
  Home,
  Instagram,
  MapPin,
  ShoppingBag,
  Twitter,
} from "react-feather";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid as MuiGrid,
  LinearProgress as MuiLinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { useDispatch } from "react-redux";
import { setCurrentInstructor } from "../../../../../redux/slices/instructorSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const LinearProgress = styled(MuiLinearProgress)(spacing);

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const Centered = styled.div`
  text-align: center;
`;

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 128px;
  width: 128px;
`;

const AboutIcon = styled.span`
  display: flex;
  padding-right: ${(props) => props.theme.spacing(2)};

  svg {
    width: 14px;
    height: 14px;
  }
`;

const ChartWrapper = styled.div`
  height: 280px;
  position: relative;
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

const ProductsChip = styled(Chip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
`;

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)});
`;

function Details({ firstName, lastName, photoUrl, specialty, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowInfo = (pathToGo, instructorId) => {
    dispatch(setCurrentInstructor({ instructorId }));
    navigate(pathToGo);
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Instructor
        </Typography>

        <Spacer mb={4} />

        <Centered>
          <Avatar alt="Lucy Lavender" src={photoUrl} />
          <Typography variant="body2" component="div" gutterBottom>
            <Box fontWeight="fontWeightMedium">
              {firstName} {lastName}
            </Box>
            <Box fontWeight="fontWeightRegular">{specialty}</Box>
          </Typography>

          <Button
            mr={2}
            variant="contained"
            color="primary"
            size="small"
            onClick={() =>
              handleShowInfo(
                "/institution/recruit/instructors/view_instructors",
                id
              )
            }
          >
            Mas informacion
          </Button>
        </Centered>
      </CardContent>
    </Card>
  );
}

export default Details;
