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
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box'

import { connect } from 'react-redux';
import { request } from "dom-helpers/cjs/animationFrame";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function CustomTable(props) {
  const classes = useStyles();
  const [state, setState] = useState([])
  const [request, setRequest] = useState('')
  const [beginItem, setBeginItem] = useState(1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(event, value)
    setPage(value);
  };

  useEffect(async () => {
    console.log(beginItem)
    await getUser((page - 1) * 5 + 1, 5).then(
      res => { setState(res.data) }
    )
    await getUser((page - 1) * 5 + 1, 5).then(
      res => { setRequest(res.data) }
    )


  }, [page])

  useEffect(() => {
    console.log(request)
    if (props.isFiltered) {
      setState(request.filter(ele => ele.isReceived == props.isReceived))
    }

  }, [props])

  return (
    <>
      <TableContainer style={{ width: "80%", margin: "auto", minHeight: "400px" }} component={Paper}>
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
            {console.log(props)}

            {state.map(data => (
              <StyledTableRow key={data.id}>
                <StyledTableCell align="right">{data.id}</StyledTableCell>
                <StyledTableCell align="right">{data.name}</StyledTableCell>
                <StyledTableCell align="right">{(new Date(data.createdAt)).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell align="right">{'برسی سفارش'}</StyledTableCell>
                {/* <StyledTableCell style={{ border: '3px solid black' }} align="right">{''}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ width: "50%", margin: "auto", padding: '20px' }}>

        <div style={{ direction: "ltr" }}>
          <Pagination count={4} color="primary" page={page} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    isFiltered: state.filterCustomTableReducer.isFiltered,
    isReceived: state.filterCustomTableReducer.isReceived
  }
}

export default connect(mapStateToProps)(CustomTable);