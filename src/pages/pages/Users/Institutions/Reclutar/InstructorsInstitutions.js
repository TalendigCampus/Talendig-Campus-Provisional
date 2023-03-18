import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { StarBorder as StarIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";
import CardDetails from "../Componets/CardDetails";
import ListInstructos from "./ListInstructos";
import { selectInstructors } from "../../../../../redux/slices/instructorSlice";
import { useSelector } from "react-redux";

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)};
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
`;

function InstructorsInstitutions() {
  const rows = useSelector(selectInstructors);
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Instructores
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Typography>Reclutar</Typography>
            <Typography>Instructor</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="info"
            onClick={() =>
              handlePageChange(
                "/institution/recruit/instructors/view_instructors_process"
              )
            }
            mt={3}
            ml={3}
          >
            Instructores solicitados
          </Button>
        </Grid>
      </Grid>
      <Divider my={6} />

      <Header>
        <Typography variant="h3" gutterBottom align="center">
          Los mas destacados
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="center">
          Guia de manera correcta a tu equipo de trabajo.
        </Typography>
      </Header>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={10}>
          <Grid container spacing={6} alignItems="flex-end">
            {rows.map((row) => {
              if (row.rate >= 3) {
                return (
                  <Grid item xs={12} md={4}>
                    <Card p={7}>
                      <CardDetails
                        firstName={row.firstName}
                        lastName={row.lastName}
                        photoUrl={row.photoUrl}
                        specialty={row.specialty}
                        id={row.id}
                      />
                    </Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid mt={5}>
        <ListInstructos />
      </Grid>
    </React.Fragment>
  );
}

export default InstructorsInstitutions;
