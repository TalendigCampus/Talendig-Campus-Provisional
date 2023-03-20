import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";

import { Avatar, Paper, Typography } from "@mui/material";

import SignInComponent from "./SignForm";

// const Brand = styled(Logo)`
//   fill: ${(props) => props.theme.palette.primary.main};
//   width: 64px;
//   height: 64px;
//   margin-bottom: 32px;
// `;

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(5)};
`;

function SignIn() {
  return (
    <React.Fragment>
      {/* <Brand /> */}
      <Wrapper>
        <Helmet title="Inicio de sesión" />
        <BigAvatar alt="talendig" src="/static/img/talents/persona88.svg" />
        <Typography component="h1" variant="body1" align="center" mb={2}>
          Inicia sesión para continuar
        </Typography>

        <SignInComponent />
      </Wrapper>
    </React.Fragment>
  );
}

export default SignIn;
