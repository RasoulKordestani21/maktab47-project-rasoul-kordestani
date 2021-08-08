import React, { Component } from "react";
import ManagerHeader from "../../layouts/Header/ManagerHeader/ManagerHeader";
import ProductTable from "../../layouts/Section/ManagerSection/ProductTable";
import { Button } from "@material-ui/core";
import ProductModal from "../../components/Modals/ProductModal";
import { connect } from "react-redux";
import { modalFlagAction } from "../../redux/Actions/modalFlagAction";
import styles from "../../assets/style/style.module.css";
class ProductPage extends Component {
  render() {
    return (
      <div className={styles["manager-section-products"]}>
        <ManagerHeader />
        <ProductModal />
        <div>
          <div
            className={styles["manager-section-products-header-button"]}
            style={{}}
          >
            <h1
              className={
                styles["manager-section-products-header-button-header"]
              }
            >
              مدیریت کالاها
            </h1>
            <Button
              className={
                styles["manager-section-products-header-button-button"]
              }
              onClick={() => {
                this.props.modalFlagAction(true, true);
              }}
            >
              افزودن کالا
            </Button>
          </div>

          <ProductTable />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    productModalFlag: state.productModalFlag,
    customModalFlag: state.customModalFlag,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    modalFlagAction: (modalFlag, addModalFlag) => {
      dispatch(modalFlagAction(modalFlag, addModalFlag));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
