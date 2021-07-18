import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CustomTable from "../../layouts/Section/ManagerPage/CustomTable";
import ManagerHeader from '../../layouts/Header/ManagerHeader/ManagerHeader'
import { filterCustomTableAction } from "../../redux/Actions/filterCustomTableAction";
import SendCustom from '../../components/Modals/customModals/SentCustomModal';
import ReceivedCustomModal from '../../components/Modals/customModals/ReceivedCustomModal'
import { connect } from 'react-redux';
 class CustomPage extends Component {
    constructor(props) {
        super(props)
    }


export class CustomPage extends Component {

    render() {
        return (
            <div >
                <Header />
                <div>
                    <h1>مدیریت سفارش ها</h1>
                    <span>سفارش های تحویل داده شده</span>
                    <input type="radio" name="state" />
                    <span>سفارش های در انتظار ارسال</span>
                    <input type="radio" name="state" />
                    {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                    <CustomTable />
                    <SendCustom />
                <ReceivedCustomModal />

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    isFiltered: state.filterCustomTableReducer.isFiltered,
    isReceived: state.filterCustomTableReducer.isReceived,
    state
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
      filterCustomTableAction: (flag) => { dispatch(filterCustomTableAction(flag)) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomPage);
