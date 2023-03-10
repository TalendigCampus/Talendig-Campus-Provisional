import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  TextField as MuiTextField,
} from "@mui/material";
import { spacing } from "@mui/system";

/* import Actions from "./Actions"; */
import BootcapmsDispo from "../home/CardContent";
import { useDispatch } from "react-redux";
import {
  setCurrentTalent,
  CurrentTalent,
} from "../../redux/slices/talentSlice";
import { setProjectsByTalent } from "../../redux/slices/projectsSlice";
import { selectBootcamps } from "../../redux/slices/bootcampSlice";
import { useSelector } from "react-redux";
import { ConstructionOutlined } from "@mui/icons-material";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Spacer = styled.div(spacing);

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  width: 200px;
`;

function TalentHome({ name, getBootcamp }) {
  const [search, setSearch] = React.useState("");
  const [bootcampsToShow, setBootcampsToShow] = React.useState([]);
  const [bootcampsGetted, setBootcampsGetted] = React.useState([]);
  const bootcamps = useSelector(selectBootcamps);
  const talent = useSelector(CurrentTalent);

  React.useEffect(() => {
    setBootcampsGetted(getBootcamp(bootcamps, talent.talentId));
  }, [talent, bootcamps, getBootcamp]);

  React.useEffect(() => {
    if (search) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setBootcampsToShow(
        bootcampsGetted.filter((bootcamp) =>
          bootcamp.bootcampName.toLowerCase().includes(search)
        )
      );
    } else {
      setBootcampsToShow(bootcampsGetted);
    }
  }, [search, bootcampsGetted]);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid
        justifyContent="space-between"
        alignItems="center"
        container
        spacing={6}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic"
            label="Buscar bootcamps"
            variant="standard"
            onChange={(e) => handleSearch(e)}
          />
        </Grid>
      </Grid>

      <Divider my={6} />

      <BootcapmsDispo
        name={"Mis bootcamps"}
        bootcamps={bootcampsToShow}
        quantityPerView={15}
        showName={false}
      />
    </React.Fragment>
  );
}

export default TalentHome;
