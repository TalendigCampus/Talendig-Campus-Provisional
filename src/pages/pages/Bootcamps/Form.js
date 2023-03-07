import React from "react";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { Edit2, List } from "react-feather";

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
  Select,
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
  firstName: "Lucy",
  lastName: "Lavender",
  email: "lucylavender@gmail.com",
  password: "mypassword123",
  confirmPassword: "mypassword123",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
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

function BootcampForm() {
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
                [DEMO] Your data has been submitted successfully!
              </Alert>
            )}

            {isSubmitting ? (
              <Box display="flex" justifyContent="center" my={6}>
                <CircularProgress />
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  name="bootcampName"
                  label="Nombre del bootcamp"
                  value={values.firstName}
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="initialDate"
                  label="Fecha de inicio"
                  value={values.lastName}
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="date"
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="endDate"
                  label="Fecha de finalización"
                  value={values.lastName}
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="date"
                  variant="outlined"
                  my={2}
                />

                <TextField
                  name="teacher"
                  label="Instructor"
                  value={values.password}
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type=""
                  variant="outlined"
                  my={2}
                />

                {/* <Select
                  name="teacher"
                  label="Instructor"
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  mt={3}
                >
                  <Edit2 />
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  mt={3}
                  ml={2}
                >
                  <List />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </Formik>
  );
}

export default BootcampForm;
