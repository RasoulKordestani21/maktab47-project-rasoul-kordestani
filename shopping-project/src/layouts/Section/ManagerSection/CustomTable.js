import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getCustomers, getUser } from "../../../axios/Axios";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import {
  modalCustomFlagAction,
  findIndexOfCustomerAction,
} from "../../../redux/Actions/modalFlagAction";
import { filterCustomTableAction } from "../../../redux/Actions/filterCustomTableAction";
import { useHistory } from "react-router-dom";
import { getOrders } from "../../../axios/Axios";
import { Waypoint } from "react-waypoint";

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
    maxHeight: "700px !important",
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
});

function CustomTable(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [request, setRequest] = useState("");
  const [numOfPages, setNumOfPages] = useState("");
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const calcWholePrice = (arrOfProduct) => {
    arrOfProduct = JSON.parse(arrOfProduct);
    let wholePrice = 0;
    arrOfProduct.forEach(
      (ele) => (wholePrice = Number(ele.price) * ele.numOfOrd + wholePrice)
    );
    return wholePrice;
  };

  useEffect(() => {
    console.log("bmw", props.isReceived, props.isFiltered);
    if (!props.isFiltered) {
      getOrders().then((res) => {
        setState(res.data);
      });
    } else {
      getOrders().then((res) => {
        console.log(
          res.data.filter((ele) => ele.isReceived == props.isReceived)
        );
        setState(res.data.filter((ele) => ele.isReceived == props.isReceived));
      });
    }
  }, [useHistory().location, props]);

  return (
    <>
      <TableContainer
        style={{ height: "400px", width: "80%", margin: "auto" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">نام کاربر</StyledTableCell>
              <StyledTableCell align="right">مجموع مبالغ</StyledTableCell>
              <StyledTableCell align="right">زمان ثبت سفارش</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((data, index) => (
              <Waypoint onEnter={() => console.log("salam")}>
                <StyledTableRow key={data.id}>
                  <StyledTableCell align="right">
                    {data.firstName + " " + data.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {calcWholePrice(data.products)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(Number(data.dateOfOrder)).toLocaleDateString()}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      console.log(data.id);
                      props.findIndexOfCustomerAction(data.id);
                      props.modalCustomFlagAction(true);
                    }}
                    align="right"
                  >
                    {"برسی سفارش"}
                  </StyledTableCell>
                </StyledTableRow>
              </Waypoint>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ width: "50%", margin: "auto", padding: "20px" }}>
        <div style={{ direction: "ltr" }}>
          <Pagination
            classes={{ ul: classes.ul }}
            count={4}
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
  console.log("see state from here", state.filterCustomTableReducer);
  return {
    isFiltered: state.filterCustomTableReducer.isFiltered,
    isReceived: state.filterCustomTableReducer.isReceived,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCustomTableAction: (flag) => {
      dispatch(filterCustomTableAction(flag));
    },
    modalCustomFlagAction: (flag) => {
      dispatch(modalCustomFlagAction(flag));
    },
    findIndexOfCustomerAction: (index) => {
      dispatch(findIndexOfCustomerAction(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
