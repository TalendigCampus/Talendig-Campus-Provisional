import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

import {
  Alert as MuiAlert,
  Checkbox,
  FormControlLabel,
  Button,
  TextField as MuiTextField,
} from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "../../../hooks/useAuth";
import { ADMIN, PROFILES, URLPROFILE } from "../../../common/constants/data";
import { setCurrentTalent } from "../../../redux/slices/talentSlice";
import { setCurrentRecruiter } from "../../../redux/slices/recruiterSlice";
import { setCurrentInstructor } from "../../../redux/slices/instructorSlice";
import { useDispatch } from "react-redux";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signIn } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        submit: false,
      }}
      enableReinitialize={true}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Debes colocar un correo valido")
          .max(255)
          .required("El correo es requerido"),
        password: Yup.string().max(255).required("La contraseña es requerida"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const user = await signIn(values.email, values.password);

          if (user) {
            switch (user.perfil) {
              case PROFILES.talent:
                dispatch(setCurrentTalent({ talentId: user.talentId }));
                break;
              case PROFILES.recruiter:
                dispatch(
                  setCurrentRecruiter({ recruiterId: user.recruiterId })
                );
                break;
              case PROFILES.instructor:
                dispatch(
                  setCurrentInstructor({ instructorId: user.instructorId })
                );
                break;
              case PROFILES.institution:
                // dispatch(
                //   setCurrentInstitution({ recruiterId: user.recruiterId })
                // );
                break;
              case PROFILES.admin:
              default:
                break;
            }
            navigate(URLPROFILE[user.perfil]);
          } else {
            const message = "Datos incorrectos.";

            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);
          }
        } catch (error) {
          const message = error.message || "Algo ha salido mal";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          {/* <Alert mt={3} mb={3} severity="info">
            Use <strong>demo@bootlab.io</strong> and{" "}
            <strong>unsafepassword</strong> to sign in
          </Alert> */}
          {errors.submit && (
            <Alert mt={2} mb={3} severity="warning">
              {errors.submit}
            </Alert>
          )}
          <TextField
            type="email"
            name="email"
            label="Email Address"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            onBlur={handleBlur}
            onChange={handleChange}
            my={2}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={values.password}
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            onBlur={handleBlur}
            onChange={handleChange}
            my={2}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Iniciar sesión
          </Button>
          {/* <Button
            component={Link}
            to="/auth/reset-password"
            fullWidth
            color="primary"
          >
            Forgot password
          </Button> */}
        </form>
      )}
    </Formik>
  );
}

export default SignIn;
