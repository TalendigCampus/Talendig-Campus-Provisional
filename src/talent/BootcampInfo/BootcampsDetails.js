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
  CardActions,
  CardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid as MuiGrid,
  Icon,
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
import {
  bootcampProfile,
  deleteTecnologies,
  selectBootcampProfile,
  addTecnology,
} from "../../redux/slices/bootcampSlice";
import tecnologiesInfo from "../../pages/Bootcamps/tecnologies.json";
import { useSelector } from "react-redux";
/* import Project from "../Componets/Projects"; */
import {
  CalendarToday,
  Computer,
  ComputerOutlined,
  ListAlt,
  Phone,
  PhoneAndroid,
  Subscript,
  Timeline,
  TimeToLeave,
  Vignette,
  Watch,
  WatchLater,
} from "@mui/icons-material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";
import { selectInstructors } from "../../redux/slices/instructorSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const LinearProgress = styled(MuiLinearProgress)(spacing);

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

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

function Details() {
  const bootcamp = useSelector(selectBootcampProfile);
  return (
    <Card mb={6}>
      <CardContent>
        <Centered>
          {/* <Project title={bootcamp.bootcampName} image={bootcamp.image} /> */}
        </Centered>
      </CardContent>
    </Card>
  );
}

function Skills() {
  const [tecnologiesToSelect, setTecnologiesToSelect] = React.useState([]);
  const [selectedTecnology, setSelectedTecnology] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const bootcamp = useSelector(selectBootcampProfile);
  const filterTecnologies = () => {
    let tecnologies = tecnologiesInfo;
    for (let i = 0; i < bootcamp.tecnologies.length; i++) {
      tecnologies = tecnologies.filter(
        (tecnology) => tecnology.id !== bootcamp.tecnologies[i]
      );
    }

    setTecnologiesToSelect(tecnologies);
  };
  const getTecnologyName = (tecno) => {
    return tecnologiesInfo.find((tec) => tecno === tec.id).name;
  };

  React.useEffect(() => {
    setRows(
      bootcamp.tecnologies.map((tecnoId, index) => ({
        id: ++index,
        tecnoId,
        tecno: getTecnologyName(tecnoId),
      }))
    );

    filterTecnologies();
  }, [bootcamp]);
  console.log(tecnologiesToSelect);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tecnologías
        </Typography>

        <Spacer mb={4} />

        <Centered>
          {tecnologiesToSelect.map((tecnology) => {
            let colors = [
              "success",
              "error",
              "primary",
              "success",
              "error",
              "primary",
              "success",
              "error",
              "primary",
            ];
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

function Elsewhere({ instructors, bootcamp }) {
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

function Earnings({ bootcamp }) {
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
            <Grid container direction="row" mb={2}>
              <Grid item>
                <Typography>-{cont}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
    </Card>
  );
}

function BootcampsDetails() {
  const bootcamp = useSelector(selectBootcampProfile({ id: 1 }));
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
            Profile
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/">
              Pages
            </Link>
            <Typography>Profile</Typography>
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
            <Elsewhere instructors={instructors} bootcamp={bootcamp} />
          </Grid>
          <Grid item xs={12} lg={7} xl={9}>
            <Grid item xs={12} lg={12}>
              <Description bootcamp={bootcamp} />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Skills />
            </Grid>
            <Content bootcamp={bootcamp} />
            <Grid container spacing={6}>
              <Grid item xs={12} lg={12}>
                <Earnings bootcamp={bootcamp} />
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
