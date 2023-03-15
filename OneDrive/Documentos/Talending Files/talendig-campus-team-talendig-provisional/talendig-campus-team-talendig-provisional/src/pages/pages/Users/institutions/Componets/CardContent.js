import React from "react";
import { MediaCard, MyMediaCard } from "./Card";
import styled from "styled-components/macro";
import { useState } from "react";
import { spacing } from "@mui/system";

import {
  Grid,
  Pagination as MuiPagination,
  Typography as MuiTypography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { selectBootcamps } from "../../../../../redux/slices/bootcampSlice";

const Spacer = styled.div(spacing);
const Pagination = styled(MuiPagination)(spacing);
const Typography = styled(MuiTypography)(spacing);
const STATSQUANTITYBYPAGINATION = 3;

export function BootcapmsDispo({ rank }) {
  const rows = useSelector(selectBootcamps);
  const [page, setPage] = useState(1);
  const dataToShow = rows.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  let newDataRank = rows.filter((stat) => {
    if (stat.rank >= 8 && rank === true) {
      return stat;
    } else if (rank === false) {
      return stat;
    }
  });
  const pageQuantity = Math.ceil(
    newDataRank.length / STATSQUANTITYBYPAGINATION
  );

  let dataToShowRank = newDataRank.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  console.log(newDataRank);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <React.Fragment>
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item></Grid>
      </Grid>

      <Grid container spacing={6}>
        {dataToShowRank.map((stat) => {
          if (stat.rank >= 8) {
            return (
              <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
                <MediaCard
                  id={stat.id}
                  image={stat.image}
                  bootcampName={stat.bootcampName}
                  description={stat.description}
                />
              </Grid>
            );
          } else if (rank === false) {
            return (
              <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
                <MediaCard
                  id={stat.id}
                  image={stat.image}
                  bootcampName={stat.bootcampName}
                  description={stat.description}
                />
              </Grid>
            );
          }
        })}
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

export function MyBootcamps({ InPossession }) {
  const rows = useSelector(selectBootcamps);
  const [page, setPage] = useState(1);
  let newDataAvailable = rows.filter((stat) => {
    if (stat.InPossession == true && InPossession === true) {
      return stat;
    }
  });
  console.log(rows);
  const pageQuantity = Math.ceil(
    newDataAvailable.length / STATSQUANTITYBYPAGINATION
  );

  let dataToShowAvailable = newDataAvailable.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={6}>
        {dataToShowAvailable.map((stat) => {
          if (stat.InPossession == true && InPossession === true) {
            return (
              <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
                <MyMediaCard
                  id={stat.id}
                  image={stat.image}
                  bootcampName={stat.bootcampName}
                  description={stat.description}
                />
              </Grid>
            );
          }
        })}
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
