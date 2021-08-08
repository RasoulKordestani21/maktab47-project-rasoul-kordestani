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
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { stockPriceChangesAction } from "../../../redux/Actions/StockPriceChangesAction";
import { shouldUpdateTable } from "../../../redux/Actions/modalFlagAction";
import { Button } from "@material-ui/core";
import { FormControl, TextField, FormLabel } from "@material-ui/core";

// import { getUser } from '../axios/Axios'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
});

let counter = 0;
function StockPriceTable(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [beginItem, setBeginItem] = useState(1);
  const [page, setPage] = React.useState(1);
  const [numOfPages, setNumOfPages] = useState(0);

  const [arrayOfChanges, setArrayOfChanges] = useState([]);
  const lastCHanges = (arr, obj, type) => {
    let index = arr.findIndex((ele) => ele.id == obj.id);
    if (index > -1) {
      arr[index][type] = obj[type];
    } else {
      arr.push(obj);
    }
    return arr;
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getUser().then((res) => {
      setNumOfPages(Math.floor(res.data.length / 5) + 1);
    });
    getUser(5 * (page - 1), 5).then((res) => {
      setState(res.data);
    });
  }, [page, props.shouldUpdate]);

  return (
    <>
      <TableContainer
        style={{ width: "80%", margin: "auto", minHeight: "300px" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right"> کالا</StyledTableCell>
              <StyledTableCell align="right">قیمت</StyledTableCell>
              <StyledTableCell align="right">موجودی</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((data, index) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell align="right">{data.name}</StyledTableCell>
                <StyledTableCell
                  align="right"
                  contenteditable="true"
                  type="number"
                  onInput={(e) => {
                    state[index].price = e.target.innerHTML;
                    console.log(e.target.innerHTML);
                    setArrayOfChanges(
                      lastCHanges(
                        arrayOfChanges,
                        { id: data.id, price: e.target.innerHTML },
                        "price"
                      )
                    );
                    props.stockPriceChangesAction(arrayOfChanges);
                  }}
                >
                  {data.price}
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  contenteditable="true"
                  onInput={(e) => {
                    state[index].numbers = e.target.innerHTML;
                    setArrayOfChanges(
                      lastCHanges(
                        arrayOfChanges,
                        { id: data.id, numbers: e.target.innerHTML },
                        "numbers"
                      )
                    );
                    props.stockPriceChangesAction(arrayOfChanges);
                  }}
                >
                  {data.numbers}
                </StyledTableCell>
                {/* <StyledTableCell style={{ border: '3px solid black' }} align="right">{''}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ width: "50%", margin: "auto", padding: "20px" }}>
        <div style={{ direction: "ltr" }}>
          {/* <Typography >Page: {page}</Typography> */}
          <Pagination
            style={{ padding: "20px 100px" }}
            classes={{ ul: classes.ul }}
            count={numOfPages}
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    arrayOfChanges: state.stockPriceChangesReducer.arrayOfChanges,
    shouldUpdate: state.modalFlagReducer.shouldUpdateTable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stockPriceChangesAction: (arrayOfChanges) => {
      dispatch(stockPriceChangesAction(arrayOfChanges));
    },
    shouldUpdateTable: () => {
      dispatch(shouldUpdateTable());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StockPriceTable);
