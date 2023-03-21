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
} from "../../../../common/constants/data";
import { useDispatch, useSelector } from "react-redux";
import { selectBootcamps } from "../../../../redux/slices/bootcampSlice";
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
          <Grid item xs={12} sm={12} md={6} lg={2.9} xl={2.9}>
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

export function MyBootcamps({ instructorId }) {
  const [page, setPage] = useState(1);
  let bootcamps = useSelector(selectBootcamps);

  const instructorBootcamp = () => {
    return bootcamps.filter((bootcamp) => bootcamp.teacherId == instructorId);
  };
  bootcamps = instructorBootcamp();
  const pageQuantity = Math.ceil(bootcamps.length / STATSQUANTITYBYPAGINATION);
  const dataToShow = bootcamps.slice(
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
          <Grid item key={stat.id} xs={12} sm={12} md={12} lg={4} xl={3}>
            <MediaCard
              key={stat.id}
              bootcampImage={stat.image}
              bootcampName={stat.bootcampName}
              bootcampDescription={stat.description}
              bootcampId={stat.id}
            />
          </Grid>
        ))}
        <Grid item key={"2"} xs={12} sm={12} md={12} lg={4} xl={3}>
          <MediaCard
            key={"2"}
            bootcampImage={
              "https://images.yourstory.com/cs/1/6b460cd040d711e994bbefffe3577d8b/full-stack-web-development-1586433444650.png?w=752&fm=auto&ar=2:1&mode=crop&crop=faces"
            }
            bootcampName={"Full Stack Bootcamp"}
            bootcampDescription={
              "Bootcamp donde aprenderás a crear aplicaciones web con Full Stack"
            }
            bootcampId={"2"}
          />
        </Grid>
        <Grid item key={"3"} xs={12} sm={12} md={12} lg={4} xl={3}>
          <MediaCard
            key={"3"}
            bootcampImage={
              "https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/front-end-developer.png"
            }
            bootcampName={"Frontend Bootcamp"}
            bootcampDescription={
              "Bootcamp donde aprenderás a crear aplicaciones web con Frontend"
            }
            bootcampId={"3"}
          />
        </Grid>
        <Grid item key={"4"} xs={12} sm={12} md={12} lg={4} xl={3}>
          <MediaCard
            key={"4"}
            bootcampImage={
              "https://www.dongee.com/tutoriales/content/images/2023/01/image-17.png"
            }
            bootcampName={"Backend Bootcamp"}
            bootcampDescription={
              "Bootcamp donde aprenderás a crear aplicaciones web con Backend"
            }
            bootcampId={"4"}
          />
        </Grid>
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
