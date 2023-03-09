import React from "react";
import MediaCard from "./Card";
import styled from "styled-components/macro";
import { useState } from "react";
import { spacing } from "@mui/system";

import {
  Grid,
  Pagination as MuiPagination,
  Typography as MuiTypography,
} from "@mui/material";

import JsonBootcamp from "./bootcampsDispo.json";

import {
  JSXICONS,
  STATSQUANTITYBYPAGINATION,
} from "../../common/constants/data";

const Spacer = styled.div(spacing);
const Pagination = styled(MuiPagination)(spacing);
const Typography = styled(MuiTypography)(spacing);

export function BootcapmsDispo() {
  const [page, setPage] = useState(1);
  const pageQuantity = Math.ceil(
    JsonBootcamp.length / STATSQUANTITYBYPAGINATION
  );
  const dataToShow = JsonBootcamp.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <React.Fragment>
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Bootcamps disponibles
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        {dataToShow.map((stat) => (
          <Grid item xs={12} sm={12} md={12} lg={2.9} xl={2.9}>
            <MediaCard
              key={stat.id}
              bootcampImage={stat.bootcampImage}
              bootcampName={stat.bootcampName}
              bootcampDescription={stat.bootcampDescription}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination
        mb={2}
        count={pageQuantity}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
        page={page}
        onChange={handleChange}
      />

      <Spacer mb={15} />
    </React.Fragment>
  );
}

export function MyBootcamps() {
  const [page, setPage] = useState(1);
  const pageQuantity = Math.ceil(
    JsonBootcamp.length / STATSQUANTITYBYPAGINATION
  );
  const dataToShow = JsonBootcamp.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <React.Fragment>
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Mis Bootcamps
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        {dataToShow.map((stat) => (
          <Grid item xs={12} sm={12} md={12} lg={2.9} xl={2.9}>
            <MediaCard
              key={stat.id}
              bootcampImage={stat.bootcampImage}
              bootcampName={stat.bootcampName}
              bootcampDescription={stat.bootcampDescription}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination
        mb={2}
        count={pageQuantity}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
        page={page}
        onChange={handleChange}
      />

      <Spacer mb={30} />
    </React.Fragment>
  );
}
