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
import {
  modalFlagAction,
  shouldUpdateTable,
} from "../../../redux/Actions/modalFlagAction";
import { deleteProduct } from "../../../axios/Axios";
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

function ProductTable(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [beginItem, setBeginItem] = useState(1);
  const [page, setPage] = React.useState(1);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [numOfPages, setNumOfPages] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleUpdate = () => {
    console.log("clicked");
    setUpdateToggle(!updateToggle);
  };

  useEffect(() => {
    console.log(beginItem);

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
        style={{ width: "80%", margin: "auto", minHeight: "400px" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">تصویر</StyledTableCell>
              <StyledTableCell align="right">نام کالا</StyledTableCell>
              <StyledTableCell align="right">دسته بندی</StyledTableCell>
              <StyledTableCell align="right">ویرایش/حذف</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((data, index) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell component="th" scope="row" align="right">
                  <img
                    src={data.image}
                    width="40px"
                    style={{ borderRadius: "50%" }}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{data.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {data.groupToPersian}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <a
                    style={{ backgroundColor: "yellow" }}
                    onClick={() => {
                      props.modalFlagAction(true, false, data.id);
                      handleUpdate();
                    }}
                  >
                    ویرایش
                  </a>
                  /
                  <a
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      if (
                        window.confirm(
                          `آیا می خواهید کالای ${data.name} را حذف کنید ؟`
                        )
                      ) {
                        deleteProduct(data.id);
                        props.shouldUpdateTable();
                      }
                    }}
                  >
                    حذف
                  </a>
                </StyledTableCell>
                {/* <StyledTableCell style={{ border: '3px solid black' }} align="right">{''}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ width: "50%", margin: "auto", padding: "20px" }}>
        <div style={{ direction: "ltr" }}>
          <Pagination
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
  console.log(state);
  return {
    productModalFlag: state.productModalFlag,
    customModalFlag: state.customModalFlag,
    shouldUpdate: state.modalFlagReducer.shouldUpdateTable,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    modalFlagAction: (modalFlag, addModalFlag, index) => {
      dispatch(modalFlagAction(modalFlag, addModalFlag, index));
    },
    shouldUpdateTable: () => {
      dispatch(shouldUpdateTable());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
