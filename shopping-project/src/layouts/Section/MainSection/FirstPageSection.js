import React, { Component } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import { getDairy, getHealthWashing } from "../../../axios/Axios";
import { withRouter } from "react-router-dom";

import { getProductDetailAction } from "../../../redux/Actions/getProductDetailAction";
import { sideBarFlagAction } from "../../../redux/Actions/SideBarFlagAction";

import { connect } from "react-redux";
import { getProducts } from "../../../axios/Axios";
import Paper from "@material-ui/core/Paper";
import styles from "../../../assets/style/style.module.css";
class FirstPageSection extends Component {
  state = {
    products: [],
    groups: [],
  };

  goToDetail = () => {
    let history = this.props.history;
    console.log(history);
    history.push("/ProductDetail");
  };

  categorizeProducts = () => {
    let data = this.state.products;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (arr.indexOf(data[i].groupToPersian) == -1) {
        arr.push(data[i].groupToPersian);
      }
    }
    return arr;
  };

  productChoosen = (id, group) => {
    console.log(id, group);
    this.props.getProductDetailAction(id, group);
    this.goToDetail();
  };

  componentDidMount() {
    getProducts().then((res) => this.setState({ products: res.data }));
  }

  render() {
    return (
      <div className={styles["main-section"]}>
        {/* {this.categorizeProducts()} */}
        {this.categorizeProducts().map((ele) => (
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <h2
                className={styles["main-section-base-group"]}
                onClick={() => console.log(this.props.sideBarFlagAction())}
              >
                {"کالاهای گروه " + ele}
              </h2>
            </Grid>

            {this.state.products
              .filter((ele1) => ele1.groupToPersian == ele)
              .map((product) => (
                <Grid product={product} item xs={12} sm={6} md={4}>
                  <ProductCard
                    id={product.id}
                    group={product.group}
                    click={this.productChoosen}
                    style={{ backgroundColor: "aqua" }}
                    product={product}
                  />
                </Grid>
              ))}
          </Grid>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.getProductDetailReducer);
  return {
    group: state.group,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch(getProductDetailAction))
  return {
    getProductDetailAction: (id, group) => {
      dispatch(getProductDetailAction(id, group));
    },
    sideBarFlagAction: () => {
      dispatch(sideBarFlagAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FirstPageSection));
