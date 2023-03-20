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
import Actions from "./Actions";
import MyStudentsAdd from "./MyStudentsAdd";
import {
  currentSelection,
  currentTalentIntership,
  selectStudents,
  setShowStudentsFree,
  setTalentsIntership,
  setTitleInternship,
  titleInternship,
} from "../../../../../../redux/slices/institutionSlice";
import { useDispatch, useSelector } from "react-redux";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const timeOut = (time) => new Promise((res) => setTimeout(res, time));

const initialValues = {
  id: 0,
  nameGroup: "",
  laboralArea: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  nameGroup: Yup.string().required("Required"),
  laboralArea: Yup.string().required("Required"),
  description: Yup.string(),

  // email: Yup.string().email().required("Required"),
  // password: Yup.string()
  //   .min(12, "Must be at least 12 characters")
  //   .max(255)
  //   .required("Required"),
  // confirmPassword: Yup.string().when("password", {
  //   is: (val) => (val && val.length > 0 ? true : false),
  //   then: Yup.string().oneOf(
  //     [Yup.ref("password")],
  //     "Both password need to be the same"
  //   ),
  // }),
});

function BasicForm() {
  const titleInternshipRedux = useSelector(titleInternship);
  const newcurrentTalentIntership = useSelector(currentSelection);

  const dispatch = useDispatch();
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
    const titles = {
      nameGroup: values.nameGroup,
      laboralArea: values.laboralArea,
      description: values.description,
      talents: newcurrentTalentIntership,
    };
    dispatch(setTitleInternship(titles));
    console.log(titleInternshipRedux);
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
            <Typography variant="h3" gutterBottom>
              Formulario
            </Typography>

            {status && status.sent && (
              <Alert severity="success" my={3}>
                Ha sido enviado correctamente!
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
                      name="nameGroup"
                      label="Nombre del grupo pasante"
                      value={values.nameGroup}
                      error={Boolean(touched.nameGroup && errors.nameGroup)}
                      fullWidth
                      helperText={touched.nameGroup && errors.nameGroup}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      name="laboralArea"
                      label="Area laboral a solicitar"
                      value={values.laboralArea}
                      error={Boolean(touched.laboralArea && errors.laboralArea)}
                      fullWidth
                      helperText={touched.laboralArea && errors.laboralArea}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    name="description"
                    label="Descripcion del grupo"
                    value={values.description}
                    error={Boolean(touched.description && errors.description)}
                    fullWidth
                    helperText={touched.description && errors.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    my={2}
                  />
                </Grid>
                <Divider my={6} />
                <MyStudentsAdd />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  mt={3}
                >
                  Guardar y enviar datos
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </Formik>
  );
}

function InternshipForm() {
  const student = useSelector(selectStudents);
  setShowStudentsFree(student);
  return (
    <React.Fragment>
      <Helmet title="Formik" />
      <Typography variant="h3" gutterBottom display="inline">
        Solicitar Pasantia
      </Typography>
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Talentos de la institucion
            </Link>
            <Link component={NavLink} to="/">
              Pasantia
            </Link>
            <Typography>Solicitar</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Actions />
        </Grid>
      </Grid>
      <Divider my={6} />
      <BasicForm />
    </React.Fragment>
  );
}

export default InternshipForm;
