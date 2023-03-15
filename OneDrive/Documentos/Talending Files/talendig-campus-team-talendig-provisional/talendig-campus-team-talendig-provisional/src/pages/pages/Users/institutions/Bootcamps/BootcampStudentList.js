import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import {
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { spacing } from "@mui/system";
import {
  bootcampProfile,
  deleteStudents,
  selectBootcampProfile,
  addStudent,
} from "../../../../../redux/slices/bootcampSlice";
import { selectTalents } from "../../../../../redux/slices/talentSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  PersonRemove,
  PersonAdd,
  VisibilityOff,
  Save,
} from "@mui/icons-material";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const columns = [
  { field: "id", headerName: "#", width: 150, editable: false },
  {
    field: "talent",
    headerName: "Estudiante",
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
  const [selectedStudents, setSelectedStudents] = React.useState([]);
  const [deleteButton, setDeleteButton] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [activateAdd, setActivateAdd] = React.useState(false);
  const bootcamp = useSelector(selectBootcampProfile);
  const allTalents = useSelector(selectTalents);
  const [talentsToSelect, setTalentsToSelect] = React.useState([]);
  const dispatch = useDispatch();
  const [selectedTalent, setSelectedTalent] = React.useState(0);

  const filterTalents = () => {
    let talents = allTalents;
    for (let i = 0; i < bootcamp.talents.length; i++) {
      talents = talents.filter(
        (talent) => talent.talentId !== bootcamp.talents[i]
      );
    }

    setTalentsToSelect(talents);
    setSelectedTalent(talents[0].talentId);
  };

  const getTalent = (id) => {
    return allTalents.find((student) => id === student.talentId);
  };

  React.useEffect(() => {
    setRows(
      bootcamp.talents.map((talent, index) => ({
        id: ++index,
        talentId: talent,
        talent: `${getTalent(talent).talentName} ${
          getTalent(talent).talentLastName
        }`,
      }))
    );

    filterTalents();
  }, [bootcamp]);

  const handleDelete = () => {
    const studentsIds = selectedStudents.map((value) => value.talentId);
    dispatch(
      deleteStudents({ bootcampId: bootcamp.id, students: studentsIds })
    );
    dispatch(bootcampProfile({ id: bootcamp.id }));
    setSelectionModel([]);
    setDeleteButton(false);
  };

  const handleActivateAdd = () => {
    setActivateAdd(!activateAdd);
  };

  const handleAddTalent = () => {
    dispatch(addStudent({ bootcampId: bootcamp.id, talentId: selectedTalent }));
    dispatch(bootcampProfile({ id: bootcamp.id }));
  };

  const handleSelectChange = (event) => {
    setSelectedTalent(event.target.value);
  };

  React.useEffect(() => {
    setDeleteButton(selectedStudents.length);
  }, [selectedStudents]);
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
          Estudiantes del bootcamp
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
            <PersonRemove />
          </IconButton>
        ) : null}
        {activateAdd ? (
          <>
            <FormControl>
              <InputLabel id="demo-simple-select-autowidth-label">
                Talentos
              </InputLabel>
              <Select
                id="talent"
                label="Talentos"
                value={selectedTalent}
                fullWidth
                onChange={handleSelectChange}
                variant="outlined"
              >
                {talentsToSelect.map((talent) => {
                  return (
                    <MenuItem
                      key={talent.talentId}
                      value={Number(talent.talentId)}
                    >
                      {`${talent.talentName} ${talent.talentLastName}`}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <IconButton
              type="submit"
              size="large"
              color="success"
              onClick={handleAddTalent}
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
            <PersonAdd />
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
              const students = newSelectionModel.map((valueSelected) => {
                return rows.find((valueRow) => valueSelected === valueRow.id);
              });
              setSelectedStudents(students);
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
        </div>
      </Paper>
    </Card>
  );
}

function DataGridPage(bootcampStudents) {
  return (
    <React.Fragment>
      <Helmet title="BootcampStudentList Grid" />
      <DataGridDemo {...bootcampStudents} />
    </React.Fragment>
  );
}

export default DataGridPage;
