import { Pagination as MuiPagination } from "@mui/material";
import Stats from "./Stats";
import { spacing } from "@mui/system";
import React, { useState } from "react";
import { Grid, Card as MuiCard, CardContent } from "@mui/material";
import styled from "styled-components/macro";
import {
  JSXICONS,
  STATSQUANTITYBYPAGINATION,
} from "../../../common/constants/data";

const Pagination = styled(MuiPagination)(spacing);

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const STATSDATA = [
  { id: 1, name: "Usuarios registrados", stat: "200", icon: JSXICONS["user"] },
  { id: 2, name: "Bootcamps", stat: "10", icon: JSXICONS["bootcamp"] },
  {
    id: 3,
    name: "Usuarios conectados",
    stat: "50",
    icon: JSXICONS["conected"],
  },
  {
    id: 4,
    name: "Curriculums generados",
    stat: "12",
    icon: JSXICONS["curriculum"],
  },
  { id: 5, name: "Códigos subidos", stat: "29", icon: JSXICONS["code"] },
  { id: 6, name: "Proyectos creados", stat: "19", icon: JSXICONS["project"] },
  {
    id: 7,
    name: "Portafolios +5 proyectos",
    stat: "22",
    icon: JSXICONS["portfolio"],
  },
  { id: 8, name: "Campeonatos", stat: "4", icon: JSXICONS["campionship"] },
  {
    id: 9,
    name: "Talentos valoración +7",
    stat: "18",
    icon: JSXICONS["campionship"],
  },
  {
    id: 10,
    name: "Talentos roadmap 70%",
    stat: "12",
    icon: JSXICONS["talent"],
  },
  { id: 11, name: "Post creados", stat: "25", icon: JSXICONS["post"] },
  {
    id: 12,
    name: "Notifiaciones enviadas",
    stat: "148",
    icon: JSXICONS["notification"],
  },
  { id: 13, name: "Grupos", stat: "56", icon: JSXICONS["group"] },
  { id: 14, name: "Tecnologías", stat: "27", icon: JSXICONS["tecnology"] },
];

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
    <Card
      mb={1}
      style={{ backgroundColor: "transparent", border: "1px solid grey" }}
    >
      <CardContent>
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
      </CardContent>
    </Card>
  );
}

export default StatsList;
