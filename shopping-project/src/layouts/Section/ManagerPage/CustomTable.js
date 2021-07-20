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
import { getCustomers } from "../../../axios/Axios";
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box'

import { connect } from 'react-redux';
import { request } from "dom-helpers/cjs/animationFrame";

import { modalCustomFlagAction,findIndexOfCustomerAction } from '../../../redux/Actions/modalFlagAction'
import {filterCustomTableAction} from "../../../redux/Actions/filterCustomTableAction";
import { useHistory } from "react-router-dom";



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
  // const [beginItem, setBeginItem] = useState(1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
   
    setPage(value);
  };



  useEffect(async () => {
    await getCustomers((page - 1) * 5 + 1, 5).then(
      res => { setState(res.data); setRequest(res.data) }
    )
    // props.filterCustomTableAction({isFiltered:false,isReceived:false})
  },[useHistory().location])

  useEffect(async () => {
   
    await getCustomers((page - 1) * 5 + 1, 5).then(
      res => { setState(res.data); setRequest(res.data) }
    )
   
  }, [page])

  useEffect(async() => {
    await getCustomers((page - 1) * 5 + 1, 5).then(
      res => { setState(res.data); setRequest(res.data) }
    )
   
    if (props.isFiltered) {
      await setState(request.filter(ele => ele.isReceived == props.isReceived))
    }

  }, [props])


  return (
    <>
      <TableContainer style={{ width: "80%", margin: "auto" }} component={Paper}>
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


            {state.map((data,index) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell align="right">{data.name}</StyledTableCell>
                <StyledTableCell align="right">{data.wholePrice}</StyledTableCell>
                <StyledTableCell align="right">{(new Date(data.dateOfCustome)).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell onClick={() => { props.findIndexOfCustomerAction(index);props.modalCustomFlagAction(true) }}
                  align="right">{'برسی سفارش'}</StyledTableCell>
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
 
  return {
    isFiltered: state.filterCustomTableReducer.isFiltered,
    isReceived: state.filterCustomTableReducer.isReceived,

  }
}

const mapDispatchToProps = dispatch => {
  
  return {
    filterCustomTableAction: (flag) => { dispatch(filterCustomTableAction(flag)) },
    modalCustomFlagAction: (flag) => { dispatch(modalCustomFlagAction(flag)) },
    findIndexOfCustomerAction: (index) => { dispatch(findIndexOfCustomerAction(index)) }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
