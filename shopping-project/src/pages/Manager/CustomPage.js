import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CustomTable from "../../layouts/Section/ManagerPage/CustomTable";
import ManagerHeader from '../../layouts/Header/ManagerHeader/ManagerHeader'
import { connect } from 'react-redux';
import { filterCustomTableAction } from "../../redux/Actions/filterCustomTableAction";

class CustcomPage extends Component {
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

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFiltered: state.isFiltered,
        isReceived: state.isReceived
    }
}
const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        filterCustomTableAction: (flags) => { dispatch(filterCustomTableAction(flags)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustcomPage);
