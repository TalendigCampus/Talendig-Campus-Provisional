import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  Grid,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { PROJECT_UPDATE_TYPE } from "../../../../../common/constants/data";
import { useSelector, useDispatch } from "react-redux";
import {
  currentFile,
  updateProject,
} from "../../../../../redux/slices/projectsSlice";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

function ProjectFileDetails() {
  const currentSelectedFile = useSelector(currentFile);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(currentSelectedFile.name);

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />

      <Typography variant="h3" gutterBottom display="inline">
        {currentSelectedFile?.name || ""}
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/recruiters/talentProjectsFolderFiles">
          Lista de Archivos
        </Link>
        <Typography>Archivo</Typography>
        <Typography>detalles</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Card mb={6}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <TextField
                id="standard-basic"
                label={"Cambiar nombre: "}
                variant="standard"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                mt={3}
                ml={3}
                onClick={() =>
                  dispatch(
                    updateProject({
                      fileId: currentSelectedFile.fileId,
                      fileName: inputValue,
                      type: PROJECT_UPDATE_TYPE.file,
                    })
                  )
                }
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card mb={6}>
            <CardContent>
              {" "}
              <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {currentSelectedFile?.value || ""}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProjectFileDetails;
