import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  FormControl as MuiFormControl,
  Grid,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { CloudUpload as MuiCloudUpload } from "@mui/icons-material";
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

const FormControl = styled(MuiFormControl)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin: 0 auto ${(props) => props.theme.spacing(2)};
`;

function Settings() {
  const currentSelectedFile = useSelector(currentFile);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(currentSelectedFile.name);
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
      <Helmet title="Recruiter Profile" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            {currentSelectedFile?.name || ""}
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/talent/projects">
              Lista de Proyectos
            </Link>
            <Link component={NavLink} to="/talent/projects/list/folder/details">
              Lista de Carpetas
            </Link>
            <Link component={NavLink} to="/talent/projects/list/folder/files">
              Lista de Archivos
            </Link>
            <Typography>Detalles de Archivo</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() => handlePageChange(-1)}
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>

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

export default Settings;
