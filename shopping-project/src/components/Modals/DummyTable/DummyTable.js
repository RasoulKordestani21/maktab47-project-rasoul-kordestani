import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getCustomersItem } from '../../../axios/Axios';

import { connect } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0,),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0)
];

 function DenseTable(props) {
  const classes = useStyles();
  const [choosenCustomer,setChoosenCustomer]=useState('')
   useEffect(async() => {
     console.log(props)
     let customers = await getCustomersItem()
     let customer = customers.data[props.indexOfCustomer];
     setChoosenCustomer(customer);
    console.log(customer.tableOfCustom)
   },[props])
   return (
    <div>
    <TableContainer component={Paper} style={{width:'100%',direction:"rtl"}}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>نام کالا</TableCell>
            <TableCell align="right">قیمت کالا</TableCell>
            <TableCell align="right">تعداد</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {choosenCustomer && choosenCustomer.tableOfCustom.map((product) => (
            <TableRow key={product.id}>
              {console.log(product)}
              <TableCell component="th" scope="row">
                {product.productName}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.numbers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       </TableContainer>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    productModalFlag: state.modalFlagReducer.productModalFlag,
    customModalFlag:state.modalFlagReducer.customModalFlag,
    indexOfCustomer: state.modalFlagReducer.indexOfCustomer,
    isFiltered: state.filterCustomTableReducer.isFiltered,
    isReceived: state.filterCustomTableReducer.isReceived
  }
}

// const mapDispatchToProps = dispatch => {
//   console.log(dispatch)
//   return {
//     filterCustomTableAction: (flag) => { dispatch(filterCustomTableAction(flag)) },
//     modalCustomFlagAction: (flag) => { dispatch(modalCustomFlagAction(flag)) },
//     findIndexOfCustomerAction: (index) => { dispatch(findIndexOfCustomerAction(index)) }

//   }
// }
export default connect(mapStateToProps)(DenseTable);
