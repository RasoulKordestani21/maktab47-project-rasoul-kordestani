import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CustomTable from "../../layouts/Section/ManagerPage/CustomTable";
import Header from "../../layouts/Header/Header"
// import { filterCustomTableAction } from "../../redux/Actions/filterCustomTableAction";
import SendCustom from '../../components/Modals/customModals/SentCustomModal';
import ReceivedCustomModal from '../../components/Modals/customModals/ReceivedCustomModal'
import { connect } from 'react-redux';


 class CustomPage extends Component {
    
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

                    <CustomTable />
                    <SendCustom />
                    <ReceivedCustomModal />

                </div>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomPage);
