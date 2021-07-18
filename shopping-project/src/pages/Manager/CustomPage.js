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

    state = {
        isFiltered: false,
        isReceived: false
    }
    componentDidUpdate() {
      
    }
    render() {
        return (
            <div >
                <ManagerHeader />
                <div>
                    <h1>مدیریت سفارش ها</h1>
                    <span>سفارش های تحویل داده شده</span>
                    <input type="radio" name="state" value='true'
                        onChange={(e) => {
                            this.setState({ isFiltered: true, isReceived: true })
                            this.props.filterCustomTableAction(this.state)
                        }} />
                    <span>سفارش های در انتظار ارسال</span>
                    <input type="radio" name="state" value='false'
                        onChange={(e) => {
                            this.setState({ isFiltered: true, isReceived: false })
                            this.props.filterCustomTableAction(this.state)
                        }} />
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
