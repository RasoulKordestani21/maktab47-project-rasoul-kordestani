import React, { Component } from "react";
import logo from "../../assets/images/MrShopLogo.jpg";
export class LogoArea extends Component {
  render() {
    return (
      <div style={{ display: "flex", direction: "rtl" }}>
        <img src={logo} width="100px" />
        <h1>فروشگاه مستر شاپ</h1>
      </div>
    );
  }
}


