import React from "react";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";

import {
  Alert as MuiAlert,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
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

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const timeOut = (time) => new Promise((res) => setTimeout(res, time));

const initialValues = {
  firstName: "Alexander",
  lastName: "Santos",
  birth: "1980-05-22",
  identificationCard: "012-0987987-9",
  phoneNumber: "829-098-0987",
  company: "Banco Popular",
  email: "alex@gmail.com",
  address: {
    street: "Nueva Vista",
    numHouseOrApartment: "#99",
    neighborhood: "Los Jardinez",
    city: "Santo Domingo",
  },
  password: "mypassword123",
  confirmPassword: "mypassword123",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  birth: Yup.string().required("Required"),
  identificationCard: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
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

function BasicForm() {
  const handleSubmit = async (
    values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    try {
      await timeOut(1500);
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
      initialValues={initialValues}
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
                      name="firstName"
                      label="Nombres"
                      value={values.firstName}
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="lastName"
                      label="Apellidos"
                      value={values.lastName}
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
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
                      name="identificationCard"
                      label="Cedula"
                      value={values.identificationCard}
                      error={Boolean(
                        touched.identificationCard && errors.identificationCard
                      )}
                      fullWidth
                      helperText={
                        touched.identificationCard && errors.identificationCard
                      }
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
                      name="company"
                      label="Empresa"
                      value={values.company}
                      error={Boolean(touched.company && errors.company)}
                      fullWidth
                      helperText={touched.company && errors.company}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                </Grid>

                <TextField
                  name="email"
                  label="Correo"
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
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
                  mt={3}
                  ml={3}
                >
                  Cancelar
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </Formik>
  );
}

function FormikPage() {
  return (
    <React.Fragment>
      <Helmet title="Recruiter Form" />
      <BasicForm />
    </React.Fragment>
  );
}

export default FormikPage;