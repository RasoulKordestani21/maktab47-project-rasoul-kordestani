import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import logo from "../../../assets/images/MrShopLogo.jpg";
import { getUser } from "../../../axios/Axios";
// import { getUser } from '../axios/Axios'



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

let rows = [
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
let counter = 0;
export default function CustomizedTables() {
  const classes = useStyles();
  const [state, setState] = useState([])
  useEffect(() => {
      getUser().then(
          res => setState(res.data)
      )
  },[])
   


  return (
    <TableContainer style={{width:"80%",margin:"auto"}}  component={Paper}>
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
          <>
            {state.map(fetchedData => console.log(fetchedData))}
          </>
          {state.map(data => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row" align="right">
                <img src={data.image} width="80px" style={{borderRadius:"50%"}}/>
              </StyledTableCell>
              <StyledTableCell align="right">{data.id}</StyledTableCell>
              <StyledTableCell align="right">{data.title}</StyledTableCell>
              <StyledTableCell align="right">{'ویرایش /حذف'}</StyledTableCell>
              <StyledTableCell align="right">{''}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
