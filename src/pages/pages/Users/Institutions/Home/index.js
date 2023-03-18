import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Chip as MuiChip,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import Actions from "../Bootcamps/Actions";
import Projects from "../Componets/Projects";
import { useSelector } from "react-redux";
import { selectBootcamps } from "../../../../../redux/slices/bootcampSlice";
import Project from "../Componets/Projects";
import FeaturedInstructos from "./FeaturedInstructos";
import { BootcapmsDispo, MyBootcamps } from "../Componets/CardContent";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Spacer = styled.div(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

function InstitutionsHome() {
  const { t } = useTranslation();
  const rows = useSelector(selectBootcamps);

  return (
    <React.Fragment>
      <Helmet title="Inicio" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h2">
            {t("Welcome back")}, Claro! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid item>
        <Typography variant="h3" mb={4}>
          Cursos destacados
        </Typography>
      </Grid>

      {/* <Grid container spacing={6}>
        {rows.map((row) => {
          console.log(row.bootcampName);
          if (row.rank >= 8) {
            return (
              <Grid item xs={12} lg={4} xl={3}>
                <Project
                  title={row.bootcampName}
                  description={row.description}
                  chip={
                    <Chip
                      label={row.status}
                      color={row.status === "Disponible" ? "success" : "error"}
                    />
                  }
                  image={row.image}
                  price={row.price}
                  id={row.id}
                />
              </Grid>
            );
          }
        })}
      </Grid> */}

      <BootcapmsDispo rank={true} />
      <Divider my={6} />
      <Grid item>
        <Typography variant="h3" mb={4}>
          Mis Cursos
        </Typography>
      </Grid>
      <MyBootcamps InPossession={true} />
    </React.Fragment>
  );
}

export default InstitutionsHome;
