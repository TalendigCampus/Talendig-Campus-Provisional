import React from "react";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Formik, Field } from "formik";
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
  Select,
  MenuItem,
  Link,
  TextField as MuiTextField,
  Typography,
  FormControl,
} from "@mui/material";
import { spacing } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import { Edit, ListAlt } from "@mui/icons-material";

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
  bootcampName: Yup.string().required("Required"),
  initialDate: Yup.string().required("Required"),
  endDate: Yup.string().required("Required"),
  teacher: Yup.object().required("Required"),
});

function BasicForm(bootcampPrivate) {
  const [isNotEditing, setIsNotEditing] = React.useState(true);
  const navigate = useNavigate();

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
      console.log(values);
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
      initialValues={bootcampPrivate}
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
                ¡El Bootcamp ha sido editado exitosamente!
              </Alert>
            )}

            {isSubmitting ? (
              <Box display="flex" justifyContent="center" my={6}>
                <CircularProgress />
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                  <Grid item md={12}>
                    <TextField
                      name="bootcampName"
                      label="Nombre del bootcamp"
                      value={values.bootcampName}
                      disabled={isNotEditing}
                      error={Boolean(
                        touched.bootcampName && errors.bootcampName
                      )}
                      fullWidth
                      helperText={touched.bootcampName && errors.bootcampName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField
                      id="initialDate"
                      label="Fecha de inicio"
                      defaultValue={values.initialDate}
                      disabled={isNotEditing}
                      error={Boolean(touched.initialDate && errors.initialDate)}
                      fullWidth
                      helperText={touched.initialDate && errors.initialDate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField
                      id="endDate"
                      label="Fecha de finalización"
                      defaultValue={values.endDate}
                      disabled={isNotEditing}
                      error={Boolean(touched.endDate && errors.endDate)}
                      fullWidth
                      helperText={touched.endDate && errors.endDate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      my={2}
                    />
                  </Grid>
                  <Grid item md={12}>
                    <FormControl>
                      <InputLabel
                        id="demo-simple-select-autowidth-label"
                        disabled={isNotEditing}
                      >
                        Instructor
                      </InputLabel>
                      <Select
                        id="teacher"
                        label="Instructor"
                        value={values.teacher.id}
                        disabled={isNotEditing}
                        error={Boolean(touched.teacher && errors.teacher)}
                        fullWidth
                        helperText={touched.teacher && errors.teacher}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        my={2}
                      >
                        <MenuItem value={values.teacher.id}>
                          {values.teacher.name}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
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
                      color="success"
                      onClick={() =>
                        handlePageChange("/admin/dashboard/bootcamps/list")
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

function FormikPage(bootcampPrivate) {
  return (
    <React.Fragment>
      <Helmet title="Bootcamp Form" />
      <BasicForm {...bootcampPrivate} />
    </React.Fragment>
  );
}

export default FormikPage;
