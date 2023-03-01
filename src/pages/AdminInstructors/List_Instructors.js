import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Checkbox,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  IconButton,
  Link,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { green, orange } from "@mui/material/colors";
import {
  Add as AddIcon,
  Archive as ArchiveIcon,
  FilterList as FilterListIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Edit,
  RemoveCircle,
  Info,
} from "@mui/icons-material";
import { spacing } from "@mui/system";
import Actions from "./InstructorsList/Actions";
import InstructorsInfo from "./InstructorsList/InstructorsInfo.json";
import InstructorDialog from "./InstructorsList/InstructorDialog";
import UndoAction from "./InstructorsList/UndoAction";
import tecnologiesInfo from "../Bootcamps/tecnologies.json";
import { useSelector, useDispatch } from "react-redux";
import {
  selectInstructors,
  setCurrentInstructor,
  setShowUndo,
} from "../../redux/slices/instructorSlice.js";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Chip = styled(MuiChip)`
  ${spacing};

  background: ${(props) => props.paid && green[500]};
  background: ${(props) => props.sent && orange[700]};
  color: ${(props) =>
    (props.paid || props.sent) && props.theme.palette.common.white};
`;

const Spacer = styled.div`
  flex: 1 1 100%;
`;

const ToolbarTitle = styled.div`
  min-width: 150px;
`;

const Avatar = styled(MuiAvatar)`
  background: ${(props) => props.theme.palette.primary.main};
`;

const Customer = styled.div`
  display: flex;
  align-items: center;
`;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => ({
    el,
    index,
  }));
  stabilizedThis.sort((a, b) => {
    const order = comparator(a.el, b.el);
    if (order !== 0) return order;
    return a.index - b.index;
  });
  return stabilizedThis.map((element) => element.el);
}

const headCells = [
  { id: "firstName", alignment: "left", label: "Instructor" },
  { id: "identificationCard", alignment: "left", label: "Cedula" },
  { id: "company", alignment: "right", label: "Perfil" },
  { id: "birth", alignment: "right", label: "Fecha de Nacimiento" },
  { id: "bootcamps", alignment: "right", label: "Bootcamps" },
  { id: "technology", alignment: "left", label: "Tecnologias" },
  { id: "actions", alignment: "right", label: "Acción" },
];

const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignment}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar>
      <ToolbarTitle>
        {numSelected > 0 && (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        )}
      </ToolbarTitle>
      <Spacer />
      <div>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" size="large">
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list" size="large">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

function EnhancedTable({ setDeleteInstructorModal }) {
  const rows = useSelector(selectInstructors);
  const dispatch = useDispatch();
  const getTecnologies = (tecnologies) => {
    return tecnologies
      .map((tecno) => {
        return tecnologiesInfo.find((tec) => tec.id === tecno).name;
      })
      .join(", ");
  };
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("instructor");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleShowInfo = (pathToGo, instructorId) => {
    dispatch(setCurrentInstructor({ instructorId }));
    navigate(pathToGo);
  };

  const handleDelete = (instructorId) => {
    dispatch(setCurrentInstructor({ instructorId }));
    dispatch(setShowUndo({ status: false }));
    setDeleteInstructorModal(true);
  };

  return (
    <div>
      <Paper>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row.id}-${index}`}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row">
                        <Customer>
                          <Avatar>{row.avatar}</Avatar>
                          <Box ml={3}>
                            {`${row.firstName} ${row.lastName}`}
                            <br />
                            {row.email}
                          </Box>
                        </Customer>
                      </TableCell>
                      <TableCell>{row.identificationCard}</TableCell>
                      <TableCell align="right">{row.company}</TableCell>
                      <TableCell align="right">{row.birth}</TableCell>
                      <TableCell align="right">{row.bootcamps}</TableCell>
                      <TableCell>{getTecnologies(row.technology)}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="info"
                          size="large"
                          color="info"
                          onClick={() =>
                            handleShowInfo(
                              "/admin/dashboard/users/instructors/view_instructors",
                              row.id
                            )
                          }
                        >
                          <Info />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          size="large"
                          color="error"
                          onClick={() => handleDelete(row.id)}
                        >
                          <RemoveCircle />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={"Filas por página"}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

function List_instructors() {
  const [deleteInstructorModal, setDeleteInstructorModal] =
    React.useState(false);

  return (
    <React.Fragment>
      <Helmet title="List" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Lista de Instructores
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/home">
              Dashboard
            </Link>
            <Link component={NavLink} to="/admin/dashboard/home">
              Usuarios
            </Link>
            <Link component={NavLink} to="/admin/dashboard/users/instructors">
              Instructores
            </Link>
            <Typography>Lista </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EnhancedTable setDeleteInstructorModal={setDeleteInstructorModal} />
          {deleteInstructorModal && (
            <InstructorDialog
              deleteInstructorModal={deleteInstructorModal}
              setDeleteInstructorModal={setDeleteInstructorModal}
            />
          )}

          <UndoAction />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default List_instructors;
