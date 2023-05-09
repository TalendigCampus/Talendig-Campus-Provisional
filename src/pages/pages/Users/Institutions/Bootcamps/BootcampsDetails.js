import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { DollarSign } from "react-feather";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardActions,
  CardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid as MuiGrid,
  Icon,
  Link,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { selectBootcampProfile } from "../../../../../redux/slices/bootcampSlice";
import tecnologiesInfo from "../../../Bootcamps/tecnologies.json";
import { useSelector } from "react-redux";
import Project from "../Componets/Projects";
import {
  ArrowRight,
  CalendarToday,
  PhoneAndroid,
  WatchLater,
} from "@mui/icons-material";
import { selectInstructors } from "../../../../../redux/slices/instructorSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(MuiAvatar)`
  width: 150px;
  height: 150px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

const Centered = styled.div`
  text-align: center;
`;

const AboutIcon = styled.span`
  display: flex;
  padding-right: ${(props) => props.theme.spacing(2)};

  svg {
    width: 14px;
    height: 14px;
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

const ProductsChip = styled(Chip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
`;

function Details() {
  const bootcamp = useSelector(selectBootcampProfile);
  return (
    <Card mb={6}>
      <CardContent>
        <Centered>
          <Project title={bootcamp.bootcampName} image={bootcamp.image} />
        </Centered>
      </CardContent>
    </Card>
  );
}

function TecnologiesSkills({ bootcamp }) {
  const [tecnologiesToSelect, setTecnologiesToSelect] = React.useState([]);
  console.log(tecnologiesToSelect);
  const filterTecnologies = () => {
    let tecnologies = bootcamp.tecnologies;
    let newSelectTecnologys = tecnologiesInfo.filter((tecnology) =>
      tecnologies.includes(tecnology.id)
    );

    setTecnologiesToSelect(newSelectTecnologys);
  };

  React.useEffect(() => {
    filterTecnologies();
  });

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tecnologías
        </Typography>

        <Spacer mb={4} />

        <Centered>
          {tecnologiesToSelect.map((tecnology) => {
            let colors = ["success", "error", "primary"];
            return (
              <ProductsChip
                size="small"
                color={colors[Math.floor(Math.random() * 10)]}
                value={Number(tecnology.id)}
                label={tecnology.name}
                ml={3}
              />
            );
          })}
        </Centered>
      </CardContent>
    </Card>
  );
}

function About({ bootcamp }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Detalles
        </Typography>

        <Spacer mb={4} />

        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <CalendarToday />
            </AboutIcon>
          </Grid>
          <Grid item>
            A partir de fecha {bootcamp.initialDate} hasta {bootcamp.endDate}
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <WatchLater />
            </AboutIcon>
          </Grid>
          <Grid item>Tiene una duracion de 2190 Horas </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <AboutIcon>
              <PhoneAndroid />
            </AboutIcon>
          </Grid>
          <Grid item>Cualquier dispositivo</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Instructor({ instructors, bootcamp }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h2" gutterBottom display="inline">
              Instructor
            </Typography>
            {instructors.map((instructor) => {
              if (instructor.id == bootcamp.id) {
                return (
                  <>
                    <CenteredContent>
                      <BigAvatar alt="Remy Sharp" src={instructor.photoUrl} />
                      <Typography
                        variant="h5"
                        gutterBottom
                        display="inline"
                        borderBottom={1}
                      >
                        {instructor.firstName} {instructor.lastName}
                      </Typography>
                    </CenteredContent>
                    <Typography variant="p" gutterBottom marginTop={10}>
                      {instructor.bio}
                    </Typography>
                  </>
                );
              }
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Description({ bootcamp }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Descripcion
        </Typography>

        <Spacer mb={4} />
        <Typography variant="p" gutterBottom>
          {bootcamp.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Price({ bootcamp }) {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">
              <Icon>
                <DollarSign />
              </Icon>
              {bootcamp.price}
            </Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            15% de descuento
          </Typography>
          <StatsIcon>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                pl={15}
                pr={15}
                mr={8}
              >
                Solicitar inscripcion
              </Button>
            </CardActions>
          </StatsIcon>
        </CardContent>
      </Card>
    </Box>
  );
}

function Content({ bootcamp }) {
  let content = bootcamp.content;
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Que aprenderas en este bootcamp
        </Typography>
        {content.map((cont) => {
          return (
            <Grid container direction="row" alignItems="center" mb={2}>
              <Grid item>
                <AboutIcon>
                  <ArrowRight />
                </AboutIcon>
              </Grid>
              <Grid item>
                <Typography>{cont}.</Typography>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
    </Card>
  );
}

function BootcampsDetails() {
  const bootcamp = useSelector(selectBootcampProfile);
  const instructors = useSelector(selectInstructors);
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
      <Helmet title="Profile" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Dealles
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/institution/bootcamps/">
              Bootcamps
            </Link>
            <Typography>Detalles</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() => handlePageChange("/institution/bootcamps")}
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>

      <Divider my={6} />
      {bootcamp ? (
        <Grid container spacing={6}>
          <Grid item xs={12} lg={5} xl={3}>
            <Details />
            <About bootcamp={bootcamp} />
            <Instructor instructors={instructors} bootcamp={bootcamp} />
          </Grid>
          <Grid item xs={12} lg={7} xl={9}>
            <Grid item xs={12} lg={12}>
              <Description bootcamp={bootcamp} />
            </Grid>
            <Grid item xs={12} lg={12}>
              <TecnologiesSkills bootcamp={bootcamp} />
            </Grid>
            <Content bootcamp={bootcamp} />
            <Grid container spacing={6}>
              <Grid item xs={12} lg={12}>
                <Price bootcamp={bootcamp} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h3" gutterBottom display="inline">
          ¡Bootcamp no encontrado!
        </Typography>
      )}
    </React.Fragment>
  );
}

export default BootcampsDetails;