import React, { Component } from "react";
import logo from "../../assets/images/MrShopLogo.jpg";
import styles from "../../assets/style/style.module.css";
export class LogoArea extends Component {
  render() {
    return (
      <div className={styles["logo-area"]}>
        <img
          src={logo}
          width="60px"
          height="60px"
          className={styles["logo-area-image"]}
        />
        <h1 className={styles["logo-area-text"]}>فروشگاه مستر شاپ</h1>
      </div>
    );
  }
}
