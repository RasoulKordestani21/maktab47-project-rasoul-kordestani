import React, { Component } from "react";
import ProductTable from "../../layouts/Section/ManagerPage/ProductTable";
import ManagerHeader from '../../layouts/Header/ManagerHeader/ManagerHeader'
import { Button } from "@material-ui/core";
import ProductModal from '../../components/Modals/ProductModal';
import { connect } from 'react-redux';
import {modalFlagAction} from '../../redux/Actions/modalFlagAction'

class ProductPage extends Component {
  
    render() {
        return (
            <div>
                <ManagerHeader  />
                <ProductModal />
                <div >
                    <div style={{ display: "flex", justifyContent:"space-between"}}>
                        <h1>مدیریت کالاها</h1>
                        <Button onClick={() => {this.props.modalFlagAction(true,true)}} >افزودن کالا</Button>
                    </div>
                    
                    <ProductTable />

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        productModalFlag: state.productModalFlag,
        customModalFlag:state.customModalFlag
    }
  }
  const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        modalFlagAction: (modalFlag,addModalFlag) => { dispatch(modalFlagAction(modalFlag,addModalFlag)) }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)
