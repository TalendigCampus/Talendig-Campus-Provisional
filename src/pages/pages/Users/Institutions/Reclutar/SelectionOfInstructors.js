import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

import { useSelector, useDispatch } from "react-redux";
import {
  selectInstructors,
  setCurrentInstructor,
  setShowAlert,
  deleteTalent,
  setShowUndo,
  showUndo,
} from "../../../../../redux/slices/instructorSlice";
import tecnologiesInfo from "../../../Bootcamps/tecnologies.json";
import {
  selectBootcamps,
  bootcampProfile,
} from "../../../../../redux/slices/bootcampSlice";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Chip = styled(MuiChip)`
  ${spacing};
  background: ${(props) => props.processing && orange[700]};
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

function createData(
  talentName,
  talentEmail,
  recruiterAvatar,
  birth,
  bootcamp,
  tecnology,
  id
) {
  return {
    talentName,
    talentEmail,
    recruiterAvatar,
    birth,
    bootcamp,
    tecnology,
    id,
  };
}
/* createData(
    "Anthony Peralta",
    "anthony@gmail.com",
    "A",
    "012-09879879-0",
    "1999-10-08",
    "ASP.Net",
    "PHP, Angular, Javascript, ASP.net",
    "1"
  ),
  createData(
    "Madelson Acosta",
    "madelson@gmail.com",
    "M",
    "402-2342343-0",
    "1920-04-10",
    "MERN",
    "Ruby, MERN, Nodejs",
    "2"
  ),
  createData(
    "Felix Ortega",
    "felix@gmail.com",
    "F",
    "002-1591642-0",
    "1986-02-10",
    "ASP.Net",
    "C#, SQL Server, .Net",
    "3"
  ),
  createData(
    "Kiancis Dominguez",
    "kiancis@gmail.com",
    "K",
    "012-9089798-0",
    "1995-12-10",
    "MERN",
    "React, Javascript",
    "4"
  ),
  createData(
    "Gabriel Encarnacion",
    "gabriel@gmail.com",
    "G",
    "012-9089798-0",
    "1995-12-10",
    "Mern",
    "React, Javascript, Nodejs",
    "5"
  ), */

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
  { id: "talentName", alignment: "left", label: "Nombre" },
  { id: "company", alignment: "right", label: "Perfil" },
  { id: "bootcamp", alignment: "right", label: "Bootcamp" },
  { id: "technology", alignment: "left", label: "Tecnologias" },
  { id: "status", alignment: "right", label: "Estado" },
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

function EnhancedTable({ setDeleteInstructorModal }) {
  const rows = useSelector(selectInstructors);
  const dispatch = useDispatch();
  const bootcamps = useSelector(selectBootcamps);
  const getTecnologies = (tecnologies) => {
    return tecnologies
      .map((tecno) => {
        return tecnologiesInfo.find((tec) => tec.id === tecno).name;
      })
      .join(", ");
  };
  const getBootcamp = (id) => {
    const result = bootcamps.find((bootcamp) => bootcamp.id === id);
    return {
      id: result.id,
      name: result.bootcampName,
    };
  };
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("firstName");
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

  const handleBootcamp = (id) => {
    dispatch(bootcampProfile({ id }));
    navigate("/admin/dashboard/bootcamps/bootcamp-profile");
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
                  if (row.recruiterProcess.activeProcess == true) {
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
                            <Avatar alt="Remy Sharp" src={row.photoUrl} />
                            <Box ml={3}>
                              {`${row.firstName} ${row.lastName}`}
                              <br />
                              {row.email}
                            </Box>
                          </Customer>
                        </TableCell>
                        <TableCell align="right">{row.company}</TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onClick={() => handleBootcamp(row.bootcamps)}
                        >
                          {getBootcamp(row.bootcamps).name}
                        </TableCell>
                        <TableCell>{getTecnologies(row.technology)}</TableCell>
                        <TableCell align="center">
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="En proceso"
                            processing={+true}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label="info"
                            size="large"
                            color="info"
                            onClick={() =>
                              handleShowInfo(
                                "/institution/recruit/instructors/view_instructors",
                                row.id
                              )
                            }
                          >
                            <Info />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  }
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

function SelectionOfInstructors() {
  const [allowDelete, setAllowDelete] = React.useState(false);
  let status = useSelector(showUndo);
  const [id, setId] = React.useState(null);
  const navigate = useNavigate();
  const handlePageChange = (pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <React.Fragment>
      <Helmet title="Invoices" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Talentos
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/institution/recruit/instructors">
              Comunidad
            </Link>

            <Typography>Instructores</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="info"
            onClick={() => handlePageChange("/institution/recruit/instructors")}
            mt={3}
            ml={3}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
      <Divider my={6} />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EnhancedTable setAllowDelete={setAllowDelete} setId={setId} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SelectionOfInstructors;
