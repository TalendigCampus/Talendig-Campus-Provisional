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

import {
  JSXICONS,
  STATSQUANTITYBYPAGINATION,
} from "../../common/constants/data";

const Spacer = styled.div(spacing);
const Pagination = styled(MuiPagination)(spacing);
const Typography = styled(MuiTypography)(spacing);

export default function BootcapmsDispo({
  name,
  bootcamps,
  quantityPerView,
  showName = true,
}) {
  const [page, setPage] = useState(1);
  const pageQuantity = Math.ceil(bootcamps.length / quantityPerView);
  const dataToShow = bootcamps.slice(
    (page - 1) * quantityPerView,
    page * quantityPerView
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <React.Fragment>
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          {showName ? (
            <Typography variant="h3" gutterBottom>
              {name}
            </Typography>
          ) : null}
        </Grid>
      </Grid>

      {bootcamps.length ? (
        <>
          <Grid container spacing={6}>
            {dataToShow.map((bootcamp) => (
              <Grid key={bootcamp.id} item xs={6} sm={4} md={4} lg={3} xl={3}>
                <MediaCard key={bootcamp.id} bootcamp={bootcamp} />
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
        </>
      ) : (
        <Typography
          variant="h5"
          style={{ textAlign: "center", marginTop: "10px" }}
          gutterBottom
        >
          No hay bootcamps para mostrar
        </Typography>
      )}

      <Spacer mb={15} />
    </React.Fragment>
  );
}
