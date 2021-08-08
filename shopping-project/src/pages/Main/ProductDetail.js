import React, { Component } from "react";
import { MainHeader } from "../../layouts/terminal";
import ProductDetailSection from "../../layouts/Section/MainSection/ProductDetailSection";
import { connect } from "react-redux";
class ProductDetail extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <ProductDetailSection />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.choosenProductReducer.choosenProducts.length);
  return {
    choosenProducts: state.choosenProductReducer.choosenProducts,
  };
};

export default connect(mapStateToProps)(ProductDetail);
