import React, { Component, useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

import { connect } from 'react-redux';
import { deleteProduct } from '../../../redux/Actions/choosenProductAction';

import { useHistory } from "react-router-dom";
import styles from '../../../assets/style/style.module.css'

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

function calcWholePrice(priceNumbers) {
    let wholePrice = 0;
    for (let i = 0; i < priceNumbers.length; i++) {
        wholePrice = wholePrice + eval(priceNumbers[i][0]) * priceNumbers[i][1]
    }
    console.log(wholePrice);
    return wholePrice;
}



function PurchaseBasketSection(props) {

    console.log(props.choosenProduct.choosenProducts);
    let history = useHistory();

    function goToFinalizePurchase() {

        history.push('/FinalizePurchase')
    }
    const classes = useStyles();

    return (
        <div className={styles['main-section-purchase-basket']}>
            <div className={styles['main-section-purchase-basket-header']}>سبد خرید</div>
            <TableContainer className={styles['main-section-purchase-basket-table']} component={Paper}>
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
                        {console.log(props.choosenProduct.choosenProducts[0])}
                        {props.choosenProduct.choosenProducts.map(ele =>
                            <StyledTableRow  >
                                <StyledTableCell align="right">{ele.name}</StyledTableCell>
                                <StyledTableCell align="right">{ele.price}</StyledTableCell>
                                <StyledTableCell align="right">{ele.numOfOrd}</StyledTableCell>
                                <StyledTableCell align="right" style={{ color: "blue", textDecoration: "underline" }} onClick={() => props.deleteProduct(ele)}> حذف</StyledTableCell>
                            </StyledTableRow>
                        )}


                    </TableBody>
                </Table>
            </TableContainer>
            <div className={styles['main-section-purchase-basket-bottom-part']}>
                <div>
                    <h5 className={styles['main-section-purchase-basket-bottom-part-whole-price']}>قیمت کل  :{" "}
                        {
                            calcWholePrice(props.choosenProduct.choosenProducts.map(ele => [ele.price, ele.numOfOrd]))
                        } تومان
                    </h5>
                </div>
                <div className={styles['main-section-purchase-basket-bottom-part-button-parent']}>
                    <Button className={styles['main-section-purchase-basket-bottom-part-button']} onClick={() => goToFinalizePurchase()}>نهایی کردن خرید</Button>
                </div>
            </div>

        </div>
    )

}

const mapStateToProps = state => {
    console.log(state.choosenProductReducer)
    return {
        choosenProduct: state.choosenProductReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (choosenProduct) => { dispatch(deleteProduct(choosenProduct)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseBasketSection)