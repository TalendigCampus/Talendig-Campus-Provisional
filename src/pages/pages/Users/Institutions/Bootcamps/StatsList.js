import Stats from "./Stats";
import React from "react";
import { Grid } from "@mui/material";
import { JSXICONS } from "../../common/constants/data";

const STATSDATA = [
  { id: 1, name: "Bootcamps impartidos", stat: "19", icon: JSXICONS["done"] },
  {
    id: 2,
    name: "Bootcamps impartiendose",
    stat: "10",
    icon: JSXICONS["clock"],
  },
  {
    id: 3,
    name: "Bootcamps +30 talentos",
    stat: "15",
    icon: JSXICONS["user"],
  },
];

function StatsList() {
  const dataToShow = STATSDATA;

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
    </>
  );
}

export default StatsList;
