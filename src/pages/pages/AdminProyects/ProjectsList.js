import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link as ReactRouterLink } from "react-router-dom";
import { PROJECT_UPDATE_TYPE } from "../../../common/constants/data";
import { DIALOG_UPDATE_TYPE } from "../../../common/constants/data";
import { PROJECT_DELETE_TYPE } from "../../../common/constants/data";
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
  Description,
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
  Dialog,
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
  LibraryBooks,
} from "@mui/icons-material";
import { spacing } from "@mui/system";
import Actions from "./Actions";
import ProjectsDialog from "./projectsDialog";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTalents,
  setCurrentTalent,
} from "../../../redux/slices/talentSlice";
import {
  selectProjects,
  showUpdate,
  setShowUpdate,
  setCurrentProject,
  setUpdateType,
} from "../../../redux/slices/projectsSlice";
import UndoAction from "./UndoAction";

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

/* function createData(
  talentName,
  talentEmail,
  recruiterAvatar,
  idCard,
  birth,
  bootcamp,
  tecnology,
  id
) {
  return {
    talentName,
    talentEmail,
    idCard,
    recruiterAvatar,
    birth,
    bootcamp,
    tecnology,
    id,
  };
} */

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
  { id: "talentName", alignment: "center", label: "Talento" },
  { id: "tecnology", alignment: "center", label: "Tecnologias" },
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
      {/* <div>
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
      </div> */}
    </Toolbar>
  );
};

function EnhancedTable() {
  const talents = useSelector(selectTalents);
  const projectsList = useSelector(selectProjects);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("projectName");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    setRows(
      projectsList.map((project) => {
        const talent = talents.find(
          (talent) => talent.talentId === project.talentId
        );
        return {
          projectName: project.projectName,
          talentName: talent.talentName,
          talentLastName: talent.talentLastName,
          lastModification: project.lastModificationDate,
          technology: talent.tecnology,
          projectId: project.projectId,
          talentId: project.talentId,
        };
      })
    );
  }, [talents, projectsList]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.projectId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleEdit = (projectId, type) => {
    dispatch(setCurrentProject({ projectId }));
    dispatch(setUpdateType({ type }));
    dispatch(setShowUpdate({ status: true, type: DIALOG_UPDATE_TYPE.update }));
  };

  const handlePageChange = (pathToGo, projectId) => {
    dispatch(setCurrentProject({ projectId }));
    navigate(pathToGo);
  };

  const handleUserPageChange = (pathToGo, talentId) => {
    dispatch(setCurrentTalent({ talentId }));
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

  const handleDelete = (projectId, type) => {
    dispatch(setCurrentProject({ projectId }));
    dispatch(setUpdateType({ type }));
    dispatch(setShowUpdate({ status: true, type: DIALOG_UPDATE_TYPE.delete }));
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
                  const isItemSelected = isSelected(row.projectId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row.projectId}-${index}`}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={(event) => handleClick(event, row.projectId)}
                        />
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Link
                          onClick={() =>
                            handlePageChange(
                              "/admin/dashboard/users/projects/list/folder/details",
                              row.projectId
                            )
                          }
                        >
                          {row.projectName}
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        {row.lastModification}
                      </TableCell>
                      {/* <TableCell>{row.idCard}</TableCell> */}
                      <TableCell align="center">
                        {" "}
                        <Link
                          onClick={() =>
                            handleUserPageChange(
                              "/admin/dashboard/users/talents/info",
                              row.talentId
                            )
                          }
                        >
                          {`${row.talentName} ${row.talentLastName}`}
                        </Link>
                      </TableCell>
                      <TableCell>{row.technology}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          aria-label="edit"
                          size="large"
                          color="warning"
                          onClick={() =>
                            handleEdit(
                              row.projectId,
                              PROJECT_UPDATE_TYPE.project
                            )
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
                              row.projectId,
                              PROJECT_DELETE_TYPE.project
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

function InvoiceList() {
  const showUpdateModal = useSelector(showUpdate);

  return (
    <React.Fragment>
      <Helmet title="Invoices" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Lista de Proyectos
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/users/projects">
              Panel proyectos
            </Link>
            <Typography>proyectos</Typography>
            <Typography>Lista proyectos</Typography>
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

export default InvoiceList;
