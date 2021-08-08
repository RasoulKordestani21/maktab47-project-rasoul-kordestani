import React, { Component } from "react";
import { Button, StepConnector } from "@material-ui/core";
import ManagerHeader from "../../layouts/Header/ManagerHeader/ManagerHeader";
import { connect } from "react-redux";
import { patchModifiedItems, testGet } from "../../axios/Axios";
import { shouldUpdateTable } from "../../redux/Actions/modalFlagAction";
import { stockPriceChangesAction } from "../../redux/Actions/StockPriceChangesAction";
import StockPriceTable from "../../layouts/Section/ManagerSection/StockPriceTable";
import styles from "../../assets/style/style.module.css";

class StockPricePage extends Component {
  state = {
    data: "",
    shouldUpdateTable: false,
  };

  componentDidUpdate() {
    console.log(this.props.arrayOfChanges);
  }

  render() {
    return (
      <div>
        <ManagerHeader />
        <div className={styles["manager-section-stock-price"]}>
          <div className={styles["manager-section-stock-price-header-button"]}>
            <h1
              className={
                styles["manager-section-stock-price-header-button-header"]
              }
            >
              مدیریت موجودی ها وقیمت ها
            </h1>

            {this.props.arrayOfChanges.length != 0 ? (
              <Button
                style={{ backgroundColor: "aqua" }}
                onClick={() => {
                  this.props.stockPriceChangesAction([]);
                  this.props.shouldUpdateTable();
                }}
              >
                انصراف تغییرات
              </Button>
            ) : (
              ""
            )}
            {this.props.arrayOfChanges.length != 0 ? (
              <Button
                style={{ backgroundColor: "green" }}
                onClick={(e) => {
                  this.props.arrayOfChanges.forEach((ele) =>
                    patchModifiedItems(ele)
                  );
                  this.props.shouldUpdateTable();
                  this.props.stockPriceChangesAction([]);
                }}
              >
                ذخیره
              </Button>
            ) : (
              <Button style={{ backgroundColor: "lightgreen" }}>ذخیره</Button>
            )}
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

const mapStateToProps = (state) => {
  return {
    arrayOfChanges: state.stockPriceChangesReducer.arrayOfChanges,
    shouldUpdate: state.modalFlagReducer.shouldUpdateTable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    stockPriceChangesAction: (arrayOfChanges) => {
      dispatch(stockPriceChangesAction(arrayOfChanges));
    },
    shouldUpdateTable: () => {
      dispatch(shouldUpdateTable());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StockPricePage);
