import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { spacing } from "@mui/system";
import {
  bootcampProfile,
  deleteTecnologies,
  selectBootcampProfile,
  addTecnology,
} from "../../../redux/slices/bootcampSlice";
import tecnologiesInfo from "./tecnologies.json";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCircle,
  VisibilityOff,
  Save,
  DeleteForever,
} from "@mui/icons-material";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const columns = [
  { field: "id", headerName: "#", width: 150, editable: false },
  {
    field: "tecno",
    headerName: "Tecnología",
    width: 200,
    editable: false,
    flex: 1,
  },
];

// const rows = [
//   { id: 1, tecnology: "Angular" },
//   { id: 2, tecnology: "Javascript" },
//   { id: 3, tecnology: "React" },
// ];

function DataGridDemo() {
  const [selectedTecnologies, setSelectedTecnologies] = React.useState([]);
  const [deleteButton, setDeleteButton] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [activateAdd, setActivateAdd] = React.useState(false);
  const bootcamp = useSelector(selectBootcampProfile);
  const [tecnologiesToSelect, setTecnologiesToSelect] = React.useState([]);
  const dispatch = useDispatch();
  const [selectedTecnology, setSelectedTecnology] = React.useState(0);

  const filterTecnologies = () => {
    let tecnologies = tecnologiesInfo;
    for (let i = 0; i < bootcamp.tecnologies.length; i++) {
      tecnologies = tecnologies.filter(
        (tecnology) => tecnology.id !== bootcamp.tecnologies[i]
      );
    }

    setTecnologiesToSelect(tecnologies);
    setSelectedTecnology(tecnologies[0].id);
  };

  const getTecnologyName = (tecno) => {
    return tecnologiesInfo.find((tec) => tecno === tec.id).name;
  };

  React.useEffect(() => {
    setRows(
      bootcamp.tecnologies.map((tecnoId, index) => ({
        id: ++index,
        tecnoId,
        tecno: getTecnologyName(tecnoId),
      }))
    );

    filterTecnologies();
  }, [bootcamp]);

  const handleDelete = () => {
    const tecnologiesIds = selectedTecnologies.map((value) => value.tecnoId);
    dispatch(
      deleteTecnologies({
        bootcampId: bootcamp.id,
        tecnologies: tecnologiesIds,
      })
    );
    dispatch(bootcampProfile({ id: bootcamp.id }));
    setSelectionModel([]);
    setDeleteButton(false);
  };

  const handleActivateAdd = () => {
    setActivateAdd(!activateAdd);
  };

  const handleAddTecnology = () => {
    dispatch(
      addTecnology({ bootcampId: bootcamp.id, tecnologyId: selectedTecnology })
    );
    dispatch(bootcampProfile({ id: bootcamp.id }));
  };

  const handleSelectChange = (event) => {
    setSelectedTecnology(event.target.value);
  };

  React.useEffect(() => {
    setDeleteButton(selectedTecnologies.length);
  }, [selectedTecnologies]);
  return (
    <Card mb={6}>
      <CardContent
        pb={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <Typography variant="h6" gutterBottom mr={5}>
          Tecnologías del bootcamp
        </Typography>
        {deleteButton ? (
          <IconButton
            style={{
              position: "absolute",
              top: "18px",
              right: "10px",
            }}
            type="submit"
            size="large"
            color="error"
            onClick={handleDelete}
          >
            <DeleteForever />
          </IconButton>
        ) : null}
        {activateAdd ? (
          <>
            <FormControl>
              <InputLabel id="demo-simple-select-autowidth-label">
                Tecnologías
              </InputLabel>
              <Select
                id="tecnology"
                label="Tecnologías"
                value={selectedTecnology}
                fullWidth
                onChange={handleSelectChange}
                variant="outlined"
              >
                {tecnologiesToSelect.map((tecnology) => {
                  return (
                    <MenuItem key={tecnology.id} value={Number(tecnology.id)}>
                      {tecnology.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <IconButton
              type="submit"
              size="large"
              color="success"
              onClick={handleAddTecnology}
            >
              <Save />
            </IconButton>
            <IconButton
              type="submit"
              size="large"
              color="info"
              onClick={handleActivateAdd}
            >
              <VisibilityOff />
            </IconButton>
          </>
        ) : (
          <IconButton
            type="submit"
            size="large"
            color="success"
            onClick={handleActivateAdd}
          >
            <AddCircle />
          </IconButton>
        )}
      </CardContent>
      <Paper>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            componentsProps={{
              pagination: {
                labelRowsPerPage: "Filas por página",
              },
            }}
            rowsPerPageOptions={[5, 10, 25]}
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              const tecnologies = newSelectionModel.map((valueSelected) => {
                return rows.find((valueRow) => valueSelected === valueRow.id);
              });
              setSelectedTecnologies(tecnologies);
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
        </div>
      </Paper>
    </Card>
  );
}

function DataGridPage() {
  return (
    <React.Fragment>
      <Helmet title="BootcampTecnologyList Grid" />
      <DataGridDemo />
    </React.Fragment>
  );
}

export default DataGridPage;
