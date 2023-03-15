import React from "react";
import styled from "styled-components/macro";

import { Badge, Grid, Avatar, Typography } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { PERFILES } from "../../common/constants/data";

const Footer = styled.div`
  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;
  padding: ${(props) => props.theme.spacing(2.75)}
    ${(props) => props.theme.spacing(4)};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const FooterText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
`;

const FooterSubText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
  font-size: 0.7rem;
  display: block;
  padding: 1px;
`;

const FooterBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)};
  span {
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

// background-color: ${(props) =>
//   props.theme.sidebar.footer.online.background};

const SidebarFooter = ({ ...rest }) => {
  const { user } = useAuth();
  const onLine = navigator.onLine;
  let styleOnline = onLine ? "green" : "red";
  console.log(user);
  return (
    <Footer {...rest}>
      <Grid container spacing={2}>
        <Grid item>
          <FooterBadge
            sx={{ span: { backgroundColor: styleOnline } }}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            {!!user && <Avatar alt={user.name} src={user.image} />}
            {/* Demo data */}
            {!user && (
              <Avatar
                alt="Lucy Lavender"
                src="/static/img/avatars/joseArmando.jpg"
              />
            )}
          </FooterBadge>
        </Grid>
        <Grid item>
          {!!user && <FooterText variant="body2">{user.name}</FooterText>}
          {/* Demo data */}
          {!user && <FooterText variant="body2">{user.name}</FooterText>}
          <FooterSubText variant="caption">
            {PERFILES[user.profile]}
          </FooterSubText>
        </Grid>
      </Grid>
    </Footer>
  );
};

export default SidebarFooter;
