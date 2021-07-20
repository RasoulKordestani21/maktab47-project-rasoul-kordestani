import React, { Component } from "react";
import { Button, StepConnector } from "@material-ui/core";
import StockPriceTable from "../../layouts/Section/ManagerPage/StockPriceTable";
import ManagerHeader from "../../layouts/Header/ManagerHeader/ManagerHeader";
import { connect } from 'react-redux';
import { patchModifiedItems, testGet } from '../../axios/Axios';
import { shouldUpdateTable } from '../../redux/Actions/modalFlagAction';
import { stockPriceChangesAction } from '../../redux/Actions/StockPriceChangesAction';

class StockPricePage extends Component {

    state = {
        data: '',
        shouldUpdateTable: false
    }

    componentDidUpdate() {
        console.log(this.props.arrayOfChanges)
    }


    render() {
        return (
            <div>
                <ManagerHeader />
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1>مدیریت موجودی ها وقیمت ها</h1>
                        <div>
                            {/* <button onClick={async (e) => {
                                let resolve = await testGet().then(res => res.data);
                                this.setState({ data: resolve })
                                console.log(this.state.data)
                              }}> test Click</button> */}
                            <img src={this.state && this.state.data.image} width="40px" style={{ borderRadius: "50%" }} />
                        </div>
                        {this.props.arrayOfChanges.length != 0 ?
                            <Button
                                style={{ backgroundColor: 'aqua' }}
                                onClick={() => {
                                    this.props.stockPriceChangesAction([]);
                                    this.props.shouldUpdateTable()
                                }}>
                                انصراف تغییرات
                            </Button> :
                            ''
                        }
                        {this.props.arrayOfChanges.length != 0 ?
                            <Button style={{ backgroundColor: 'green' }}
                                onClick={(e) => { this.props.arrayOfChanges.forEach(ele => patchModifiedItems(ele)); this.props.shouldUpdateTable() }}>
                                ذخیره
                            </Button> :
                            <Button style={{ backgroundColor: 'lightgreen' }}>
                                ذخیره
                            </Button>
                        }

                    </div>
                    {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                    <StockPriceTable />

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        arrayOfChanges: state.stockPriceChangesReducer.arrayOfChanges,
        shouldUpdate: state.modalFlagReducer.shouldUpdateTable
    }
}
const mapDispatchToProps = dispatch => {
    return {
        stockPriceChangesAction: (arrayOfChanges) => { dispatch(stockPriceChangesAction(arrayOfChanges)) },
        shouldUpdateTable: () => { dispatch(shouldUpdateTable()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StockPricePage);