import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

let ele =      <StyledTableRow  >
<StyledTableCell  align="right">برنج ایکس</StyledTableCell>
    <StyledTableCell  align="right">۲۲۰۰۰۰</StyledTableCell>
    <StyledTableCell  align="right">۱ عدد</StyledTableCell>
          <StyledTableCell align="right" style={{color:"blue",textDecoration:"underline"}}> حذف</StyledTableCell>
</StyledTableRow>
let arr = [];
for (let i = 0; i < 5; i++){
    arr[i] = ele
}
export default function PurchaseBasketSection()  {
    const classes = useStyles();

    return (
        <div>
            <div>سبد خرید</div>
            <TableContainer style={{ width: "80%", margin: "auto", minHeight: "400px" }} component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">کالا</StyledTableCell>
                            <StyledTableCell align="right">قیمت</StyledTableCell>
                            <StyledTableCell align="right">تعداد</StyledTableCell>
                            <StyledTableCell align="right">(حذف)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
               {arr}
               
             
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <div>جمع : ۲۲۰۰۰۰۰</div>
                <Button>نهایی کردن خرید</Button>
            </div>
        </div>
    )

}
