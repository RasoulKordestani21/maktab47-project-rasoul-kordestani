import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CustomTable from "../../layouts/Section/ManagerSection/CustomTable";
import ManagerHeader from '../../layouts/Header/ManagerHeader/ManagerHeader'
import { filterCustomTableAction } from "../../redux/Actions/filterCustomTableAction";
import SendCustom from '../../components/Modals/customModals/SentCustomModal';
import ReceivedCustomModal from '../../components/Modals/customModals/ReceivedCustomModal'
import { connect } from 'react-redux';
import styles from '../../assets/style/style.module.css';




class CustomPage extends Component {

    state = {
        isFiltered: false,
        isReceived: false
    }
    render() {
        return (
            <div >
                <ManagerHeader />
                <div className={styles['manager-section-custom']}>
                    <h1 className={styles['manager-section-custom-header']}>مدیریت سفارش ها</h1>
                    <div className={styles['manager-section-custom-under-header']}>
                        <span>سفارش های تحویل داده شده</span>
                        <input type="radio" name="state" value='true'
                            onChange={async (e) => {
                                await this.setState({ isFiltered: true, isReceived: true })
                                await console.log('true state is', this.state)
                                await this.props.filterCustomTableAction(this.state)
                            }} />
                        <span>سفارش های در انتظار ارسال</span>
                        <input type="radio" name="state" value='false'
                            onChange={async (e) => {
                                await this.setState({ isFiltered: true, isReceived: false })
                                await console.log('false state is ', this.state)
                                await this.props.filterCustomTableAction(this.state)
                            }} />

                    </div>
                    <CustomTable />
                    <SendCustom />

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
