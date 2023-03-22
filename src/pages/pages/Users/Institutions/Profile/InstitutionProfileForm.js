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
  selectinstitutions,
  updateInstitution,
  setCurrentTalent,
} from "../../../../../redux/slices/institutionSlice";
import { selectBootcamps } from "../../../../../redux/slices/bootcampSlice";

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
  institution: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  institutionEmail: Yup.string().email().required("Required"),
  address: Yup.string().required("Required"),
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

function BasicForm({ institution }) {
  const [isNotEditing, setIsNotEditing] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(institution);
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  const handleEdit = () => {
    setIsNotEditing((currentSate) => !currentSate);
  };

  const handleSubmit = async (
    values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    setIsNotEditing((currentSate) => !currentSate);
    try {
      await timeOut(1500);
      values = { ...values, bootcamp: institution.id };
      dispatch(updateInstitution({ selectinstitutions: values }));
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
      initialValues={institution}
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
                <Grid item>
                  <TextField
                    name="institution"
                    label="Nombres"
                    value={values.institution}
                    disabled={isNotEditing}
                    error={Boolean(touched.institution && errors.institution)}
                    fullWidth
                    helperText={touched.institution && errors.institution}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Grid item>
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
                  name="institutionEmail"
                  label="Correo"
                  value={values.institutionEmail}
                  disabled={isNotEditing}
                  error={Boolean(
                    touched.institutionEmail && errors.institutionEmail
                  )}
                  fullWidth
                  helperText={
                    touched.institutionEmail && errors.institutionEmail
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="address"
                  label="Calle"
                  value={values.address}
                  disabled={isNotEditing}
                  error={Boolean(
                    touched.address?.street && errors.address?.street
                  )}
                  fullWidth
                  helperText={touched.address && errors.address}
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

function InstitutionProfileForm({ institution }) {
  const talentInfo = useSelector(selectinstitutions);
  const [talent, setTalent] = React.useState(null);
  const bootcamps = useSelector(selectBootcamps);

  // React.useEffect(() => {
  //   const result = bootcamps.find(
  //     (bootcamp) => bootcamp.id === talentInfo.bootcamp
  //   );
  //   setTalent({
  //     ...talentInfo,
  //     bootcamp: result.bootcampName,
  //     bootcampId: talentInfo.bootcamp,
  //   });
  // }, []);

  return (
    <React.Fragment>
      <Helmet title="Recruiter Form" />
      <BasicForm institution={institution} />
    </React.Fragment>
  );
}

export default InstitutionProfileForm;
