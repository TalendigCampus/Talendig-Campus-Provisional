import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";
import { AvatarGroup as MuiAvatarGroup } from "@mui/material";
import { spacing } from "@mui/system";
import { DeleteOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTalent,
  selectTalents,
  setTalentFavorite,
} from "../../../../redux/slices/talentSlice";
import UndoAction from "./UndoAction";
import RecruiterTalentDialog from "./RecruiterDialog";
import { RECRUITER_ACTION_TYPE } from "../../../../common/constants/data";
import { setShowEmerge } from "../../../../redux/slices/recruiterSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Chip = styled(MuiChip)`
  height: 25px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const BigAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

const AvatarGroup = styled(MuiAvatarGroup)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Project = ({ image, title, description, chip, pathToGo, talentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    dispatch(setCurrentTalent({ talentId }));
    navigate(pathToGo);
  };

  const removeFromFavorite = (talentId) => {
    dispatch(setCurrentTalent({ talentId }));
    dispatch(setShowEmerge({ status: true }));
  };
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      pt={2}
    >
      {image ? <BigAvatar src={image} title="Talent Photo" /> : null}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography mb={4} gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Button
          variant="contained"
          size="small"
          onClick={() => removeFromFavorite(talentId)}
        >
          <DeleteOutline />
        </Button>

        <Typography mb={2} mt={4} color="textSecondary" component="p">
          {description.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          onClick={() => handlePageChange(pathToGo)}
        >
          Ver perfil
        </Button>
      </CardActions>
    </Card>
  );
};

function Projects() {
  const talents = useSelector(selectTalents);
  const favoriteTalents = talents.filter(
    (talent) => talent?.recruiterProcess?.category?.favorite
  );
  console.log(favoriteTalents);
  return (
    <React.Fragment>
      <Helmet title="Projects" />

      <Typography variant="h3" gutterBottom display="inline">
        Favoritos
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Pages
        </Link>
        <Typography>Projects</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        {favoriteTalents.map((currentTalent) => (
          <Grid item xs={12} lg={3}>
            <Project
              title={`${currentTalent.talentName} ${currentTalent.talentLastName}`}
              description={currentTalent.biography}
              image={currentTalent.photoUrl}
              pathToGo="/recruiters/talentInfo"
              talentId={currentTalent.talentId}
            />
          </Grid>
        ))}
        <RecruiterTalentDialog
          actionToPerform={RECRUITER_ACTION_TYPE.removeFromFavorite}
        />
        <UndoAction
          actionToPerform={RECRUITER_ACTION_TYPE.redoRemoveFromFavorite}
        />
      </Grid>
    </React.Fragment>
  );
}

export default Projects;
