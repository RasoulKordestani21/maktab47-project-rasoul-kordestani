import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import logo from "../../../assets/images/MrShopLogo.jpg";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "",
    "لوبیا قرمز گلستان 900 گرمی",
    "مواد غذایی / کالای اساسی و خوارو بار",
    "ویرایش /حذف"
  ),
  createData(
    "",
    "روغن سرخ کردنی سمن -1.35 کیلویی",
    "مواد غذایی / کالای اساسی و خوارو بار",
    "ویرایش /حذف"
  ),
  createData(
    "",
    "روغن مایع آفتابگردان حاوی ویتامین دی و ای",
    "مواد غذایی / کالای اساسی و خوارو بار",
    "ویرایش /حذف"
  ),
  createData(
    "",
    "کره سنتی شکلی 100 گرمی",
    "مواد غذایی / لبنیات",
    "ویرایش /حذف"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">تصویر</StyledTableCell>
            <StyledTableCell align="right">نام کالا</StyledTableCell>
            <StyledTableCell align="right">دسته بندی</StyledTableCell>
            <StyledTableCell align="right">ویرایش /حذف</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="right">
                <img src={logo} width="100px" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
