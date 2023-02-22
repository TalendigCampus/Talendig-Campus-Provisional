import { Pagination as MuiPagination } from "@mui/material";
import Stats from "./Stats";
import { spacing } from "@mui/system";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components/macro";
import {
  STATSDATA,
  STATSQUANTITYBYPAGINATION,
} from "../../../common/constants/data";

const Pagination = styled(MuiPagination)(spacing);
const Spacer = styled.div(spacing);

function StatsList() {
  const [page, setPage] = useState(1);
  const pageQuantity = Math.ceil(STATSDATA.length / STATSQUANTITYBYPAGINATION);
  const dataToShow = STATSDATA.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={6}>
        {dataToShow.map((stat) => (
          <Grid key={stat.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Stats
              key={stat.id}
              title={stat.name}
              stat={stat.stat}
              icon={stat.icon}
            />
          </Grid>
        ))}
      </Grid>

      <Spacer mb={6} />

      <Pagination
        mb={2}
        count={pageQuantity}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
        page={page}
        onChange={handleChange}
      />
    </>
  );
}

export default StatsList;
