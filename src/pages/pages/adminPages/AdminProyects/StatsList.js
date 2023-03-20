import Stats from "./Stats";
import { spacing } from "@mui/system";
import React, { useState } from "react";
import { Grid, Card as MuiCard, CardContent } from "@mui/material";
import styled from "styled-components/macro";
import {
  JSXICONS,
  STATSQUANTITYBYPAGINATION,
} from "../../../../common/constants/data";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const STATSDATA = [
  { id: 1, name: "Proyectos subidos", stat: "200", icon: JSXICONS["bootcamp"] },
  {
    id: 2,
    name: "Talentos con +7 proyectos",
    stat: "10",
    icon: JSXICONS["user"],
  },
];

function StatsList() {
  const [page, setPage] = useState(1);
  const dataToShow = STATSDATA.slice(
    (page - 1) * STATSQUANTITYBYPAGINATION,
    page * STATSQUANTITYBYPAGINATION
  );

  return (
    <Card
      mb={1}
      style={{ backgroundColor: "transparent", border: "1px solid #E5E4E2" }}
    >
      <CardContent>
        <Grid container spacing={6}>
          {dataToShow.map((stat) => (
            <Grid key={stat.id} item xs={12} sm={6} md={6} lg={6} xl={6}>
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
      </CardContent>
    </Card>
  );
}

export default StatsList;
