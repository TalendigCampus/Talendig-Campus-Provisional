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
  selectBootcamps,
} from "../../../../../redux/slices/bootcampSlice";
import tecnologiesInfo from "../Bootcamps/tecnologies.json";
import { useSelector } from "react-redux";
import Project from "../Componets/Projects";
import {
  BookOnlineOutlined,
  CalendarToday,
  Class,
  Computer,
  ComputerOutlined,
  Email,
  ListAlt,
  Phone,
  PhoneAndroid,
  School,
  Subscript,
  Timeline,
  TimeToLeave,
  Vignette,
  Watch,
  WatchLater,
} from "@mui/icons-material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";
import {
  currentInstructor,
  selectInstructors,
} from "../../../../../redux/slices/instructorSlice";
import DataGridDemo from "./TecnologyInstructorList";
import ProcessToEvaluate from "./ProcessToEvaluate";

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
  width: 170px;
  height: 170px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

const Centered = styled.div`
  text-align: center;
`;

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 178px;
  width: 178px;
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
const ContentImgProfile = styled.div`
  height: 35vh;
  text-align: center;
`;
const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)});
`;
function Details({ instructors }) {
  return (
    <Card mb={6}>
      <CardContent>
        <ContentImgProfile>
          <Avatar alt="Lucy Lavender" src={instructors.photoUrl} />
          <Typography variant="body2" component="div" gutterBottom>
            <Box fontWeight="fontWeightMedium">
              {instructors.firstName} {instructors.lastName}
            </Box>
            <Box fontWeight="fontWeightRegular">{instructors.specialty}</Box>
          </Typography>
        </ContentImgProfile>
      </CardContent>
    </Card>
    // <Card mb={6}>
    //   <CardContent>
    //     <CenteredContent>
    //       <BigAvatar alt="Remy Sharp" src={instructors.photoUrl} />
    //       <Typography>
    //         {instructors.firstName} {instructors.lastName}
    //       </Typography>
    //     </CenteredContent>
    //   </CardContent>
    // </Card>
  );
}

function Skills({ instructors }) {
  const [tecnologiesToSelect, setTecnologiesToSelect] = React.useState([]);
  console.log(tecnologiesToSelect);
  const filterTecnologies = () => {
    let tecnologies = instructors.technology;
    let newSelectTecnologys = tecnologiesInfo.filter((tecnology) =>
      tecnologies.includes(tecnology.id)
    );

    setTecnologiesToSelect(newSelectTecnologys);
  };

  React.useEffect(() => {
    filterTecnologies();
  });
  return (
    <>
      <DataGridDemo tecnologiesToSelect={tecnologiesToSelect} />
    </>
  );
}

function About({ instructors, bootcamps }) {
  console.log(instructors);
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Bootcamps
        </Typography>

        <Spacer mb={4} />

        {bootcamps.map((bootcamp) => {
          if (instructors.id == bootcamp.teacherId) {
            return (
              <Grid container direction="row" alignItems="center" mb={2}>
                <Grid item>
                  <AboutIcon>
                    <School />
                  </AboutIcon>
                </Grid>
                <Grid item>{bootcamp.bootcampName}</Grid>
              </Grid>
            );
          }
        })}
      </CardContent>
    </Card>
  );
}

function Description({ instructors }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Descripcion
        </Typography>

        <Spacer mb={4} />
        <Typography variant="p" gutterBottom>
          {instructors.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ButtonForSolicitation() {
  const [open, setOpen] = React.useState(false);
  const [process, setProcess] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              pl={8}
              pr={8}
              mr={4}
              onClick={handleClickOpen}
            >
              {process ? "En proceso de solicitud" : "Solicitar Instructor"}
            </Button>
            <ProcessToEvaluate
              open={open}
              onClose={handleClose}
              setOpen={setOpen}
              setProcess={setProcess}
            />
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

function Content({ instructors }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Informacion personal
        </Typography>
        <Grid container direction="row" mb={2} mt={5}>
          <Grid item>
            <AboutIcon>
              <Home />
            </AboutIcon>
          </Grid>
          <Grid item>
            Vivo en <Typography>{instructors.address.neighborhood}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" mb={2}>
          <Grid item>
            <AboutIcon>
              <MapPin />
            </AboutIcon>
          </Grid>
          <Grid item>
            Ciudad <Typography>{instructors.address.city}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" mb={2}>
          <Grid item>
            <AboutIcon>
              <Email />
            </AboutIcon>
          </Grid>
          <Grid item>
            Email <Typography>{instructors.email}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" mb={2}>
          <Grid item>
            <AboutIcon>
              <Phone />
            </AboutIcon>
          </Grid>
          <Grid item>
            Numero de telefono{" "}
            <Typography>{instructors.phoneNumber}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function InstructorInformation() {
  const instructors = useSelector(currentInstructor);
  const bootcamps = useSelector(selectBootcamps);

  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
      <Helmet title="Instructor Profile" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Perfil de Instructor
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Typography>communidad</Typography>
            <Link component={NavLink} to="/institution/community/instructors">
              instructores
            </Link>
            <Typography>perfin de instructor</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() =>
              handlePageChange("/institution/community/instructors")
            }
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {instructors ? (
            <>
              <Grid container spacing={6}>
                <Grid item xs={12} lg={5} xl={3}>
                  <Details instructors={instructors} />
                  <About instructors={instructors} bootcamps={bootcamps} />
                  <Skills instructors={instructors} />
                </Grid>
                <Grid item xs={12} lg={7} xl={9}>
                  <Grid item xs={12} lg={12}>
                    <Description instructors={instructors} />
                  </Grid>
                  <Content instructors={instructors} />
                  <Grid container spacing={6}>
                    <Grid item xs={12} lg={12}>
                      <ButtonForSolicitation />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography variant="h3" gutterBottom display="inline">
              Instructor no encontrado! {instructors}
            </Typography>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InstructorInformation;
