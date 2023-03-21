import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  PROJECT_UPDATE_TYPE,
  PROJECT_DELETE_TYPE,
  DIALOG_UPDATE_TYPE,
} from "../../../../common/constants/data";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Checkbox,
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
  Typography,
} from "@mui/material";
import { Edit, RemoveCircle } from "@mui/icons-material";
import { spacing } from "@mui/system";
import Actions from "./Actions";
import ProjectsDialog from "./projectsDialog";
import { useSelector, useDispatch } from "react-redux";
import UndoAction from "./UndoAction";
import {
  showUpdate,
  setShowUpdate,
  currentProject,
  setUpdateType,
  setCurrentFolder,
} from "../../../../redux/slices/projectsSlice";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Spacer = styled.div`
  flex: 1 1 100%;
`;

const ToolbarTitle = styled.div`
  min-width: 150px;
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
  { id: "projectName", alignment: "center", label: "Nombre" },
  {
    id: "lastModification",
    alignment: "center",
    label: "Ultima fecha de modificacion",
  },
  { id: "talentName", alignment: "center", label: "Tipo" },
  { id: "actions", alignment: "center", label: "Acción" },
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
    </Toolbar>
  );
};

function EnhancedTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSelectedProject = useSelector(currentProject);
  const rows = currentSelectedProject?.projectDetails || [];
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("talentName");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.folderId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleEdit = (folderId, type) => {
    dispatch(setCurrentFolder({ folderId }));
    dispatch(setUpdateType({ type }));
    dispatch(setShowUpdate({ status: true, type: DIALOG_UPDATE_TYPE.update }));
  };

  const handlePageChange = (pathToGo, folderId) => {
    dispatch(setCurrentFolder({ folderId }));
    navigate(pathToGo);
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

  const handleDelete = (folderId, type) => {
    dispatch(setCurrentFolder({ folderId }));
    dispatch(setUpdateType({ type }));
    dispatch(setShowUpdate({ status: true, type: DIALOG_UPDATE_TYPE.delete }));
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
      <Paper>
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
                  const isItemSelected = isSelected(row.folderId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row.folderId}-${index}`}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={(event) => handleClick(event, row.folderId)}
                        />
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Link
                          onClick={() =>
                            handlePageChange(
                              "/admin/dashboard/users/projects/list/folder/files",
                              row.folderId
                            )
                          }
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        {row.lastModificationDate}
                      </TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          aria-label="info"
                          size="large"
                          color="warning"
                          onClick={() =>
                            handleEdit(row.folderId, PROJECT_UPDATE_TYPE.folder)
                          }
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          align="center"
                          size="large"
                          color="error"
                          onClick={() =>
                            handleDelete(
                              row.folderId,
                              PROJECT_DELETE_TYPE.folder
                            )
                          }
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

function ProjectList() {
  const showUpdateModal = useSelector(showUpdate);

  return (
    <React.Fragment>
      <Helmet title="Invoices" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Lista de Carpetas
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/users/projects/list">
              Lista de Proyectos
            </Link>
            <Typography>Carpetas</Typography>
            <Typography>Lista</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Actions />
        </Grid>
      </Grid>
      <Divider my={6} />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EnhancedTable />
          {showUpdateModal.value && <ProjectsDialog />}
          <UndoAction />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProjectList;
