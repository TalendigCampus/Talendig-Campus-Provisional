import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { IdDataTable } from "./idDataTableList";
import SimpleSnackbar from "./AlertUndo";

import {
  Avatar as MuiAvatar,
  Box,
  Checkbox,
  IconButton,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Button,
  TableHead,
  TablePagination,
  TableRow,
  Snackbar,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  Archive as ArchiveIcon,
  FilterList as FilterListIcon,
  RemoveCircle,
  Info,
} from "@mui/icons-material";
import { spacing } from "@mui/system";

const Paper = styled(MuiPaper)(spacing);

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
  instructors,
  instructorsEmail,
  instructorsAvatar,
  idCard,
  profile,
  birth,
  bootcamp,
  tecnology,
  id
) {
  return {
    instructors,
    instructorsEmail,
    instructorsAvatar,
    idCard,
    profile,
    birth,
    bootcamp,
    tecnology,
    id,
  };
}

const newRow = [
  createData(
    "Luis Soto",
    "soto@gmail.com",
    "L",
    "109-3013214-3",
    "Instructor",
    "1990-01-23",
    "MERN",
    "React, Express, Javascript",
    "001"
  ),
  createData(
    "Miguel Ramirez",
    "miguel@gmail.com",
    "M",
    "111-2152993-0",
    "Instructor",
    "1992-08-10",
    "MEAN",
    "Angular, Nodejs, Javascript",
    "002"
  ),
  createData(
    "Juan Santana",
    "juan@gmail.com",
    "J",
    "302-084544-0",
    "Instructor",
    "1985-09-04",
    "ASP.NET",
    "C#, Java, Python",
    "003"
  ),
  createData(
    "Ana Sanchez",
    "ana@gmail.com",
    "A",
    "302-605315-8 ",
    "Instructor",
    "1980-10-12",
    "MERN",
    "Nodejs, React, Javascript",
    "004"
  ),
];

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
  { id: "instructors", alignment: "left", label: "Nombre" },
  { id: "idCard", alignment: "left", label: "Cedula" },
  { id: "profile", alignment: "left", label: "Perfil" },
  { id: "birth", alignment: "left", label: "Fecha de Nacimiento" },
  { id: "bootcamp", alignment: "left", label: "Bootcamp" },
  { id: "tecnology", alignment: "left", label: "Tecnologías" },
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

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [eliminateData, SetEliminateData] = React.useState({});
  const [eliminateDone, setEliminateDone] = React.useState(false);
  const [indexDataeliminate, setIndexDataeliminate] = React.useState(0);
  const [rows, setNewRow] = React.useState(newRow);

  const handleClose = () => {
    setOpen(false);
    setEliminateDone(false);
  };

  const confirmEliminateData = () => {
    let newIndexDataeliminate = rows.indexOf(eliminateData);
    setIndexDataeliminate(newIndexDataeliminate);
    newRow.splice(newIndexDataeliminate, 1);
    setNewRow(newRow);
    setEliminateDone(true);
    setOpen(false);
  };

  const EliminateDataList = (id) => {
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

    rows.filter((row) => {
      row.id === newSelected[0]
        ? SetEliminateData(row)
        : console.log("negativo");
    });
    setOpen(true);
  };
  const handleChange = (pathToGo, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      IdDataTable.id = newSelected[0] - 1;
      console.log(IdDataTable.id);
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
    navigate(pathToGo, { replace: true });
  };

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
                          <Avatar>{row.instructorsAvatar}</Avatar>
                          <Box ml={3}>
                            {row.id}
                            <br />
                            {row.instructors}
                            <br />
                            {row.instructorsEmail}
                          </Box>
                        </Customer>
                      </TableCell>
                      <TableCell>{row.idCard}</TableCell>
                      <TableCell align="left">{row.profile}</TableCell>
                      <TableCell align="left">{row.birth}</TableCell>
                      <TableCell>{row.bootcamp}</TableCell>
                      <TableCell align="left">{row.tecnology}</TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="info" size="large" color="info">
                          <Info
                            onClick={(event) =>
                              handleChange(
                                "/admin/dashboard/users/instructors/view_instructors",
                                row.id
                              )
                            }
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          size="large"
                          color="error"
                          onClick={(event) => EliminateDataList(row.id)}
                        >
                          <RemoveCircle />
                        </IconButton>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Alerta"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Desea eliminar
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              No
                            </Button>
                            <Button
                              onClick={confirmEliminateData}
                              color="primary"
                              autoFocus
                            >
                              Si
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  );
                })}
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={eliminateDone}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={
                  <SimpleSnackbar
                    eliminateDone={eliminateDone}
                    rows={rows}
                    indexDataeliminate={indexDataeliminate}
                    setNewRow={setNewRow}
                    eliminateData={eliminateData}
                    setEliminateDone={setEliminateDone}
                  />
                }
              />
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
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default EnhancedTable;
