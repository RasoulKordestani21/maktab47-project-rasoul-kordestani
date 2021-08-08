import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getCustomersItem } from "../../../axios/Axios";

import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function DenseTable(props) {
  const classes = useStyles();
  const [choosenCustomer, setChoosenCustomer] = useState("");

  useEffect(async () => {
    getCustomersItem(props.indexOfCustomer).then((res) =>
      setChoosenCustomer(res.data)
    );
  }, [props]);

  return (
    <div>
      {console.log("salam agha vahid", choosenCustomer)}
      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>نام کالا</TableCell>
              <TableCell align="right">قیمت کالا</TableCell>
              <TableCell align="right">تعداد</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {choosenCustomer &&
              JSON.parse(choosenCustomer.products).map((product) => (
                <TableRow key={product.id}>
                  {console.log(product)}
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.numOfOrd}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    productModalFlag: state.modalFlagReducer.productModalFlag,
    customModalFlag: state.modalFlagReducer.customModalFlag,
    indexOfCustomer: state.modalFlagReducer.indexOfCustomer,
    isFiltered: state.filterCustomTableReducer.isFiltered,
    isReceived: state.filterCustomTableReducer.isReceived,
  };
};

export default connect(mapStateToProps)(DenseTable);
