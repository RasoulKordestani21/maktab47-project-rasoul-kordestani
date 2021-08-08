import React, { Component } from "react";
import success from "../../../assets/images/success.jpg";
import { postOrders, getOrders } from "../../../axios/Axios";
import styles from "../../../assets/style/style.module.css";
export default class SuccessPaySection extends Component {
  componentDidMount() {
    postOrders({
      user: JSON.parse(localStorage.getItem("user")),
      products: JSON.parse(localStorage.getItem("products")),
    });
    getOrders().then((res) => console.log(res));
  }
  render() {
    return (
      <div>
        <div className={styles["main-section-success-pay"]}>
          <img src={success} width="100px" height="100px" />
          <p>پرداخت شما موفق بود</p>
        </div>
      </div>
    );
  }
}
