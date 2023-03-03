import React from "react";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import {
  Alert as MuiAlert,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  IconButton,
  Card as MuiCard,
  CardContent,
  CircularProgress,
  Divider as MuiDivider,
  Grid,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import {
  Edit,
  SwapCalls,
  InsertDriveFile,
  ImportContacts,
  ListAlt,
} from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import {
  CurrentTalent,
  updateTalent,
  setCurrentTalent,
} from "../../../redux/slices/talentSlice.js";
import { selectBootcamps } from "../../../redux/slices/bootcampSlice";

import {
  setCurrentProject,
  selectProjects,
} from "../../../redux/slices/projectsSlice";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const timeOut = (time) => new Promise((res) => setTimeout(res, time));

// const initialValues = {
//   firstName: "Alexander",
//   lastName: "Santos",
//   birth: "1980-05-22",
//   identificationCard: "012-0987987-9",
//   phoneNumber: "829-098-0987",
//   company: "Banco Popular",
//   email: "alex@gmail.com",
//   address: {
//     street: "Nueva Vista",
//     numHouseOrApartment: "#99",
//     neighborhood: "Los Jardinez",
//     city: "Santo Domingo",
//   },
//   password: "mypassword123",
//   confirmPassword: "mypassword123",
// };

const validationSchema = Yup.object().shape({
  talentName: Yup.string().required("Required"),
  talentLastName: Yup.string().required("Required"),
  birth: Yup.string().required("Required"),
  idCard: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  bootcamp: Yup.string().required("Required"),
  talentEmail: Yup.string().email().required("Required"),
  address: Yup.object().shape({
    street: Yup.string().required("Required"),
    numHouseOrApartment: Yup.string().required("Required"),
    neighborhood: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  }),
  password: Yup.string()
    .min(12, "Must be at least 12 characters")
    .max(255)
    .required("Required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

function BasicForm(talent) {
  const [isNotEditing, setIsNotEditing] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProjects = useSelector(selectProjects);

  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  const handleEdit = () => {
    setIsNotEditing((currentSate) => !currentSate);
  };

  const handleNavigate = (pathToGo, talentId) => {
    dispatch(setCurrentTalent({ talentId }));
    const project = userProjects.find(
      (project) => project.talentId === talentId
    );
    dispatch(setCurrentProject({ projectId: project.projectId }));
    navigate(pathToGo);
  };

  const handleSubmit = async (
    values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    setIsNotEditing((currentSate) => !currentSate);
    try {
      await timeOut(1500);
      values = { ...values, bootcamp: talent.bootcampId };
      dispatch(updateTalent({ currentTalent: values }));
      resetForm();
      setStatus({ sent: true });
      setSubmitting(false);
    } catch (error) {
      setStatus({ sent: false });
      setErrors({ submit: error.message });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={talent}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        status,
      }) => (
        <Card mb={6}>
          <CardContent>
            {status && status.sent && (
              <Alert severity="success" my={3}>
                Your data has been submitted successfully!
              </Alert>
            )}

            {isSubmitting ? (
              <Box display="flex" justifyContent="center" my={6}>
                <CircularProgress />
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                  <Grid item md={6}>
                    <TextField
                      name="talentName"
                      label="Nombres"
                      value={values.talentName}
                      disabled={isNotEditing}
                      error={Boolean(touched.talentName && errors.talentName)}
                      fullWidth
                      helperText={touched.talentName && errors.talentName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="talentLastName"
                      label="Apellidos"
                      value={values.talentLastName}
                      disabled={isNotEditing}
                      error={Boolean(
                        touched.talentLastName && errors.talentLastName
                      )}
                      fullWidth
                      helperText={
                        touched.talentLastName && errors.talentLastName
                      }
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="birth"
                      label="Fecha Nacimiento"
                      value={values.birth}
                      disabled={isNotEditing}
                      error={Boolean(touched.birth && errors.birth)}
                      fullWidth
                      helperText={touched.birth && errors.birth}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="idCard"
                      label="Cedula"
                      value={values.idCard}
                      disabled={isNotEditing}
                      error={Boolean(touched.idCard && errors.idCard)}
                      fullWidth
                      helperText={touched.idCard && errors.idCard}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="phoneNumber"
                      label="Telefono"
                      disabled={isNotEditing}
                      value={values.phoneNumber}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      fullWidth
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="bootcamp"
                      label="bootcamp"
                      value={values.bootcamp}
                      disabled={isNotEditing}
                      error={Boolean(touched.bootcamp && errors.bootcamp)}
                      fullWidth
                      helperText={touched.bootcamp && errors.bootcamp}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                </Grid>

                <TextField
                  name="biography"
                  label="Resumen"
                  placeholder="Escriba un resumen de usted:"
                  multiline
                  maxRows={Infinity}
                  value={values.biography}
                  disabled={isNotEditing}
                  error={Boolean(touched.biography && errors.biography)}
                  fullWidth
                  helperText={touched.biography && errors.biography}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="talentEmail"
                  label="Correo"
                  value={values.talentEmail}
                  disabled={isNotEditing}
                  error={Boolean(touched.talentEmail && errors.talentEmail)}
                  fullWidth
                  helperText={touched.talentEmail && errors.talentEmail}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="address.street"
                  label="Calle"
                  value={values.address.street}
                  disabled={isNotEditing}
                  error={Boolean(
                    touched.address?.street && errors.address?.street
                  )}
                  fullWidth
                  helperText={touched.address?.street && errors.address?.street}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="address.numHouseOrApartment"
                  label="Num Casa/Apartamento"
                  value={values.address.numHouseOrApartment}
                  disabled={isNotEditing}
                  error={Boolean(
                    touched.address?.numHouseOrApartment &&
                      errors.address?.numHouseOrApartment
                  )}
                  fullWidth
                  helperText={
                    touched.address?.numHouseOrApartment &&
                    errors.address?.numHouseOrApartment
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="address.neighborhood"
                  label="Sector"
                  value={values.address.neighborhood}
                  disabled={isNotEditing}
                  error={Boolean(
                    touched.address?.neighborhood &&
                      errors.address?.neighborhood
                  )}
                  fullWidth
                  helperText={
                    touched.address?.neighborhood &&
                    errors.address?.neighborhood
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="address.city"
                  label="Ciudad"
                  value={values.address.city}
                  disabled={isNotEditing}
                  error={Boolean(touched.address?.city && errors.address?.city)}
                  fullWidth
                  helperText={touched.address?.city && errors.address?.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="password"
                  label="Password"
                  value={values.password}
                  disabled={isNotEditing}
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="confirmPassword"
                  label="Confirm password"
                  value={values.confirmPassword}
                  disabled={isNotEditing}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  fullWidth
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  variant="outlined"
                  my={2}
                />
                {!isNotEditing && (
                  <>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      mt={3}
                    >
                      Guardar
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="error"
                      onClick={handleEdit}
                      mt={3}
                      ml={3}
                    >
                      Cancelar
                    </Button>
                  </>
                )}
                {isNotEditing && (
                  <>
                    <Button
                      type="button"
                      variant="contained"
                      color="warning"
                      onClick={handleEdit}
                      mt={3}
                      ml={3}
                    >
                      <Edit />
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleNavigate(
                          "/admin/dashboard/users/talents/roadmap",
                          values.talentId
                        )
                      }
                      mt={3}
                      ml={3}
                    >
                      <SwapCalls />
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      color="info"
                      onClick={() =>
                        handleNavigate(
                          `/admin/dashboard/users/talents/curriculum`,
                          values.talentId
                        )
                      }
                      mt={3}
                      ml={3}
                    >
                      <InsertDriveFile />
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      color="error"
                      onClick={() =>
                        handleNavigate(
                          `/admin/dashboard/users/projects/list/folder/details`,
                          values.talentId
                        )
                      }
                      mt={3}
                      ml={3}
                    >
                      <ImportContacts />
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      color="success"
                      onClick={() =>
                        handlePageChange("/admin/dashboard/users/talents/list")
                      }
                      mt={3}
                      ml={3}
                    >
                      <ListAlt />
                    </Button>
                  </>
                )}
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </Formik>
  );
}

function FormikPage() {
  const talentInfo = useSelector(CurrentTalent);
  const [talent, setTalent] = React.useState(null);
  const bootcamps = useSelector(selectBootcamps);

  React.useEffect(() => {
    const result = bootcamps.find(
      (bootcamp) => bootcamp.id === talentInfo.bootcamp
    );
    setTalent({
      ...talentInfo,
      bootcamp: result.bootcampName,
      bootcampId: talentInfo.bootcamp,
    });
  }, []);

  return (
    <React.Fragment>
      <Helmet title="Recruiter Form" />
      {talent ? <BasicForm {...talent} /> : null}
    </React.Fragment>
  );
}

export default FormikPage;
