import React from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IdDataTable } from "./componets/IdDataTableList";
import Rows from "./InfoDataInstitution";
import SimpleSnackbar from "./componets/AlertUndo";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip as MuiChip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider as MuiDivider,
  Grid,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  Paper as MuiPaper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
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
  Close,
  RemoveCircle,
  Info,
} from "@mui/icons-material";
import { spacing, style } from "@mui/system";
import Actions from "./FilterIntitution";
import { List } from "react-feather";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CenteredContentInfo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -150px;
  height: 70vh;
  width: 75%;
`;
const ContentDataInfo = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  width: 45%;
  box-shadow: 0 0 6px rgb(238, 73, 51);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const TitleContentInfo = styled.h2``;

const DivEmpty = styled.div``;

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
  institution,
  institutionEmail,
  institutionAvatar,
  registrationDate,
  address,
  phoneNumber,
  id
) {
  return {
    institution,
    institutionEmail,
    institutionAvatar,
    registrationDate,
    address,
    phoneNumber,
    id,
  };
}

const newRow = [
  createData(
    "Claro Dominicana",
    "claro@gmail.com",
    "C",
    "2023-1-5",
    "Av. Luperon ezquina 27 de Febrero #1023",
    "8290983454",
    "1"
  ),
  createData(
    "GBH",
    "gbh@gmail.com",
    "G",
    "2022-12-5",
    "Av. Lincoln ezquina Sarasota #200",
    "8292342343",
    "2"
  ),
  createData(
    "Instituto Politécnico Loyola",
    "loyola@gmail.com",
    "I",
    "2020-3-9",
    "P. Ángel Arias, San Cristóbal",
    "8293244645",
    "3"
  ),
  createData(
    "Instituto Tecnologico de Las Americas",
    "itla@gmail.com",
    "I",
    "2021-7-9",
    "Las Américas, Km. 27, La Caleta, Calle 27, 11606",
    "8292342343",
    "4"
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
  { id: "institution", alignment: "left", label: "Nombre" },
  { id: "registrationDate", alignment: "left", label: "Fecha De Union" },
  { id: "address", alignment: "right", label: "Direccion" },
  { id: "phoneNumber", alignment: "right", label: "Teléfono" },
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

// const InfoComponetControl = () => {
//   let id = IdDataTable.id;
//   return (
//     <Grid item xs={12}>
//       <Card mb={6}>
//         <CardContent>
//           <TextField
//             id="name"
//             label="Name"
//             defaultValue={Rows[id].institution}
//             variant="outlined"
//             disabled="disabled"
//             fullWidth
//             my={2}
//           />
//           <TextField
//             id="date"
//             label="Fecha"
//             defaultValue={Rows[id].dateCreateAccount}
//             variant="outlined"
//             disabled="disabled"
//             fullWidth
//             my={2}
//           />
//           <TextField
//             id="address"
//             label="Direccion"
//             defaultValue={Rows[id].address}
//             variant="outlined"
//             disabled="disabled"
//             fullWidth
//             my={2}
//           />
//           <TextField
//             id="phoneNumber"
//             label="Telefono"
//             defaultValue={Rows[id].phoneNumber}
//             variant="outlined"
//             disabled="disabled"
//             fullWidth
//             my={2}
//           />
//           <TextField
//             id="institutionEmail"
//             label="Correo"
//             variant="outlined"
//             type="email"
//             defaultValue={Rows[id].institutionEmail}
//             disabled="disabled"
//             fullWidth
//             my={2}
//           />
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// const infoComponetControl = (e,value) => {

// }

// function infoContent() {
//   const CenteredContent = styled.div`
//     text-align: center;
//   `;
//   return (
//     <CenteredContent>
//       <IconButton aria-label="edit" size="large" color="primary">
//         <Close />
//       </IconButton>
//     </CenteredContent>
//   );
// }

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("institution");
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
                          <Avatar>{row.institutionAvatar}</Avatar>
                          <Box ml={3}>
                            {row.institution}
                            <br />
                            {row.institutionEmail}
                          </Box>
                        </Customer>
                      </TableCell>
                      <TableCell>{row.registrationDate}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.phoneNumber}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="info" size="large" color="info">
                          <Info
                            onClick={(event) =>
                              handleChange(
                                "/admin/dashboard/users/institutions/info",
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

function DataGridPage() {
  return (
    <React.Fragment>
      <Helmet title="Invoices" />

      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Lista de Instituciones
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/admin/dashboard/home">
              Panel
            </Link>
            <Typography>Usuarios</Typography>
            <Link component={NavLink} to="/admin/dashboard/users/institutions">
              Instituciones
            </Link>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DataGridPage;
